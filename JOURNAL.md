# Journal de bord — Carnet Tractions & Explosivité

Point d'avancement du projet et du protocole. Entrée la plus récente en haut.

---

## 2026-08-01 — Multi-profils, programmes dynamiques et boucle Coach IA

- **Multi-profils** : écran « Qui s'entraîne ? » après le déverrouillage. Chaque profil = clés localStorage dédiées (données `protocole-tractions-v1:<id>`, synchro `protocole-tractions-sync-v1:<id>`), registre dans `carnet-profiles-v1`. **Migration automatique** : les données pré-multi-profil deviennent le profil « Mehdi » (marqué `legacy`) qui **conserve les clés historiques sans suffixe** → données de prod et synchro `dimeii/training-data` intactes, zéro action requise.
- **Programme dynamique par profil** : les globales dérivées de `program.js` sont recalculées par `applyProgram()` ; un profil peut adopter un programme embarqué dans ses données (`data.program`), qui suit sa synchro cloud (fichier `carnet-data-<id>.json` pour les nouveaux profils) et ses sauvegardes `.json`.
- **Boucle Coach IA** (carte « 🤖 Coach IA ») : export d'un **pack coach** (consignes + format JSON attendu + bilan + programme actuel) à coller dans n'importe quelle IA → l'IA rend un JSON → import avec validation (messages d'erreur précis, tolère les fences ```json), aperçu, adoption → les `remarks` de l'IA s'affichent dans une carte « 💬 Remarques du coach ». Bouton « Revenir au programme du site » (données conservées).
- Le mot de passe du site reste **global** (un seul verrouillage pour tous les profils).
- Validé par un nouveau smoke test Node (Babel + jsdom) : **52/52 OK** (création/suppression/isolation de profils, migration legacy avec synchro inchangée, import IA valide/invalide, retour au programme du site, non-régression des données existantes).

---

## 2026-07-28 (soir) — Synchro cloud active + recalibrage S3 après le lundi S2

- **Synchro cloud activée** : dépôt privé `dimeii/training-data`, token fine-grained (permission Contents rw). Pièges rencontrés : dépôt non coché dans le token (404), puis permission Contents absente (403). Les données sont maintenant persistantes hors localStorage.
- **Bilan du lundi S2 (Force — consolidation)** :
  - Tractions : 4x4 @22,5 kg passées mais « au max des reps » → la S3 prévue @25 kg était trop agressive, recalée à **4x4 @23-24 kg**. Le test S4 donnera le vrai 1RM.
  - Tirage poulie : machines incomparables entre salles (40 kg dur vs 70 ailleurs) → consigne passée en **RPE 8-9** au lieu de kg.
  - Renfo épaule : élévations frontales unilat. @8 kg notées au programme.
  - **Bloc push/bras adopté** (il l'a ajouté de lui-même) : développé couché haltères 3x8-10 @30 kg, écarté poulie 2x10 @26 kg, superset curl/triceps @14 kg → intégré au lundi S3 ; version légère optionnelle en S4 (semaine de test).
- Toujours **aucune mesure** dans « 📈 Ma progression » — au minimum le poids de corps à saisir.

---

## 2026-07-28 — Où on en est

### Le protocole (semaine 2 / 12 — phase 1, Base & technique)

- **Semaine 1 : faite et analysée.** Bilan exploité pour recalibrer la suite :
  - Force : échecs dès la 4e rep à 25-26 kg → S2 consolide à 23-24 kg, S3 remonte à 25 kg.
  - Jambes : leg press 200 kg facile → 200-210 en S2 ; SDT limite grippe à 90 (sangles) ; gainage latéral passé à 45s ; leg extension unilatérale et étirements ischios intégrés au programme.
  - Volume : 5x13 tractions irréaliste (~41 reps) → **pyramide 13-11-9-7-5 + max** en S2, 14-12-10-8-6 en S3 ; rowing monté à 60-65 kg ; dips calibrés (4@45 → 1RM estimé ≈ 47 kg) → 4x8 @25 kg ; circuit abdos personnalisé adopté.
  - Course et explosivité de S1 décalées (ven ↔ sam) via l'appli.
- **Semaine 4 corrigée** : le lundi est devenu un vrai deload (3x3 @20-22 kg) au lieu d'un 4x4 @27-28 kg incohérent ; protocole du test 1RM cadré (montée 20 → 25 → 30 puis +2,5 kg).
- **À venir** : bilan S2 à exporter en fin de semaine pour ajuster S3 ; **test fin de phase 1 le vendredi de la S4** (max reps + 1RM lesté) → recalage de la phase 2 (le 5x3 de S5 vise ~85 % du 1RM mesuré).
- **Métriques** : aucune mesure encore saisie dans « 📈 Ma progression » — à commencer (poids de corps au minimum, puis résultats du test S4). Objectifs : 17 → 25 reps, 35 → 43 kg 1RM, 83,8 → 80 kg.

### L'application

Hébergée sur **https://dimeii.github.io/training-planing/** (dépôt public `dimeii/training-planing`, GitHub Pages sur `main`). Architecture : `index.html` (appli React sans build) + `program.js` (contenu du programme, éditable) + `auth.js` (verrouillage).

Fonctionnalités en place :
- Suivi de séance : coche « Fait », bilan structuré (RPE, douleur épaule, commentaire), ajustement d'exercices multi-lignes, ajout d'exercices (tag « ajouté »).
- Semaine flexible : décalage de séance par sélecteur de jour (tag « décalée », historique conservé), ajout de séances perso (tag « perso »).
- Flèches ↗ (vert, charge en hausse) / ↘ (bleu, allégé) rendues depuis le texte des exercices.
- Marquage automatique des semaines deload/test (S4, S8, S12) dans la barre et l'en-tête.
- Suivi de progression : 3 graphiques SVG avec ligne d'objectif.
- Exports : sauvegarde `.json`, **bilan Markdown pour relecture** (c'est ce fichier qu'on colle ici pour adapter le programme).
- **Accès protégé** : mot de passe (hash SHA-256 dans `auth.js`), appareil autorisé 30 jours, révocation locale (carte Sécurité) ou globale (changement de mot de passe / epoch → push).
- **Synchronisation cloud** (livrée, **pas encore activée par Mehdi**) : sauvegarde auto de `carnet-data.json` dans un dépôt GitHub privé via token fine-grained ; le plus récent (updatedAt) gagne.

### Actions en attente côté Mehdi

1. **Activer la synchro cloud** sur l'appareil qui contient les données saisies : créer le dépôt privé `training-data`, générer un token fine-grained (Contents rw sur ce seul dépôt), coller dans la carte « ☁️ Synchronisation ». Puis répéter sur les autres appareils.
2. **Changer le mot de passe par défaut** (communiqué en conversation, jamais écrit dans le dépôt) via la carte « 🔒 Sécurité » → pousser le `auth.js` généré.
3. **Saisir les premières mesures** dans « 📈 Ma progression ».
4. Vérifier que GitHub Pages est bien actif (Settings → Pages → `main` / root).

### Méthode de travail

- Le programme s'adapte **par cycle de bilan** : export « 📤 Bilan pour relecture » → collé en conversation → analyse → modifications dans `program.js` (avec flèches et notes « S1 : … ») → commit + push.
- Chaque évolution de l'appli est validée par un smoke test Node (Babel + jsdom) qui compile le JSX et simule les interactions réelles — dernier passage : **63/63 OK**.
- Historique des commits : `786caa2` (v2 : programme externalisé, semaines flexibles, exports) → `33ce5ab` (accès protégé) → `362b601` (synchro cloud).
