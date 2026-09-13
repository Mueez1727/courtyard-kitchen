import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import {
  getDirectionsUrl,
  getFullAddress,
  getMailtoHref,
  getTelHref,
  getWhatsAppHref,
  restaurant,
} from "@/data/restaurant";
import { ContactForm } from "@/components/forms/contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="bg-parchment py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Talk to us"
          title="Contact"
          description="Call, WhatsApp or send a note. Every number and address below comes from one configuration file."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn>
            <div className="rounded-[1.5rem] bg-charcoal p-5 text-cream sm:rounded-[2rem] sm:p-8">
              <ul className="space-y-5 text-sm">
                <li className="flex gap-3">
                  <Icons.phone className="text-gold" />
                  <div>
                    <p className="text-cream/50">Phone</p>
                    <a href={getTelHref()} className="text-base hover:text-gold">
                      {restaurant.contact.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Icons.whatsapp className="text-gold" />
                  <div>
                    <p className="text-cream/50">WhatsApp</p>
                    <a href={getWhatsAppHref()} className="text-base hover:text-gold">
                      {restaurant.contact.whatsappDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Icons.mail className="text-gold" />
                  <div>
                    <p className="text-cream/50">Email</p>
                    <a href={getMailtoHref()} className="break-all text-base hover:text-gold">
                      {restaurant.contact.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Icons.pin className="text-gold" />
                  <div>
                    <p className="text-cream/50">Address</p>
                    <p className="text-base">{getFullAddress()}</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8 grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:flex sm:flex-wrap">
                <ButtonLink href={getTelHref()} variant="gold" className="w-full sm:w-auto">
                  Call Now
                </ButtonLink>
                <ButtonLink href={getWhatsAppHref()} variant="secondary" className="w-full sm:w-auto">
                  WhatsApp
                </ButtonLink>
                <ButtonLink href={getDirectionsUrl()} variant="secondary" className="w-full min-[400px]:col-span-2 sm:w-auto" external>
                  Get Directions
                </ButtonLink>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={80}>
            <div className="rounded-[1.5rem] bg-white p-5 sm:rounded-[2rem] sm:p-8">
              <h3 className="font-display text-2xl text-charcoal sm:text-3xl">Send a message</h3>
              <p className="mt-2 text-sm text-muted">
                This form is a frontend mockup. Connect it to email or a CRM later.
              </p>
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
