"use client";

import { CalendarIcon, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import type React from "react";
import { useState } from "react";
import ContactInfoCard from "@/components/contact-info-card";
import SectionHeader from "@/components/section-header";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { siteConfig } from "@/config/site";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: undefined as Date | undefined,
    eventTime: "",
    message: "",
  });

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

Me gustaría recibir una cotización para un evento tipo *${eventTypeLabel}*.

📅 *Fecha del evento:* ${dateStr}
🕐 *Hora tentativa:* ${timeStr}

Soy *${formData.name}* y mis datos de contacto son:
📞 ${formData.phone}
📧 ${formData.email}

📝 *Detalles del evento:*
${formData.message}`;

    const phoneNumber = siteConfig.contact.phone.replace(/\D/g, "");
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
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
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="hover:text-accent transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </ContactInfoCard>

                <ContactInfoCard icon={Mail} title="Correo Electrónico">
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-accent transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
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
                ¿Por qué elegirnos?
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
            <div className="bg-card p-6 sm:p-8 rounded-lg border border-border">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nombre Completo <span className="text-accent">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="w-full rounded-md border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Correo Electrónico <span className="text-accent">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="w-full rounded-md border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Teléfono / WhatsApp <span className="text-accent">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+57 300 123 4567"
                    className="w-full rounded-md border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>

                {/* Event Type Select */}
                <div>
                  <label
                    htmlFor="eventType"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Tipo de Evento <span className="text-accent">*</span>
                  </label>
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
                </div>

                {/* Date and Time Picker */}
                <div>
                  <label
                    htmlFor="eventDatePicker"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Fecha y Hora del Evento (opcional)
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        id="eventDatePicker"
                        type="button"
                        className={cn(
                          "w-full flex items-center justify-start gap-2 rounded-md border border-border bg-background px-4 py-2 text-left font-normal transition-colors hover:bg-muted/50",
                          !formData.eventDate && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="h-4 w-4" />
                        {formData.eventDate ? (
                          <span>
                            {formData.eventDate.toLocaleDateString("es-CO", {
                              weekday: "short",
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                            {formData.eventTime &&
                              ` a las ${formData.eventTime}`}
                          </span>
                        ) : (
                          "Selecciona fecha y hora"
                        )}
                      </button>
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
                          <label
                            htmlFor="eventTime"
                            className="flex items-center gap-2 text-sm font-medium text-foreground"
                          >
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            Hora del evento
                          </label>
                          <input
                            id="eventTime"
                            type="time"
                            value={formData.eventTime || ""}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                eventTime: e.target.value,
                              }))
                            }
                            className="mt-2 w-[224px] rounded-md border border-border bg-background px-3 py-2 text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                          />
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Mensaje <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu evento: lugar, cantidad de personas, canciones especiales..."
                    rows={4}
                    className="w-full rounded-md border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-accent text-accent-foreground px-6 py-3 text-sm font-medium hover:bg-accent/90 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Enviar por WhatsApp
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  Al enviar, serás redirigido a WhatsApp para completar tu
                  solicitud
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
