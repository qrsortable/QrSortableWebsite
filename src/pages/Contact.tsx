import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, MapPin, Clock } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BackgroundDots } from '../components/BackgroundDots';

const content: Record<string, {
  title: string;
  subtitle: string;
  addressTitle: string;
  addressDesc: string;
  emailTitle: string;
  emailDesc: string;
  responseTitle: string;
  responseDesc: string;
}> = {
  EN: {
    title: "Contact Us",
    subtitle: "We're here to help. Reach out to us for support, feedback, or business inquiries.",
    addressTitle: "Our Office Location",
    addressDesc: "Visit us or write to us at our main location in Rohrbach, Germany.",
    emailTitle: "Email Us",
    emailDesc: "We're happy to answer your questions. Standard response time is under 24 hours.",
    responseTitle: "Fast Response",
    responseDesc: "Mon - Fri, 9:00 AM - 6:00 PM CET"
  },
  DE: {
    title: "Kontakt",
    subtitle: "Wir sind hier, um zu helfen. Kontaktieren Sie uns für Support, Feedback oder geschäftliche Anfragen.",
    addressTitle: "Firmensitz",
    addressDesc: "Besuchen Sie uns oder schreiben Sie uns an unserem Hauptstandort in Rohrbach, Deutschland.",
    emailTitle: "E-Mail schreiben",
    emailDesc: "Wir beantworten Ihre Fragen gerne. Die Standardantwortzeit liegt unter 24 Stunden.",
    responseTitle: "Schnelle Antwort",
    responseDesc: "Mo - Fr, 9:00 - 18:00 Uhr CET"
  },
  FR: {
    title: "Contactez-nous",
    subtitle: "Nous sommes là pour vous aider. Contactez-nous pour du support, des commentaires ou des demandes commerciales.",
    addressTitle: "Notre Siège Social",
    addressDesc: "Visitez-nous ou écrivez-nous à notre adresse principale à Rohrbach, Allemagne.",
    emailTitle: "Envoyez-nous un e-mail",
    emailDesc: "Nous serons ravis de répondre à vos questions. Le délai de réponse standard est inférieur à 24 heures.",
    responseTitle: "Réponse Rapide",
    responseDesc: "Lun - Ven, 9:00 - 18:00 CET"
  },
  ES: {
    title: "Contáctenos",
    subtitle: "Estamos aquí para ayudarle. Póngase en contacto con nosotros para recibir asistencia, comentarios o consultas comerciales.",
    addressTitle: "Nuestra Oficina",
    addressDesc: "Visítenos o escríbanos a nuestra oficina principal en Rohrbach, Alemania.",
    emailTitle: "Envíenos un correo electrónico",
    emailDesc: "Estaremos encantados de responder a sus preguntas. El tiempo de respuesta estándar es inferior a 24 horas.",
    responseTitle: "Respuesta Rápida",
    responseDesc: "Lun - Vie, 9:00 AM - 6:00 PM CET"
  }
};

export const Contact: React.FC = () => {
  const { language } = useTranslation();
  const currentLang = content[language] ? language : 'EN';
  const tData = content[currentLang];

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "QrSortable",
    "image": "https://www.qrsortable.com/brand-logo.png",
    "@id": "https://www.qrsortable.com/#localbusiness",
    "url": "https://www.qrsortable.com/",
    "email": "qrsortable@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Fahlenbacher Str.",
      "addressLocality": "Rohrbach",
      "postalCode": "85296",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.611111,
      "longitude": 11.611111
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Helmet htmlAttributes={{ lang: language.toLowerCase() }}>
        <title>{`${tData.title} | QrSortable`}</title>
        <meta name="description" content={tData.subtitle} />
        <meta property="og:title" content={`${tData.title} | QrSortable`} />
        <meta property="og:description" content={tData.subtitle} />
        <meta property="og:image" content="https://www.qrsortable.com/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${tData.title} | QrSortable`} />
        <meta name="twitter:description" content={tData.subtitle} />
        <meta name="twitter:image" content="https://www.qrsortable.com/og-image.jpg" />
        <link rel="alternate" hrefLang="en" href="https://www.qrsortable.com/contact" />
        <link rel="alternate" hrefLang="de" href="https://www.qrsortable.com/contact?lang=de" />
        <link rel="alternate" hrefLang="fr" href="https://www.qrsortable.com/contact?lang=fr" />
        <link rel="alternate" hrefLang="es" href="https://www.qrsortable.com/contact?lang=es" />
        <link rel="alternate" hrefLang="x-default" href="https://www.qrsortable.com/contact" />
        <link rel="canonical" href={`https://www.qrsortable.com/contact${language !== 'EN' ? `?lang=${language.toLowerCase()}` : ''}`} />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(schemaJson)}</script>
      </Helmet>
      
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-abstract-dark text-white py-32 relative overflow-hidden">
          <BackgroundDots scale={2} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-6xl md:text-8xl font-black mb-8">{tData.title}</h1>
            <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto font-bold leading-relaxed">
              {tData.subtitle}
            </p>
          </div>
        </div>

        {/* Contact Info cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Address Card */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col justify-between gap-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="space-y-4">
                <div className="bg-[#FDB623]/10 w-16 h-16 rounded-2xl text-[#FDB623] flex items-center justify-center">
                  <MapPin size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">{tData.addressTitle}</h3>
                  <p className="text-gray-500 font-bold mb-4">{tData.addressDesc}</p>
                </div>
              </div>
              <p className="text-lg font-black text-brand-dark">Fahlenbacher Str., 85296 Rohrbach, Germany</p>
            </div>

            {/* Email Card */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col justify-between gap-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="space-y-4">
                <div className="bg-[#FDB623]/10 w-16 h-16 rounded-2xl text-[#FDB623] flex items-center justify-center">
                  <Mail size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">{tData.emailTitle}</h3>
                  <p className="text-gray-500 font-bold mb-4">{tData.emailDesc}</p>
                </div>
              </div>
              <div>
                <a href="mailto:qrsortable@gmail.com" className="text-xl font-black text-[#FDB623] hover:underline">
                  qrsortable@gmail.com
                </a>
              </div>
            </div>

            {/* Response Time Card */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col justify-between gap-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="space-y-4">
                <div className="bg-[#FDB623]/10 w-16 h-16 rounded-2xl text-[#FDB623] flex items-center justify-center">
                  <Clock size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">{tData.responseTitle}</h3>
                  <p className="text-gray-500 font-bold">{tData.responseDesc}</p>
                </div>
              </div>
              <div className="text-sm font-bold text-gray-400">
                {language === 'DE' ? 'Wir helfen gerne!' : language === 'FR' ? 'Toujours là pour vous !' : language === 'ES' ? '¡Estamos para ayudar!' : 'Always here to help!'}
              </div>
            </div>

          </div>
        </div>

        {/* Large Google Map Embed */}
        <div className="bg-white border-t border-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl h-[550px] relative">
              <iframe 
                src="https://maps.google.com/maps?q=Fahlenbacher%20Str.,%2085296%20Rohrbach&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" 
                width="100%" 
                height="100%" 
                className="border-0" 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="QrSortable Location Map"
              />
            </div>
          </div>
        </div>

      </main>
      
      <Footer />
    </div>
  );
};
