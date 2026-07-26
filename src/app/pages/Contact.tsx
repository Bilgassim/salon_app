import { motion } from "motion/react";
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
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
            <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: "DM Mono, monospace" }}>Contact</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mt-2" style={{ fontFamily: "Fraunces, serif" }}>
              Venez nous<br /><span className="text-primary italic">rendre visite</span>
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
                  { icon: MapPin, label: "Adresse", value: "Centre de Beauté Zara, Niamey, Niger" },
                  { icon: Clock, label: "Horaires", value: "Lundi – Samedi · 10h30 à 20h" },
                  { icon: Phone, label: "Téléphone", value: "+235 63 00 00 00" },
                  { icon: MessageCircle, label: "WhatsApp", value: "Disponible pour vos demandes" },
                ].map(({ icon: Icon, label, value }) => (
                  <motion.div key={label} variants={cardVariant} className="flex items-start gap-4">
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </motion.div>
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

              <motion.a
                href="https://wa.me/+235XXXXXXXX"
                whileHover={{ scale: 1.04, boxShadow: "0 8px 30px rgba(34,197,94,0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 bg-green-500 text-white font-bold px-7 py-3.5 rounded-full hover:bg-green-600 transition-colors"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                <MessageCircle className="w-5 h-5" /> Contacter sur WhatsApp
              </motion.a>
            </motion.div>

            {/* Right */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight} className="space-y-6">
              {/* Map placeholder */}
              <div className="bg-muted rounded-3xl overflow-hidden border border-border h-64 relative">
                <img
                  src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=400&fit=crop&auto=format"
                  alt="N'Djamena, Tchad"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-card rounded-2xl px-5 py-3 shadow-xl border border-border flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-black text-foreground" style={{ fontFamily: "Fraunces, serif" }}>Centre de Beauté Zara</div>
                      <div className="text-xs text-muted-foreground">Niamey, Niger</div>
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
