# Journal de bord — Carnet Tractions & Explosivité

Point d'avancement du projet et du protocole. Entrée la plus récente en haut.

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
