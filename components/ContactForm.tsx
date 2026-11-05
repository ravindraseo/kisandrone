"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import type { Topic } from "@/content/types";
import { useT } from "@/lib/i18n/client";
import type { Dictionary } from "@/lib/i18n/dict";
import { siteConfig, whatsappLink } from "@/lib/site";
import { Button } from "./Button";
import { Icon } from "./Icon";

const TOPICS: Topic[] = ["price", "service", "demo", "rental", "training", "scheme", "parts", "other"];

type Values = { name: string; phone: string; location: string; topic: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;

// 10-digit Indian mobile, optionally prefixed with +91 / 91 / 0
const PHONE_RE = /^(?:\+?91[\s-]?|0)?[6-9]\d{4}[\s-]?\d{5}$/;

function validate(v: Values, f: Dictionary["form"]): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = f.errName;
  if (!v.phone.trim()) e.phone = f.errPhone;
  else if (!PHONE_RE.test(v.phone.trim())) e.phone = f.errPhoneInvalid;
  if (v.location.trim().length < 2) e.location = f.errLocation;
  if (!v.topic) e.topic = f.errTopic;
  if (v.message.length > 1000) e.message = f.errMessage;
  return e;
}

function buildWhatsappText(v: Values, f: Dictionary["form"]) {
  const topicLabel = f.topics[v.topic as Topic] ?? v.topic;
  return [
    f.waIntro,
    `${f.waName}: ${v.name.trim()}`,
    `${f.waPhone}: ${v.phone.trim()}`,
    `${f.waLocation}: ${v.location.trim()}`,
    `${f.waTopic}: ${topicLabel}`,
    v.message.trim() ? `${f.waMessage}: ${v.message.trim()}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

/**
 * Contact form with client-side validation.
 *
 * The site has no backend yet, so the form does not send anything to a server.
 * After validation the visitor can send a pre-filled WhatsApp message (they send
 * it themselves). The README explains how to add a backend.
 */
export function ContactForm({ defaultTopic = "" }: { defaultTopic?: string }) {
  const uid = useId();
  const t = useT();
  const f = t.form;
  const initialTopic = (TOPICS as string[]).includes(defaultTopic) ? defaultTopic : "";
  const empty: Values = { name: "", phone: "", location: "", topic: initialTopic, message: "" };
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [ready, setReady] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const readyRef = useRef<HTMLDivElement>(null);
  const id = (n: string) => `${uid}-${n}`;

  function update<K extends keyof Values>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(values, f);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setTimeout(() => summaryRef.current?.focus(), 0);
      return;
    }
    setReady(true);
    setTimeout(() => readyRef.current?.focus(), 0);
  }

  if (ready) {
    return (
      <div ref={readyRef} tabIndex={-1} role="status" className="rounded-2xl border border-forest-600/30 bg-forest-50 p-6 outline-none sm:p-8">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-forest-700 text-cream-50">
          <Icon name="check" className="h-6 w-6" />
        </span>
        <h3 className="mt-4 text-xl font-bold">{f.readyTitle}</h3>
        <p className="mt-2 text-muted">
          <strong className="text-forest-950">{f.readyNote}</strong> {f.readyBefore}{" "}
          <strong className="text-forest-950">{f.readyNotSent}</strong>
          {f.readyAfter}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={whatsappLink(buildWhatsappText(values, f))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 font-bold text-white hover:brightness-110"
          >
            <Icon name="whatsapp" className="h-5 w-5" />
            {f.sendWhatsapp}<span className="sr-only"> {t.common.newWindow}</span>
          </a>
          <a
            href={siteConfig.contact.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-forest-800 px-5 py-3 font-bold text-white hover:bg-forest-700"
          >
            <Icon name="phone" className="h-5 w-5" />
            {f.callUs}
          </a>
          <Button type="button" variant="ghost" onClick={() => setReady(false)}>
            {f.edit}
          </Button>
        </div>
      </div>
    );
  }

  const errorList = Object.entries(errors).filter(([, m]) => m) as [string, string][];
  const fieldClass = (bad: boolean) =>
    `mt-1.5 block w-full rounded-xl border bg-white px-4 py-3 text-base text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 ${
      bad ? "border-red-600 focus:ring-red-600/30" : "border-forest-900/20 focus:border-forest-600 focus:ring-forest-600/25"
    }`;
  const err = (key: keyof Values) =>
    errors[key] ? (
      <p id={id(`${key}-error`)} className="mt-1 text-sm text-red-700">
        {errors[key]}
      </p>
    ) : null;
  const aria = (key: keyof Values) => ({
    "aria-invalid": !!errors[key],
    "aria-describedby": errors[key] ? id(`${key}-error`) : undefined,
  });
  const Req = () => (
    <span className="text-red-700" aria-hidden="true">
      {" "}*
    </span>
  );

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-5">
      {errorList.length > 0 && (
        <div ref={summaryRef} tabIndex={-1} role="alert" className="rounded-xl border border-red-600/40 bg-red-50 p-4 text-sm text-red-800 outline-none">
          <p className="font-semibold">{f.fixThese}</p>
          <ul className="mt-2 list-disc pl-5">
            {errorList.map(([k, m]) => (
              <li key={k}>{m}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={id("name")} className="font-semibold text-forest-950">
            {f.name}<Req />
          </label>
          <input id={id("name")} name="name" autoComplete="name" required value={values.name} onChange={(e) => update("name", e.target.value)} {...aria("name")} className={fieldClass(!!errors.name)} />
          {err("name")}
        </div>
        <div>
          <label htmlFor={id("phone")} className="font-semibold text-forest-950">
            {f.phone}<Req />
          </label>
          <input
            id={id("phone")}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="98XXXXXXXX"
            required
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            {...aria("phone")}
            className={fieldClass(!!errors.phone)}
          />
          {err("phone")}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={id("location")} className="font-semibold text-forest-950">
            {f.location}<Req />
          </label>
          <input
            id={id("location")}
            name="location"
            autoComplete="address-level2"
            placeholder={f.locationPh}
            required
            value={values.location}
            onChange={(e) => update("location", e.target.value)}
            {...aria("location")}
            className={fieldClass(!!errors.location)}
          />
          {err("location")}
        </div>
        <div>
          <label htmlFor={id("topic")} className="font-semibold text-forest-950">
            {f.topic}<Req />
          </label>
          <select id={id("topic")} name="topic" required value={values.topic} onChange={(e) => update("topic", e.target.value)} {...aria("topic")} className={fieldClass(!!errors.topic)}>
            <option value="">{f.choose}</option>
            {TOPICS.map((value) => (
              <option key={value} value={value}>
                {f.topics[value]}
              </option>
            ))}
          </select>
          {err("topic")}
        </div>
      </div>

      <div>
        <label htmlFor={id("message")} className="font-semibold text-forest-950">
          {f.message} <span className="font-normal text-muted">{f.messageHint}</span>
        </label>
        <textarea
          id={id("message")}
          name="message"
          rows={4}
          placeholder={f.messagePh}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          {...aria("message")}
          className={fieldClass(!!errors.message)}
        />
        {err("message")}
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        {f.submit}
        <Icon name="arrowRight" className="h-5 w-5" />
      </Button>
      <p className="text-xs text-muted">{f.privacy}</p>
    </form>
  );
}
