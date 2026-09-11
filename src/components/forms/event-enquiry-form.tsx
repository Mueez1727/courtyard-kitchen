"use client";

import { Field, FormStatus, useMockSubmit, Button } from "@/components/forms/form-shared";

export function EventEnquiryForm() {
  const { status, submit } = useMockSubmit();

  return (
    <form id="event-enquiry" className="space-y-4" onSubmit={submit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Phone" name="phone" type="tel" required />
      </div>
      <Field label="Email" name="email" type="email" required />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Event date" name="date" type="date" />
        <Field label="Estimated guests" name="guests" type="number" />
      </div>
      <label className="block text-sm font-medium text-charcoal" htmlFor="eventType">
        Event type
        <select
          id="eventType"
          name="eventType"
          className="mt-2 w-full rounded-2xl border border-charcoal/10 bg-parchment px-4 py-3 text-sm outline-none focus:border-burgundy"
          defaultValue="birthday"
        >
          <option value="birthday">Birthday</option>
          <option value="family">Family gathering</option>
          <option value="corporate">Corporate dinner</option>
          <option value="private">Private event</option>
          <option value="catering">Wedding / catering</option>
        </select>
      </label>
      <Field label="Details" name="details" as="textarea" placeholder="Menu ideas, venue, timing…" />
      <FormStatus
        status={status}
        success="Enquiry received. A manager will be in touch. (Demo confirmation.)"
      />
      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Enquire About an Event"}
      </Button>
    </form>
  );
}
