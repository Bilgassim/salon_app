import { Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Scissors, Calendar, Users, Sparkles, ArrowRight,
  Clock, Bell, QrCode, Check, ChevronRight, Droplets,
  ShieldCheck, ShoppingBag,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const SERVICES_PREVIEW = [
  { icon: Scissors, name: "Tresses", price: "À partir de 3 000 FCFA", duration: "1h30–4h", color: "from-rose-500/20 to-pink-500/10" },
  { icon: Droplets, name: "Soins Cheveux", price: "À partir de 2 000 FCFA", duration: "45 min", color: "from-pink-500/20 to-rose-500/10" },
  { icon: Sparkles, name: "Traitement Capillaire", price: "À partir de 4 000 FCFA", duration: "1h–2h", color: "from-rose-600/20 to-pink-600/10" },
  { icon: ShieldCheck, name: "Manucure", price: "À partir de 1 500 FCFA", duration: "30–45 min", color: "from-rose-400/20 to-pink-400/10" },
  { icon: Scissors, name: "Pédicure", price: "À partir de 2 000 FCFA", duration: "45 min", color: "from-pink-500/20 to-rose-500/10" },
  { icon: ShoppingBag, name: "Vente de Produits", price: "Selon produit", duration: "Au salon", color: "from-rose-500/20 to-pink-500/10" },
];

export function Home() {
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 500], [0, 60]);

  return (
    <div>
      {/* Hero Mobile */}
      <section className="relative md:hidden overflow-hidden bg-background">
        <div className="relative h-[88vh] min-h-[560px]">
          <img
            src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=1200&fit=crop&auto=format"
            alt="Centre de Beauté Zara"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120508] via-[#120508]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-transparent" />

          {/* Badge haut */}
          <div className="absolute top-20 left-0 right-0 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full border border-white/20"
            >
              <Clock className="w-3.5 h-3.5 text-rose-200" />
              Ouvert de 10h30 à 20h00 · Lundi – Samedi
            </motion.div>
          </div>

          {/* Contenu bas */}
          <div className="absolute bottom-0 left-0 right-0 px-5 pb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-6 mb-5"
            >
              {[
                { value: "2019", label: "Année de création" },
                { value: "Niamey", label: "BCEAO Francophonie" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="font-black text-white text-xl leading-none" style={{ fontFamily: "Fraunces, serif" }}>{s.value}</span>
                  <span className="text-[10px] text-white/70 mt-0.5" style={{ fontFamily: "Outfit, sans-serif" }}>{s.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl font-black leading-[1.08] text-white mb-4"
              style={{ fontFamily: "Fraunces, serif" }}
            >
              Soins capillaires &amp;<br />
              <span className="text-primary italic">esthétique</span> à Niamey.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex gap-3"
            >
              <Link
                to="/reservation"
                className="flex-1 flex items-center justify-center gap-2 bg-primary text-white font-bold px-5 py-3.5 rounded-2xl text-sm shadow-lg shadow-primary/40"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Prendre rendez-vous <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-5 py-3.5 rounded-2xl border border-white/20 text-sm"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Services
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Info salon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-4 bg-card border-b border-border px-5 py-4"
        >
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-md shadow-primary/30">
            <Scissors className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-black text-foreground text-sm" style={{ fontFamily: "Fraunces, serif" }}>Centre de Beauté Zara</div>
            <div className="text-xs text-muted-foreground truncate" style={{ fontFamily: "Outfit, sans-serif" }}>Mme Fatouma Zara Madjiri · Niamey</div>
          </div>
          <div className="flex items-center gap-1 bg-green-100 dark:bg-green-900/30 rounded-full px-2.5 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
            <span className="text-[10px] font-bold text-green-700 dark:text-green-400">Ouvert</span>
          </div>
        </motion.div>
      </section>

      {/* Hero Desktop */}
      <section className="relative hidden md:block pt-28 pb-24 overflow-hidden bg-background">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-secondary translate-x-1/3 -translate-y-1/4"
          />
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary -translate-x-1/3 translate-y-1/4"
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-secondary text-primary text-xs font-bold px-4 py-2 rounded-full mb-6 border border-accent"
              >
                <Clock className="w-3.5 h-3.5" />
                Salon ouvert 10h30 – 20h00 · Lundi à Samedi
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-6xl font-black leading-[1.05] text-foreground mb-6"
                style={{ fontFamily: "Fraunces, serif" }}
              >
                Soins capillaires &amp;<br />
                <span className="text-primary italic">esthétique</span> à Niamey.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-base text-muted-foreground leading-relaxed mb-8 max-w-md"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Prestations de tressage, soins capillaires, manucures et pédicures assurées par Madame Fatouma Zara Madjiri au quartier BCEAO Francophonie. Prise de rendez-vous en ligne et disponibilité des produits au salon.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="flex flex-wrap gap-3"
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link to="/reservation" className="flex items-center gap-2 bg-primary text-primary-foreground font-bold px-7 py-3.5 rounded-full" style={{ fontFamily: "Outfit, sans-serif" }}>
                    Prendre rendez-vous <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link to="/services" className="flex items-center gap-2 bg-card text-foreground font-semibold px-6 py-3.5 rounded-full border border-border hover:border-primary hover:text-primary transition-all" style={{ fontFamily: "Outfit, sans-serif" }}>
                    Consulter les prestations
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center gap-8 mt-10 pt-10 border-t border-border"
              >
                {[
                  { value: "2019", label: "Activité établie en" },
                  { value: "Niamey", label: "Quartier BCEAO Francophonie" },
                  { value: "10h30 – 20h", label: "Horaires d'ouverture" },
                ].map((s, i) => (
                  <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 + i * 0.1 }}>
                    <div className="text-2xl font-black text-primary" style={{ fontFamily: "Fraunces, serif" }}>{s.value}</div>
                    <div className="text-xs text-muted-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>{s.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex justify-center"
            >
              <div className="relative w-80 h-96">
                <motion.div style={{ y: imgY }} className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl shadow-rose-900/10">
                  <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=640&h=800&fit=crop&auto=format" alt="Salon de coiffure" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-950/40 to-transparent" />
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}
                  className="absolute -left-10 top-12 bg-card rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-border">
                  <div className="w-9 h-9 rounded-full bg-rose-100 dark:bg-rose-900/40 flex items-center justify-center">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>File d'attente</div>
                    <div className="text-xs text-muted-foreground">Suivi des passages en cours</div>
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}
                  className="absolute -right-8 bottom-20 bg-card rounded-2xl shadow-xl px-4 py-3 border border-border">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs font-bold text-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>Réservation</span>
                  </div>
                  <div className="text-sm font-black text-primary" style={{ fontFamily: "Fraunces, serif" }}>Créneaux ouverts</div>
                  <div className="text-xs text-green-600 font-semibold">Service disponible</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-10 md:py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={fadeUp} className="flex items-end justify-between mb-6 md:mb-10">
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: "DM Mono, monospace" }}>Prestations</span>
              <h2 className="text-2xl sm:text-4xl font-black text-foreground mt-1" style={{ fontFamily: "Fraunces, serif" }}>Services proposés</h2>
            </div>
            <motion.div whileHover={{ x: 4 }}>
              <Link to="/services" className="hidden md:flex items-center gap-2 text-sm font-bold text-primary" style={{ fontFamily: "Outfit, sans-serif" }}>
                Voir l'ensemble des tarifs <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Grid services */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES_PREVIEW.map((s) => {
              const IconComp = s.icon;
              return (
                <motion.div key={s.name} variants={cardVariant}
                  className="bg-card rounded-2xl p-6 border border-border"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-3">
                    <IconComp className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-black text-foreground mb-1" style={{ fontFamily: "Fraunces, serif" }}>{s.name}</h3>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-sm font-bold text-primary" style={{ fontFamily: "Outfit, sans-serif" }}>{s.price}</span>
                    {s.duration !== "—" && (
                      <span className="flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                        <Clock className="w-3 h-3" />{s.duration}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-6 text-center md:hidden">
            <Link to="/services" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-full text-sm shadow-md shadow-primary/30" style={{ fontFamily: "Outfit, sans-serif" }}>
              Voir l'ensemble des prestations <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-10 md:py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={fadeUp} className="mb-8 text-center">
            <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: "DM Mono, monospace" }}>Organisation</span>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-1" style={{ fontFamily: "Fraunces, serif" }}>Fonctionnement de la plateforme</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Bell, title: "Notification WhatsApp", desc: "Transmission directe des demandes de réservation à l'exploitante." },
              { icon: Users, title: "Suivi de file d'attente", desc: "Consultation en temps réel de l'état d'avancement des créneaux." },
              { icon: QrCode, title: "Accès par QR Code", desc: "Accès immédiat à la plateforme depuis le salon." },
              { icon: Check, title: "Créneaux réservés", desc: "Traitement prioritaire accordé aux rendez-vous pris en ligne." },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} variants={cardVariant} className="flex flex-col items-start gap-3 p-5 bg-card border border-border rounded-2xl">
                <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm" style={{ fontFamily: "Outfit, sans-serif" }}>{title}</div>
                  <div className="text-xs text-muted-foreground mt-1 leading-relaxed" style={{ fontFamily: "Outfit, sans-serif" }}>{desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-primary relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 md:mb-4" style={{ fontFamily: "Fraunces, serif" }}>
              Réservation en ligne
            </h2>
            <p className="text-rose-100 mb-7 max-w-md mx-auto text-sm leading-relaxed" style={{ fontFamily: "Outfit, sans-serif" }}>
              Consultez les plages horaires disponibles et enregistrez votre créneau au Centre de Beauté Zara.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="sm:flex-none">
                <Link to="/reservation" className="flex items-center justify-center gap-2 bg-white text-primary font-bold px-7 py-3.5 rounded-full hover:bg-rose-50 transition-colors text-sm shadow-lg" style={{ fontFamily: "Outfit, sans-serif" }}>
                  Réserver un créneau <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="sm:flex-none">
                <Link to="/boutique" className="flex items-center justify-center gap-2 border-2 border-white/40 text-white font-bold px-7 py-3.5 rounded-full hover:border-white transition-colors text-sm" style={{ fontFamily: "Outfit, sans-serif" }}>
                  Consulter la boutique
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
