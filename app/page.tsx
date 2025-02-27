import Hero from "./components/Hero"
import WearYourStory from "./components/WearYourStory"
import FeatureCarousel from "./components/FeatureCarousel"
import PortfolioGrid from "./components/PortfolioGrid"
import Timeline from "./components/Timeline"
import Marquee from "./components/Marquee"
import ContactForm from "./components/ContactForm"
import NewsletterSubscribe from "./components/NewsletterSubscribe"

export default function Home() {
  return (
    <>
      <Hero />
      <section id="about">
        <WearYourStory />
      </section>
      <section id="services">
        <FeatureCarousel />
      </section>
      <section id="work">
        <PortfolioGrid />
      </section>
      <Timeline />
      <Marquee />
      <section id="contact">
        <ContactForm />
      </section>
      <NewsletterSubscribe />
    </>
  )
}

