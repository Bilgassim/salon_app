import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Share, PlusSquare } from "lucide-react";

export function IOSInstallPrompt() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Detect if is iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;

    // Detect if is NOT in standalone mode (already installed)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches
      || (navigator as any).standalone;

    if (isIOS && !isStandalone) {
      // Show prompt after a small delay
      const timer = setTimeout(() => setShow(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-24 left-4 right-4 z-[60] md:hidden"
      >
        <div className="bg-card border border-primary/20 rounded-2xl p-5 shadow-2xl relative overflow-hidden">
          <button
            onClick={() => setShow(false)}
            className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0 text-white font-black text-xl">
              Z
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground mb-1" style={{ fontFamily: "Fraunces, serif" }}>
                Installer l'app sur votre iPhone
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed" style={{ fontFamily: "Outfit, sans-serif" }}>
                Installez l'app pour recevoir vos notifications de rendez-vous gratuitement.
              </p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3">
            <div className="flex items-center gap-3 text-xs text-foreground">
              <div className="w-6 h-6 rounded-md bg-muted flex items-center justify-center">
                <Share className="w-3.5 h-3.5 text-primary" />
              </div>
              <span>1. Cliquez sur le bouton <strong>Partager</strong> en bas.</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-foreground">
              <div className="w-6 h-6 rounded-md bg-muted flex items-center justify-center">
                <PlusSquare className="w-3.5 h-3.5 text-primary" />
              </div>
              <span>2. Cliquez sur <strong>Sur l'écran d'accueil</strong>.</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/20" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
