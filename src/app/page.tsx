import { Hero } from "@/components/sections/hero";
import { AboutPreview } from "@/components/sections/about-preview";
import { FeaturedDishes } from "@/components/sections/featured-dishes";
import { Offers } from "@/components/sections/offers";
import { Facilities } from "@/components/sections/facilities";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { GalleryPreview } from "@/components/sections/gallery-preview";
import { Reviews } from "@/components/sections/reviews";
import { Events } from "@/components/sections/events";
import { Location } from "@/components/sections/location";
import { FAQ } from "@/components/sections/faq";
import { InstagramFeed } from "@/components/sections/instagram-feed";
import { ContactSection } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedDishes />
      <Offers />
      <Facilities />
      <WhyChooseUs />
      <GalleryPreview />
      <Reviews />
      <Events />
      <Location />
      <FAQ />
      <InstagramFeed />
      <ContactSection />
    </>
  );
}
