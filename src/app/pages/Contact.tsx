import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Clock, Phone, MessageCircle, Send, Check, Loader2, User, HelpCircle } from "lucide-react";
import { sendWhatsAppNotification } from "../utils/api";

function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("Information");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message) return;
    setIsSending(true);

    try {
      await sendWhatsAppNotification("/send-contact", {
        name,
        phone,
        subject,
        message,
      });

      setSent(true);
    } catch (err) {
      console.error("Erreur envoi contact:", err);

      if (window.location.protocol === "https:") {
        alert("Note : Vous êtes sur HTTPS, le serveur WhatsApp local est bloqué. Utilisation du lien direct.");
      }

      // Fallback: lien wa.me sans emojis
      const waMsg = encodeURIComponent(`*Nouveau Message Contact — Centre de Beauté Zara*\n\n*Nom :* ${name}\n*Téléphone :* ${phone}\n*Objet :* ${subject}\n*Message :* ${message}`);
      window.open(`https://wa.me/212710862027?text=${waMsg}`, "_blank");
      setSent(true);
    } finally {
      setIsSending(false);
    }
  };

  if (sent) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-card border border-green-200 dark:border-green-900/30 p-8 rounded-3xl text-center">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
          <Check className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-black text-foreground mb-2" style={{ fontFamily: "Fraunces, serif" }}>Message envoyé</h3>
        <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "Outfit, sans-serif" }}>
          Votre demande a été transmise à Madame Fatouma Zara Madjiri.
        </p>
        <button onClick={() => setSent(false)} className="mt-6 text-primary font-bold text-sm hover:underline">Envoyer un autre message</button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border p-6 sm:p-8 rounded-3xl space-y-4 shadow-sm">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1" style={{ fontFamily: "DM Mono, monospace" }}>Votre Nom</label>
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input required type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nom et prénom" className="w-full bg-muted border border-border rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:border-primary transition-all text-foreground" />
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1" style={{ fontFamily: "DM Mono, monospace" }}>Téléphone</label>
          <div className="relative">
            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+227 -- -- -- --" className="w-full bg-muted border border-border rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:border-primary transition-all text-foreground" />
          </div>
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1" style={{ fontFamily: "DM Mono, monospace" }}>Objet de la demande</label>
        <div className="relative">
          <HelpCircle className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <select value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full bg-muted border border-border rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:border-primary transition-all appearance-none cursor-pointer text-foreground">
            <option>Information générale</option>
            <option>Question sur un produit</option>
            <option>Rendez-vous et disponibilité</option>
            <option>Autre demande</option>
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1" style={{ fontFamily: "DM Mono, monospace" }}>Message</label>
        <textarea required rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Précisez votre demande..." className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-all resize-none text-foreground" />
      </div>

      <motion.button
        whileTap={{ scale: 0.98 }}
        disabled={isSending}
        className="w-full bg-primary text-primary-foreground font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-95 transition-opacity disabled:opacity-50"
        style={{ fontFamily: "Outfit, sans-serif" }}
      >
        {isSending ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
        Transmettre le message
      </motion.button>
    </form>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const HOURS = [
  { day: "Lundi – Samedi", hours: "10h30 – 20h00" },
];

export function Contact() {
  return (
    <div className="pt-20 bg-background min-h-screen">
      {/* Header */}
      <section className="py-10 md:py-12 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: "DM Mono, monospace" }}>Contact &amp; Accès</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mt-2" style={{ fontFamily: "Fraunces, serif" }}>
              Informations &amp; <span className="text-primary italic">Localisation</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft}>
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-5 mb-10">
                {[
                  { icon: MapPin, label: "Adresse", value: "Quartier BCEAO Francophonie, Niamey, Niger" },
                  { icon: Clock, label: "Horaires", value: "Lundi – Samedi de 10h30 à 20h00" },
                  { icon: Phone, label: "Téléphone", value: "Coordonnées en cours d'attribution" },
                  { icon: MessageCircle, label: "Messagerie", value: "Disponible pour vos réservations" },
                ].map(({ icon: Icon, label, value }) => (
                  <motion.div key={label} variants={cardVariant} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider" style={{ fontFamily: "DM Mono, monospace" }}>{label}</div>
                      <div className="text-sm font-semibold text-foreground mt-0.5" style={{ fontFamily: "Outfit, sans-serif" }}>{value}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Hours table */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-card rounded-2xl border border-border overflow-hidden mb-8">
                <div className="px-5 py-3 bg-secondary border-b border-border">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: "DM Mono, monospace" }}>Horaires d'ouverture</span>
                </div>
                {HOURS.map(({ day, hours }, i) => (
                  <div key={day} className={`flex items-center justify-between px-5 py-3.5 ${i < HOURS.length - 1 ? "border-b border-border" : ""}`}>
                    <span className="text-sm font-semibold text-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>{day}</span>
                    <span className="text-sm font-black text-primary" style={{ fontFamily: "Fraunces, serif" }}>{hours}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <div className="mb-4">
                <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]" style={{ fontFamily: "DM Mono, monospace" }}>Formulaire de Contact</span>
                <h2 className="text-2xl font-black text-foreground mt-1" style={{ fontFamily: "Fraunces, serif" }}>Envoyer un message</h2>
              </div>

              <ContactForm />

              {/* Map placeholder */}
              <div className="bg-muted rounded-3xl overflow-hidden border border-border h-48 relative mt-8">
                <img
                  src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=400&fit=crop&auto=format"
                  alt="Niamey, Niger"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-card rounded-2xl px-5 py-3 shadow-xl border border-border flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-black text-foreground" style={{ fontFamily: "Fraunces, serif" }}>Centre de Beauté Zara</div>
                      <div className="text-xs text-muted-foreground">Quartier BCEAO Francophonie, Niamey</div>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
