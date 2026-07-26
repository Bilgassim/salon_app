import { Link } from "react-router";
import { motion } from "motion/react";
import { Scissors } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Footer() {
  return (
    <footer className="bg-[#04080f] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Scissors className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-black" style={{ fontFamily: "Fraunces, serif" }}>
                Centre de Beauté <span className="text-blue-400 italic">Zara</span>
              </span>
            </div>
            <p className="text-sm text-white/60 max-w-xs leading-relaxed" style={{ fontFamily: "Outfit, sans-serif" }}>
              Votre salon de beauté de confiance depuis 2019. Tresses, soins, manucures et produits cosmétiques.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="grid grid-cols-2 gap-10">
            <div>
              <h4 className="font-bold text-white text-sm mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>Services</h4>
              <ul className="space-y-2">
                {["Tresses", "Soins Cheveux", "Traitement", "Manucure", "Pédicure"].map((l) => (
                  <li key={l}>
                    <Link to="/services" className="text-sm text-white/60 hover:text-white transition-colors" style={{ fontFamily: "Outfit, sans-serif" }}>{l}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white text-sm mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>Plateforme</h4>
              <ul className="space-y-2">
                {[
                  { label: "Réservation", to: "/reservation" },
                  { label: "File d'attente", to: "/reservation" },
                  { label: "Boutique", to: "/boutique" },
                  { label: "Contact", to: "/contact" },
                ].map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to} className="text-sm text-white/60 hover:text-white transition-colors" style={{ fontFamily: "Outfit, sans-serif" }}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/40" style={{ fontFamily: "DM Mono, monospace" }}>
            © 2026 Centre de Beauté Zara · Mme Fatouma Zara Madjiri · Niamey, Niger
          </p>
        </div>
      </div>
    </footer>
  );
}
