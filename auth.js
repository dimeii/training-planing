/* ====================================================================
   ACCÈS AU CARNET — configuration du verrouillage
   ====================================================================
   - hash      : SHA-256 de "salt:motdepasse" (jamais le mot de passe en
                 clair). Pour en générer un nouveau : carte « Sécurité »
                 dans l'appli, qui produit ce fichier tout prêt.
   - epoch     : numéro de génération. L'augmenter (ou changer le mot de
                 passe) RÉVOQUE tous les appareils autorisés : chacun
                 devra ressaisir le mot de passe.
   - validDays : durée d'autorisation d'un appareil après connexion.
   - enabled   : false pour désactiver complètement le verrouillage.

   Limite à connaître : le site est statique (GitHub Pages), donc cette
   protection est côté navigateur. Elle bloque la consultation de la
   page, mais le code du dépôt public reste lisible. Les données de
   séances, elles, ne quittent jamais le navigateur.
   ==================================================================== */
window.AUTH = {
  "enabled": true,
  "salt": "carnet-tractions",
  "hash": "ed9ca617bd64f74f8e603d2a0bf01a34a2c1402da30c5ffe338476c32f384978",
  "epoch": 1,
  "validDays": 30
};
