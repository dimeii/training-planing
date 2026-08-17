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
    { "label": "Pourcentages", "text": "Sur les tractions et les dips, un % se calcule sur la charge TOTALE (poids de corps + lest), jamais sur le lest seul. 1RM total = poids de corps + lest max. Lest à mettre = (% × 1RM total) − poids de corps. Exemple avec les chiffres réels du test S4 : 83 kg de corps + 37,5 kg de lest = 120,5 kg de total ; 90 % = 108,5 kg → 25,5 kg de lest à la ceinture. C'est ce qui a été corrigé après la S3 : les charges de la phase 2 calculées sur le lest seul valaient 95-98 % du total, infaisables en 5x3." },
    { "label": "Barème phase 2 (test S4)", "text": "TRACTIONS — référence mesurée le 12 août : 1RM lesté 37,5 kg (40 kg raté de 3-4 cm en 1re tentative, 38,5 kg raté ensuite par fatigue) · poids de corps 83 kg → 1RM TOTAL 120,5 kg. Lest correspondant : 80 % → 13,5 kg · 85 % → 19,5 kg · 88 % → 23 kg · 90 % → 25 kg · 92 % → 27,5 kg · 95 % → 31,5 kg · 97 % → 34 kg · 100 % → 37,5 kg. DIPS — mesuré le 14 août : 55 kg validés, 60 kg ratés de peu → 1RM lesté ≈ 57,5 kg → 1RM TOTAL 140,5 kg. Lest correspondant : 78 % → 27,5 kg · 84 % → 35 kg · 87 % → 40 kg · 90 % → 43,5 kg · 95 % → 50 kg. Tout le bloc S5-S8 est réglé là-dessus. Si le poids de corps bouge de plus de 2 kg, ces chiffres se recalculent (le lest baisse quand le corps monte, et inversement)." },
    { "label": "Mesures", "text": "Les trois chiffres du test S4 existent maintenant, mais AUCUN n'est saisi dans « 📈 Ma progression » : 1RM lesté 37,5 kg (12 août) · max reps 20 (14 août) · 1RM dips ≈ 57,5 kg (14 août). Deux minutes de saisie, et les deux graphiques vides du carnet ont enfin leur premier point — sans ça la comparaison S4 → S8 → S12 est impossible et le cycle se pilote de mémoire. Le poids de corps, lui, est bien suivi (82,8 le 10 août, 83 le 13) : continue, même jour, même heure, à jeun." },
    { "label": "Fin de séance", "text": "Gainage et étirements sautent dès qu'ils sont en fin de séance jambes : ils sont placés EN PREMIER. La seule ligne facultative de la séance jambes, ce sont les mollets." },
    { "label": "Face pulls", "text": "Déplacés du mardi au lundi (S4) : ils partent en ÉCHAUFFEMENT du jour force, avant les tractions lestées, + 1 série le vendredi. Deux raisons : avant du tirage lourd ils préparent l'épaule au lieu de la fatiguer, et le mardi n'empiète plus sur le volume du mercredi. Charge LÉGÈRE, coudes hauts, aucun haussement d'épaules, la 15e rep doit rester facile — c'est de la prévention, pas un tirage. Si un face pull fatigue, il est trop lourd." },
    { "label": "Tests", "text": "Les tests ne se font plus le même jour. Le 1RM lesté part le MERCREDI (c'est lui qui règle toutes les charges du bloc suivant, il passe donc le plus frais), le max reps PDC + dips + muscle-up le VENDREDI. Un max reps fait 15 min après des singles lourds coûte 2 à 4 reps : l'objectif des 25 reps deviendrait invisible sur le graphique. Même découpage en S4, S8 et S12 pour que les trois tests soient comparables. VÉRIFIÉ EN S4 : le découpage a marché (20 reps mesurées, 55 kg aux dips), mais les transitions MU reportées en fin de séance ont été sautées — comme tout ce qui est placé en fin de séance depuis le début du carnet (voir la note « Fin de séance »). En S8 le muscle-up repasse donc en OUVERTURE, limité à 3 singles à froid pour ne coûter qu'une rep au max reps qui suit." },
    { "label": "Muscle-up", "text": "Diagnostic S3 : le MU passe bras après bras parce que le gainage lâche au moment de la bascule. Les jambes partent, le corps n'est plus un bloc, l'élan du tirage se dissipe et il ne reste plus assez de hauteur pour passer les deux épaules ensemble — d'où l'impossibilité d'en enchaîner un deuxième. Le facteur limitant n'est PAS la force de tirage (4x4 @24 kg, largement au-dessus du seuil). Trois leviers : négatifs de MU (impossible de tricher bras après bras), tractions explosives jambes strictement immobiles, gainage hollow. Et une règle : tentatives de MU uniquement à froid, en singles, 3-6 max — fatigué, tu ancres le mauvais pattern." },
    { "label": "Course", "text": "Trois semaines de suite, la sortie « facile » du dimanche est partie en intensité (S3 : 6 km « assez moyenne forte » · S4 : 5x600 m à 3:30-3:45 alors que la consigne disait VRAIMENT facile, ressenti « Dur »). On arrête de faire semblant : tu as le droit d'aimer courir vite, mais pas la veille du jour force. Règle de la phase 2 — l'intensité (fractionné, tapis rapide, côtes) se fait le SAMEDI, jamais le dimanche ; le dimanche est soit du vrai facile (allure où tu peux parler, ~5:45-6:15/km), soit rien. Si les jambes sont cuites du samedi, la sortie du dimanche saute — c'est le lundi qui compte." },
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
        "Face pulls 3x15 LÉGERS — en échauffement, avant les tractions (déplacés du mardi : avant du tirage ils préparent l'épaule, voir la note « Face pulls »)",
        "Tractions lestées 3x3 @22 kg ↘ loin de l'échec, repos 2 min (S3 : 4x4 @24 kg validés — on ne cherche rien, la semaine sert à arriver frais au test de mercredi)",
        "Muscle-up négatif 3x1 : départ en appui haut, descente LENTE à travers la transition, les deux bras ensemble (nouveau — c'est le seul exercice où le passage bras après bras est impossible)",
        "Renfo épaule léger 2x12 + coiffe des rotateurs 2x10 @6 kg",
        "Optionnel : développé couché haltères 2x10 @24-26 kg ↘ (S3 : 3x10 @30 kg propres — semaine de test, rien au max)"
      ]},
      { "day": 1, "type": "deload", "title": "Jambes — deload & mobilité", "ex": [
        "Gainage latéral 2x45s/côté + hollow hold 3x20s — EN PREMIER (S1→S3 : toujours sautés en fin de séance ; le hollow est le gainage du muscle-up)",
        "Leg press léger 3x10 @120-130 kg ↘ (~60% des charges habituelles)",
        "Fentes au poids de corps 2x10/jambe",
        "Mobilité hanches + chevilles 10 min",
        "Étirements ischios 10 min (S3 : sautés)",
        "Face pulls retirés de cette séance — ils sont passés au lundi (voir note « Face pulls »)"
      ]},
      { "day": 2, "type": "test", "title": "Test 1/2 — 1RM lesté", "ex": [
        "ORDRE : échauffement complet (le long, celui de la S3 qui marche) → 1RM lesté, et RIEN d'autre à l'échec. Le max reps et les dips, c'est vendredi (voir la note « Tests »).",
        "Test 1RM lesté tractions : 5 à vide · 3 @20 · 2 @28 · 1 @34 · 1 @38 · puis +2,5 kg jusqu'à l'échec — repos 3-4 min entre les tentatives (S3 : 4x4 @24 kg annoncés 'OK' → la vraie valeur est plutôt 40-43 kg que les 35 de départ)",
        "C'est LA mesure du cycle : elle règle toutes les charges de la phase 2. D'où sa place le mercredi, le plus frais possible, et à l'abri d'un vendredi décalé.",
        "Résultat + poids de corps du matin à jeun → à saisir dans « 📈 Ma progression » le soir même.",
        "Si le 1RM lesté dépasse 43 kg, l'objectif des 12 semaines est déjà atteint → on relèvera la cible pour la phase 2.",
        "Fin de séance : gainage 3x30s, rien de plus."
      ]},
      { "day": 4, "type": "test", "title": "Test 2/2 — max reps, dips & muscle-up", "ex": [
        "ORDRE (revu le 13/08) : échauffement complet → max reps → dips → transitions muscle-up en fin de séance. Les tentatives de MU ne sont plus en ouverture : 3-5 singles de MU coûtent 2-3 reps sur le max reps qui suit, et le max reps est la métrique jamais mesurée du carnet. Le repère MU du bloc existe déjà (S3 : 3 MU en séance ; S4 lundi : 3 puis 2 négatifs), le test MU à froid revient en S8.",
        "1) Test max reps tractions PDC : une seule série, strict, bras tendus en bas, jambes immobiles (S3 : 11 reps APRÈS la pyramide complète — frais et seul, la cible est 18-22). C'est la seule des 3 métriques du carnet encore sans aucune mesure depuis le 20 juillet.",
        "2) Test 1RM dips lestés : 3 @20 · 2 @35 · 1 @45 · puis +2,5 kg par tentative (S3 : 4x8 @30 avec réserve + 40 reps à vide → l'estimation à 47 kg est trop basse, et c'est elle qui règle les dips de toute la phase 2)",
        "3) Transitions muscle-up 3-4x2-3 en FIN de séance — travail technique, chercher les deux bras ensemble sur la bascule. AUCUNE tentative de MU complet ici : à la fatigue, le passage redevient décalé et c'est ce pattern-là que tu ancres (voir la note « Muscle-up »). Tu t'arrêtes dès que la transition part de travers.",
        "LEÇON DU TEST DE MERCREDI, à appliquer ici : les sauts étaient trop gros en haut (35 → 40, raté de 3-4 cm, puis 38,5 raté par fatigue). Près du max, on monte de 2,5 kg maximum, et on s'arrête au 2e échec — le 3e essai ne mesure plus que la fatigue.",
        "4) Les 3 résultats → « 📈 Ma progression », avec celui de mercredi (1RM lesté 37,5 kg, poids 83 kg). Sans ces chiffres, la phase 2 se règle à l'aveugle."
      ]},
      { "day": 5, "type": "course", "title": "Course — sortie facile", "ex": [
        "6-8 km allure VRAIMENT facile, conversation possible (S3 : les sorties 'faciles' partent en allure soutenue — cette semaine c'est de la récup, tu testes vendredi)"
      ]}
    ],

    /* ------ Semaine 5 — Phase 2 (adaptée après bilan S3) ------ */
    [
      { "day": 0, "type": "force", "title": "Force max", "ex": [
        "Face pulls 3x15 LÉGERS — en échauffement, avant les tractions (S4 : 13,5 puis 16 kg — si la 15e rep tire ou fait hausser l'épaule, redescends, c'est de la prévention)",
        "Tractions lestées 5x3 @25 kg ↗ — repos 3 min, 4 si besoin (= 90% du total mesuré au test S4 : 37,5 kg de lest, 83 kg de corps → voir la note « Barème phase 2 ». S3 : 4x4 @24 kg validés). Première séance après le fractionné de dimanche : si la 3e rep de la série 2 est déjà dure, tu passes à 4 séries plutôt que de finir à l'échec — le bloc dure 3 semaines, rien ne se joue aujourd'hui.",
        "Tirage vertical lourd 4x5 à RPE 8-9, pas en kg (S2/S3 : les machines ne sont pas comparables d'une salle à l'autre)",
        "Renfo épaule 3x12 (rotations externes + internes) + coiffe 2x10 @6 kg",
        "Développé couché haltères 4x8 @32 kg ↗ (S3 : 3x10 @30 kg par haltère, propres — le bloc push reste au lundi puisque tu le fais de toute façon)",
        "Curl biceps 3x8-10 @14-16 kg"
      ]},
      { "day": 1, "type": "jambes", "title": "Jambes lourdes & renfo", "ex": [
        "Gainage latéral 3x45s/côté + hollow hold 3x30s — EN PREMIER (S1→S3 : systématiquement sautés en fin de séance ; le hollow est le gainage qui manque au muscle-up)",
        "Face pulls retirés de cette séance — passés au lundi en échauffement (S4 : le mardi fatiguait le mercredi)",
        "Leg press 5x5 @230-240 kg ↗ — repos 2 min chrono (S3 : 4x8 @200-210 'OK avec un peu trop de pause')",
        "Soulevé de terre roumain 4x6 @95-100 kg ↗ AVEC SANGLES (S3 : 100 kg passés en dernière série, la grippe a lâché — les sangles enlèvent le facteur limitant)",
        "Fentes marchées 3x10/jambe @32 kg ↗ (S3 : 3x10-12 @32 kg avec 2 kettlebells de 16 — 25 kg était trop léger)",
        "Leg extension 3x10-12 (S3 : version classique, pas l'AVL — on garde le format que tu fais vraiment)",
        "Mollets 3x15 si le temps le permet — c'est la seule ligne facultative de la séance"
      ]},
      { "day": 2, "type": "volume", "title": "Volume — pyramide ↗", "ex": [
        "Tractions PDC pyramide 14-12-10-8-6 ↗ + série max cible 12-13 ↗ — repos 90s-2 min (S4 : 20 reps au test, donc la 1re série de 14 = 70% de ton max, c'est calibré ; garde l'échauffement long de la S3, c'est lui qui a supprimé la congestion)",
        "Rowing horizontal 4x10 @60 kg — la machine plafonne, ajoute 1s de pause en contraction au lieu de chercher des kg (S3 : pas de cran au-dessus de 60)",
        "Dips lestés 4x8 @35 kg ↗ (84% du total — test S4 : 55 kg validés, 60 ratés de peu → 1RM ≈ 57,5 kg, bien au-dessus des 47 estimés). Si les 8 sortent à 3 reps de la réserve, monte à 37,5 dès la 3e série.",
        "Circuit abdos x3 : crunch poulie 8-10 @36 kg · obliques 8-10 @36-38 kg · gainage 3x30-40s"
      ]},
      { "day": 4, "type": "explo", "title": "Muscle-up & explosivité", "ex": [
        "Transitions muscle-up 4-5x2-3 en TOUT DÉBUT de séance, frais (S3 : très bonnes sensations, tu es monté à 4-5 séries de toi-même — mais en S4 elles étaient placées en fin de séance test et elles ont sauté ; en ouverture, jamais ailleurs)",
        "Muscle-up : 3-5 tentatives, 1 seule par série, en cherchant les deux bras ensemble — on s'arrête à 5, fatigué le passage redevient décalé (S3 : 1 MU aux séries 2, 3 et 4, bras après bras)",
        "Muscle-up négatif 4x2 ↗ — descente LENTE (3-4s) à travers la transition, les deux bras ensemble. LIGNE PRIORITAIRE du bloc (S4 : 3 reps puis 2 en semaine de deload, dont une propre — tu as déjà dépassé les 3x1 prévus, on passe à 2 reps par série)",
        "Tractions explosives 4x4 — sternum à la barre, JAMBES STRICTEMENT IMMOBILES : serre un petit objet entre les genoux, si ça balance la série ne compte pas (S3 : le gainage lâche à la bascule, c'est ce qui bloque le 2e MU)",
        "False grip hang 3x25s ↗ (S3 : 3x20s faits — c'est la prise du MU strict, ça continue)",
        "Straight bar dips 3x8 — REMPLACE les russian dips (S3 : impossibles sans barres parallèles ; le dip sur barre droite est en plus la vraie sortie du muscle-up)",
        "Renfo épaule : élévations frontales 3x10 @6 kg unilat. · tirage arrière 3x10 @8 kg · coiffe 2x10 @6 kg + face pulls 1x15 (S3 : sauté — c'est l'assurance épaule de tout le bloc explosif)"
      ]},
      { "day": 5, "type": "course", "title": "Course — sortie longue", "ex": [
        "10 km allure facile (base semi-marathon), 5:45-6:15/km, conversation possible",
        "Si tu veux de l'intensité cette semaine, c'est ICI le samedi, pas le dimanche : 10 min d'échauffement + 5x600 m + retour au calme, et on oublie les 10 km. Une seule des deux (voir la note « Course » — 3 semaines de suite que la sortie facile du dimanche part en fractionné, la veille du jour force)."
      ]}
    ],

    /* ------ Semaine 6 — Phase 2 (adaptée après bilan S3) ------ */
    [
      { "day": 0, "type": "force", "title": "Force max — montée", "ex": [
        "Face pulls 3x15 LÉGERS — en échauffement, avant les tractions",
        "Tractions lestées 5x3 @27,5 kg ↗ (92% du total) — repos 3 min",
        "Puis 2x2 @31,5 kg ↗ (95% du total — 30 kg + un petit disque, ou 32,5 si tu n'as pas mieux)",
        "Tirage vertical lourd 4x5 à RPE 8-9",
        "Renfo épaule 3x12 + coiffe 2x10",
        "Développé couché haltères 4x8 @32-34 kg ↗"
      ]},
      { "day": 1, "type": "jambes", "title": "Jambes lourdes & renfo", "ex": [
        "Gainage latéral 3x45s/côté + hollow hold 3x30s — EN PREMIER (face pulls passés au lundi)",
        "Leg press 5x5 @240-250 kg ↗ — repos 2 min chrono",
        "Soulevé de terre roumain 4x6 @100-105 kg ↗ avec sangles",
        "Fentes bulgares 3x8/jambe @2x16 kg (progression des fentes marchées de la phase 1)",
        "Leg extension 3x10-12",
        "Mollets 3x15 si le temps le permet"
      ]},
      { "day": 2, "type": "volume", "title": "Volume — pyramide", "ex": [
        "Tractions PDC pyramide 14-12-10-8-6 + série max cible 13-14 ↗ — même échauffement long qu'en S3/S5",
        "Rowing horizontal 4x10 @60 kg avec pause 1s en contraction",
        "Dips lestés 4x6 @40 kg ↗ (87,5% du total, recalé sur le 1RM dips mesuré en S4 : ≈ 57,5 kg de lest)",
        "Circuit abdos x3"
      ]},
      { "day": 4, "type": "explo", "title": "Muscle-up & explosivité", "ex": [
        "Transitions muscle-up 4x3 en début de séance, frais",
        "Muscle-up : 4-6 tentatives, 1 par série — objectif du bloc : le premier MU avec les deux bras ensemble",
        "Muscle-up négatif 4x2, descente 4-5s ↗ (S5 : 4x2 en 3-4s — on ralentit la descente avant d'ajouter des reps)",
        "Tractions explosives 4x4 jambes immobiles (objet serré entre les genoux) · tirage explosif +5 kg 3x3",
        "False grip hang 3x25s",
        "Straight bar dips 3x8-10 ↗",
        "Renfo épaule complet (frontales · tirage arrière · coiffe) + face pulls 1x15"
      ]},
      { "day": 5, "type": "course", "title": "Course — fractionné", "ex": [
        "Échauffement + 5x800 m allure 10 km, récup 400 m"
      ]}
    ],

    /* ------ Semaine 7 — Phase 2 (adaptée après bilan S3) ------ */
    [
      { "day": 0, "type": "force", "title": "Force max — proche du max", "ex": [
        "Face pulls 3x15 LÉGERS — en échauffement, avant les tractions",
        "Tractions lestées 3x1 @34 puis 37,5 puis 40 kg ↗ (97% → 100% → au-delà) — repos 4 min. Les 40 kg ratés de 3-4 cm au test S4 se repassent ici, frais et sans avoir enchaîné 5 tentatives avant.",
        "Back-off 2x3 @23 kg (88% du total)",
        "Renfo épaule 3x12 + coiffe 2x10",
        "Développé couché haltères 4x8 @34 kg ↗"
      ]},
      { "day": 1, "type": "jambes", "title": "Jambes lourdes & renfo", "ex": [
        "Gainage latéral 3x45s/côté + hollow hold 3x30s — EN PREMIER (face pulls passés au lundi)",
        "Leg press 5x5 @250-260 kg ↗ — repos 2 min chrono",
        "Soulevé de terre roumain 4x6 @105-110 kg ↗ avec sangles",
        "Fentes bulgares 3x8/jambe",
        "Leg extension 3x10-12",
        "Mollets 3x15 si le temps le permet"
      ]},
      { "day": 2, "type": "volume", "title": "Volume — pyramide", "ex": [
        "Tractions PDC pyramide 15-13-11-9-7 ↗ + série max cible 14-15 ↗",
        "Rowing horizontal 4x10 @60 kg avec pause 1s",
        "Dips lestés 4x5 @45 kg ↗ (90% du total — dernier palier avant le retest de S8)",
        "Circuit abdos x3"
      ]},
      { "day": 4, "type": "explo", "title": "Muscle-up & explosivité", "ex": [
        "Transitions muscle-up 4x3 · puis MU complet 5-6 tentatives",
        "Muscle-up négatif 3x3 ↗ descente 5s pleines (S6 : 4x2 en 4-5s)",
        "Tractions explosives 4x4 jambes immobiles",
        "False grip hang 3x30s ↗",
        "Straight bar dips 3x10 ou lestés 3x6 @10 kg ↗",
        "Renfo épaule complet + face pulls 1x15"
      ]},
      { "day": 5, "type": "course", "title": "Course — sortie facile", "ex": [
        "8 km allure facile"
      ]}
    ],

    /* ------ Semaine 8 — Phase 2 (deload + test) ------ */
    [
      { "day": 0, "type": "deload", "title": "Deload force", "ex": [
        "Face pulls 2x15 légers — en échauffement",
        "Tractions lestées 3x3 @13,5 kg ↘ (80% du total — le « 15-17,5 kg » écrit ici avant le test était calculé faux, voir la note « Barème phase 2 ») — volume -40%, loin de l'échec",
        "Renfo épaule léger 2x12"
      ]},
      { "day": 1, "type": "deload", "title": "Jambes — deload & mobilité", "ex": [
        "Hollow hold 3x20s + mobilité hanches/chevilles 10 min — EN PREMIER",
        "Leg press léger 3x10 ↘ (~60% des charges habituelles)",
        "Fentes au poids de corps 2x10/jambe",
        "Étirements ischios 10 min"
      ]},
      { "day": 2, "type": "test", "title": "Test 1/2 — 1RM lesté", "ex": [
        "Même découpage qu'en S4 (voir la note « Tests ») : le 1RM part le mercredi, frais et seul. Échauffement complet, puis rien d'autre à l'échec.",
        "Test 1RM lesté tractions — cible 42-44 kg (S4 : 37,5 kg mesuré). Montée par paliers, repos 3-4 min, +2,5 kg maximum près du max, arrêt au 2e échec (la leçon du test S4).",
        "Résultat + poids de corps → « 📈 Ma progression » le soir même : c'est ce chiffre qui règle toutes les charges de la phase 3",
        "Fin de séance : gainage léger, rien de plus"
      ]},
      { "day": 4, "type": "test", "title": "Test 2/2 — max reps, dips & muscle-up", "ex": [
        "ORDRE : échauffement complet → muscle-up (3 singles MAX) → max reps → dips. Le MU repasse en ouverture parce qu'en S4, mis en fin de séance, il a purement et simplement sauté — mais il est plafonné à 3 essais pour ne coûter qu'une rep au max reps.",
        "1) Muscle-up strict, frais, 3 singles : les deux bras ensemble ou non ? (S3 → S4 : décalé, c'est LE marqueur du bloc). Si c'est strict, la phase 3 vise les MU en série et plus le premier MU.",
        "2) Test max reps tractions PDC — cible 23-25 (S4 : 20 reps, et dans un contexte de journée très fatigante + séance tardive, donc la vraie valeur de départ est probablement 21-22). Une seule série, strict, jambes immobiles.",
        "3) Test 1RM dips lestés — cible > 57,5 kg (S4 : 55 validés, 60 ratés de peu). Montée 3 @25 · 2 @40 · 1 @50 · puis +2,5 kg, arrêt au 2e échec.",
        "PLANIFIE CE VENDREDI : le test de S4 est tombé un jour épuisant, en soirée. Un max reps se mesure reposé, sinon le graphique mesure ta fatigue et pas ta progression.",
        "Les 3 résultats → « 📈 Ma progression », avec celui de mercredi"
      ]},
      { "day": 5, "type": "course", "title": "Course — sortie facile", "ex": [
        "6 km très facile (semaine de récup)"
      ]}
    ],

    /* ------ Semaine 9 — Phase 3 ------ */
    [
      { "day": 0, "type": "force", "title": "Maintenance force", "ex": [
        "Face pulls 3x15 LÉGERS — en échauffement, avant les tractions",
        "Tractions lestées 4x4 ↘ à ~88% de la charge totale, à recalculer avec le 1RM du test S8 (voir la note « Pourcentages ») — repos 3 min, on entretient, on ne cherche plus",
        "Renfo épaule 3x12 + coiffe 2x10",
        "Développé couché haltères 4x8 (charge maintenue)"
      ]},
      { "day": 1, "type": "jambes", "title": "Jambes — maintenance & détente", "ex": [
        "Gainage 3x40s + hollow hold 3x30s — EN PREMIER (face pulls passés au lundi)",
        "Squat jumps 3x5 (explosivité, transfert muscle-up et course)",
        "Leg press 3x6 (charge maintenue, pas de record)",
        "Soulevé de terre roumain 3x8 avec sangles",
        "Mollets debout 3x15 si le temps le permet"
      ]},
      { "day": 2, "type": "volume", "title": "Maintenance volume", "ex": [
        "Tractions PDC 4x10 · Rowing horizontal 4x10 @60 kg",
        "Dips lestés 4x8 à ~78% de la charge totale (1RM dips mesuré en S4 : 57,5 kg de lest → 27,5 kg ici ; à recaler avec le retest de S8)",
        "Circuit abdos x3 · gainage"
      ]},
      { "day": 4, "type": "explo", "title": "Muscle-up strict — priorité", "ex": [
        "Muscle-up : 6-8 singles, 1 par série, repos 90s (S3 : déjà 3 MU en séance bras après bras — la phase 3 vise le strict puis la série)",
        "Transitions muscle-up 4x3 sans assistance",
        "Tractions explosives 5x3 jambes immobiles — repos 2-3 min",
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
        "Face pulls 3x15 LÉGERS — en échauffement, avant les tractions",
        "Tractions lestées 4x4 à ~88% de la charge totale (voir note « Pourcentages »)",
        "Renfo épaule 3x12 + coiffe 2x10",
        "Développé couché haltères 4x8 (charge maintenue)"
      ]},
      { "day": 1, "type": "jambes", "title": "Jambes — maintenance & détente", "ex": [
        "Gainage 3x40s + hollow hold 3x30s — EN PREMIER (face pulls passés au lundi)",
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
        "Tractions explosives 5x3 jambes immobiles",
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
        "Face pulls 3x15 LÉGERS — en échauffement, avant les tractions",
        "Tractions lestées 4x4 à ~88% de la charge totale (voir note « Pourcentages »)",
        "Renfo épaule 3x12 + coiffe 2x10",
        "Développé couché haltères 4x8 (charge maintenue)"
      ]},
      { "day": 1, "type": "jambes", "title": "Jambes — maintenance & détente", "ex": [
        "Gainage 3x40s + hollow hold 3x30s — EN PREMIER (face pulls passés au lundi)",
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
        "Face pulls légers 2x15 — en échauffement",
        "Tractions lestées léger, loin de l'échec ↘"
      ]},
      { "day": 1, "type": "deload", "title": "Jambes — très léger (semaine de test)", "ex": [
        "Leg press léger 2x8 ↘",
        "Mobilité complète 15 min"
      ]},
      { "day": 2, "type": "test", "title": "TEST FINAL 1/2 — 1RM lesté", "ex": [
        "Même découpage qu'en S4 et S8 (note « Tests ») : échauffement complet → 1RM lesté, et rien d'autre",
        "Test 1RM lesté tractions (objectif du cycle : 43 kg, départ 35)",
        "Résultat + poids de corps (objectif : 80 kg, départ 83,8) → « 📈 Ma progression »"
      ]},
      { "day": 4, "type": "test", "title": "TEST FINAL 2/2 — max reps, dips & muscle-up", "ex": [
        "ORDRE : échauffement complet → muscle-up → max reps → dips",
        "Muscle-up strict : le maximum de reps enchaînées (objectif du cycle : le MU strict, atteint dès la S3 en version décalée)",
        "Test max reps tractions PDC (objectif du cycle : 25, départ 17 — mesuré frais, sans 1RM avant)",
        "Test 1RM dips lestés",
        "Les 3 résultats → « 📈 Ma progression », avec celui de mercredi"
      ]},
      { "day": 5, "type": "course", "title": "Course — au choix", "ex": [
        "Sortie plaisir, distance libre"
      ]}
    ]
  ]
};
