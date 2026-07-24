"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, User, Phone, Users, CalendarDays, Clock, MessageSquare } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { FloatingShapes } from "@/components/ui/FloatingShapes";

interface FormState {
  name: string;
  phone: string;
  guests: string;
  date: string;
  time: string;
  comment: string;
}

const initialState: FormState = {
  name: "",
  phone: "",
  guests: "2",
  date: "",
  time: "",
  comment: "",
};

export default function Reservation() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const update = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) nextErrors.name = "Вкажіть ваше ім'я";
    if (!/^[+\d][\d\s()-]{6,}$/.test(form.phone.trim()))
      nextErrors.phone = "Перевірте номер телефону";
    if (!form.date) nextErrors.date = "Оберіть дату";
    if (!form.time) nextErrors.time = "Оберіть час";

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    setSubmitted(true);
  };

  return (
    <section
      id="reservation"
      className="relative overflow-hidden bg-primary py-28 text-bg md:py-36"
    >
      <FloatingShapes />
      <div className="container-brand grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
        <div>
          <SectionHeading
            eyebrow="Бронювання"
            title="Забронюйте свій столик"
            tone="light"
          />
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-beige/85 md:text-lg">
              Залиште заявку, і наша команда зв&apos;яжеться з вами протягом 15 хвилин,
              щоб підтвердити бронювання та врахувати всі побажання.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="glass-dark relative overflow-hidden rounded-brand p-6 md:p-10">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center gap-5 py-16 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/20">
                    <Check size={28} className="text-gold" />
                  </div>
                  <h3 className="font-display text-2xl italic text-bg">Дякуємо, {form.name}!</h3>
                  <p className="max-w-sm text-sm leading-relaxed text-beige/85">
                    Ваша заявка на {form.guests} {form.guests === "1" ? "гостя" : "гостей"} на{" "}
                    {form.date} о {form.time} прийнята. Ми зателефонуємо на {form.phone} для
                    підтвердження.
                  </p>
                  <button
                    onClick={() => {
                      setForm(initialState);
                      setSubmitted(false);
                    }}
                    className="mt-2 text-sm font-medium text-gold underline underline-offset-4"
                  >
                    Забронювати ще один столик
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="grid gap-5"
                  noValidate
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      icon={User}
                      label="Ім'я"
                      error={errors.name}
                      input={
                        <input
                          value={form.name}
                          onChange={(e) => update("name", e.target.value)}
                          placeholder="Ваше ім'я"
                          className="reservation-input"
                        />
                      }
                    />
                    <Field
                      icon={Phone}
                      label="Телефон"
                      error={errors.phone}
                      input={
                        <input
                          value={form.phone}
                          onChange={(e) => update("phone", e.target.value)}
                          placeholder="+380 XX XXX XX XX"
                          className="reservation-input"
                        />
                      }
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-3">
                    <Field
                      icon={Users}
                      label="Гостей"
                      error={errors.guests}
                      input={
                        <select
                          value={form.guests}
                          onChange={(e) => update("guests", e.target.value)}
                          className="reservation-input"
                        >
                          {Array.from({ length: 10 }).map((_, i) => (
                            <option key={i} value={i + 1} className="text-primary">
                              {i + 1}
                            </option>
                          ))}
                        </select>
                      }
                    />
                    <Field
                      icon={CalendarDays}
                      label="Дата"
                      error={errors.date}
                      input={
                        <input
                          type="date"
                          value={form.date}
                          onChange={(e) => update("date", e.target.value)}
                          className="reservation-input"
                        />
                      }
                    />
                    <Field
                      icon={Clock}
                      label="Час"
                      error={errors.time}
                      input={
                        <input
                          type="time"
                          value={form.time}
                          onChange={(e) => update("time", e.target.value)}
                          className="reservation-input"
                        />
                      }
                    />
                  </div>

                  <Field
                    icon={MessageSquare}
                    label="Коментар (необов'язково)"
                    input={
                      <textarea
                        value={form.comment}
                        onChange={(e) => update("comment", e.target.value)}
                        placeholder="Побажання щодо столика, алергії тощо"
                        rows={3}
                        className="reservation-input resize-none"
                      />
                    }
                  />

                  <MagneticButton
                    type="submit"
                    className="mt-2 w-full rounded-full bg-gold px-8 py-4 text-sm font-semibold tracking-wide text-primary transition-transform hover:scale-[1.01]"
                  >
                    Підтвердити бронювання
                  </MagneticButton>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  icon: Icon,
  label,
  input,
  error,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  input: React.ReactNode;
  error?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-beige/70">
        <Icon size={13} />
        {label}
      </span>
      {input}
      {error && <span className="text-xs text-red-300">{error}</span>}
    </label>
  );
}
