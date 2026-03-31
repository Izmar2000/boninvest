'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Geen voorkeur',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      type: 'Geen voorkeur',
      message: ''
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <section className="bg-brand-dark text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Contact
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Heeft u vragen over ons aanbod of wilt u een bezichtiging plannen? Neem gerust contact met ons op.
          </p>
        </div>
      </section>

      <section className="py-16 bg-brand-warm-white flex-grow">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Info */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-3xl font-heading font-bold text-brand-dark mb-6">Direct Contact</h2>
                <p className="text-gray-700 mb-8">
                  Wij staan u graag te woord voor al uw vragen over de huurwoningen in Sonrisa di Lac. U kunt ons bereiken via onderstaande gegevens of via het contactformulier.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 shrink-0 bg-brand-turquoise/10 rounded-full flex items-center justify-center text-brand-turquoise">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-dark mb-1">E-mail</h3>
                    <a href="mailto:boncao@outlook.com" className="text-brand-turquoise hover:underline">
                      boncao@outlook.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 shrink-0 bg-brand-turquoise/10 rounded-full flex items-center justify-center text-brand-turquoise">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-dark mb-1">Telefoon</h3>
                    <a href="tel:+59996977203" className="text-brand-turquoise hover:underline">
                      +5999 697 7203
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 shrink-0 bg-brand-turquoise/10 rounded-full flex items-center justify-center text-brand-turquoise">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-dark mb-1">Adres</h3>
                    <p className="text-gray-600">
                      Kaya Aleksandrit #14<br />
                      Santa Barbara, Bonaire C.N.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-md border border-gray-100">
              <h2 className="text-2xl font-heading font-bold text-brand-dark mb-6">Stuur een bericht</h2>
              
              {isSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                    <Send size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Bericht verzonden!</h3>
                  <p>Bedankt voor uw interesse. Wij nemen zo spoedig mogelijk contact met u op.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Naam *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-turquoise focus:border-transparent transition-shadow"
                      placeholder="Uw volledige naam"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-turquoise focus:border-transparent transition-shadow"
                        placeholder="uw@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefoon</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-turquoise focus:border-transparent transition-shadow"
                        placeholder="+599 712 3456"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Gewenst type woning</label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-turquoise focus:border-transparent transition-shadow bg-white"
                    >
                      <option value="Geen voorkeur">Geen voorkeur</option>
                      <option value="Model E (Gemeubileerd)">Model E (Gemeubileerd)</option>
                      <option value="Model F (Gemeubileerd)">Model F (Gemeubileerd)</option>
                      <option value="Ongemeubileerd">Ongemeubileerd appartement</option>
                      <option value="Studio">Studio (Model G)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Bericht *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-turquoise focus:border-transparent transition-shadow resize-none"
                      placeholder="Waar kunnen we u mee helpen?"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-brand-turquoise hover:bg-brand-turquoise-dark text-white rounded-md font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                  >
                    {isSubmitting ? 'Verzenden...' : 'Verstuur Bericht'} <Send size={18} />
                  </button>
                </form>
              )}
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
