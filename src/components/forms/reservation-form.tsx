"use client";

import { restaurant } from "@/data/restaurant";
import { Field, FormStatus, useMockSubmit, Button } from "@/components/forms/form-shared";

export function ReservationForm() {
  const { status, submit } = useMockSubmit();
  const today = new Date().toISOString().split("T")[0];

  return (
    <form className="space-y-4" onSubmit={submit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required placeholder="Full name" />
        <Field label="Phone" name="phone" type="tel" required placeholder="03xx xxxxxxx" />
      </div>
      <Field label="Email" name="email" type="email" required placeholder="you@email.com" />
      <div className="grid gap-4 sm:grid-cols-3">
        <Field label="Date" name="date" type="date" required min={today} />
        <label className="block text-sm font-medium text-charcoal" htmlFor="time">
          Time
          <select
            id="time"
            name="time"
            required
            className="mt-2 w-full rounded-2xl border border-charcoal/10 bg-parchment px-4 py-3 text-sm outline-none focus:border-burgundy"
            defaultValue=""
          >
            <option value="" disabled>
              Select time
            </option>
            {[
              "12:00",
              "12:30",
              "13:00",
              "13:30",
              "14:00",
              "15:00",
              "16:00",
              "18:00",
              "18:30",
              "19:00",
              "19:30",
              "20:00",
              "20:30",
              "21:00",
              "21:30",
            ].map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-charcoal" htmlFor="guests">
          Number of guests
          <select
            id="guests"
            name="guests"
            required
            className="mt-2 w-full rounded-2xl border border-charcoal/10 bg-parchment px-4 py-3 text-sm outline-none focus:border-burgundy"
            defaultValue="2"
          >
            {Array.from(
              { length: restaurant.reservations.maxGuests },
              (_, index) => index + 1,
            ).map((count) => (
              <option key={count} value={count}>
                {count}
              </option>
            ))}
          </select>
        </label>
      </div>
      <Field
        label="Special requests"
        name="requests"
        as="textarea"
        placeholder="Allergies, high chair, courtyard seating…"
      />
      <p className="text-sm text-muted">{restaurant.reservations.largeGroupNote}</p>
      <FormStatus
        status={status}
        success="Reservation requested. We will confirm by phone. (Demo only — no booking was created.)"
      />
      <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Sending request…" : "Request Reservation"}
      </Button>
    </form>
  );
}
