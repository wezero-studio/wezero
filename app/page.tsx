import Hero from "./components/Hero"
import WhyChooseUsSection from "./components/WhyChooseUs"
import WorkSection from "./components/OurWork"
import EnhancedContactForm from "./components/EnhancedContactForm"

export default function Home() {
  return (
    <>
      <Hero />
      <section id="services">
        <WhyChooseUsSection />
      </section>
      <section id="work">
        <WorkSection />
      </section>
      <section id="contact">
        <EnhancedContactForm />
      </section>
    </>
  )
}

