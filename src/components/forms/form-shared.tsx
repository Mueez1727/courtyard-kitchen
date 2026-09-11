"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full rounded-2xl border border-charcoal/10 bg-parchment px-4 py-3 text-sm text-charcoal outline-none transition focus:border-burgundy";

export function Field({
  label,
  name,
  type = "text",
  required,
  as,
  min,
  rows = 4,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: "textarea";
  min?: string;
  rows?: number;
  placeholder?: string;
}) {
  const id = name;
  return (
    <label className="block text-sm font-medium text-charcoal" htmlFor={id}>
      {label}
      {as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          required={required}
          rows={rows}
          placeholder={placeholder}
          className={cn(fieldClass, "mt-2 resize-y")}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          min={min}
          placeholder={placeholder}
          className={cn(fieldClass, "mt-2")}
        />
      )}
    </label>
  );
}

export function FormStatus({ status, success }: { status: Status; success: string }) {
  if (status === "success") {
    return (
      <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-900" role="status">
        {success}
      </p>
    );
  }
  if (status === "error") {
    return (
      <p className="rounded-2xl bg-burgundy/10 px-4 py-3 text-sm text-burgundy" role="alert">
        Please check the highlighted fields and try again.
      </p>
    );
  }
  return null;
}

export function useMockSubmit() {
  const [status, setStatus] = useState<Status>("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 700));
    form.reset();
    setStatus("success");
  }

  return { status, submit };
}

export { Button };
