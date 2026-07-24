# Carnet — Tractions & Explosivité

Carnet d'entraînement personnel sur 12 semaines (protocole tractions lestées, explosivité et muscle-up, avec séance jambes/renfo et course hebdomadaires). Application web autonome : **deux fichiers** (`index.html` = l'appli, `program.js` = le contenu du programme), aucune dépendance à installer, aucun serveur.

Départ du protocole : lundi 20 juillet 2026.

## Fonctionnalités

- **Programme complet 12 semaines** — 3 phases (base & technique, force maximale, explosivité & muscle-up), 5 séances/semaine, avec échauffement obligatoire et notes de charge. Tout le contenu (exos, phases, objectifs, dates) vit dans **`program.js`**, un fichier dédié facile à modifier sans toucher à l'appli.
- **Suivi de séance** — case « Fait », bilan structuré par séance (RPE ressenti, douleur épaule oui/non, commentaire libre), ajustement de chaque exercice directement dans la fiche (les comptes-rendus multi-lignes s'affichent ligne par ligne), et **ajout d'exercices** à n'importe quelle séance (tag « ajouté », modifiables et supprimables).
- **Semaine flexible** — chaque séance a un **sélecteur de jour** : si tu pars courir un jour prévu pour autre chose, décale la séance (tag « décalée », le calendrier et l'ordre suivent, l'historique reste attaché). Tu peux aussi **ajouter une séance** à une semaine (jour, type, titre, exos) — tag « perso », supprimable.
- **Flèches de progression** — écris `↗` (charge/intensité en hausse, affiché en vert) ou `↘` (allégé, affiché en bleu) dans une ligne d'exercice (`program.js` ou ajustement en séance) et l'appli les met en couleur. Légende sous la barre des semaines.
- **Semaines deload/test marquées** — toute semaine contenant une séance `deload` ou `test` est signalée : point sous son numéro dans la barre, pastille « Deload & test » dans l'en-tête. Calculé automatiquement depuis `program.js`.
- **Suivi de progression + graphiques** — trois métriques suivies dans le temps avec courbes et ligne d'objectif :
  - Max reps tractions (objectif 17 → 25)
  - 1RM lesté tractions (objectif 35 → 43 kg)
  - Poids de corps (objectif 83,8 → 80 kg)

  Chaque mesure ajoutée (date + valeur) alimente la courbe et affiche l'écart depuis le départ.
- **Sauvegarde locale** — toutes les données sont enregistrées automatiquement dans le navigateur (`localStorage`). Fonctionne hors ligne.
- **Export / import** — téléchargement d'une sauvegarde `.json` (ou copier-coller) pour transférer les données vers un autre appareil.
- **Export bilan pour relecture** — génère un fichier **Markdown** lisible (progression des métriques, séances faites, ressentis, douleurs, remarques, exercices ajustés/ajoutés), à faire relire par un coach ou une IA pour adapter la suite du programme.

## Modifier le programme

Ouvre `program.js` : c'est un objet JSON commenté (`startDate`, `phases`, `goals`, `metrics`, `warmup`, `notes`, `weeks`). Chaque séance est un objet `{ day, type, title, ex }` — `day` 0=lundi … 6=dimanche, `ex` = une ligne par exercice. Modifie, sauvegarde, recharge la page. Si le carnet affiche une erreur au chargement, il manque probablement une virgule ou un guillemet.

Les coches « Fait », bilans et mesures sont indexés par semaine + jour (`s0-d2` = semaine 1, mercredi) : réordonner ou modifier les exercices d'une séance ne fait rien perdre ; seul un changement de *jour* d'une séance déplace son historique.

Convention : mets `↗` sur une ligne dont la charge/intensité monte vs la semaine précédente, `↘` sur une ligne allégée (deload) — l'appli les colore automatiquement.

## Journal des adaptations

- **2026-07-24 (après bilan S1)** — Semaines 2-4 recalibrées sur les résultats réels : force consolidée à 23-24 kg (échecs à 25-26 kg en S1) avant de remonter à 25 kg en S3 ; charges jambes chiffrées (leg press 200-210, SDT 85-90 avec sangles, gainage latéral 45s, leg extension et étirements ischios intégrés) ; volume tractions converti en **pyramide** (5x13 irréaliste) ; dips chiffrés sur la calibration S1 (1RM estimé ≈ 47 kg) ; le lundi de la S4 devient un **vrai deload** pré-test (au lieu d'un 4x4 @27-28 kg) et le protocole de test 1RM est cadré. Le lundi S5 sera recalé sur le test S4 (~85 % du 1RM mesuré).

## Utilisation en local

Ouvre simplement `index.html` dans un navigateur (double-clic, ou glisser-déposer dans un onglet). React et Babel sont chargés depuis un CDN, donc **une connexion internet est nécessaire au premier chargement**.

> Astuce : sur mobile, une fois la page ouverte, utilise « Ajouter à l'écran d'accueil » pour l'avoir comme une appli.

## Déploiement sur GitHub Pages

1. Crée un dépôt et pousse ce dossier (avec `index.html` à la racine) :
   ```bash
   git init
   git add .
   git commit -m "Carnet tractions — v1 avec suivi de progression"
   git branch -M main
   git remote add origin https://github.com/<ton-pseudo>/<ton-repo>.git
   git push -u origin main
   ```
2. Sur GitHub : **Settings → Pages → Build and deployment → Source : Deploy from a branch**, choisis la branche `main` et le dossier `/ (root)`, puis **Save**.
3. Au bout d'une minute, ton carnet est en ligne sur `https://<ton-pseudo>.github.io/<ton-repo>/`.

Toute mise à jour se fait ensuite par un simple `git commit` + `git push`.

## Où sont mes données ?

Les données vivent dans le `localStorage` du navigateur, **liées à l'adresse du site et à l'appareil**. Elles ne se synchronisent pas automatiquement entre ton téléphone et ton ordinateur : pour transférer, utilise l'export `.json` (section « 💾 Sauvegarde / restauration ») puis « Restaurer » sur l'autre appareil. Vider les données de navigation du site efface le carnet — d'où l'intérêt de garder une sauvegarde de temps en temps.

## Technique

- React 18 (UMD) + Babel Standalone, chargés depuis cdnjs — aucune étape de build.
- Le runtime JSX est forcé en mode *classic* (`React.createElement`) pour rester compatible avec une exécution hors module ES.
- Graphiques en SVG natif (aucune librairie de charts).
- Contenu du programme dans `program.js` (objet JSON assigné à `window.PROGRAM`), chargé par une simple balise `<script>` — le format `.js` plutôt que `.json` permet l'ouverture en double-clic (`file://`), où `fetch()` d'un `.json` serait bloqué.
- Clé de stockage : `protocole-tractions-v1` (sections `completed`, `edits`, `added`, `feedback`, `moves` — décalages de jour, `custom` — séances ajoutées, `measures`).

## Structure

```
.
├── index.html   # l'application (suivi, graphiques, exports)
├── program.js   # LE PROGRAMME : exos, phases, objectifs — à éditer ici
├── README.md
└── .gitignore
```
