/* ====================================================================
   PROGRAMME — fichier de stockage dédié (exos, phases, objectifs…)
   ====================================================================
   C'est ICI qu'on modifie le contenu du programme, sans toucher à
   l'application (index.html). Le contenu est un objet JSON assigné à
   window.PROGRAM, avec des commentaires pour se repérer (permis car
   le fichier est du JavaScript). Après une modif, recharge simplement
   la page : si le carnet affiche une erreur, c'est qu'il manque une
   virgule, un guillemet ou un crochet.

   Structure :
   - startDate : date du lundi de la semaine 1 (format "AAAA-MM-JJ")
   - phases    : blocs du programme (start/end = numéros de semaine)
   - goals     : vignettes d'objectifs affichées en haut du carnet
   - metrics   : métriques suivies en graphique (départ, objectif, sens)
   - warmup    : échauffement obligatoire
   - notes     : rappels affichés en bas du carnet
   - weeks     : 1 entrée par semaine, chaque séance = { day, type, title, ex }
       day  : 0=Lun, 1=Mar, 2=Mer, 3=Jeu, 4=Ven, 5=Sam, 6=Dim
       type : "force" | "jambes" | "volume" | "explo" | "deload" | "test" | "course"
       ex   : liste des exercices (une ligne par exercice)

   Flèches : mets le caractère ↗ dans une ligne dont la charge/intensité
   monte vs la semaine précédente, ↘ dans une ligne allégée (deload).
   L'appli les affiche en couleur (vert / bleu).
   ==================================================================== */
