'use client'

import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage, useGLTF } from '@react-three/drei'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Loader2 } from 'lucide-react'

interface ModelViewerProps {
  modelUrl: string
  stlUrl?: string
  onAddToCart?: (settings: PrintSettings) => void
}

interface PrintSettings {
  material: 'PLA' | 'ABS' | 'PETG'
  quality: 'draft' | 'standard' | 'high'
  scale: number
  infill: number
  price?: number
}

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} />
}

function LoadingFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="text-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500 mb-2 mx-auto" />
        <p className="text-sm text-gray-600 dark:text-gray-400">Caricamento modello 3D...</p>
      </div>
    </div>
  )
}

export function ModelViewer({ modelUrl, stlUrl, onAddToCart }: ModelViewerProps) {
  const [settings, setSettings] = useState<PrintSettings>({
    material: 'PLA',
    quality: 'standard',
    scale: 1,
    infill: 20
  })

  const calculatePrice = () => {
    const materialCosts = {
      PLA: 0.02,
      ABS: 0.025,
      PETG: 0.03
    }

    const qualityMultiplier = {
      draft: 0.8,
      standard: 1,
      high: 1.3
    }

    const basePrice = 10
    const materialCost = materialCosts[settings.material] * 100 * settings.scale
    const qualityCost = qualityMultiplier[settings.quality]
    const totalPrice = (basePrice + materialCost) * qualityCost

    return totalPrice
  }

  const handleAddToCart = () => {
    const price = calculatePrice()
    if (onAddToCart) {
      onAddToCart({ ...settings, price })
    }
  }

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* 3D Viewer */}
      <div className="relative h-[400px] lg:h-[500px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
        <Canvas camera={{ position: [0, 0, 2.5], fov: 50 }}>
          <Suspense fallback={null}>
            <Stage environment="sunset" intensity={0.5}>
              <Model url={modelUrl} />
            </Stage>
            <OrbitControls
              enablePan={false}
              enableZoom={true}
              minDistance={1}
              maxDistance={5}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Print Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Impostazioni di Stampa</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="material" className="block text-sm font-medium mb-1">
              Materiale
            </Label>
            <select
              id="material"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={settings.material}
              onChange={(e) => setSettings({
                ...settings,
                material: e.target.value as PrintSettings['material']
              })}
            >
              <option value="PLA">PLA - Economico e facile (€0.02/g)</option>
              <option value="ABS">ABS - Resistente al calore (€0.025/g)</option>
              <option value="PETG">PETG - Resistente e flessibile (€0.03/g)</option>
            </select>
          </div>

          <div>
            <Label htmlFor="quality" className="block text-sm font-medium mb-1">
              Qualità di Stampa
            </Label>
            <select
              id="quality"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={settings.quality}
              onChange={(e) => setSettings({
                ...settings,
                quality: e.target.value as PrintSettings['quality']
              })}
            >
              <option value="draft">Bozza (0.3mm) - Veloce</option>
              <option value="standard">Standard (0.2mm) - Bilanciato</option>
              <option value="high">Alta (0.1mm) - Dettagliato</option>
            </select>
          </div>

          <div>
            <Label htmlFor="scale" className="block text-sm font-medium mb-1">
              Scala: {settings.scale}x
            </Label>
            <input
              id="scale"
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={settings.scale}
              onChange={(e) => setSettings({
                ...settings,
                scale: parseFloat(e.target.value)
              })}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>50%</span>
              <span>200%</span>
            </div>
          </div>

          <div>
            <Label htmlFor="infill" className="block text-sm font-medium mb-1">
              Riempimento: {settings.infill}%
            </Label>
            <input
              id="infill"
              type="range"
              min="10"
              max="100"
              step="10"
              value={settings.infill}
              onChange={(e) => setSettings({
                ...settings,
                infill: parseInt(e.target.value)
              })}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>10%</span>
              <span>100%</span>
            </div>
          </div>

          {/* Price */}
          <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-medium">Prezzo stimato:</span>
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                €{calculatePrice().toFixed(2)}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-2">
            <Button
              onClick={handleAddToCart}
              className="w-full"
            >
              Aggiungi al Carrello
            </Button>

            {stlUrl && (
              <Button
                variant="outline"
                className="w-full"
                asChild
              >
                <a href={stlUrl} download>
                  Scarica File STL
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
