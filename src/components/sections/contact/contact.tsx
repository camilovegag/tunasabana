"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import type React from "react";
import { useEffect, useState } from "react";
import ContactInfoCard from "@/components/contact-info-card";
import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/config/site";
import { trackEvent } from "@/lib/tracking";

// ─── Lazy-load heavy shadcn components ───────────────────────────────────────
// These are not needed on initial paint — only when user interacts with the form.
// Deferring them improves INP and reduces JS parse time on mobile.

const Select = dynamic(
  () => import("@/components/ui/select").then((m) => m.Select),
  { ssr: false },
);
const SelectContent = dynamic(
  () => import("@/components/ui/select").then((m) => m.SelectContent),
  { ssr: false },
);
const SelectGroup = dynamic(
  () => import("@/components/ui/select").then((m) => m.SelectGroup),
  { ssr: false },
);
const SelectItem = dynamic(
  () => import("@/components/ui/select").then((m) => m.SelectItem),
  { ssr: false },
);
const SelectTrigger = dynamic(
  () => import("@/components/ui/select").then((m) => m.SelectTrigger),
  { ssr: false },
);
const SelectValue = dynamic(
  () => import("@/components/ui/select").then((m) => m.SelectValue),
  { ssr: false },
);

const Popover = dynamic(
  () => import("@/components/ui/popover").then((m) => m.Popover),
  { ssr: false },
);
const PopoverContent = dynamic(
  () => import("@/components/ui/popover").then((m) => m.PopoverContent),
  { ssr: false },
);
const PopoverTrigger = dynamic(
  () => import("@/components/ui/popover").then((m) => m.PopoverTrigger),
  { ssr: false },
);

// Calendar is the heaviest component — load it only when the date picker is opened
const Calendar = dynamic(
  () => import("@/components/ui/calendar").then((m) => m.Calendar),
  {
    ssr: false,
    loading: () => (
      <div className="h-[280px] w-[280px] animate-pulse rounded-md bg-muted" />
    ),
  },
);

// ─── Icons lazy-loaded to avoid including full lucide bundle in initial chunk ─
const CalendarIcon = dynamic(
  () => import("lucide-react").then((m) => m.CalendarIcon),
  { ssr: false },
);
const Clock = dynamic(() => import("lucide-react").then((m) => m.Clock), {
  ssr: false,
});

// ─────────────────────────────────────────────────────────────────────────────

import { cn } from "@/lib/utils";

const eventTypes = [
  { value: "serenata", label: "Serenata" },
  { value: "cumpleanos", label: "Cumpleaños" },
  { value: "aniversario", label: "Aniversario" },
  { value: "matrimonio", label: "Matrimonio" },
  { value: "evento-corporativo", label: "Evento Corporativo" },
  { value: "evento-universitario", label: "Evento Universitario" },
  { value: "festival", label: "Festival / Certamen" },
  { value: "otro", label: "Otro" },
];

