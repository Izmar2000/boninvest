import Link from 'next/link';
import { Building2, ArrowRight } from 'lucide-react';

export default function VerkoopPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      <section className="flex-grow flex items-center justify-center bg-brand-warm-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <div className="w-24 h-24 bg-brand-sand-light rounded-full flex items-center justify-center mx-auto mb-8 text-brand-turquoise">
            <Building2 size={48} />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6">
            Verkoop
          </h1>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
            <p className="text-xl text-gray-700 mb-6">
              Binnenkort meer informatie over verkoop.
            </p>
            <p className="text-gray-600 mb-8">
              Op dit moment ligt onze focus op de langetermijnverhuur van de objecten in Sonrisa di Lac. In de toekomst zullen er mogelijk ook objecten voor de verkoop beschikbaar komen.
            </p>
            
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-turquoise hover:bg-brand-turquoise-dark text-white rounded font-medium transition-colors gap-2"
            >
              Neem contact met ons op voor meer informatie <ArrowRight size={20} />
            </Link>
          </div>
          
          <Link href="/" className="text-brand-dark hover:text-brand-turquoise font-medium underline underline-offset-4 transition-colors">
            Terug naar de homepage
          </Link>
        </div>
      </section>
    </div>
  );
}
