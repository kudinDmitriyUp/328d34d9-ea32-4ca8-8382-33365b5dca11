"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroLogoBillboardSplit from '@/components/sections/hero/HeroLogoBillboardSplit';
import ProductCardSeven from '@/components/sections/product/ProductCardSeven';
import FeatureCardThirteen from '@/components/sections/feature/FeatureCardThirteen';
import MediaAbout from '@/components/sections/about/MediaAbout';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactParallax from '@/components/sections/contact/ContactParallax';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="largeSizeMediumTitles"
      background="aurora"
      cardStyle="accent-corner-border"
      primaryButtonStyle="outline"
      secondaryButtonStyle="solid"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Casale di Martignano"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Hotel", id: "hotel" },
            { name: "Ristorante", id: "dining" },
            { name: "Su di Noi", id: "about" },
            { name: "Contatti", id: "contact" }
          ]}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroLogoBillboardSplit
          logoText="CASALE"
          description="Benvenuti nel vostro rifugio di lusso sulle sponde del Lago Martignano"
          buttons={[
            { text: "Prenota Ora", href: "#contact" },
            { text: "Scopri di Più", href: "#about" }
          ]}
          layoutOrder="default"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765368415772-rrmskgeq.jpg"
          imageAlt="Vista panoramica del Lago Martignano al tramonto"
          frameStyle="card"
        />
      </div>
      
      <div id="hotel" data-section="hotel">
        <ProductCardSeven
          title="Le Nostre Camere"
          description="Scopri le nostre esclusiva collezione di camere eleganti con vista sul lago, arredate con cura e dotate di ogni comfort."
          products={[
            {
              id: "1",
              name: "Camera Deluxe",
              price: "da €150/notte",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765368416729-tumhq5pl.jpg",
              imageAlt: "Camera Deluxe con vista sul lago"
            },
            {
              id: "2",
              name: "Suite Lago",
              price: "da €250/notte",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765368417531-pxn249di.jpg",
              imageAlt: "Suite Lago con terrazza privata"
            },
            {
              id: "3",
              name: "Camera Superior",
              price: "da €180/notte",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765368419150-zutiiylu.jpg",
              imageAlt: "Camera Superior con arredamento lussuoso"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="dining" data-section="dining">
        <FeatureCardThirteen
          title="Ristorante Casale"
          description="Esperienza culinaria indimenticabile"
          features={[
            {
              id: "01",
              title: "Menu Tradizionale",
              description: "Scopri i sapori autentici della cucina romana e laziale, preparati con ingredienti a km zero e ricette tramandate da generazioni."
            },
            {
              id: "02",
              title: "Vini Selezionati",
              description: "Una collezione curata di vini italiani provenienti dalle migliori regioni vinicole, perfettamente abbinati ai nostri piatti."
            },
            {
              id: "03",
              title: "Terrazza Panoramica",
              description: "Cena sotto le stelle con vista sul Lago Martignano. Un'esperienza indimenticabile in un'atmosfera romantica e suggestiva."
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="about" data-section="about">
        <MediaAbout
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765368420032-enazlrta.jpg"
          imageAlt="Cucina professionale del Casale di Martignano"
          buttons={[
            { text: "Visita il Sito", href: "#" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          title="Testimonianze degli Ospiti"
          description="Le esperienze straordinarie dei nostri ospiti dimostrano il nostro impegno per l'eccellenza."
          testimonials={[
            {
              id: "1",
              title: "Un soggiorno perfetto",
              quote: "Il nostro soggiorno al Casale di Martignano è stato memorabile. La vista sul lago, l'accoglienza calorosa e la cucina straordinaria hanno superato tutte le nostre aspettative.",
              name: "Marco Rossi",
              role: "Ospite da Roma",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765368420793-yk8fv6jx.jpg",
              imageAlt: "Marco Rossi"
            },
            {
              id: "2",
              title: "Lusso e autenticità",
              quote: "Un'oasi di tranquillità dove il lusso incontra l'autenticità italiana. Ogni dettaglio è stato pensato per il nostro comfort.",
              name: "Elena Bianchi",
              role: "Ospite da Milano",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765368421707-9s8de50k.jpg",
              imageAlt: "Elena Bianchi"
            },
            {
              id: "3",
              title: "Ristorante eccezionale",
              quote: "La cucina del ristorante è semplicemente eccezionale. Piatti raffinati con ingredienti freschi, un vero tripudio di sapori.",
              name: "Giovanni Ferrari",
              role: "Ospite da Firenze",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765368422578-yiarmmwr.jpg",
              imageAlt: "Giovanni Ferrari"
            },
            {
              id: "4",
              title: "Perfetto per una luna di miele",
              quote: "Abbiamo scelto il Casale per la nostra luna di miele e non potremmo essere più felici. Un luogo magico e romantico.",
              name: "Giulia Marino",
              role: "Ospite in viaggio di nozze",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765368423338-gx7d0gns.jpg",
              imageAlt: "Giulia Marino"
            },
            {
              id: "5",
              title: "Ospitalità genuina",
              quote: "Lo staff è cordiale e attento a ogni esigenza. Un'ospitalità genuina che ti fa sentire a casa.",
              name: "Andrea Costa",
              role: "Ospite da Napoli",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765368423882-lnhinqdx.jpg",
              imageAlt: "Andrea Costa"
            },
            {
              id: "6",
              title: "Torneremo certamente",
              quote: "Un'esperienza indimenticabile in una location straordinaria. Non vediamo l'ora di tornare.",
              name: "Francesca Romano",
              role: "Ospite da Bologna",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765368424673-81uid60o.jpg",
              imageAlt: "Francesca Romano"
            }
          ]}
          variant="card"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqBase
          title="Domande Frequenti"
          description="Trovi le risposte alle domande più comuni su camere, ristorante e servizi."
          textboxLayout="default"
          useInvertedBackground="noInvert"
          faqs={[
            {
              id: "1",
              title: "Quali sono gli orari di check-in e check-out?",
              content: "Il check-in è disponibile dalle 15:00 e il check-out entro le 11:00. Su richiesta, possiamo organizzare early check-in o late check-out in base alla disponibilità."
            },
            {
              id: "2",
              title: "Il ristorante è aperto anche a non ospiti?",
              content: "Sì, il nostro ristorante è aperto a tutti. Consigliamo di prenotare con anticipazione per garantire un tavolo, specialmente nei fine settimana."
            },
            {
              id: "3",
              title: "Quali servizi sono inclusi nella camera?",
              content: "Tutte le camere includono: bagno privato, aria condizionata, TV a schermo piatto, minibar, accesso Wi-Fi gratuito e vista sul lago."
            },
            {
              id: "4",
              title: "Accettate animali domestici?",
              content: "Sì, accettiamo animali domestici su richiesta. Vi invitiamo a contattarci in anticipo per informazioni sulle tariffe e sulle condizioni."
            },
            {
              id: "5",
              title: "Quali metodi di pagamento accettate?",
              content: "Accettiamo tutte le principali carte di credito, bonifici bancari e pagamenti tramite portali online. Contattaci per discussioni su pagamenti personalizzati."
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactParallax
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765368419150-zutiiylu.jpg"
          imageAlt="Vista della proprietà Casale di Martignano"
          buttons={[
            { text: "Prenota Ora", href: "mailto:info@casaledimartignano.it" },
            { text: "Chiama", href: "tel:+39068820120" }
          ]}
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Hotel",
              items: [
                { label: "Camere", href: "hotel" },
                { label: "Prezzi", href: "hotel" },
                { label: "Prenotazioni", href: "contact" }
              ]
            },
            {
              title: "Ristorante",
              items: [
                { label: "Menu", href: "dining" },
                { label: "Orari", href: "dining" },
                { label: "Prenota Tavolo", href: "contact" }
              ]
            },
            {
              title: "Info",
              items: [
                { label: "Chi Siamo", href: "about" },
                { label: "Contatti", href: "contact" },
                { label: "Privacy Policy", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 Casale di Martignano. Tutti i diritti riservati."
          ariaLabel="Footer principale"
        />
      </div>
    </ThemeProvider>
  );
}