import Navbar from "./components/navbar";
import HeroBanner from "./components/hero-banner";
import AboutSection from "./components/about-section";
import ServicesSection from "./components/services-section";
import SpecialitySection from "./components/speciality-section";
import ReviewsSection from "./components/reviews-section";
import ContactSection from "./components/contact-section";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <AboutSection />
      <ServicesSection />
      <SpecialitySection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
