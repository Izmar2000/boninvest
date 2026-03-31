import Image from 'next/image';
import { MapPin, Waves, Trees, ShoppingBag, Utensils, School, CheckCircle2 } from 'lucide-react';

export default function AlgemeenPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://irp.cdn-website.com/bbe51de6/dms3rep/multi/1.jpg"
            alt="Omgeving Sonrisa di Lac"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-dark/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 drop-shadow-lg">
            Algemeen
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto drop-shadow-md">
            Ontdek het project, de wijk en de prachtige omgeving van Sonrisa di Lac.
          </p>
        </div>
      </section>

      {/* Project Beschrijving */}
      <section className="py-16 bg-brand-warm-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-brand-dark mb-6">Het Project</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sonrisa di Lac is een exclusief nieuwbouwproject ontwikkeld door Boninvest B.V., gelegen in de rustige en geliefde wijk Nikiboko op Bonaire. Het project is ontworpen met oog voor detail, comfort en het Caribische buitenleven.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Wij bieden een selectie van hoogwaardige huurwoningen aan voor de lange termijn (minimaal 1 jaar). Of u nu op zoek bent naar een ruime gezinswoning, een comfortabel appartement of een knusse studio, Sonrisa di Lac biedt een veilige en plezierige woonomgeving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://irp.cdn-website.com/bbe51de6/dms3rep/multi/44.jpg"
                alt="Architectuur Sonrisa di Lac"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold text-brand-dark mb-6">Voorzieningen in de wijk</h3>
              <p className="text-gray-700 mb-6">
                De wijk is ruim opgezet en kindvriendelijk. Bewoners van Sonrisa di Lac kunnen gebruik maken van diverse gemeenschappelijke faciliteiten die het wonen hier extra aangenaam maken.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-turquoise shrink-0 mt-1" size={20} />
                  <div>
                    <strong className="block text-brand-dark">Gemeenschappelijk sportveld</strong>
                    <span className="text-gray-600 text-sm">Voor een actief buitenleven direct naast de deur.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-turquoise shrink-0 mt-1" size={20} />
                  <div>
                    <strong className="block text-brand-dark">Speeltuin</strong>
                    <span className="text-gray-600 text-sm">Een veilige en leuke speelplek voor de kinderen.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-turquoise shrink-0 mt-1" size={20} />
                  <div>
                    <strong className="block text-brand-dark">Gemeenschappelijk zwembad</strong>
                    <span className="inline-block bg-brand-sand/30 text-brand-dark text-xs px-2 py-1 rounded mt-1 font-medium">Binnenkort beschikbaar</span>
                    <span className="block text-gray-600 text-sm mt-1">Een heerlijke plek om af te koelen en te ontspannen.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Omgeving */}
      <section className="py-16 bg-brand-sand-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">De Omgeving</h2>
            <p className="text-gray-700">
              Sonrisa di Lac ligt ideaal: rustig gelegen maar toch dichtbij alle belangrijke voorzieningen en de mooiste plekken van Bonaire.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-brand-sand/20 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-brand-turquoise/10 rounded-full flex items-center justify-center mb-4 text-brand-turquoise">
                <MapPin size={24} />
              </div>
              <h4 className="font-bold text-brand-dark mb-2">Centrale Ligging</h4>
              <p className="text-sm text-gray-600">Slechts 5 minuten rijden van het levendige centrum van Kralendijk.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-brand-sand/20 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-brand-turquoise/10 rounded-full flex items-center justify-center mb-4 text-brand-turquoise">
                <Waves size={24} />
              </div>
              <h4 className="font-bold text-brand-dark mb-2">Sorobon Beach</h4>
              <p className="text-sm text-gray-600">Nabij het wereldberoemde windsurfgebied Sorobon en de prachtige mangroven.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-brand-sand/20 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-brand-turquoise/10 rounded-full flex items-center justify-center mb-4 text-brand-turquoise">
                <Trees size={24} />
              </div>
              <h4 className="font-bold text-brand-dark mb-2">Natuur & Recreatie</h4>
              <p className="text-sm text-gray-600">Ideale uitvalsbasis voor wandelen, fietsen, duiken, snorkelen en zeilen.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-brand-sand/20 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-brand-turquoise/10 rounded-full flex items-center justify-center mb-4 text-brand-turquoise">
                <ShoppingBag size={24} />
              </div>
              <h4 className="font-bold text-brand-dark mb-2">Winkels</h4>
              <p className="text-sm text-gray-600">Supermarkten en diverse winkels bevinden zich op korte rijafstand.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-brand-sand/20 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-brand-turquoise/10 rounded-full flex items-center justify-center mb-4 text-brand-turquoise">
                <School size={24} />
              </div>
              <h4 className="font-bold text-brand-dark mb-2">Scholen</h4>
              <p className="text-sm text-gray-600">Verschillende scholen en kinderopvang zijn gemakkelijk en snel te bereiken.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-brand-sand/20 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-brand-turquoise/10 rounded-full flex items-center justify-center mb-4 text-brand-turquoise">
                <Utensils size={24} />
              </div>
              <h4 className="font-bold text-brand-dark mb-2">Horeca</h4>
              <p className="text-sm text-gray-600">Gezellige restaurants en lokale eetgelegenheden in de directe omgeving.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
