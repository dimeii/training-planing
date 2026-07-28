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
      { "day": 1, "type": "jambes", "title": "Jambes & renfo — charge", "ex": [
        "Leg press 4x6 @210-220 kg ↗ — repos 2:30",
        "Soulevé de terre roumain 3x8 @90 kg ↗ (sangles si la grippe lâche)",
        "Fentes bulgares 3x8/jambe",
        "Leg extension unilatérale (AVL) 3x5/jambe",
        "Mollets debout 3x15",
        "Face pulls 3x15",
        "Gainage latéral 3x45s/côté",
        "Étirements + mobilité ischios 10 min"
      ]},
      { "day": 2, "type": "volume", "title": "Volume — pyramide +", "ex": [
        "Tractions PDC pyramide 14-12-10-8-6 ↗ — repos 90s-2 min",
        "Rowing horizontal 4x10 @65 kg ↗",
        "Dips lestés 4x8 @27,5-30 kg ↗ (~60% du 1RM estimé)",
        "Circuit abdos x2 (+2,5 kg sur les poulies si S2 facile ↗)"
      ]},
      { "day": 4, "type": "explo", "title": "Explosivité", "ex": [
        "Tractions explosives 4x4",
        "False grip hang 3x20s",
        "Russian dips 3x8"
      ]},
      { "day": 5, "type": "course", "title": "Course — sortie facile", "ex": [
        "7-9 km allure facile"
      ]}
    ],

    /* ------ Semaine 4 — Phase 1 (deload complet + test, adaptée après bilan S1) ------ */
    [
      { "day": 0, "type": "deload", "title": "Force légère — pré-test", "ex": [
        "Tractions lestées 3x3 @20-22 kg ↘ loin de l'échec (objectif : arriver frais au test de vendredi)",
        "Renfo épaule léger 2x12",
        "Optionnel : développé couché haltères léger 2x10 @20-24 kg ↘ + curl/triceps léger (semaine de test — rien au max)"
      ]},
      { "day": 1, "type": "deload", "title": "Jambes — deload & mobilité", "ex": [
        "Leg press léger 3x10 @120-130 kg ↘ (~60% des charges habituelles)",
        "Fentes au poids de corps 2x10/jambe",
        "Mobilité hanches + chevilles 10 min",
        "Étirements ischios 10 min",
        "Face pulls légers 2x15"
      ]},
      { "day": 2, "type": "deload", "title": "Deload technique", "ex": [
        "Tractions PDC léger 4x8 ↘",
        "Dips lestés léger 3x8 @15-20 kg ↘",
        "Gainage 3x30s"
      ]},
      { "day": 4, "type": "test", "title": "Test fin de phase 1", "ex": [
        "Test max reps tractions PDC (départ 17 — noter le résultat dans « Ma progression »)",
        "Test 1RM lesté tractions : montée progressive 20 → 25 → 30 kg puis +2,5 kg selon sensations (départ estimé 35)"
      ]},
      { "day": 5, "type": "course", "title": "Course — sortie facile", "ex": [
        "6-8 km allure facile"
      ]}
    ],

    /* ------ Semaine 5 — Phase 2 ------ */
    [
      { "day": 0, "type": "force", "title": "Force max", "ex": [
        "Tractions lestées 5x3 ↗ @~85% du 1RM testé en S4 (plan initial : 30 kg — recaler selon le test) — repos 3 min",
        "Tirage vertical lourd 4x5",
        "Renfo épaule 3x12"
      ]},
      { "day": 1, "type": "jambes", "title": "Jambes lourdes & renfo", "ex": [
        "Leg press 5x5 lourd — repos 3 min",
        "Soulevé de terre roumain 4x6",
        "Fentes bulgares 3x8/jambe",
        "Mollets debout 4x12",
        "Face pulls 3x15",
        "Gainage 3x40s"
      ]},
      { "day": 2, "type": "volume", "title": "Maintenance volume", "ex": [
        "Tractions PDC 5x8 — repos 2 min",
        "Rowing 3x10 @65 kg",
        "Dips lestés 4x6 @30-32,5 kg ↗ (~65-70% du 1RM estimé ≈ 47 kg)",
        "Circuit abdos x2"
      ]},
      { "day": 4, "type": "explo", "title": "Maintenance explosivité", "ex": [
        "Tractions explosives PDC 4x3",
        "False grip hang 3x20s",
        "Russian dips 3x8",
        "Tirage explosif +5 kg 3x3"
      ]},
      { "day": 5, "type": "course", "title": "Course — sortie longue", "ex": [
        "10 km allure facile (base semi-marathon)"
      ]}
    ],

    /* ------ Semaine 6 — Phase 2 ------ */
    [
      { "day": 0, "type": "force", "title": "Force max — montée", "ex": [
        "Tractions lestées 5x3 @32 kg ↗",
        "Puis 4x2 @34 kg ↗",
        "Renfo épaule 3x12"
      ]},
      { "day": 1, "type": "jambes", "title": "Jambes lourdes & renfo", "ex": [
        "Leg press 5x5 lourd — repos 3 min",
        "Soulevé de terre roumain 4x6",
        "Fentes bulgares 3x8/jambe",
        "Mollets debout 4x12",
        "Face pulls 3x15",
        "Gainage 3x40s"
      ]},
      { "day": 2, "type": "volume", "title": "Maintenance volume", "ex": [
        "Tractions PDC 5x8",
        "Rowing 3x10",
        "Dips lestés 4x6 @ ~70%"
      ]},
      { "day": 4, "type": "explo", "title": "Maintenance explosivité", "ex": [
        "Tractions explosives 4x3",
        "False grip 3x20s · Russian dips 3x8",
        "Tirage explosif +5 kg 3x3"
      ]},
      { "day": 5, "type": "course", "title": "Course — fractionné", "ex": [
        "Échauffement + 5x800 m allure 10 km, récup 400 m"
      ]}
    ],

    /* ------ Semaine 7 — Phase 2 ------ */
    [
      { "day": 0, "type": "force", "title": "Force max — proche du max", "ex": [
        "Tractions lestées 3x1 @36-38 kg ↗",
        "Renfo épaule 3x12"
      ]},
      { "day": 1, "type": "jambes", "title": "Jambes lourdes & renfo", "ex": [
        "Leg press 5x5 lourd — repos 3 min",
        "Soulevé de terre roumain 4x6",
        "Fentes bulgares 3x8/jambe",
        "Mollets debout 4x12",
        "Face pulls 3x15",
        "Gainage 3x40s"
      ]},
      { "day": 2, "type": "volume", "title": "Maintenance volume", "ex": [
        "Tractions PDC 5x8",
        "Rowing 3x10",
        "Dips lestés 4x6 @ ~70-75%"
      ]},
      { "day": 4, "type": "explo", "title": "Maintenance explosivité", "ex": [
        "Tractions explosives 4x3",
        "False grip 3x20s · Russian dips 3x8"
      ]},
      { "day": 5, "type": "course", "title": "Course — sortie facile", "ex": [
        "8 km allure facile"
      ]}
    ],

    /* ------ Semaine 8 — Phase 2 (deload + test) ------ */
    [
      { "day": 0, "type": "deload", "title": "Deload force", "ex": [
        "Tractions lestées 3x3 @28 kg ↘ (volume -40%, charge -20%)"
      ]},
      { "day": 1, "type": "deload", "title": "Jambes — deload & mobilité", "ex": [
        "Leg press léger 3x10 ↘ (~60% des charges habituelles)",
        "Fentes au poids de corps 2x10/jambe",
        "Mobilité hanches + chevilles 10 min",
        "Face pulls légers 2x15"
      ]},
      { "day": 2, "type": "deload", "title": "Deload volume", "ex": [
        "Tractions PDC léger 3x8 ↘",
        "Dips lestés léger 3x6 @ ~55% ↘"
      ]},
      { "day": 4, "type": "test", "title": "Test fin de phase 2", "ex": [
        "Test 1RM lesté tractions (viser 38-42 kg)",
        "Test max reps tractions PDC",
        "Test 1RM dips lestés → mise à jour du 1RM estimé"
      ]},
      { "day": 5, "type": "course", "title": "Course — sortie facile", "ex": [
        "6 km très facile (semaine de récup)"
      ]}
    ],

    /* ------ Semaine 9 — Phase 3 ------ */
    [
      { "day": 0, "type": "force", "title": "Maintenance force", "ex": [
        "Tractions lestées 4x4 @32-34 kg — repos 3 min"
      ]},
      { "day": 1, "type": "jambes", "title": "Jambes — maintenance & détente", "ex": [
        "Leg press 3x6 (charge maintenue, pas de record)",
        "Squat jumps 3x5 (explosivité, transfert muscle-up et course)",
        "Soulevé de terre roumain 3x8",
        "Mollets debout 3x15",
        "Face pulls 3x15",
        "Gainage 3x40s"
      ]},
      { "day": 2, "type": "volume", "title": "Maintenance volume", "ex": [
        "Tractions PDC 4x10 · Rowing",
        "Dips lestés 4x8 @ ~60% du 1RM dips",
        "Gainage"
      ]},
      { "day": 4, "type": "explo", "title": "Explosivité — priorité", "ex": [
        "Tractions explosives 5x3 — repos 2-3 min",
        "False grip 3x20s · Russian dips 3x8",
        "Tractions hautes + transition assistée 4x3",
        "Tirage explosif +5 kg 3x3",
        "Dips explosifs lestés +10-15 kg 3x5, vitesse au verrouillage"
      ]},
      { "day": 5, "type": "course", "title": "Course — sortie longue", "ex": [
        "12 km allure facile"
      ]}
    ],

    /* ------ Semaine 10 — Phase 3 ------ */
    [
      { "day": 0, "type": "force", "title": "Maintenance force", "ex": [
        "Tractions lestées 4x4 @32-34 kg"
      ]},
      { "day": 1, "type": "jambes", "title": "Jambes — maintenance & détente", "ex": [
        "Leg press 3x6 (charge maintenue, pas de record)",
        "Squat jumps 3x5 (explosivité, transfert muscle-up et course)",
        "Soulevé de terre roumain 3x8",
        "Mollets debout 3x15",
        "Face pulls 3x15",
        "Gainage 3x40s"
      ]},
      { "day": 2, "type": "volume", "title": "Maintenance volume", "ex": [
        "Tractions PDC 4x10 · Rowing",
        "Dips lestés 4x8 @ ~60%"
      ]},
      { "day": 4, "type": "explo", "title": "Explosivité — clusters", "ex": [
        "Tractions explosives 5x3",
        "Tirage explosif +7,5 kg 3x3 ↗",
        "Cluster muscle-up : 5 reps / 15s repos x4, répété 4 fois",
        "Dips explosifs lestés 3x5"
      ]},
      { "day": 5, "type": "course", "title": "Course — fractionné", "ex": [
        "Échauffement + 4x1000 m allure semi, récup 2 min"
      ]}
    ],

    /* ------ Semaine 11 — Phase 3 ------ */
    [
      { "day": 0, "type": "force", "title": "Maintenance force", "ex": [
        "Tractions lestées 4x4 @32-34 kg"
      ]},
      { "day": 1, "type": "jambes", "title": "Jambes — maintenance & détente", "ex": [
        "Leg press 3x6 (charge maintenue, pas de record)",
        "Squat jumps 3x5 (explosivité, transfert muscle-up et course)",
        "Soulevé de terre roumain 3x8",
        "Mollets debout 3x15",
        "Face pulls 3x15",
        "Gainage 3x40s"
      ]},
      { "day": 2, "type": "volume", "title": "Maintenance volume", "ex": [
        "Tractions PDC 4x10 · Rowing",
        "Dips lestés 4x8 @ ~60%"
      ]},
      { "day": 4, "type": "explo", "title": "Muscle-up — transitions", "ex": [
        "Transitions muscle-up avec moins d'assistance",
        "Muscle-up négatif complet 4x3",
        "Dips explosifs lestés 3x5"
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
        "Test max reps tractions",
        "Test 1RM lesté tractions",
        "Test 1RM dips lestés",
        "Tentative muscle-up strict"
      ]},
      { "day": 5, "type": "course", "title": "Course — au choix", "ex": [
        "Sortie plaisir, distance libre"
      ]}
    ]
  ]
};