export default function Contact() {
  const [hasMounted, setHasMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    eventType: "",
    eventDate: undefined as Date | undefined,
    eventTime: "",
    message: "",
  });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const eventTypeLabel =
      eventTypes.find((t) => t.value === formData.eventType)?.label ||
      formData.eventType;

    const dateStr = formData.eventDate
      ? formData.eventDate.toLocaleDateString("es-CO", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "Por definir";

    const timeStr = formData.eventTime || "Por definir";

    const message = `¡Hola Tuna Sabana! 🎶

Me gustaría recibir una cotización para un evento tipo *${eventTypeLabel.trim()}*.

📅 *Fecha del evento:* ${dateStr.trim()}
🕐 *Hora tentativa:* ${timeStr.trim()}
📍 *Ubicación de la serenata:* ${formData.location?.trim() || "Por definir"}

Soy *${formData.name.trim()}* y mis datos de contacto son:
📞 ${formData.phone.trim()}
📧 ${formData.email.trim()}

📝 *Detalles del evento:*
${formData.message.trim()}`;

    const phoneNumber = siteConfig.contact.phone.replace(/\D/g, "");
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    trackEvent("whatsapp_click", {
      method: "contact_form",
      event_type: eventTypeLabel,
    });

    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="¿Quieres una Serenata de la Tuna?"
          subtitle="No lo pienses más, escríbenos ahora mismo y te responderemos en el menor tiempo posible"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-sans font-bold text-foreground mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                <ContactInfoCard icon={Phone} title="Teléfono / WhatsApp">
                  <Link
                    href={`tel:${siteConfig.contact.phone}`}
                    className="hover:text-accent transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </Link>
                </ContactInfoCard>

                <ContactInfoCard icon={Mail} title="Correo Electrónico">
                  <Link
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-accent transition-colors"
                  >
                    {siteConfig.contact.email}
                  </Link>
                </ContactInfoCard>

                <ContactInfoCard icon={MapPin} title="Ubicación">
                  <span>
                    Universidad de La Sabana
                    <br />
                    Chía, Cundinamarca, Colombia
                  </span>
                </ContactInfoCard>
              </div>
            </div>

            <div className="bg-accent/10 p-6 rounded-lg">
              <h4 className="font-semibold text-foreground mb-3">
                Lo que hace única nuestra serenata
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Más de 25 años de experiencia</li>
                <li>✓ Repertorio amplio y personalizable</li>
                <li>✓ Puntualidad y profesionalismo garantizado</li>
                <li>✓ Mejor relación calidad-precio</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-first lg:order-0">
            <h3 className="text-xl sm:text-2xl font-sans font-bold text-foreground mb-6">
              Solicita tu Cotización
            </h3>

            <div className="space-y-8">
              <Link
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex justify-center items-center gap-2 rounded-md bg-accent hover:bg-secondary text-white px-8 py-4 text-lg font-semibold transition-colors shadow-lg text-center"
                onClick={() =>
                  trackEvent("whatsapp_click", {
                    method: "contact_direct_button",
                  })
                }
              >
                Escríbenos por WhatsApp
              </Link>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-background px-2 text-muted-foreground text-center">
                    O también puedes dejarnos un mensaje aquí
                  </span>
                </div>
              </div>

              <div className="bg-card p-6 sm:p-8 rounded-lg border border-border">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="mb-2 block">
                      Nombre Completo <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name || ""}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="mb-2 block">
                      Correo Electrónico <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email || ""}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="mb-2 block">
                      Teléfono / WhatsApp <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone || ""}
                      onChange={handleChange}
                      placeholder="+57 300 123 4567"
                    />
                  </div>

                  {/* Event Type Select — lazy loaded */}
                  <div>
                    <Label htmlFor="eventType" className="mb-2 block">
                      Tipo de Evento <span className="text-accent">*</span>
                    </Label>
                    {hasMounted ? (
                      <Select
                        required
                        value={formData.eventType}
                        onValueChange={(value) =>
                          setFormData((prev) => ({ ...prev, eventType: value }))
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Selecciona el tipo de evento" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {eventTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    ) : (
                      <div className="w-full rounded-md border border-border bg-background px-4 py-2 text-muted-foreground">
                        Selecciona el tipo de evento
                      </div>
                    )}
                  </div>

                  {/* Date and Time Picker — lazy loaded */}
                  <div>
                    <Label htmlFor="eventDatePicker" className="mb-2 block">
                      Fecha y Hora del Evento (opcional)
                    </Label>
                    {hasMounted ? (
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            id="eventDatePicker"
                            type="button"
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal hover:bg-background hover:text-foreground/90",
                              !formData.eventDate && "text-muted-foreground",
                            )}
                          >
                            {CalendarIcon && (
                              <CalendarIcon className="mr-2 h-4 w-4" />
                            )}
                            {formData.eventDate ? (
                              <span>
                                {formData.eventDate.toLocaleDateString(
                                  "es-CO",
                                  {
                                    weekday: "short",
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                  },
                                )}
                                {formData.eventTime &&
                                  ` a las ${formData.eventTime}`}
                              </span>
                            ) : (
                              "Selecciona fecha y hora"
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <div className="flex flex-col">
                            <Calendar
                              mode="single"
                              selected={formData.eventDate}
                              onSelect={(date) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  eventDate: date,
                                }))
                              }
                              disabled={(date) => date < new Date()}
                              className="rounded-t-md border-b-0"
                            />
                            <div className="border-t bg-muted/50 p-3 rounded-b-md">
                              <Label
                                htmlFor="eventTime"
                                className="mb-2 flex items-center gap-2"
                              >
                                {Clock && (
                                  <Clock className="h-4 w-4 text-muted-foreground" />
                                )}
                                Hora del evento
                              </Label>
                              <Input
                                id="eventTime"
                                type="time"
                                value={formData.eventTime || ""}
                                onChange={(e) =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    eventTime: e.target.value,
                                  }))
                                }
                                className="w-[224px]"
                              />
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    ) : (
                      <Button
                        id="eventDatePicker"
                        type="button"
                        variant="outline"
                        className="w-full justify-start text-left font-normal text-muted-foreground hover:bg-background hover:text-muted-foreground/90"
                      >
                        <span className="mr-2 h-4 w-4 inline-block" />
                        Selecciona fecha y hora
                      </Button>
                    )}
                  </div>

                  {/* Location */}
                  <div>
                    <Label htmlFor="location" className="mb-2 block">
                      Ubicación de la serenata (opcional)
                    </Label>
                    <Input
                      id="location"
                      name="location"
                      type="text"
                      value={formData.location || ""}
                      onChange={handleChange}
                      placeholder="Dirección"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="mb-2 block">
                      Mensaje <span className="text-accent">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message || ""}
                      onChange={handleChange}
                      placeholder="Cuéntanos sobre tu evento: lugar, cantidad de personas, canciones especiales..."
                      rows={4}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full font-semibold bg-accent text-accent-foreground hover:bg-secondary"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Enviar por WhatsApp
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Te responderemos en minutos.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