window.PROGRAM = {
  "startDate": "2026-07-20",

  "phases": [
    { "id": 1, "name": "Base & technique", "start": 1, "end": 4, "color": "#3E5F8A" },
    { "id": 2, "name": "Force maximale", "start": 5, "end": 8, "color": "#B3402E" },
    { "id": 3, "name": "Explosivité & muscle-up", "start": 9, "end": 12, "color": "#C77F00" }
  ],

  "goals": [
    { "label": "Max reps", "value": "17 → 25+" },
    { "label": "1RM lesté", "value": "35 → 42-45 kg" },
    { "label": "Poids", "value": "83,8 → 80 kg" },
    { "label": "Objectif", "value": "Muscle-up strict" }
  ],

  "metrics": [
    { "key": "reps",    "label": "Max reps tractions",  "unit": "reps", "color": "#3E5F8A", "start": 17,   "target": 25, "dir": "up" },
    { "key": "pull1rm", "label": "1RM lesté tractions", "unit": "kg",   "color": "#B3402E", "start": 35,   "target": 43, "dir": "up" },
    { "key": "bw",      "label": "Poids de corps",      "unit": "kg",   "color": "#2E7D7B", "start": 83.8, "target": 80, "dir": "down" }
  ],

  "warmup": [
    "Rotations externes épaule à l'élastique 2x15",
    "Tractions scapulaires 2x10",
    "Dead hang décontracté 2x30s",
    "Montée en charge progressive avant le lesté",
    "Jour jambes : 5 min cardio léger + squats au poids de corps 2x10 + mobilité hanches/chevilles"
  ],

  "notes": [
    { "label": "Pourcentages", "text": "Sur les tractions et les dips, un % se calcule sur la charge TOTALE (poids de corps + lest), jamais sur le lest seul. 1RM total = poids de corps + lest max. Lest à mettre = (% × 1RM total) − poids de corps. Exemple à 83,8 kg avec un 1RM lesté de 40 kg : total = 123,8 ; 90 % = 111,4 → 27,5 kg de lest. C'est ce qui a été corrigé après la S3 : les charges de la phase 2 calculées sur le lest seul valaient 95-98 % du total, infaisables en 5x3." },
    { "label": "Mesures", "text": "Aucune donnée saisie depuis le 20 juillet, 4 cycles de suite. Toute la phase 2 est réglée sur des estimations. Les tests des S4, S8 et S12 ne servent à rien s'ils ne sont pas notés dans « 📈 Ma progression » — poids de corps du matin au minimum, chaque semaine." },
    { "label": "Fin de séance", "text": "Face pulls, gainage et étirements sautent depuis 4 semaines dès qu'ils sont en fin de séance jambes. Ils sont désormais placés EN PREMIER : ce sont eux qui protègent l'épaule sur un bloc à dominante tirage + dips + muscle-up. La seule ligne facultative de la séance jambes, ce sont les mollets." },
    { "label": "Charge totale", "text": "4 séances + 1 course/semaine, c'est dense. Si fatigue ou douleur épaule, allège en priorité le mercredi (volume), puis la séance jambes — jamais la force ni l'explosivité." },
    { "label": "GTG optionnel", "text": "(jeu/dim uniquement désormais, si zéro douleur ni courbatures) : 3-5 séries de 5 reps à ~50% du max, loin de l'échec." },
    { "label": "Nutrition", "text": "déficit léger ~2 300-2 400 kcal · 160-170 g de protéines/jour. Chaque kilo perdu vers 80 kg = plus de reps et un muscle-up plus accessible." }
  ],

  "weeks": [

    /* ------ Semaine 1 — Phase 1 ------ */
    [
      { "day": 0, "type": "force", "title": "Force — tractions lestées", "ex": [
        "Tractions lestées 4x4 @25-26 kg — repos 2:30",
        "Tirage assisté / poulie 3x6",
        "Renfo épaule (rotations externes) 3x12"
      ]},
      { "day": 1, "type": "jambes", "title": "Jambes & renfo — base", "ex": [
        "Leg press 4x8 modéré — repos 2 min",
        "Soulevé de terre roumain 3x10",
        "Fentes marchées 3x10/jambe",
        "Mollets debout 3x15",
        "Face pulls 3x15 (santé d'épaule)",
        "Gainage latéral 3x30s/côté"
      ]},
      { "day": 2, "type": "volume", "title": "Volume + calibration dips", "ex": [
        "Tractions PDC 5x13 — repos 90s",
        "Rowing horizontal 4x10",
        "Dips lestés — calibration : paliers +10/+15/+20 kg jusqu'à 3-5 reps propres RPE9, puis 2x8 léger",
        "Gainage 3x30s"
      ]},
      { "day": 4, "type": "explo", "title": "Explosivité", "ex": [
        "Tractions explosives sans lest 4x3 — repos 2 min",
        "False grip hang 3x15s",
        "Russian dips 3x6",
        "Tirage explosif +2,5 kg 3x3"
      ]},
      { "day": 5, "type": "course", "title": "Course — sortie facile", "ex": [
        "6-8 km allure facile (conversation possible)"
      ]}
    ],

    /* ------ Semaine 2 — Phase 1 (adaptée après bilan S1) ------ */
    [
      { "day": 0, "type": "force", "title": "Force — consolidation", "ex": [
        "Tractions lestées 4x4 @23-24 kg ↘ — repos 3 min (S1 : échecs dès la 4e rep à 25-26 kg — consolider avant de remonter)",
        "Tirage assisté / poulie 3x6 @70 kg ↗ (S1 : 60-70 kg passés)",
        "Renfo épaule 3x12"
      ]},
      { "day": 1, "type": "jambes", "title": "Jambes & renfo — progression", "ex": [
        "Leg press 4x8 @200-210 kg ↗ (S1 : 8@200 passés)",
        "Soulevé de terre roumain 3x10 @85 kg ↗ (S1 : 90 limite grippe — sangles ou prise mixte)",
        "Fentes marchées 3x10/jambe @25 kg ↗",
        "Leg extension unilatérale (AVL) 3x5/jambe (ajout S1)",
        "Mollets debout 3x15",
        "Face pulls 3x15",
        "Gainage latéral 3x45s/côté ↗ (S1 : 30s trop facile)",
        "Étirements + mobilité ischios 10 min (courbatures S1)"
      ]},
      { "day": 2, "type": "volume", "title": "Volume — pyramide", "ex": [
        "Tractions PDC pyramide 13-11-9-7-5 + série max — repos 90s-2 min (S1 : 5x13 irréaliste, ~41 reps réalisées — la pyramide garde le volume en finissant les séries)",
        "Rowing horizontal 4x10 @60-65 kg ↗ (S1 : trop facile à 50-60)",
        "Dips lestés 4x8 @25 kg (~55% du 1RM estimé ≈ 47 kg — calibration S1 : 4@45)",
        "Circuit abdos x2 : crunch poulie 6-8 @32 kg · obliques poulie 8-10 @40 kg · gainage 1 min"
      ]},
      { "day": 4, "type": "explo", "title": "Explosivité", "ex": [
        "Tractions explosives 4x3",
        "False grip hang 3x18s",
        "Russian dips 3x7"
      ]},
      { "day": 5, "type": "course", "title": "Course — fractionné", "ex": [
        "Échauffement 10 min + 6x400 m allure 5 km, récup 200 m trot"
      ]}
    ],

    /* ------ Semaine 3 — Phase 1 (adaptée après bilan S1) ------ */
    [
      { "day": 0, "type": "force", "title": "Force — petite montée", "ex": [
        "Tractions lestées 4x4 @23-24 kg ↗ — repos 3 min (S2 : 4x4 @22,5 kg au max des reps — on monte par petits pas, le test S4 donnera le vrai niveau)",
        "Tirage assisté / poulie 3x6 à RPE 8-9 (S2 : les kg varient trop d'une machine à l'autre — 40 dur ici, 70 là-bas — règle la charge pour que la 6e rep soit difficile)",
        "Renfo épaule 3x12 (rotations externes + élévations frontales unilat. @8 kg — S2)",
        "Développé couché haltères 3x8-10 @30 kg (adopté en S2 : 10/9/7)",
        "Écarté poulie 2x10 @26 kg (adopté en S2)",
        "Superset curl unilat. + extension triceps 2-3 séries @14 kg (adopté en S2)"
      ]},
      { "day": 1, "type": "jambes", "title": "Jambes & renfo — reprise", "ex": [
        "Leg press 4x8 @200-210 kg (S2 : séance jambes sautée — on refait le plan prévu en S2 avant de charger, pas de saut de charge après 2 semaines sans jambes)",
        "Soulevé de terre roumain 3x10 @85 kg (sangles si la grippe lâche)",
        "Fentes marchées 3x10/jambe @25 kg",
        "Leg extension unilatérale (AVL) 3x5/jambe",
        "Mollets debout 3x15",
        "Face pulls 3x15",
        "Gainage latéral 3x45s/côté",
        "Étirements + mobilité ischios 10 min"
      ]},
      { "day": 2, "type": "volume", "title": "Volume — pyramide, série max ↗", "ex": [
        "Tractions PDC pyramide 13-11-9-7-5 + série max cible 10-11 ↗ — repos 90s-2 min, 2 min pleines après le 11 et le 9 (S2 : 54 reps, max 9 avec de la réserve — pyramide inchangée tant que les séries de 11 et 9 finissent à 2-3 reps de l'échec, on allonge la série max d'abord)",
        "Rowing horizontal 4x10 @60 kg, passe à 65 si les 4 séries sont propres (S2 : échec à ~70 en 1re série, forme dégradée en fin — priorité à la propreté, pas à la charge)",
        "Dips lestés 4x8 @27,5-30 kg ↗ (~60% du 1RM estimé — S2 : 4x8 @25 valides avec 1-2 reps de réserve)",
        "Circuit abdos x3 : crunch poulie 8-10 @36 kg · obliques 8-10 @36-38 kg · gainage 3x30-40s (format adopté en S2)",
        "Curl biceps unilat. 4 séries 5-9 @14-16 kg (adopté en S2)"
      ]},
      { "day": 4, "type": "explo", "title": "Explosivité & muscle-up", "ex": [
        "Tractions explosives 4x4 ↗ (S2 : 4x3 facile — et premier muscle-up passé bras après bras !)",
        "Transitions muscle-up 3x2-3 en début de séance, frais (objectif : un MU de moins en moins décalé)",
        "False grip hang 3x20s — non négociable (S2 : sauté — c'est la prise du muscle-up strict)",
        "Russian dips 3x8 — non négociable (S2 : sauté — c'est la sortie du muscle-up)",
        "Développé couché 4x5 @75-80 kg (S2 : 5@80 facile — on cadre le push que tu ajoutes déjà ; pas de max assisté en semaine de charge)",
        "Renfo épaule : élévations frontales 3x10 @6 kg unilat. · tirage arrière 3x10 @8 kg · coiffe des rotateurs 2x10 @6 kg (adopté en S2)"
      ]},
      { "day": 5, "type": "course", "title": "Course — sortie facile", "ex": [
        "7-9 km allure facile"
      ]}
    ],

    /* ------ Semaine 4 — Phase 1 (deload complet + test, adaptée après bilan S3) ------ */
    [
      { "day": 0, "type": "deload", "title": "Force légère — pré-test", "ex": [
        "Tractions lestées 3x3 @22 kg ↘ loin de l'échec, repos 2 min (S3 : 4x4 @24 kg validés — on ne cherche rien avant vendredi, la semaine sert à arriver frais au test)",
        "Transitions muscle-up 2x2 en souplesse, sans forcer (entretien technique — S3 : 3 MU passés en séance)",
        "Renfo épaule léger 2x12 + coiffe des rotateurs 2x10 @6 kg",
        "Optionnel : développé couché haltères 2x10 @24-26 kg ↘ (S3 : 3x10 @30 kg propres — semaine de test, rien au max)"
      ]},
      { "day": 1, "type": "deload", "title": "Jambes — deload & mobilité", "ex": [
        "Face pulls 2x15 + gainage latéral 2x45s/côté — EN PREMIER (S1→S3 : toujours sautés quand ils sont en fin de séance, donc ils passent avant tout le reste)",
        "Leg press léger 3x10 @120-130 kg ↘ (~60% des charges habituelles)",
        "Fentes au poids de corps 2x10/jambe",
        "Mobilité hanches + chevilles 10 min",
        "Étirements ischios 10 min (S3 : sautés)"
      ]},
      { "day": 2, "type": "deload", "title": "Deload technique", "ex": [
        "Tractions PDC léger 4x8 ↘ — jamais à l'échec, la série max c'est vendredi",
        "Dips lestés léger 3x8 @15-20 kg ↘ (S3 : 4x8 @30 + 40 reps à vide — on range tout ça pour le test)",
        "False grip hang 2x20s (technique, pas de fatigue)",
        "Gainage 3x30s"
      ]},
      { "day": 4, "type": "test", "title": "Test fin de phase 1", "ex": [
        "ORDRE DE LA SÉANCE : échauffement complet (le long, celui de la S3 qui marche) → 1RM lesté → 15 min de repos → max reps → dips. Rien à l'échec avant le premier test.",
        "1) Test 1RM lesté tractions : 5 à vide · 3 @20 · 2 @28 · 1 @34 · 1 @38 · puis +2,5 kg jusqu'à l'échec — repos 3-4 min entre les tentatives (S3 : 4x4 @24 kg annoncés 'OK' → la vraie valeur est plutôt 40-43 kg que les 35 de départ)",
        "2) Test max reps tractions PDC : une seule série, strict, bras tendus en bas (S3 : 11 reps en série max APRÈS la pyramide complète — frais, la cible est 18-22)",
        "3) Test 1RM dips lestés : 3 @20 · 2 @35 · 1 @45 · puis +5 kg (S3 : 4x8 @30 avec réserve + 40 reps à vide → l'estimation à 47 kg est trop basse, et c'est elle qui règle les dips de toute la phase 2)",
        "4) Poids de corps du matin à jeun + les 3 résultats → à saisir dans « 📈 Ma progression ». 4e semaine sans une seule mesure : sans ces chiffres, la phase 2 se règle à l'aveugle.",
        "Si le 1RM lesté dépasse 43 kg, l'objectif des 12 semaines est déjà atteint → on relèvera la cible pour la phase 2."
      ]},
      { "day": 5, "type": "course", "title": "Course — sortie facile", "ex": [
        "6-8 km allure VRAIMENT facile, conversation possible (S3 : les sorties 'faciles' partent en allure soutenue — cette semaine c'est de la récup, tu testes vendredi)"
      ]}
    ],

    /* ------ Semaine 5 — Phase 2 (adaptée après bilan S3) ------ */
    [
      { "day": 0, "type": "force", "title": "Force max", "ex": [
        "Tractions lestées 5x3 ↗ à ~90% de la charge TOTALE — voir la note « Pourcentages » en bas du carnet. Si le test S4 donne 40 kg : 27,5-28 kg de lest. Repos 3 min (S3 : 4x4 @24 kg validés, repos parfois 3:30 — c'est normal sur du lourd)",
        "Tirage vertical lourd 4x5 à RPE 8-9, pas en kg (S2/S3 : les machines ne sont pas comparables d'une salle à l'autre)",
        "Renfo épaule 3x12 (rotations externes + internes) + coiffe 2x10 @6 kg",
        "Développé couché haltères 4x8 @32 kg ↗ (S3 : 3x10 @30 kg par haltère, propres — le bloc push reste au lundi puisque tu le fais de toute façon)",
        "Curl biceps 3x8-10 @14-16 kg"
      ]},
      { "day": 1, "type": "jambes", "title": "Jambes lourdes & renfo", "ex": [
        "Face pulls 3x15 + gainage latéral 3x45s/côté — EN PREMIER (S1→S3 : systématiquement sautés en fin de séance, 4 semaines de suite)",
        "Leg press 5x5 @230-240 kg ↗ — repos 2 min chrono (S3 : 4x8 @200-210 'OK avec un peu trop de pause')",
        "Soulevé de terre roumain 4x6 @95-100 kg ↗ AVEC SANGLES (S3 : 100 kg passés en dernière série, la grippe a lâché — les sangles enlèvent le facteur limitant)",
        "Fentes marchées 3x10/jambe @32 kg ↗ (S3 : 3x10-12 @32 kg avec 2 kettlebells de 16 — 25 kg était trop léger)",
        "Leg extension 3x10-12 (S3 : version classique, pas l'AVL — on garde le format que tu fais vraiment)",
        "Mollets 3x15 si le temps le permet — c'est la seule ligne facultative de la séance"
      ]},
      { "day": 2, "type": "volume", "title": "Volume — pyramide ↗", "ex": [
        "Tractions PDC pyramide 14-12-10-8-6 ↗ + série max cible 12-13 ↗ — repos 90s-2 min (S3 : 13-11-9-7-5 finie + 11 en série max, sans congestion — c'est l'échauffement long qui a fait la différence, garde-le)",
        "Rowing horizontal 4x10 @60 kg — la machine plafonne, ajoute 1s de pause en contraction au lieu de chercher des kg (S3 : pas de cran au-dessus de 60)",
        "Dips lestés 4x8 @32,5-35 kg ↗ — à recaler avec le 1RM dips mesuré en S4 (S3 : 4x8 @30 kg bonnes sensations + 40 reps à vide en série max)",
        "Circuit abdos x3 : crunch poulie 8-10 @36 kg · obliques 8-10 @36-38 kg · gainage 3x30-40s"
      ]},
      { "day": 4, "type": "explo", "title": "Muscle-up & explosivité", "ex": [
        "Transitions muscle-up 4-5x2-3 en tout début de séance, frais (S3 : très bonnes sensations, tu es monté à 4-5 séries de toi-même)",
        "Muscle-up : 3-5 tentatives, 1 seule par série, en cherchant les deux bras ensemble (S3 : 1 MU aux séries 2, 3 et 4, bras après bras — c'est le décalage qu'on gomme maintenant)",
        "Tractions explosives 4x4 — poitrine à la barre, la barre descend au niveau du sternum",
        "False grip hang 3x25s ↗ (S3 : 3x20s faits — c'est la prise du MU strict, ça continue)",
        "Straight bar dips 3x8 — REMPLACE les russian dips (S3 : impossibles sans barres parallèles ; le dip sur barre droite est en plus la vraie sortie du muscle-up)",
        "Renfo épaule : élévations frontales 3x10 @6 kg unilat. · tirage arrière 3x10 @8 kg · coiffe 2x10 @6 kg (S3 : sauté — c'est l'assurance épaule de tout le bloc explosif)"
      ]},
      { "day": 5, "type": "course", "title": "Course — sortie longue", "ex": [
        "10 km allure facile (base semi-marathon) — si tu ajoutes du tapis en fin de séance explo, c'est de la récup, pas un 5 km à 4:18 (S3)"
      ]}
    ],

    /* ------ Semaine 6 — Phase 2 (adaptée après bilan S3) ------ */
    [
      { "day": 0, "type": "force", "title": "Force max — montée", "ex": [
        "Tractions lestées 5x3 ↗ à ~92% de la charge totale (1RM lesté 40 → 30 kg de lest) — repos 3 min",
        "Puis 2x2 ↗ à ~95% (1RM lesté 40 → 32,5 kg)",
        "Tirage vertical lourd 4x5 à RPE 8-9",
        "Renfo épaule 3x12 + coiffe 2x10",
        "Développé couché haltères 4x8 @32-34 kg ↗"
      ]},
      { "day": 1, "type": "jambes", "title": "Jambes lourdes & renfo", "ex": [
        "Face pulls 3x15 + gainage latéral 3x45s/côté — EN PREMIER",
        "Leg press 5x5 @240-250 kg ↗ — repos 2 min chrono",
        "Soulevé de terre roumain 4x6 @100-105 kg ↗ avec sangles",
        "Fentes bulgares 3x8/jambe @2x16 kg (progression des fentes marchées de la phase 1)",
        "Leg extension 3x10-12",
        "Mollets 3x15 si le temps le permet"
      ]},
      { "day": 2, "type": "volume", "title": "Volume — pyramide", "ex": [
        "Tractions PDC pyramide 14-12-10-8-6 + série max cible 13-14 ↗ — même échauffement long qu'en S3/S5",
        "Rowing horizontal 4x10 @60 kg avec pause 1s en contraction",
        "Dips lestés 4x6 @35-37,5 kg ↗ (recalé sur le 1RM dips de S4)",
        "Circuit abdos x3"
      ]},
      { "day": 4, "type": "explo", "title": "Muscle-up & explosivité", "ex": [
        "Transitions muscle-up 4x3 en début de séance, frais",
        "Muscle-up : 4-6 tentatives, 1 par série — objectif du bloc : le premier MU avec les deux bras ensemble",
        "Tractions explosives 4x4 · tirage explosif +5 kg 3x3",
        "False grip hang 3x25s",
        "Straight bar dips 3x8-10 ↗",
        "Renfo épaule complet (frontales · tirage arrière · coiffe)"
      ]},
      { "day": 5, "type": "course", "title": "Course — fractionné", "ex": [
        "Échauffement + 5x800 m allure 10 km, récup 400 m"
      ]}
    ],

    /* ------ Semaine 7 — Phase 2 (adaptée après bilan S3) ------ */
    [
      { "day": 0, "type": "force", "title": "Force max — proche du max", "ex": [
        "Tractions lestées 3x1 ↗ à ~97-100% de la charge totale (1RM lesté 40 → 37,5-40 kg) — repos 4 min",
        "Back-off 2x3 à ~88% (1RM lesté 40 → 25 kg)",
        "Renfo épaule 3x12 + coiffe 2x10",
        "Développé couché haltères 4x8 @34 kg ↗"
      ]},
      { "day": 1, "type": "jambes", "title": "Jambes lourdes & renfo", "ex": [
        "Face pulls 3x15 + gainage latéral 3x45s/côté — EN PREMIER",
        "Leg press 5x5 @250-260 kg ↗ — repos 2 min chrono",
        "Soulevé de terre roumain 4x6 @105-110 kg ↗ avec sangles",
        "Fentes bulgares 3x8/jambe",
        "Leg extension 3x10-12",
        "Mollets 3x15 si le temps le permet"
      ]},
      { "day": 2, "type": "volume", "title": "Volume — pyramide", "ex": [
        "Tractions PDC pyramide 15-13-11-9-7 ↗ + série max cible 14-15 ↗",
        "Rowing horizontal 4x10 @60 kg avec pause 1s",
        "Dips lestés 4x6 @37,5-40 kg ↗",
        "Circuit abdos x3"
      ]},
      { "day": 4, "type": "explo", "title": "Muscle-up & explosivité", "ex": [
        "Transitions muscle-up 4x3 · puis MU complet 5-6 tentatives",
        "Tractions explosives 4x4",
        "False grip hang 3x30s ↗",
        "Straight bar dips 3x10 ou lestés 3x6 @10 kg ↗",
        "Renfo épaule complet"
      ]},
      { "day": 5, "type": "course", "title": "Course — sortie facile", "ex": [
        "8 km allure facile"
      ]}
    ],

    /* ------ Semaine 8 — Phase 2 (deload + test) ------ */
    [
      { "day": 0, "type": "deload", "title": "Deload force", "ex": [
        "Tractions lestées 3x3 ↘ à ~75% de la charge totale (1RM lesté 40 → 15-17,5 kg) — volume -40%, loin de l'échec",
        "Renfo épaule léger 2x12"
      ]},
      { "day": 1, "type": "deload", "title": "Jambes — deload & mobilité", "ex": [
        "Face pulls légers 2x15 + mobilité hanches/chevilles 10 min — EN PREMIER",
        "Leg press léger 3x10 ↘ (~60% des charges habituelles)",
        "Fentes au poids de corps 2x10/jambe",
        "Étirements ischios 10 min"
      ]},
      { "day": 2, "type": "deload", "title": "Deload volume", "ex": [
        "Tractions PDC léger 3x8 ↘ — pas de série max",
        "Dips lestés léger 3x6 @20 kg ↘",
        "False grip hang 2x20s"
      ]},
      { "day": 4, "type": "test", "title": "Test fin de phase 2", "ex": [
        "Même ordre qu'en S4 : échauffement complet → 1RM lesté → 15 min → max reps → dips",
        "Test 1RM lesté tractions (cible : +4 à +6 kg vs le test S4)",
        "Test max reps tractions PDC (cible : +3 à +5 reps vs le test S4)",
        "Test 1RM dips lestés → mise à jour du 1RM de référence",
        "Tentative muscle-up strict, à froid après repos complet — si c'est passé, la phase 3 vise les MU en série, plus le premier MU",
        "Les 4 résultats + poids de corps → « 📈 Ma progression »"
      ]},
      { "day": 5, "type": "course", "title": "Course — sortie facile", "ex": [
        "6 km très facile (semaine de récup)"
      ]}
    ],

    /* ------ Semaine 9 — Phase 3 ------ */
    [
      { "day": 0, "type": "force", "title": "Maintenance force", "ex": [
        "Tractions lestées 4x4 ↘ à ~88% de la charge totale (1RM lesté 45 → 30 kg) — repos 3 min, on entretient, on ne cherche plus",
        "Renfo épaule 3x12 + coiffe 2x10",
        "Développé couché haltères 4x8 (charge maintenue)"
      ]},
      { "day": 1, "type": "jambes", "title": "Jambes — maintenance & détente", "ex": [
        "Face pulls 3x15 + gainage 3x40s — EN PREMIER",
        "Squat jumps 3x5 (explosivité, transfert muscle-up et course)",
        "Leg press 3x6 (charge maintenue, pas de record)",
        "Soulevé de terre roumain 3x8 avec sangles",
        "Mollets debout 3x15 si le temps le permet"
      ]},
      { "day": 2, "type": "volume", "title": "Maintenance volume", "ex": [
        "Tractions PDC 4x10 · Rowing horizontal 4x10 @60 kg",
        "Dips lestés 4x8 à ~78% de la charge totale (1RM dips lesté 55 → 25-27,5 kg)",
        "Circuit abdos x3 · gainage"
      ]},
      { "day": 4, "type": "explo", "title": "Muscle-up strict — priorité", "ex": [
        "Muscle-up : 6-8 singles, 1 par série, repos 90s (S3 : déjà 3 MU en séance bras après bras — la phase 3 vise le strict puis la série)",
        "Transitions muscle-up 4x3 sans assistance",
        "Tractions explosives 5x3 — repos 2-3 min",
        "False grip hang 3x30s · Straight bar dips 3x10 (remplace les russian dips : pas de barres parallèles)",
        "Tirage explosif +5 kg 3x3",
        "Dips explosifs lestés +15-20 kg 3x5, vitesse au verrouillage"
      ]},
      { "day": 5, "type": "course", "title": "Course — sortie longue", "ex": [
        "12 km allure facile"
      ]}
    ],

    /* ------ Semaine 10 — Phase 3 ------ */
    [
      { "day": 0, "type": "force", "title": "Maintenance force", "ex": [
        "Tractions lestées 4x4 à ~88% de la charge totale (voir note « Pourcentages »)",
        "Renfo épaule 3x12 + coiffe 2x10",
        "Développé couché haltères 4x8 (charge maintenue)"
      ]},
      { "day": 1, "type": "jambes", "title": "Jambes — maintenance & détente", "ex": [
        "Face pulls 3x15 + gainage 3x40s — EN PREMIER",
        "Squat jumps 3x5 (explosivité, transfert muscle-up et course)",
        "Leg press 3x6 (charge maintenue, pas de record)",
        "Soulevé de terre roumain 3x8 avec sangles",
        "Mollets debout 3x15 si le temps le permet"
      ]},
      { "day": 2, "type": "volume", "title": "Maintenance volume", "ex": [
        "Tractions PDC 4x10 · Rowing horizontal 4x10",
        "Dips lestés 4x8 à ~78% de la charge totale",
        "Circuit abdos x3"
      ]},
      { "day": 4, "type": "explo", "title": "Muscle-up — clusters", "ex": [
        "Clusters muscle-up : 4 blocs de 3 singles espacés de 15s, 3 min entre les blocs ↗ (première recherche d'enchaînement)",
        "Tractions explosives 5x3",
        "Tirage explosif +7,5 kg 3x3 ↗",
        "False grip hang 3x30s · Straight bar dips 3x10",
        "Dips explosifs lestés 3x5"
      ]},
      { "day": 5, "type": "course", "title": "Course — fractionné", "ex": [
        "Échauffement + 4x1000 m allure semi, récup 2 min"
      ]}
    ],

    /* ------ Semaine 11 — Phase 3 ------ */
    [
      { "day": 0, "type": "force", "title": "Maintenance force", "ex": [
        "Tractions lestées 4x4 à ~88% de la charge totale (voir note « Pourcentages »)",
        "Renfo épaule 3x12 + coiffe 2x10",
        "Développé couché haltères 4x8 (charge maintenue)"
      ]},
      { "day": 1, "type": "jambes", "title": "Jambes — maintenance & détente", "ex": [
        "Face pulls 3x15 + gainage 3x40s — EN PREMIER",
        "Squat jumps 3x5 (explosivité, transfert muscle-up et course)",
        "Leg press 3x6 (charge maintenue, pas de record)",
        "Soulevé de terre roumain 3x8 avec sangles",
        "Mollets debout 3x15 si le temps le permet"
      ]},
      { "day": 2, "type": "volume", "title": "Maintenance volume", "ex": [
        "Tractions PDC 4x10 · Rowing horizontal 4x10",
        "Dips lestés 4x8 à ~78% de la charge totale",
        "Circuit abdos x3"
      ]},
      { "day": 4, "type": "explo", "title": "Muscle-up — affûtage", "ex": [
        "Muscle-up : chercher 2 reps d'affilée, 4-5 tentatives ↗",
        "Muscle-up négatif complet 4x3 (contrôle de la transition en descente)",
        "False grip hang 3x30s",
        "Dips explosifs lestés 3x5",
        "Volume léger le reste de la semaine — le test final est dans 8 jours"
      ]},
      { "day": 5, "type": "course", "title": "Course — sortie longue", "ex": [
        "13-14 km allure facile"
      ]}
    ],

    /* ------ Semaine 12 — Phase 3 (test final) ------ */
    [
      { "day": 0, "type": "deload", "title": "Maintenance force légère", "ex": [
        "Tractions lestées léger, loin de l'échec ↘"
      ]},
      { "day": 1, "type": "deload", "title": "Jambes — très léger (semaine de test)", "ex": [
        "Leg press léger 2x8 ↘",
        "Mobilité complète 15 min",
        "Face pulls légers 2x15"
      ]},
      { "day": 2, "type": "deload", "title": "Maintenance volume légère", "ex": [
        "Tractions PDC léger · mobilité ↘"
      ]},
      { "day": 4, "type": "test", "title": "TEST FINAL", "ex": [
        "Même ordre qu'en S4 et S8 : échauffement complet → 1RM lesté → 15 min → max reps → dips → muscle-up",
        "Test 1RM lesté tractions (objectif du cycle : 43 kg, départ 35)",
        "Test max reps tractions PDC (objectif du cycle : 25, départ 17)",
        "Test 1RM dips lestés",
        "Muscle-up strict : le maximum de reps enchaînées",
        "Poids de corps (objectif : 80 kg, départ 83,8) + les 4 résultats → « 📈 Ma progression »"
      ]},
      { "day": 5, "type": "course", "title": "Course — au choix", "ex": [
        "Sortie plaisir, distance libre"
      ]}
    ]
  ]
};
