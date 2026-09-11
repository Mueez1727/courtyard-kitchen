"use client";

import { Field, FormStatus, useMockSubmit, Button } from "@/components/forms/form-shared";

export function ContactForm() {
  const { status, submit } = useMockSubmit();

  return (
    <form className="mt-6 space-y-4" onSubmit={submit} noValidate={false}>
      <Field label="Name" name="name" required placeholder="Your name" />
      <Field label="Phone" name="phone" type="tel" required placeholder="03xx xxxxxxx" />
      <Field label="Email" name="email" type="email" placeholder="you@email.com" />
      <Field label="Message" name="message" as="textarea" required placeholder="How can we help?" />
      <FormStatus
        status={status}
        success="Thank you. The restaurant will get back to you shortly. (Demo confirmation — no email was sent.)"
      />
      <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
