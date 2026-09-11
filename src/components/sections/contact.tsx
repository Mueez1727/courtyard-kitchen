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
            <div className="rounded-[2rem] bg-charcoal p-8 text-cream">
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
                    <a href={getMailtoHref()} className="text-base hover:text-gold">
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
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={getTelHref()} variant="gold">
                  Call Now
                </ButtonLink>
                <ButtonLink href={getWhatsAppHref()} variant="secondary">
                  WhatsApp
                </ButtonLink>
                <ButtonLink href={getDirectionsUrl()} variant="secondary" external>
                  Get Directions
                </ButtonLink>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={80}>
            <div className="rounded-[2rem] bg-white p-8">
              <h3 className="font-display text-3xl text-charcoal">Send a message</h3>
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
