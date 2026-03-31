'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BedDouble, Bath, Maximize, Check, Info } from 'lucide-react';

// Mock data based on the prompt
const properties = [
  {
    id: 'type-a',
    title: 'Type A — Appartement',
    type: 'appartement',
    available: 2,
    furnished: true,
    image: 'https://irp.cdn-website.com/bbe51de6/dms3rep/multi/Sonrisa-di-Lac-Type-A-voorgevel.jpeg',
    description: 'Luxe, volledig gemeubileerd appartement. Direct instapklaar voor een comfortabel verblijf op Bonaire.',
    specs: {
      area: '88 m²',
      bedrooms: 2,
      bathrooms: 2,
    }
  },
  {
    id: 'type-b',
    title: 'Type B — Appartement',
    type: 'appartement',
    available: 1,
    furnished: true,
    image: 'https://irp.cdn-website.com/bbe51de6/dms3rep/multi/B---2.jpeg',
    description: 'Ruim en sfeervol gemeubileerd appartement met een moderne afwerking en hoogwaardige meubels.',
    specs: {
      area: '86 m²',
      bedrooms: 3,
      bathrooms: 3,
    }
  },
  {
    id: 'type-c',
    title: 'Type C — Appartement',
    type: 'appartement',
    available: 3,
    furnished: false,
    image: 'https://irp.cdn-website.com/bbe51de6/dms3rep/multi/C---1-3bb6a4a8.jpeg',
    description: 'Prachtige, ruime appartementen die u volledig naar eigen smaak en wens kunt inrichten.',
    specs: {
      area: '88 m²',
      bedrooms: 2,
      bathrooms: 2,
    }
  },
  {
    id: 'kavel-5',
    title: 'Kavel 5 — Woning',
    type: 'woning',
    available: 1,
    furnished: true,
    image: 'https://irp.cdn-website.com/bbe51de6/dms3rep/multi/01-Front-View-Kavel-5-with-logo-1a8ef4aa.jpg',
    description: 'Prachtige vrijstaande woning op Kavel 5. Ideaal voor gezinnen die op zoek zijn naar ruimte en comfort.',
    specs: {
      area: '120 m²',
      bedrooms: 3,
      bathrooms: 2,
    },
    shared: false
  }
];

export default function ObjectenPage() {
  const [filter, setFilter] = useState('all');

  const filteredProperties = filter === 'all' 
    ? properties 
    : properties.filter(p => p.type === filter);

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Header */}
      <section className="bg-brand-dark text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Objecten Longterm
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Bekijk ons actuele aanbod van huurwoningen voor de lange termijn op Sonrisa di Lac.
          </p>
        </div>
      </section>

      {/* Filter & Listing */}
      <section className="py-12 bg-brand-warm-white flex-grow">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'all' ? 'bg-brand-turquoise text-white' : 'bg-white text-brand-dark border border-gray-200 hover:border-brand-turquoise'
              }`}
            >
              Alle Objecten
            </button>
            <button 
              onClick={() => setFilter('appartement')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'appartement' ? 'bg-brand-turquoise text-white' : 'bg-white text-brand-dark border border-gray-200 hover:border-brand-turquoise'
              }`}
            >
              Appartementen
            </button>
            <button 
              onClick={() => setFilter('woning')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'woning' ? 'bg-brand-turquoise text-white' : 'bg-white text-brand-dark border border-gray-200 hover:border-brand-turquoise'
              }`}
            >
              Woningen
            </button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 flex flex-col">
                <div className="relative h-64 sm:h-80 w-full">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <span className="bg-white/90 backdrop-blur px-3 py-1 rounded text-sm font-bold text-brand-dark shadow-sm">
                      {property.available} Beschikbaar
                    </span>
                    <span className={`px-3 py-1 rounded text-sm font-bold shadow-sm ${
                      property.furnished ? 'bg-brand-turquoise/90 text-white' : 'bg-brand-sand/90 text-brand-dark'
                    }`}>
                      {property.furnished ? 'Gemeubileerd' : 'Ongemeubileerd'}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h2 className="text-2xl font-heading font-bold text-brand-dark mb-3">
                    {property.title}
                  </h2>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {property.description}
                  </p>
                  
                  {property.shared && (
                    <div className="bg-brand-sand-light p-3 rounded-md mb-6 flex items-start gap-3">
                      <Info className="text-brand-turquoise shrink-0 mt-0.5" size={18} />
                      <p className="text-sm text-brand-dark font-medium">Inclusief gedeelde woonkamer met medebewoners.</p>
                    </div>
                  )}

                  <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-100 mb-6">
                    <div className="flex flex-col items-center text-center">
                      <Maximize className="text-brand-turquoise mb-2" size={20} />
                      <span className="text-sm font-medium text-brand-dark">{property.specs.area}</span>
                      <span className="text-xs text-gray-500">Oppervlakte</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <BedDouble className="text-brand-turquoise mb-2" size={20} />
                      <span className="text-sm font-medium text-brand-dark">{property.specs.bedrooms}</span>
                      <span className="text-xs text-gray-500">Slaapkamers</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <Bath className="text-brand-turquoise mb-2" size={20} />
                      <span className="text-sm font-medium text-brand-dark">{property.specs.bathrooms}</span>
                      <span className="text-xs text-gray-500">Badkamers</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto">
                    <div className="text-center sm:text-left w-full sm:w-auto">
                      <span className="block text-sm text-gray-500 uppercase tracking-wider mb-1">Huurprijs</span>
                      <span className="text-xl font-bold text-brand-dark">Op aanvraag</span>
                    </div>
                    <Link 
                      href={`/objecten/${property.id}`}
                      className="w-full sm:w-auto px-6 py-3 bg-brand-turquoise hover:bg-brand-turquoise-dark text-white text-center rounded font-medium transition-colors"
                    >
                      Bekijk Details & Aanvragen
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">Geen objecten gevonden voor dit filter.</p>
              <button 
                onClick={() => setFilter('all')}
                className="mt-4 text-brand-turquoise font-medium hover:underline"
              >
                Bekijk alle objecten
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
