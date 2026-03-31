import Link from 'next/link';
import { FileText, Calendar, Ban, CreditCard, ArrowRight } from 'lucide-react';

export default function HuurvoorwaardenPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      <section className="bg-brand-sand-light py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-4">
            Huurvoorwaarden
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Transparante en duidelijke voorwaarden voor een zorgeloze huurperiode op Sonrisa di Lac.
          </p>
        </div>
      </section>

      <section className="py-16 bg-brand-warm-white flex-grow">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="lead text-xl text-brand-dark font-medium mb-8">
                Om de kwaliteit en rust in de wijk Sonrisa di Lac te waarborgen, hanteren wij een aantal algemene huurvoorwaarden voor al onze objecten.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-brand-turquoise/10 rounded-full flex items-center justify-center text-brand-turquoise">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-2">Langetermijnhuur</h3>
                    <p className="text-sm">
                      Al onze woningen, appartementen en studio&apos;s worden uitsluitend verhuurd voor de lange termijn. De minimale huurtermijn bedraagt <strong>1 jaar</strong>.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-brand-turquoise/10 rounded-full flex items-center justify-center text-brand-turquoise">
                    <Ban size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-2">Geen huisdieren</h3>
                    <p className="text-sm">
                      Om de rust en hygiëne voor alle bewoners te garanderen, zijn huisdieren <strong>niet toegestaan</strong> in de huurwoningen en op het terrein.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-brand-turquoise/10 rounded-full flex items-center justify-center text-brand-turquoise">
                    <CreditCard size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-2">Inkomenseis</h3>
                    <p className="text-sm">
                      Om in aanmerking te komen voor een huurwoning hanteren wij een inkomenseis. Het vereiste inkomen is afhankelijk van de huurprijs van het specifieke object. Neem contact op voor de exacte bedragen.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-brand-turquoise/10 rounded-full flex items-center justify-center text-brand-turquoise">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-2">Prijzen op aanvraag</h3>
                    <p className="text-sm">
                      De huurprijzen voor alle objecten zijn <strong>op aanvraag</strong>. De prijzen variëren afhankelijk van het type woning en of deze gemeubileerd of ongemeubileerd is.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-brand-sand-light p-6 md:p-8 rounded-lg mt-8">
                <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4">Interesse?</h3>
                <p className="mb-6">
                  Voldoet u aan de voorwaarden en heeft u interesse in een van onze woningen? Bekijk ons aanbod of neem direct contact met ons op voor meer informatie of een bezichtiging.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/objecten" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-brand-dark hover:bg-gray-800 text-white rounded font-medium transition-colors"
                  >
                    Bekijk Aanbod
                  </Link>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-brand-turquoise hover:bg-brand-turquoise-dark text-white rounded font-medium transition-colors gap-2"
                  >
                    Neem Contact Op <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
