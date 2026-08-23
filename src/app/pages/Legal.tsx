import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function Legal() {
  return (
    <div className="pt-20 bg-background min-h-screen">
      {/* Header */}
      <section className="py-10 md:py-12 bg-muted border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span
              className="text-xs font-bold text-primary uppercase tracking-widest"
              style={{ fontFamily: "DM Mono, monospace" }}
            >
              Cadre Réglementaire
            </span>
            <h1
              className="text-3xl sm:text-4xl font-black text-foreground mt-2"
              style={{ fontFamily: "Fraunces, serif" }}
            >
              Informations Juridiques & Conditions Générales
            </h1>
            <p
              className="text-sm text-muted-foreground mt-2"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Dernière mise à jour : 24 août 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12 text-foreground text-sm leading-relaxed" style={{ fontFamily: "Outfit, sans-serif" }}>
          
          {/* Section 1: Mentions Légales */}
          <div className="bg-card border border-border p-6 sm:p-8 rounded-2xl shadow-sm space-y-6">
            <h2 className="text-xl font-bold text-foreground border-b border-border pb-3" style={{ fontFamily: "Fraunces, serif" }}>
              1. Mentions Légales
            </h2>

            <div className="space-y-4">
              <h3 className="text-base font-semibold text-foreground">Article 1. Éditeur de la plateforme</h3>
              <p>
                Le site internet et l'application web du <strong>Centre de Beauté Zara</strong> sont édités et exploités sous la responsabilité de :
              </p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li><strong>Enseigne commerciale :</strong> Centre de Beauté Zara</li>
                <li><strong>Exploitante et Directrice de la publication :</strong> Madame Fatouma Zara Madjiri (agissant en nom personnel)</li>
                <li><strong>Statut juridique :</strong> Activité individuelle non immatriculée au Registre du Commerce et du Crédit Mobilier (RCCM)</li>
                <li><strong>Adresse géographique :</strong> Quartier BCEAO Francophonie, Niamey, République du Niger</li>
                <li><strong>Contact téléphonique :</strong> Coordonnées communiquées directement au salon ou via les canaux de réservation en cours de validation</li>
                <li><strong>Contact électronique :</strong> En attente d'attribution définitive</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-semibold text-foreground">Article 2. Hébergement</h3>
              <p>
                La plateforme numérique est hébergée par :
              </p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li><strong>Hébergeur :</strong> GitHub Pages (GitHub, Inc.)</li>
                <li><strong>Adresse :</strong> 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis</li>
                <li><strong>Site web :</strong> https://pages.github.com</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-semibold text-foreground">Article 3. Propriété intellectuelle</h3>
              <p>
                L'ensemble des contenus, marques, logos, visuels et éléments logiciels figurant sur la plateforme constituent des éléments protégés. Toute reproduction, copie ou diffusion non autorisée par Madame Fatouma Zara Madjiri est formellement interdite.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-semibold text-foreground">Article 4. Responsabilité</h3>
              <p>
                L'exploitante s'efforce d'assurer le fonctionnement régulier de la plateforme. Sa responsabilité ne saurait être engagée en cas de dysfonctionnement technique lié aux réseaux de télécommunications, aux services tiers ou à des événements de force majeure.
              </p>
            </div>
          </div>

          {/* Section 2: CGU / CGV */}
          <div className="bg-card border border-border p-6 sm:p-8 rounded-2xl shadow-sm space-y-6">
            <h2 className="text-xl font-bold text-foreground border-b border-border pb-3" style={{ fontFamily: "Fraunces, serif" }}>
              2. Conditions Générales d'Utilisation et de Vente (CGU / CGV)
            </h2>

            <div className="space-y-4">
              <h3 className="text-base font-semibold text-foreground">Article 1. Objet</h3>
              <p>
                Les présentes conditions régissent l'accès à la plateforme, la prise de rendez-vous pour les prestations de coiffure et de soins esthétiques, ainsi que l'achat des produits cosmétiques proposés par le Centre de Beauté Zara.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-semibold text-foreground">Article 2. Prestations et Réservations</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li><strong>Prise de rendez-vous :</strong> Les créneaux horaires sont attribués selon les disponibilités réelles de l'exploitante.</li>
                <li><strong>File d'attente :</strong> L'indication de position dans la file d'attente est fournie à titre indicatif. La durée des prestations de coiffure pouvant varier selon les exigences techniques de chaque soin, des décalages peuvent intervenir.</li>
                <li><strong>Retards et Annulations :</strong> Tout retard supérieur à 15 minutes sans avertissement préalable peut entraîner la perte du créneau. Toute annulation doit être signalée au moins 2 heures à l'avance.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-semibold text-foreground">Article 3. Vente de Produits Cosmétiques</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li><strong>Disponibilité :</strong> Les produits (pommades, huiles capillaires, défrisants, vernis) sont vendus dans la limite des stocks disponibles.</li>
                <li><strong>Retrait au salon :</strong> Les commandes réservées en ligne sont mises à disposition au salon (Quartier BCEAO Francophonie, Niamey) sans frais additionnels.</li>
                <li><strong>Livraison :</strong> Les livraisons sont limitées à la zone urbaine de Niamey par coursier indépendant. Les frais de transport sont à la charge exclusive de la cliente.</li>
                <li><strong>Hygiène et Retours :</strong> Conformément aux règles d'hygiène et de sécurité sanitaire, aucun produit cosmétique descellé, ouvert ou utilisé ne fera l'objet d'une reprise ou d'un remboursement.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-semibold text-foreground">Article 4. Tarification et Règlement</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li><strong>Devise :</strong> Tous les tarifs sont établis en Francs CFA (XOF).</li>
                <li><strong>Modes de règlement acceptés :</strong> Espèces au comptant lors de la réalisation du service ou du retrait des articles, ou transfert d'argent mobile (Orange Money / Nita).</li>
                <li><strong>Exigibilité :</strong> Le paiement complet de la prestation est exigible immédiatement à la fin de son exécution.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-semibold text-foreground">Article 5. Droit applicable et litiges</h3>
              <p>
                Les présentes relations contractuelles sont soumises au droit applicable en République du Niger. En cas de litige, une solution amiable sera recherchée en priorité avant toute saisine des tribunaux compétents de Niamey.
              </p>
            </div>
          </div>

          {/* Section 3: Politique de Confidentialité */}
          <div className="bg-card border border-border p-6 sm:p-8 rounded-2xl shadow-sm space-y-6">
            <h2 className="text-xl font-bold text-foreground border-b border-border pb-3" style={{ fontFamily: "Fraunces, serif" }}>
              3. Politique de Confidentialité et Protection des Données
            </h2>

            <div className="space-y-4">
              <h3 className="text-base font-semibold text-foreground">Article 1. Responsable du traitement</h3>
              <p>
                Le traitement des données personnelles est effectué sous la responsabilité directe de Madame Fatouma Zara Madjiri.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-semibold text-foreground">Article 2. Données collectées et Finalités</h3>
              <p>
                Les informations recueillies (nom, numéro de téléphone, historique de rendez-vous et commandes) sont strictement destinées aux finalités suivantes :
              </p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Enregistrement et gestion des rendez-vous ;</li>
                <li>Suivi de l'ordre de passage en file d'attente ;</li>
                <li>Transmission des confirmations et notifications via WhatsApp ;</li>
                <li>Gestion des commandes de produits.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-semibold text-foreground">Article 3. Confidentialité et Non-cession</h3>
              <p>
                Aucune donnée à caractère personnel n'est vendue, cédée ou transmise à des tiers à des fins publicitaires. Les données ne sont partagées qu'avec les outils techniques strictement nécessaires au traitement (service de messagerie WhatsApp et hébergement).
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-semibold text-foreground">Article 4. Droits des clientes</h3>
              <p>
                Toute cliente dispose d'un droit d'accès, de rectification et d'effacement de ses données personnelles. Toute demande peut être adressée directement auprès de Madame Fatouma Zara Madjiri au salon ou par message WhatsApp.
              </p>
            </div>
          </div>

          {/* Section 4: Cookies */}
          <div className="bg-card border border-border p-6 sm:p-8 rounded-2xl shadow-sm space-y-6">
            <h2 className="text-xl font-bold text-foreground border-b border-border pb-3" style={{ fontFamily: "Fraunces, serif" }}>
              4. Politique Relative aux Cookies
            </h2>
            <p>
              La plateforme utilise uniquement des identifiants techniques et de session nécessaires à la navigation (maintien de l'état du panier, sélection des créneaux horaires et application des préférences d'affichage). Aucun traceur de profilage publicitaire tiers n'est utilisé.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
