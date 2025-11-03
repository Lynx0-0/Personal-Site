import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-white font-bold text-xl mb-4">PMI Digital</h3>
            <p className="text-sm">
              Trasformo la tua attività in un business digitale che lavora per te 24/7
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Servizi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/servizi#siti-web" className="hover:text-white transition-colors">
                  Siti Web
                </Link>
              </li>
              <li>
                <Link href="/servizi#gestionali" className="hover:text-white transition-colors">
                  Gestionali
                </Link>
              </li>
              <li>
                <Link href="/servizi#app" className="hover:text-white transition-colors">
                  App Mobile
                </Link>
              </li>
              <li>
                <Link href="/servizi#consulenza" className="hover:text-white transition-colors">
                  Consulenza
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Azienda</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/chi-sono" className="hover:text-white transition-colors">
                  Chi Sono
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contatti" className="hover:text-white transition-colors">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contatti</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@pmidigital.it" className="hover:text-white transition-colors">
                  info@pmidigital.it
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+393331234567" className="hover:text-white transition-colors">
                  +39 333 123 4567
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span>Italia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {currentYear} PMI Digital. Tutti i diritti riservati.</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Termini e Condizioni
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
