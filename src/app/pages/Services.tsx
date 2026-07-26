import { Link } from "react-router";
import { motion } from "motion/react";
import { Clock, ArrowRight } from "lucide-react";

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
    emoji: "✨", name: "Tresses", price: "À partir de 3 000 FCFA", duration: "1h30 – 4h",
    desc: "Nattes, vanilles, box braids, twists, cornrows… Toutes les techniques maîtrisées avec soin et précision. Résultat durable, cheveux protégés.",
    details: ["Nattes classiques", "Box braids", "Vanilles / Twists", "Cornrows", "Goddess braids"],
  },
  {
    emoji: "💧", name: "Soins Cheveux", price: "À partir de 2 000 FCFA", duration: "45 min",
    desc: "Masques nourrissants, soins protéinés, traitements hydratants pour cheveux abîmés, secs ou cassants. Des cheveux revitalisés en une séance.",
    details: ["Masque nourrissant", "Soin protéiné", "Traitement hydratant", "Soin au beurre de karité", "Rinçage à froid"],
  },
  {
    emoji: "🌿", name: "Traitement Capillaire", price: "À partir de 4 000 FCFA", duration: "1h – 2h",
    desc: "Défrisage professionnel, lissage brésilien, traitements de fond pour redonner force et brillance à vos cheveux.",
    details: ["Défrisage doux / fort", "Lissage brésilien", "Traitement kératine", "Coloration", "Permanente"],
  },
  {
    emoji: "💅", name: "Manucure", price: "À partir de 1 500 FCFA", duration: "30 – 45 min",
    desc: "Soin complet des mains — bain, gommage, cuticules, lime et pose de vernis. Nail art disponible sur demande.",
    details: ["Bain & gommage mains", "Soin des cuticules", "Pose vernis classique", "Pose vernis semi-permanent", "Nail art"],
  },
  {
    emoji: "🦶", name: "Pédicure", price: "À partir de 2 000 FCFA", duration: "45 min",
    desc: "Soin complet des pieds : bain relaxant, gommage, limages, hydratation et pose de vernis. Pieds doux et impeccables.",
    details: ["Bain relaxant des pieds", "Gommage & ponçage", "Soin des ongles", "Hydratation intensive", "Pose vernis"],
  },
  {
    emoji: "🛍️", name: "Vente de Produits Cosmétiques", price: "Selon produit", duration: "—",
    desc: "Retrouvez au salon ou en boutique en ligne une sélection de produits capillaires et cosmétiques : pommades, huiles, défrisants et vernis.",
    details: ["Pommades & brillantines", "Huiles capillaires", "Défrisants (doux / fort)", "Vernis & top coat", "Soins hydratants"],
  },
];

export function Services() {
  return (
    <div className="pt-20 bg-background min-h-screen">
      {/* Header */}
      <section className="py-10 md:py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-xs font-bold text-primary uppercase tracking-widest" style={{ fontFamily: "DM Mono, monospace" }}>Nos Prestations</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mt-2 mb-4" style={{ fontFamily: "Fraunces, serif" }}>
              Tout pour votre<br /><span className="text-primary italic">beauté</span>
            </h1>
            <p className="text-muted-foreground max-w-lg leading-relaxed" style={{ fontFamily: "Outfit, sans-serif" }}>
              Des prestations professionnelles adaptées à toutes les femmes, de 10 à 50 ans.
              Réalisées par Mme Fatouma Zara Madjiri et son équipe.
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
            {SERVICES.map((s) => (
              <motion.div
                key={s.name} variants={cardVariant}
                whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(24,119,242,0.1)" }}
                whileTap={{ scale: 0.99 }}
                className="bg-card rounded-2xl border border-border overflow-hidden"
              >
                {/* Header coloré */}
                <div className="bg-gradient-to-br from-primary/10 to-secondary px-5 pt-5 pb-4 flex items-start justify-between">
                  <div className="text-4xl">{s.emoji}</div>
                  {s.duration !== "—" && (
                    <span className="flex items-center gap-1.5 text-xs text-primary bg-white/70 dark:bg-primary/10 px-3 py-1.5 rounded-full font-semibold">
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
                      {s.name === "Vente de Produits Cosmétiques" ? "Voir les produits" : "Réserver"} <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-12 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h3 className="text-2xl font-black text-foreground mb-3" style={{ fontFamily: "Fraunces, serif" }}>Prête à vous faire chouchouter ?</h3>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block mt-2">
              <Link
                to="/reservation"
                className="flex items-center gap-2 bg-primary text-primary-foreground font-bold px-7 py-3.5 rounded-full"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Réserver un service <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
