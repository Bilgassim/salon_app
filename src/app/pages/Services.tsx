import { Link } from "react-router";
import { motion } from "motion/react";
import { Clock, ArrowRight, Scissors, Droplets, Sparkles, ShieldCheck, ShoppingBag } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const SERVICES = [
  {
    icon: Scissors, name: "Tresses", price: "À partir de 3 000 FCFA", duration: "1h30 – 4h",
    desc: "Réalisation de nattes classiques, vanilles, box braids, twists et cornrows. Prestations adaptées selon la longueur et la texture des cheveux.",
    details: ["Nattes classiques", "Box braids", "Vanilles / Twists", "Cornrows", "Goddess braids"],
  },
  {
    icon: Droplets, name: "Soins Cheveux", price: "À partir de 2 000 FCFA", duration: "45 min",
    desc: "Application de masques nourrissants, soins protéinés et traitements hydratants pour l'entretien régulier des cheveux secs ou fragilisés.",
    details: ["Masque nourrissant", "Soin protéiné", "Traitement hydratant", "Soin au beurre de karité", "Lavage et rinçage"],
  },
  {
    icon: Sparkles, name: "Traitement Capillaire", price: "À partir de 4 000 FCFA", duration: "1h – 2h",
    desc: "Défrisage, lissage et soins techniques de restructuration pour assurer la tenue et la souplesse capillaire.",
    details: ["Défrisage", "Lissage", "Traitement réparateur", "Coloration", "Permanente"],
  },
  {
    icon: ShieldCheck, name: "Manucure", price: "À partir de 1 500 FCFA", duration: "30 – 45 min",
    desc: "Entretien des mains, gommage, soin des cuticules, limage et application de vernis classique ou semi-permanent.",
    details: ["Bain et gommage des mains", "Soin des cuticules", "Pose de vernis classique", "Pose de vernis semi-permanent"],
  },
  {
    icon: Scissors, name: "Pédicure", price: "À partir de 2 000 FCFA", duration: "45 min",
    desc: "Soin complet des pieds comprenant bain, gommage, ponçage, hydratation et pose de vernis.",
    details: ["Bain des pieds", "Gommage et ponçage", "Soin des ongles", "Hydratation", "Pose de vernis"],
  },
  {
    icon: ShoppingBag, name: "Vente de Produits Cosmétiques", price: "Selon produit", duration: "—",
    desc: "Produits disponibles au salon ou en commande avec retrait sur place : pommades, huiles capillaires, défrisants et vernis.",
    details: ["Pommades et brillantines", "Huiles végétales et capillaires", "Défrisants", "Vernis à ongles", "Soins hydratants"],
  },
];

export function Services() {
  return (
    <div className="pt-20 bg-background min-h-screen">
      {/* Header */}
      <section className="py-10 md:py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: "DM Mono, monospace" }}>Catalogue des Prestations</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mt-2 mb-4" style={{ fontFamily: "Fraunces, serif" }}>
              Prestations &amp; <span className="text-primary italic">Tarifs</span>
            </h1>
            <p className="text-muted-foreground max-w-lg leading-relaxed" style={{ fontFamily: "Outfit, sans-serif" }}>
              Prestations professionnelles réalisées au Centre de Beauté Zara par Madame Fatouma Zara Madjiri et son assistante.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-10 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-6"
          >
            {SERVICES.map((s) => {
              const IconComp = s.icon;
              return (
                <motion.div
                  key={s.name} variants={cardVariant}
                  className="bg-card rounded-2xl border border-border overflow-hidden"
                >
                  <div className="bg-secondary px-5 pt-5 pb-4 flex items-start justify-between border-b border-border">
                    <div className="w-10 h-10 rounded-xl bg-card flex items-center justify-center border border-border">
                      <IconComp className="w-5 h-5 text-primary" />
                    </div>
                    {s.duration !== "—" && (
                      <span className="flex items-center gap-1.5 text-xs text-primary bg-card px-3 py-1.5 rounded-full font-semibold border border-border">
                        <Clock className="w-3.5 h-3.5" />{s.duration}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <h2 className="text-xl font-black text-foreground mb-2" style={{ fontFamily: "Fraunces, serif" }}>{s.name}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>{s.desc}</p>

                    <ul className="space-y-1.5 mb-5">
                      {s.details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-sm text-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />{d}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="font-black text-primary text-base" style={{ fontFamily: "Fraunces, serif" }}>{s.price}</span>
                      <Link
                        to={s.name === "Vente de Produits Cosmétiques" ? "/boutique" : "/reservation"}
                        state={s.name !== "Vente de Produits Cosmétiques" ? { service: s.name } : undefined}
                        className="flex items-center gap-1.5 text-xs font-bold bg-primary text-primary-foreground px-4 py-2 rounded-full"
                        style={{ fontFamily: "Outfit, sans-serif" }}
                      >
                        {s.name === "Vente de Produits Cosmétiques" ? "Consulter la boutique" : "Prendre rendez-vous"} <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-12 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h3 className="text-2xl font-black text-foreground mb-3" style={{ fontFamily: "Fraunces, serif" }}>Réservation en ligne</h3>
            <div className="inline-block mt-2">
              <Link
                to="/reservation"
                className="flex items-center gap-2 bg-primary text-primary-foreground font-bold px-7 py-3.5 rounded-full text-sm"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Accéder au formulaire de réservation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
