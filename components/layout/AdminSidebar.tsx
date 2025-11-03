'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  FileText,
  ShoppingCart,
  Settings,
  LogOut
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AdminSidebar() {
  const pathname = usePathname()

  const navItems = [
    {
      href: '/admin',
      label: 'Dashboard',
      icon: LayoutDashboard
    },
    {
      href: '/admin/clienti',
      label: 'Clienti',
      icon: Users
    },
    {
      href: '/admin/progetti',
      label: 'Progetti',
      icon: FolderKanban
    },
    {
      href: '/admin/fatture',
      label: 'Fatture',
      icon: FileText
    },
    {
      href: '/admin/shop',
      label: 'Shop Manager',
      icon: ShoppingCart
    },
    {
      href: '/admin/settings',
      label: 'Impostazioni',
      icon: Settings
    }
  ]

  return (
    <aside className="w-64 bg-white dark:bg-slate-950 border-r border-gray-200 dark:border-gray-800 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-800">
        <Link href="/admin" className="font-bold text-xl text-primary">
          PMI Digital
        </Link>
        <p className="text-xs text-gray-500 mt-1">Admin Dashboard</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  )}
                >
                  <item.icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3 mb-4 px-4">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
            AD
          </div>
          <div>
            <div className="font-medium text-sm">Admin</div>
            <div className="text-xs text-gray-500">admin@pmidigital.it</div>
          </div>
        </div>
        <Button variant="outline" className="w-full" size="sm">
          <LogOut size={16} className="mr-2" />
          Esci
        </Button>
      </div>
    </aside>
  )
}
