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
    { "id": 2, "name": "Force maximale", "start": 5, "end": 9, "color": "#B3402E" },
    { "id": 3, "name": "Explosivité & muscle-up", "start": 10, "end": 13, "color": "#C77F00" }
  ],

  "goals": [
    { "label": "Max reps", "value": "17 → 25+" },
    { "label": "1RM lesté", "value": "35 → 42-45 kg" },
    { "label": "Poids", "value": "83,8 → 80 kg" },
    { "label": "Objectif", "value": "MU enchaînés · vers le strict" }
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
    { "label": "Épaule gauche", "text": "Signalée trois fois en S5 (mercredi 19 dès l'échauffement, vendredi 21 séance écourtée, samedi 22 sur un upper chest flight). RÉSOLU EN S6 : bloc épaule complet remonté en échauffement du lundi → aucune douleur de la semaine, un simple titillement aux dips le mercredi, « c'est vite parti ». CONFIRMÉ EN S7 : deuxième semaine complète sans la moindre mention de douleur, y compris sur les dips lestés à 40 kg et sur du développé incliné ajouté deux fois. La cause était la place du renfo, pas la charge. Ça ne bouge plus : le renfo épaule est EN PREMIER dans les séances du haut, point. Le code couleur reste valable si ça revient. VERT — rien à l'échauffement : séance normale. ORANGE — ça tire à l'échauffement ou sur un mouvement : tu supprimes CE mouvement (dips, straight bar dips, écarté / pec deck / upper chest flight, développé) et tu gardes le tirage, qui ne l'irrite pas ; le renfo coiffe se fait quand même. ROUGE — ça réveille la nuit, ça tire au repos, ou tu perds de l'amplitude : kiné avant de continuer le bloc, il reste 6 semaines, une épaule ne se rattrape pas." },
    { "label": "Deload & taper", "text": "DÉCISION DU 7 SEPTEMBRE, à ta demande : la semaine de décharge était trop courte. Dans sa version d'origine, la S8 faisait deux choses incompatibles — décharger et pointer un maximum — avec deux jours d'allègement seulement devant un test de 1RM. Ce qui a été fait : la S8 devient une semaine de décharge COMPLÈTE sans aucun test (mercredi à volume moitié, vendredi technique), les deux tests partent au mercredi 16 et au vendredi 18, et le programme passe à 13 semaines — le test final glisse du 7-9 au 14-16 octobre. La même logique est appliquée en amont de ce test final : le volume du mercredi de la S12 est déjà réduit et le lundi de la S13 garde deux singles lourds. Le principe à retenir, parce qu'il resservira à chaque test : un taper coupe le VOLUME de 40 à 60 %, il ne coupe PAS l'intensité. Dix jours sans rien toucher de lourd et tu arrives plat — le système nerveux se désamorce et le 1RM baisse au lieu de monter. D'où les deux rappels d'intensité écrits dans le plan : 2x1 @30 kg le vendredi 11, 3x2 @25 kg le lundi 14, jamais à l'échec, deux singles à chaque fois. Volume au plancher, charge encore présente. Repères pour la suite : une décharge se place toutes les 4 à 6 semaines de charge (celle-ci arrive après S5-S6-S7, donc au bon moment), elle dure une semaine pleine, et avant un test on compte 10 à 14 jours entre la dernière grosse séance de volume (mercredi 2 septembre ici) et le test lui-même." },
    { "label": "Pourcentages", "text": "Sur les tractions et les dips, un % se calcule sur la charge TOTALE (poids de corps + lest), jamais sur le lest seul. 1RM total = poids de corps + lest max. Lest à mettre = (% × 1RM total) − poids de corps. Exemple avec les chiffres actuels : 82,7 kg de corps + 40 kg de lest = 122,7 kg de total ; 92 % = 113 kg → 30 kg de lest à la ceinture. C'est ce qui a été corrigé après la S3 : les charges de la phase 2 calculées sur le lest seul valaient 95-98 % du total, infaisables en 5x3." },
    { "label": "Barème phase 2 (recalé après la S6)", "text": "TRACTIONS — nouvelle référence du 24 août : 40 kg de lest passés en single, EN FIN DE SÉANCE, après 5x3 @27,5 et 2x2 @31,5. Ce sont exactement les 40 kg ratés de 3-4 cm au test du 12 août : douze jours plus tard ils passent, et ils passent fatigué. Le vrai 1RM à froid est donc au-dessus de 40 — on programme quand même sur 40 pour rester honnête, le test du mercredi de la S9 (16 septembre) tranchera. Poids de corps 82,7 kg → 1RM TOTAL 122,7 kg. Lest correspondant : 80 % → 15,5 kg · 85 % → 21,5 kg · 88 % → 25 kg · 90 % → 27,5 kg · 92 % → 30 kg · 95 % → 34 kg · 97 % → 36,5 kg · 100 % → 40 kg. Soit +2,5 kg sur chaque palier par rapport au barème calculé après le test S4 (qui partait de 37,5 kg). DIPS — inchangé, mesuré le 14 août : 55 kg validés, 60 kg ratés de peu → 1RM lesté ≈ 57,5 kg → 1RM TOTAL 140 kg. Lest correspondant : 78 % → 27,5 kg · 84 % → 35 kg · 87 % → 40 kg · 90 % → 43,5 kg · 95 % → 50 kg. Si le poids de corps bouge de plus de 2 kg, ces chiffres se recalculent (le lest baisse quand le corps monte, et inversement). CE QUE LA S7 AJOUTE : le 92 % (5x3 @30 kg) est passé sans commentaire, mais le 95 % (2x2 @34 kg) a ÉCHOUÉ — sur les avant-bras cramés par l'escalade de la veille, pas sur le dos. L'échec ne remet donc pas le barème en cause, il désigne la prise (voir la note « Prise & avant-bras »). Le test du mercredi de la S9 tranche : c'est lui, et lui seul, qui écrit le barème de la phase 3." },
    { "label": "Mesures", "text": "1RM lesté saisi (40 kg le 24 août), poids de corps suivi (82,8 kg le 31 août, -1 depuis le départ). Le MAX REPS — le graphique qui porte l'objectif du cycle, 17 → 25 — est TOUJOURS VIDE après huit semaines, alors qu'il y a maintenant TROIS valeurs écrites dans tes remarques de séance : 20 reps le 14 août (test S4), 21 reps le 26 août (ouverture du mercredi S6), 20 reps le 2 septembre (ouverture du mercredi S7). Ces trois points racontent quelque chose d'utile — le max reps stagne pendant que le lesté monte de 5 kg, ce qui est le comportement normal d'un bloc de force max — mais tant qu'ils ne sont pas saisis, la comparaison S4 → S9 → S13 n'existe pas. Cinq minutes le vendredi 18 septembre. Le 1RM dips (57,5 kg le 14 août) n'a pas de graphique mais reste noté ici." },
    { "label": "Ce qui est en dernier ne se fait pas", "text": "Sept semaines, aucune exception. Gainage et étirements de la séance jambes : sautés tant qu'ils étaient en fin de séance, faits dès qu'ils sont passés en premier. Transitions MU déplacées en fin de test S4 : sautées. Renfo épaule, false grip et straight bar dips du vendredi : « pas eu le temps » trois vendredis sur quatre. Circuit abdos du mercredi : « pas le temps » en S3 comme en S5, fait dès qu'il est remonté en S6. Et le cas le plus net : en S6 le vendredi, les négatifs de muscle-up — LIGNE PRIORITAIRE du bloc, placés en 5e position — ont sauté alors que les lignes 6 et 7 ont été faites. Conséquence appliquée à la S7 : les séances du haut sont numérotées par ordre d'importance ET raccourcies (5-6 lignes au lieu de 7-8). Quand une séance doit être écourtée, ce sont les dernières lignes qui sautent, et c'est prévu. La seule ligne vraiment facultative de la séance jambes, ce sont les mollets. VÉRIFICATION EN S7 : la séance jambes ramenée à 5 lignes a été FAITE EN ENTIER, avec du dépassement partout (squat monté à 80 kg, fentes à 2x20 au lieu de 2x16, SDT à 100 kg) — après un abandon en cours de séance en S6 sur le format à 7 lignes. Le format court n'a rien coûté, il a rapporté. Côté vendredi en revanche, les lignes 3, 4 et 6 (négatifs de MU, false grip, straight bar dips) sont revenues sans le moindre retour : le doute reste entier sur les négatifs, qui restent la ligne prioritaire du bloc." },
    { "label": "Face pulls", "text": "Déplacés du mardi au lundi (S4) : ils partent en ÉCHAUFFEMENT du jour force, avant les tractions lestées, + 1 série le vendredi. VALIDÉ EN S6 : bloc en tête de séance = zéro douleur d'épaule de la semaine, contre trois séances douloureuses en S5 avec le même bloc relégué en fin de séance. Charge LÉGÈRE, coudes hauts, aucun haussement d'épaules, la 15e rep doit rester facile — c'est de la prévention, pas un tirage. Si un face pull fatigue, il est trop lourd." },
    { "label": "Tests", "text": "Les tests ne se font plus le même jour. Le 1RM lesté part le MERCREDI (c'est lui qui règle toutes les charges du bloc suivant, il passe donc le plus frais), le max reps PDC + dips + muscle-up le VENDREDI. Un max reps fait 15 min après des singles lourds coûte 2 à 4 reps. Même découpage en S4, S9 et S13 pour que les trois tests soient comparables. DÉCALÉS D'UNE SEMAINE le 7 septembre : ils devaient tomber en S8, ils partent au 16 et au 18 septembre pour laisser une vraie semaine de décharge devant (note « Deload & taper »). VÉRIFIÉ EN S4 : le découpage a marché (20 reps, 55 kg aux dips), mais les transitions MU reportées en fin de séance ont été sautées. En S9 le muscle-up repasse donc en OUVERTURE — et son format a changé après la S7 (3 MU d'affilée) : ce n'est plus 3 singles mais UNE série max à froid, arrêt à la première rep cassée, puis 2 séries de rappel. Une série de 3 coûte à peine plus qu'un single au max reps qui suit, et c'est elle qui décide du contenu de la phase 3. Et une consigne de planification : le test S4 est tombé un jour épuisant, en soirée. Celui de la S9 se pose un jour où tu es reposé, sinon le graphique mesure ta fatigue." },
    { "label": "Muscle-up", "text": "Diagnostic S3 : le MU passait bras après bras parce que le gainage lâchait à la bascule — le facteur limitant n'a jamais été la force de tirage. Le diagnostic était le bon : négatifs + tractions explosives jambes bloquées + hollow → 2 MU LES DEUX BRAS ENSEMBLE le 21 août (S5), puis en S6 un premier MU propre avec une simple flexion de jambes sur 4-5 séries et un deuxième « de plus en plus cassé ». PUIS LA S7 : 3 MU d'affilée en ouverture, puis 2-2-2-2 sur les séries suivantes. En sept semaines la ligne est passée de « bras après bras » à un enchaînement de trois. L'objectif « deux propres d'affilée » est donc atteint sur le papier — avec une réserve honnête : c'était une séance « d'amusement avec les amis », et rien ne dit que les 3 reps étaient strictes. TA FORME EXACTE, précisée le 7 septembre : ce n'est pas un MU strict — il y a un LÉGER APPEL DES DEUX GENOUX, et une rotation des poignets par-dessus la barre au moment de la transition. Deux choses très différentes, et le carnet ne les traitera plus pareil. (1) La ROTATION DES POIGNETS n'est pas de la triche, c'est la technique : sans false grip, le poignet est sous la barre et il DOIT tourner pour passer au-dessus. Le false grip est simplement l'autre chemin — le poignet est déjà au-dessus au départ, donc plus rien à tourner ; c'est ce qui rend le strict possible. (2) Le LÉGER APPEL DE GENOUX, lui, est bien une assistance : c'est un kip minimal. Ça reste un muscle-up parfaitement légitime, c'est même la forme la plus répandue, mais ce n'est pas le strict. LE POINT QUI COMPTE : ta force n'est pas le frein. 40 kg de lest = 48 % de ton poids de corps ajouté en traction, et 57,5 kg aux dips = 69 % — les deux sont AU-DESSUS du seuil habituellement admis pour un MU strict (~40-50 % en traction). Ce qui manque n'est donc ni le dos ni les triceps : c'est la hauteur de tirage et la transition. D'où le test du vendredi 18, qui ne mesure plus « des reps strictes » mais TA forme, à condition qu'elle reste CONSTANTE : une série max à froid, arrêt à la première rep où l'appel AUGMENTE (genoux plus hauts, hanches qui balancent), où les bras passent l'un après l'autre, ou où la transition cale. Ce chiffre-là décide de la phase 3 : 3 reps en forme constante et le bloc final travaille des séries de MU, 1 seule et on revient aux singles. LE CHEMIN VERS LE STRICT, si tu le veux comme objectif de la phase 3 : le false grip d'abord (c'est LA ligne qui saute systématiquement le vendredi — trois vendredis sur quatre — et c'est exactement celle qui débloque le strict), puis la hauteur de tirage (une traction qui monte la barre au bas du sternum = le seuil du strict), puis les négatifs lents, puis réduire l'appel en serrant un objet entre les genoux. Dans cet ordre." },
    { "label": "Prise & avant-bras", "text": "Le facteur limitant récurrent du carnet, et il n'a jamais été les dorsaux ni les jambes. Soulevé de terre : série coupée par la prise en S2, en S6 (sangles oubliées) et à moitié en S7 — réglé le 1er septembre avec des gants, 100 kg passés. Tractions lourdes : les 2x2 @34 kg du lundi de la S7 en échec sur les avant-bras, au lendemain d'une séance d'escalade. Trois conséquences écrites dans le programme : (1) la semaine de test protège la prise — pas de dead hang lourd, pas de false grip, pas de SDT avant le vendredi ; (2) la montée du test 1RM est ÉCONOME EN REPS, parce que chaque rep de palier bas se paye au palier haut ; (3) magnésie ou craie au test, systématiquement. Et en positif : l'escalade et le false grip DÉVELOPPENT cette prise — le problème n'est pas de les faire, c'est de les faire la veille d'un jour lourd." },
    { "label": "Volume (nouveau format à partir de la S10)", "text": "Décision prise par Mehdi le 2 septembre, et elle est fondée : « j'arrête les max toutes les semaines, je pense changer la manière de faire du volume et faire une pyramide montante descendante ». Les faits lui donnent raison — 21 reps le 26 août, 20 le 2 septembre : une série max hebdomadaire à ce niveau ne mesure plus rien, elle coûte juste une séance de volume et de la fatigue nerveuse. À partir de la S10, donc : PLUS DE SÉRIE MAX HEBDOMADAIRE — le prochain max est celui du test du 18 septembre, et ensuite plus rien jusqu'au test final de la S13. Le format est essayé à volume réduit dès le mercredi de la S8 (5-7-9-7-5, 33 reps), pendant la semaine de décharge. Le mercredi devient une PYRAMIDE MONTANTE-DESCENDANTE (type 6-8-10-12-10-8-6, à caler sur le volume total actuel d'environ 70 reps), qui a l'avantage de placer les séries les plus dures au milieu de la séance plutôt qu'au début à froid ou à la fin sur la fatigue. Le reste du mercredi ne bouge pas : circuit abdos en 2e position (c'est sa place depuis la S6, il est fait), rowing prise serrée — 54-61-68-68 en S7, la machine ne plafonne plus — et dips lestés. Cadrage définitif des séries à la réécriture de la phase 3, après le test." },
    { "label": "Push ajouté", "text": "Il ajoute du push de lui-même depuis la S2, et le carnet a pour habitude d'officialiser ce qui se fait déjà plutôt que de le subir. Nouveauté de la S7 : le développé couché à plat a été remplacé de sa propre initiative par du DÉVELOPPÉ INCLINÉ (4x8-10 @40-50-60-60 le lundi, puis encore 10 @40-60-60 le mercredi), motif « développer le haut des pecs en retard ». C'est cohérent, et l'épaule n'a rien dit de la semaine. Deux réserves à tenir : l'incliné met l'épaule dans une position plus exposée que le plat — c'est la première ligne à couper si la douleur revient (note « Épaule gauche », niveau ORANGE) ; et deux séances de push par semaine s'ajoutent à quatre séances de haut du corps, donc l'incliné du mercredi reste léger. Toujours pas d'écarté / pec deck / upper chest flight : c'est le mouvement sur lequel l'épaule a lâché en S5." },
    { "label": "Course", "text": "Trois semaines de dérive (S2 à S4) où la sortie « facile » du dimanche partait en fractionné — puis DEUX SEMAINES PROPRES en S5 et S6. La règle tient, on la garde : l'intensité (fractionné, tapis rapide, côtes) se fait le SAMEDI, jamais le dimanche ; le dimanche est du vrai facile (allure où tu peux parler, ~5:45-6:15/km) ou rien. UN seul créneau week-end : course OU sport, pas les deux. Nouveau point de vigilance venu de la S6 : 7 km à 4:34 de moyenne le LUNDI, jour force. Une course rapide le jour du travail lourd coûte sur les deux ; si tu cours le lundi, c'est après la séance et en facile." },
    { "label": "Sports ajoutés", "text": "Badminton, tennis, escalade, séances avec des amis : il y en a toutes les semaines et c'est très bien, mais deux d'entre eux ne sont pas neutres pour ce carnet. L'ESCALADE est une séance de tirage complète (avant-bras, dorsaux, coudes) : elle se note dans le carnet comme telle, et placée le samedi elle laisse des courbatures jusqu'au lundi — c'est exactement ce qui s'est passé entre la S6 et la S7 (« grosses courbatures dimanche et aussi lundi matin »). RÉCIDIVE EN S7 : même enchaînement, et cette fois le coût est chiffré — les 2x2 @34 kg du lundi 31 août sont tombés en échec, « avant-bras trop fatigué à cause de l'escalade ». Deux fois de suite, la même cause, le même jour. La règle n'est plus un conseil : escalade le samedi = lundi allégé d'une série et pas de single lourd, ou escalade déplacée en milieu de semaine. Le week-end du 5-6 septembre n'a eu qu'une séance jambes légère, et avec le décalage des tests les avant-bras ont maintenant DIX jours de récupération devant le 1RM du 16 septembre. Conséquence directe : pas d'escalade les week-ends des 6-7 et 13-14 septembre, elle rouvre après le vendredi 18. Le badminton et le tennis comptent comme du travail bras au-dessus de la tête (1h30 + 1h le week-end où l'épaule a lâché). Et les séances « je suis celle d'un ami » comptent aussi : en S5 la séance jambes est devenue la sienne, charges divisées par deux — choix légitime, mais la progression jambes s'arrête cette semaine-là." },
    { "label": "Charge totale", "text": "Semaine 5 réelle : 4 séances de salle + une séance upper body avec des amis + 1h30 de badminton + 1h de tennis. C'est la semaine où l'épaule a lâché, ce n'est pas un hasard. Semaine 6 : format respecté, aucune douleur. Le format tient à 4 séances + 1 créneau week-end. Si fatigue ou douleur, allège en priorité le mercredi (volume), puis la séance jambes — jamais la force ni le muscle-up." },
    { "label": "GTG optionnel", "text": "Réautorisé depuis la S6 (plus de douleur d'épaule) : jeu/dim uniquement, si zéro douleur ni courbatures — 3-5 séries de 5 reps à ~50% du max, loin de l'échec. Suspendu de nouveau si l'épaule tire." },
    { "label": "Nutrition", "text": "Le poids bouge lentement : 82,8 kg le 10 août, 83 le 13, 82,8 le 23, 82,7 le 25 — soit -1,1 kg en six semaines pour un objectif à 80. Déficit léger ~2 300-2 400 kcal · 160-170 g de protéines/jour. À ce rythme les 80 kg ne tomberont pas d'ici la fin du cycle : c'est un arbitrage défendable (tu progresses en force et en muscle-up, et un déficit franc coûterait les deux), mais autant le choisir plutôt que le subir. Chaque kilo en moins = des reps et un muscle-up plus faciles." }
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
      { "day": 0, "type": "force", "title": "Force max — montée, épaule d'abord", "ex": [
        "1) Face pulls 3x15 LÉGERS + coiffe des rotateurs 2x10 @6 kg + renfo épaule 3x12 (rotations externes et internes) — EN ÉCHAUFFEMENT, avant les tractions. Bloc entier remonté en tête (S5 : « exercice épaule tiré fin de séance » le lundi, puis douleur épaule gauche mercredi, vendredi ET samedi)",
        "2) Tractions lestées 5x3 @27,5 kg ↗ (92% du total) — repos 3 min (S5 : 5x3 @25 kg = 90 %, « je me suis pas senti à ma limite, j'ai jamais douté de ma capacité » — la montée à 92 % est confirmée par le ressenti)",
        "3) Puis 2x2 @31,5 kg ↗ (95% du total — 30 kg + un petit disque, ou 32,5 si tu n'as pas mieux). La 2e rep doit être dure, jamais d'échec",
        "4) Tirage vertical lourd 4x5 à RPE 8-9 — le tirage lourd n'irrite pas l'épaule, il ne bouge pas",
        "5) Développé couché haltères 4x8 @32 kg — charge MAINTENUE, pas de montée cette semaine (S5 : 3x8 + 1x6 @32 kg, et l'épaule a lâché dans la foulée)",
        "PAS d'écarté / pec deck / upper chest flight tant que l'épaule tire — c'est le mouvement exact sur lequel la douleur est apparue le samedi 22",
        "Curl biceps 3x8-10 @16 kg (S5 : 3x8 @16 + 1x8 @14)"
      ]},
      { "day": 1, "type": "jambes", "title": "Jambes & renfo", "ex": [
        "Gainage latéral 3x45s/côté + hollow hold 3x30s — EN PREMIER (face pulls passés au lundi)",
        "Squat barre 4x8 @60-70 kg ↗ (S5 : 3x8 @50 + 1x8 @60, exécution propre — le squat est revenu de toi-même, il reste au programme)",
        "Leg press 4x8 @200-210 kg (S5 : la séance a été celle d'un ami, 4x8 @100-140 — on repart du niveau S3 avant de viser 240-250, un 5x5 lourd après deux semaines légères ne se rattrape pas)",
        "Soulevé de terre roumain 4x6 @100-105 kg ↗ avec sangles",
        "Hip thrust 3x8 @80 kg (adopté en S5)",
        "Leg extension 3x10-12 · mollets 4x10 @30 kg si le temps le permet",
        "SÉANCE COURTE OU À PLUSIEURS : squat + SDT + gainage, et c'est déjà une vraie séance jambes — 3 lignes faites valent mieux que 6 lignes prévues"
      ]},
      { "day": 2, "type": "volume", "title": "Volume — pyramide", "ex": [
        "1) Tractions PDC pyramide 14-12-10-8-6 + série max cible 13-14 ↗ — même échauffement long qu'en S3/S5, c'est lui qui supprime la congestion",
        "2) Circuit abdos x3 : crunch poulie 8-10 @36 kg · obliques 8-10 @36-38 kg · gainage 3x40s — REMONTÉ avant le rowing et les dips (S3 et S5 : « pas le temps de faire » chaque fois qu'il est en dernier)",
        "3) Rowing horizontal 4x10 @55 kg avec pause 1s en contraction, tu remontes à 60 seulement si la 4e série reste propre (S5 : parti à 60, redescendu à 51 dès la 2e série)",
        "4) Dips lestés 4x6 @35-37,5 kg ↘ par rapport aux 40 prévus (S5 : 4x8 @35 kg = 84 % → échec à la 8e rep de la 3e série puis à la 6e de la 4e, dans une séance déjà marquée par l'épaule. On garde 6 reps et on ne monte le lest que si les 4 séries sortent avec une rep de réserve)",
        "Si l'épaule tire à l'échauffement : dips supprimés cette semaine, pompes lestées 3x12 à la place"
      ]},
      { "day": 4, "type": "explo", "title": "Muscle-up & explosivité — ordre imposé", "ex": [
        "1) Renfo épaule complet EN PREMIER : coiffe 2x10 @6 kg · élévations frontales 2x10 @6 kg unilat. · tirage arrière 2x10 @8 kg · face pulls 1x15 (S3 et S5 : « pas eu le temps » — placé en dernier il ne se fait jamais, et c'est l'assurance épaule de tout le bloc)",
        "2) False grip hang 3x25s — juste après, tant que la prise est fraîche",
        "3) Transitions muscle-up 4x3, frais",
        "4) Muscle-up : 3 tentatives MAXIMUM, 1 par série, arrêt à la première rep « cassée » (S5 : 2 MU les deux bras ensemble, 3e cassée, tu t'es arrêté — c'était juste, ça devient la règle). L'objectif n'est plus le premier MU mais le deuxième d'affilée",
        "5) Muscle-up négatif 4x2, descente 4-5s ↗ (S5 : 4x2 en 3-4s — on ralentit la descente avant d'ajouter des reps)",
        "6) Tractions explosives 4x4 jambes immobiles (objet serré entre les genoux) · tirage explosif +5 kg 3x3 (S5 : les 2 dernières séries n'arrivaient plus au pec — c'est le signal d'arrêt de la série, pas une série à finir)",
        "7) Straight bar dips 3x8-10 AU POIDS DE CORPS, sans descendre sous 90° — première ligne supprimée si l'épaule parle"
      ]},
      { "day": 5, "type": "course", "title": "Course ou sport — un seul", "ex": [
        "UN seul créneau ce week-end, le SAMEDI : soit fractionné (échauffement + 5x800 m allure 10 km, récup 400 m), soit un sport (badminton, tennis) — pas les deux (S5 : 1h30 de badminton + 1h de tennis dans la semaine où l'épaule a lâché)",
        "Dimanche : vrai facile ou rien, jamais d'intensité la veille du jour force (voir la note « Course »)"
      ]}
    ],

    /* ------ Semaine 7 — Phase 2 (recalée après bilan S6) ------ */
    [
      { "day": 0, "type": "force", "title": "Force max — dernière semaine lourde", "ex": [
        "CONTEXTE : escalade samedi → grosses courbatures dimanche et lundi. Si les dorsaux ou les avant-bras sont encore chargés : 4 séries au lieu de 5 au point 2, et pas de single au point 4. Le test est mercredi prochain, rien ne se joue aujourd'hui.",
        "1) Face pulls 3x15 LÉGERS + coiffe 2x10 @6 kg + rotations externes/internes 3x12 — EN ÉCHAUFFEMENT, avant les tractions. C'est ce déplacement qui a supprimé la douleur d'épaule entre la S5 et la S6 : il ne bouge plus.",
        "2) Tractions lestées 5x3 @30 kg ↗ (92% du NOUVEAU barème, recalé sur les 40 kg du 24 août — S6 : 5x3 @27,5 kg, « pas atteint ma limite ») — repos 3 min, et déborder à 3:30 comme en S6 n'est pas un défaut",
        "3) Puis 2x2 @34 kg ↗ (95% — S6 : 2x2 @31,5 kg, montée lente mais « j'ai pas douté de ma réussite »)",
        "4) Single OPTIONNEL @40 kg — une seule tentative, seulement si les doubles sortent vite. Tu les as passés le 24 août en fin de séance : ici c'est pour les confirmer à froid, pas pour chercher 42,5. Le record se joue au test de mercredi prochain, pas aujourd'hui.",
        "5) Tirage vertical lourd 3x8-10 à RPE 8-9 (format adopté en S6)",
        "6) Développé couché haltères 4x8 @32-34 kg — 34 si l'épaule est muette, 32 sinon. Toujours pas d'écarté / pec deck. (S6 : 4x8 @32 propres, descente contrôlée à gauche — on garde cette exécution.)",
        "7) Curl biceps 3x8 @16 kg prise marteau (S6)"
      ]},
      { "day": 1, "type": "jambes", "title": "Jambes — version courte (45 min)", "ex": [
        "Séance ramenée à 5 lignes : en S6 tu t'es arrêté au soulevé de terre, « trop fatigué et saoulé pour continuer ». Une séance jambes de 45 min se fait en entier ; celle de 7 lignes se fait à moitié depuis la S1.",
        "1) Hollow hold 3x30s + gainage latéral 3x45s/côté — EN PREMIER",
        "2) Squat barre 4x8 @65-70 kg ↗ (S6 : 4x8 @60-65 kg, exécution propre — les 70-75 écrits ici sautaient une marche)",
        "3) Fentes marchées 3x12/jambe @2x16 kg ↗ — REMPLACENT le leg press, qui doublonnait avec le squat (même mouvement bilatéral, même dominante quadriceps). Les fentes apportent ce qui manquait : de l'unilatéral, de la stabilité de hanche et du transfert direct sur la course. S3 : 3x10-12 @32 kg en 2 kettlebells de 16 — c'est la seule ligne jambes que tu aies fait progresser toi-même. Variante plus dure si tu veux : fentes bulgares 3x8/jambe.",
        "4) Soulevé de terre roumain 4x6 @95-100 kg ↗ AVEC SANGLES — sangles dans le sac la veille (S6 : redescendu à 90 kg, sangles oubliées ; c'est la 3e fois que la prise limite la série, jamais les jambes)",
        "5) Leg extension 3x10-12 · mollets 3x15 seulement s'il reste du temps"
      ]},
      { "day": 2, "type": "volume", "title": "Volume — série max en ouverture", "ex": [
        "1) Échauffement long — c'est lui qui supprime la congestion entre les séries (vérifié en S3, S5 et S6)",
        "2) SÉRIE MAX en ouverture, cible 22+ ↗ — tu l'as fait de toi-même en S6 (21 reps avant les séries, contre 13 en fin de pyramide) et c'est la bonne place : un max en fin de pyramide mesure ta fatigue, pas ta force. C'est aussi la répétition générale du test de S8. → CHIFFRE À SAISIR dans « 📈 Ma progression ».",
        "3) Circuit abdos x3 : crunch poulie 10 @39-42 kg · courbures kettlebell 10 @32-40 kg (format adopté en S6)",
        "4) Pyramide 12-10-8-6 ↘ derrière le max — le volume total de la séance reste celui de la S6 (~70 reps), il est juste réparti autrement",
        "5) Rowing horizontal 4x10 @60 kg avec pause 1s en contraction (S6 : 4x10 @55 kg propres)",
        "6) Dips lestés 4x5 @40 kg ↗ (87% du total — S6 : 4x6 @35-37,5 kg puis 5 reps @40 sur la dernière série). L'équilibre à la remontée est le point limitant, pas la force : c'est lui qui a coupé ta 4e série en S6. Supprimés si l'épaule tire à l'échauffement."
      ]},
      { "day": 4, "type": "explo", "title": "Muscle-up & explosivité — 6 lignes, dans l'ordre", "ex": [
        "Séance raccourcie. En S6, les négatifs de MU — ligne prioritaire du bloc — ont sauté (« pas le temps ») alors qu'ils étaient en 5e position. Ils remontent en 3, les transitions sortent (tu passes des MU complets, elles ne servent plus), le renfo épaule est réduit à sa version courte puisqu'il est fait en entier le lundi.",
        "1) Face pulls 1x15 + coiffe 2x10 @6 kg — 5 min d'assurance épaule, pas plus",
        "2) Muscle-up : 3-4 tentatives à froid, 1 par série, ARRÊT à la première rep cassée (S6 : 4-5 séries, 1er MU propre avec une simple flexion de jambes, 2e « de plus en plus cassé »). L'objectif est DEUX propres d'affilée — il ne s'obtient pas en accumulant des reps sales.",
        "3) Muscle-up négatif 3x3 ↗ descente 5s pleines — LIGNE PRIORITAIRE, juste après les tentatives et plus jamais en fin de séance (S5 : 4x2 en 4-5s · S6 : « pas le temps »)",
        "4) False grip hang 3x30s (S6 : faite, mais en fin de séance)",
        "5) Tractions explosives 4x4, jambes strictement immobiles (objet serré entre les genoux) — une série qui balance ne compte pas",
        "6) Straight bar dips 3x10 au poids de corps, sans descendre sous 90° — la seule ligne qu'on supprime si le temps manque ou si l'épaule parle"
      ]},
      { "day": 5, "type": "course", "title": "Course ou sport — un seul", "ex": [
        "Un seul créneau : 8 km allure facile, ou un sport — jamais les deux le même week-end",
        "Si c'est l'escalade : c'est une séance de tirage, elle laisse des courbatures jusqu'au lundi (note « Sports ajoutés »). Semaine de pré-test — si tu veux un lundi intact, garde-la pour après le test de S8."
      ]}
    ],

    /* ------ Semaine 8 — Phase 2 (DELOAD COMPLET — tests décalés en S9, décision du 7 septembre) ------ */
    [
      { "day": 0, "type": "deload", "title": "Deload force — protéger la prise jusqu'à mercredi", "ex": [
        "CONTEXTE : le lundi de la S7 a été raté sur les avant-bras (2x2 @34 kg en échec) après l'escalade du samedi. Ce week-end il n'y a eu qu'une séance jambes légère : tu arrives avec des avant-bras frais, et le vrai enjeu de la semaine est de les amener intacts au test de mercredi. Tout ce qui tire fort sur la prise saute jusque-là.",
        "1) Face pulls 2x15 légers + coiffe 2x10 @6 kg + rotations externes/internes 2x12 — en échauffement, comme depuis la S6 (deux semaines de suite sans aucune douleur d'épaule : ça ne bouge pas)",
        "2) Tractions lestées 3x3 @15,5 kg ↘ (80% du barème) — volume -40%, aucune recherche, tu sors des séries en te disant que c'était facile",
        "3) PAS de dead hang lourd, PAS de false grip, PAS de soulevé de terre cette semaine avant vendredi — la prise est le facteur limitant du test",
        "4) Si tu ajoutes du push (tu en fais de toute façon) : développé incliné 3x10 léger, RPE 6 max — pas de série lourde la veille du test"
      ]},
      { "day": 1, "type": "deload", "title": "Jambes — deload & mobilité", "ex": [
        "1) Hollow hold 3x20s + mobilité hanches/chevilles 10 min — EN PREMIER",
        "2) Squat barre léger 3x10 ↘ (~60% des charges habituelles, soit 40-50 kg — S7 : 4x8 @65-70 avec 1-2 séries à 80, la progression jambes est repartie, elle ne se joue pas cette semaine)",
        "3) Fentes au poids de corps 2x10/jambe ↘ (S7 : 3x10/jambe @2x20 kg)",
        "4) Étirements ischios 10 min (S7 : « courbatures méchantes aux ischios » après le SDT à 100 kg)",
        "Pas de soulevé de terre de toute la semaine : c'est la ligne qui crame la prise, et la prise sert au test du 16 septembre"
      ]},
      { "day": 2, "type": "deload", "title": "Volume léger — galop d'essai de la pyramide", "ex": [
        "SEMAINE MODIFIÉE LE 7 SEPTEMBRE : les tests partent en S9 (mer 16 et ven 18). Cette semaine ne mesure rien, elle décharge — voir la note « Deload & taper ». Aucune série max, aucun record : tu dois sortir de chaque séance en te disant que c'était court.",
        "1) Pyramide montante-descendante 5-7-9-7-5 au poids de corps ↘ — soit 33 reps, la moitié du volume habituel. Repos 2 min, la série de 9 doit rester à 3-4 reps de l'échec. C'est le galop d'essai du format qui devient la norme en phase 3 (note « Volume »).",
        "2) Circuit abdos x2 ↘ (crunch 8-10 @36 kg · obliques @36 kg · gainage 30s)",
        "3) Rowing horizontal 3x10 @50 kg ↘ (S7 : 54-61-68-68 — on ne cherche rien cette semaine)",
        "4) Dips lestés 3x8 @20 kg ↘ (78 % du barème = 27,5 kg d'habitude ; là c'est du mouvement, pas de la charge)",
        "PAS de série max : la prochaine est le vendredi 18 septembre, et c'est la dernière avant le test final de la S13"
      ]},
      { "day": 4, "type": "deload", "title": "Muscle-up technique + rappel d'intensité", "ex": [
        "Séance courte, et c'est la seule de la semaine qui touche du lourd : deux singles, pas un de plus.",
        "1) Face pulls 2x15 légers + coiffe 2x10 @6 kg — en échauffement, comme depuis la S6",
        "2) Muscle-up : 3-4 SINGLES techniques à froid, dans TA forme habituelle (léger appel de genoux + rotation des poignets, c'est une forme légitime — voir la note « Muscle-up »). Arrêt dès que l'appel augmente ou que les bras passent l'un après l'autre. Pas de série max cette semaine : elle est mesurée le vendredi 18.",
        "3) RAPPEL D'INTENSITÉ — tractions lestées 2x1 @30 kg (92 %), repos 4 min, VITESSE, jamais à l'échec. Ces deux singles sont le cœur du deload rallongé : un taper coupe le volume mais GARDE l'intensité, sinon on arrive plat au test (note « Deload & taper »).",
        "4) Muscle-up négatif 3x2 — descente lente 4-5s à travers la transition, les deux bras ensemble",
        "Toujours PAS de false grip, PAS de dead hang lourd, PAS de soulevé de terre : la prise doit arriver intacte au 16 septembre"
      ]},
      { "day": 5, "type": "course", "title": "Course ou sport — facile, et pas d'escalade", "ex": [
        "6-8 km allure vraiment facile, ou un sport — un seul créneau",
        "PAS D'ESCALADE ce week-end : elle a coûté le lundi force deux semaines de suite (note « Sports ajoutés ») et le test 1RM est mercredi prochain. Elle redevient possible après le vendredi 18."
      ]}
    ],

    /* ------ Semaine 9 — Phase 2 (semaine de TEST, décalée depuis la S8) ------ */
    [
      { "day": 0, "type": "deload", "title": "Activation — la semaine de test commence", "ex": [
        "Deuxième semaine de décharge, mais tu touches du lourd deux fois (vendredi dernier @30 kg, aujourd'hui @25 kg) : c'est ce qui évite d'arriver plat mercredi.",
        "1) Face pulls 2x15 légers + coiffe 2x10 @6 kg — en échauffement",
        "2) Tractions lestées 3x2 @25 kg (88 %) ↘ — VITESSE, repos 3 min, 3-4 reps en réserve à chaque série. Si ça sort dur, tu t'arrêtes à 2 séries : rien ne se gagne aujourd'hui, tout se perd.",
        "3) Tractions explosives 3x3 au poids de corps, jambes strictement immobiles — sec, rien à l'échec",
        "Rien d'autre. Pas de push lourd, pas de false grip, pas de dead hang, pas d'escalade avant vendredi."
      ]},
      { "day": 1, "type": "deload", "title": "Jambes — mobilité seulement (veille du test)", "ex": [
        "1) Mobilité hanches/chevilles 10 min + hollow hold 3x20s",
        "2) Squat barre léger 2x8 ↘ (40-50 kg, technique)",
        "3) Étirements 10 min",
        "Pas de soulevé de terre, pas de fentes lourdes : la veille du test les jambes ne servent à rien et la prise sert à tout"
      ]},
      { "day": 2, "type": "test", "title": "Test 1/2 — 1RM lesté tractions", "ex": [
        "Même découpage qu'en S4 (note « Tests ») : le 1RM part le mercredi, frais et seul. Pose-le un jour où tu es reposé — le test S4 est tombé un soir épuisant et a coûté des reps.",
        "Tu arrives dessus avec deux semaines sans séance lourde de volume et deux rappels d'intensité (2x1 @30 kg le 11, 3x2 @25 kg le 14) : c'est exactement la forme d'un taper réussi — volume effondré, intensité gardée. Si ça ne sort pas aujourd'hui, ce n'est pas la récupération qui aura manqué.",
        "MAGNÉSIE / craie dans le sac. En S7 les doubles à 34 kg sont tombés sur les avant-bras, pas sur le dos : si la prise lâche avant les dorsaux, le chiffre mesuré n'est pas ta force.",
        "Test 1RM lesté — cible 42,5-45 kg. Référence : 40 kg passés le 24 août EN FIN DE SÉANCE, donc à froid et reposé tu dois les dépasser.",
        "Montée ÉCONOME EN PRISE (chaque rep basse coûte au palier haut) : 5 à vide · 3 @15 · 1 @25 · 1 @32 · 1 @37 · 1 @40 · puis +2,5 kg par palier — repos 3-4 min, arrêt au 2e échec",
        "Si 40 kg montent franchement : tu continues par +2,5. Si 40 kg sortent limite : tu t'arrêtes là et tu notes 40 — un 1RM honnête vaut mieux qu'un chiffre arraché qui faussera tout le barème de la phase 3.",
        "Résultat + poids de corps → « 📈 Ma progression » le soir même : c'est ce chiffre qui règle toutes les charges de la phase 3",
        "Si le résultat dépasse 43 kg, l'objectif du cycle est atteint avec quatre semaines d'avance → on relève la cible pour la phase 3"
      ]},
      { "day": 4, "type": "test", "title": "Test 2/2 — muscle-up, max reps & dips", "ex": [
        "PLANIFIE CE VENDREDI comme mercredi : reposé, pas en fin de journée épuisante.",
        "ORDRE : échauffement complet → muscle-up → max reps → dips.",
        "1) MUSCLE-UP — UNE série max à froid. Le critère a été recalé le 7 septembre : on ne mesure pas des reps « strictes » (tu passes avec un léger appel de genoux + rotation des poignets, et c'est une forme légitime — note « Muscle-up »), on mesure TA forme tant qu'elle reste CONSTANTE. ARRÊT à la première rep où l'appel augmente — genoux plus hauts, hanches qui balancent — où les bras passent l'un après l'autre, ou où la transition cale. → LE CHIFFRE, c'est le nombre de MU enchaînés AVANT cette rep-là. Puis 2 séries de rappel, pas plus : la première avec un objet serré entre les genoux (repère de progression vers le strict, ça coûte 0 min de plus), la seconde libre.",
        "2) MAX REPS tractions PDC — cible 22+. Repères : 20 le 14/08, 21 le 26/08, 20 le 02/09. Le chiffre stagne depuis un mois pendant que le lesté monte : c'est normal en bloc de force max, et c'est exactement ce que ce test doit constater. → CHIFFRE À SAISIR. C'est le SEUL max du bloc et le dernier avant le test final de la S13 — tu as dit vouloir arrêter les max hebdomadaires, c'est acté à partir de la S10.",
        "3) TEST 1RM DIPS lestés — cible > 57,5 kg (S4 : 55 validés, 60 ratés de peu ; S7 : 4x5 @40 kg propres). Montée 3 @25 · 2 @40 · 1 @50 · puis +2,5 kg, arrêt au 2e échec. Surveille l'équilibre en fin de remontée : c'est lui qui a coupé ta série en S6, pas la force. À SAUTER si l'épaule parle — mais elle est muette depuis trois semaines.",
        "Les 3 résultats → « 📈 Ma progression », avec celui de mercredi. Profites-en pour saisir aussi les max reps déjà écrits dans tes remarques (20 le 14/08, 21 le 26/08, 20 le 02/09) : le graphique qui porte l'objectif du cycle est encore vide."
      ]},
      { "day": 5, "type": "course", "title": "Course ou sport — les tests sont passés", "ex": [
        "6-8 km allure facile, ou un sport — un seul créneau",
        "L'escalade redevient possible : les tests sont derrière toi et le lundi de la S10 est une séance de maintenance, pas une séance lourde. C'est la bonne fenêtre du cycle pour ça."
      ]}
    ],

    /* ------ Semaine 10 — Phase 3 ------ */
    [
      { "day": 0, "type": "force", "title": "Maintenance force", "ex": [
        "Face pulls 3x15 LÉGERS + coiffe 2x10 + renfo épaule 3x12 — en échauffement, avant les tractions",
        "Tractions lestées 4x4 ↘ à ~88% de la charge totale, à recalculer avec le 1RM du test de la S9 (voir la note « Pourcentages » ; avec le barème actuel, 88% = 25 kg de lest) — repos 3 min, on entretient, on ne cherche plus",
        "Développé couché haltères 4x8 (charge maintenue)"
      ]},
      { "day": 1, "type": "jambes", "title": "Jambes — maintenance & détente", "ex": [
        "Gainage 3x40s + hollow hold 3x30s — EN PREMIER (face pulls passés au lundi)",
        "Squat jumps 3x5 (explosivité, transfert muscle-up et course)",
        "Squat barre 3x6 (charge maintenue, pas de record)",
        "Fentes marchées 3x10/jambe @2x16 kg (le leg press est sorti du programme en S7 : il doublonnait avec le squat)",
        "Soulevé de terre roumain 3x8 avec sangles",
        "Mollets debout 3x15 si le temps le permet"
      ]},
      { "day": 2, "type": "volume", "title": "Maintenance volume", "ex": [
        "Tractions PDC 4x10 · Rowing horizontal 4x10 @60 kg",
        "Dips lestés 4x8 à ~78% de la charge totale (1RM dips mesuré en S4 : 57,5 kg de lest → 27,5 kg ici ; à recaler avec le retest de la S9)",
        "Circuit abdos x3 · gainage"
      ]},
      { "day": 4, "type": "explo", "title": "Muscle-up — priorité", "ex": [
        "Muscle-up : 6-8 singles, 1 par série, repos 90s, arrêt dès que l'appel de genoux augmente (la phase 3 ne cherche plus le MU, elle cherche l'enchaînement en forme constante). Si le test de la S9 valide 2 reps, cette ligne devient 4-5 séries de 2 et non des singles.",
        "False grip hang 3x30s — REMONTÉ EN 2e POSITION : c'est la ligne qui débloque le strict (poignet déjà au-dessus de la barre, plus de rotation à faire) et c'est celle qui a sauté trois vendredis sur quatre. Si tu ne dois garder que deux lignes aujourd'hui, ce sont les deux premières.",
        "Tractions explosives 5x3 jambes immobiles, un objet serré entre les genoux — repos 2-3 min",
        "Transitions muscle-up 4x3 sans assistance · Straight bar dips 3x10",
        "Tirage explosif +5 kg 3x3",
        "Dips explosifs lestés +15-20 kg 3x5, vitesse au verrouillage"
      ]},
      { "day": 5, "type": "course", "title": "Course — sortie longue", "ex": [
        "12 km allure facile"
      ]}
    ],

    /* ------ Semaine 11 — Phase 3 ------ */
    [
      { "day": 0, "type": "force", "title": "Maintenance force", "ex": [
        "Face pulls 3x15 LÉGERS + coiffe 2x10 + renfo épaule 3x12 — en échauffement, avant les tractions",
        "Tractions lestées 4x4 à ~88% de la charge totale (voir note « Pourcentages »)",
        "Développé couché haltères 4x8 (charge maintenue)"
      ]},
      { "day": 1, "type": "jambes", "title": "Jambes — maintenance & détente", "ex": [
        "Gainage 3x40s + hollow hold 3x30s — EN PREMIER (face pulls passés au lundi)",
        "Squat jumps 3x5 (explosivité, transfert muscle-up et course)",
        "Squat barre 3x6 (charge maintenue, pas de record)",
        "Fentes marchées 3x10/jambe @2x16 kg (le leg press est sorti du programme en S7 : il doublonnait avec le squat)",
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

    /* ------ Semaine 12 — Phase 3 ------ */
    [
      { "day": 0, "type": "force", "title": "Maintenance force", "ex": [
        "Face pulls 3x15 LÉGERS + coiffe 2x10 + renfo épaule 3x12 — en échauffement, avant les tractions",
        "Tractions lestées 4x4 à ~88% de la charge totale (voir note « Pourcentages »)",
        "Développé couché haltères 4x8 (charge maintenue)"
      ]},
      { "day": 1, "type": "jambes", "title": "Jambes — maintenance & détente", "ex": [
        "Gainage 3x40s + hollow hold 3x30s — EN PREMIER (face pulls passés au lundi)",
        "Squat jumps 3x5 (explosivité, transfert muscle-up et course)",
        "Squat barre 3x6 (charge maintenue, pas de record)",
        "Fentes marchées 3x10/jambe @2x16 kg (le leg press est sorti du programme en S7 : il doublonnait avec le squat)",
        "Soulevé de terre roumain 3x8 avec sangles",
        "Mollets debout 3x15 si le temps le permet"
      ]},
      { "day": 2, "type": "volume", "title": "Volume — début du taper", "ex": [
        "DERNIÈRE GROSSE SÉANCE DE VOLUME AVANT LE TEST FINAL, et elle est déjà allégée : le test du 14 octobre est dans 8 jours (note « Deload & taper » — on compte 10 à 14 jours entre le dernier gros volume et un test).",
        "Pyramide montante-descendante ↘ à ~60% du volume habituel · Rowing horizontal 3x10",
        "Dips lestés 3x8 à ~78% de la charge totale ↘",
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

    /* ------ Semaine 13 — Phase 3 (test final) ------ */
    [
      { "day": 0, "type": "deload", "title": "Rappel d'intensité — semaine du test final", "ex": [
        "Face pulls légers 2x15 + coiffe 2x10 — en échauffement",
        "Tractions lestées 2x1 à ~92% ↘ — repos 4 min, VITESSE, jamais à l'échec. Volume au plancher, intensité gardée : c'est le protocole validé avant le test de la S9 (note « Deload & taper »).",
        "Rien d'autre. Pas de false grip, pas de dead hang lourd, pas de soulevé de terre avant vendredi."
      ]},
      { "day": 1, "type": "deload", "title": "Jambes — très léger (semaine de test)", "ex": [
        "Squat barre léger 2x8 ↘",
        "Mobilité complète 15 min"
      ]},
      { "day": 2, "type": "test", "title": "TEST FINAL 1/2 — 1RM lesté", "ex": [
        "Même découpage qu'en S4 et S9 (note « Tests ») : échauffement complet → 1RM lesté, et rien d'autre",
        "Test 1RM lesté tractions (objectif du cycle : 43 kg, départ 35)",
        "Résultat + poids de corps (objectif : 80 kg, départ 83,8) → « 📈 Ma progression »"
      ]},
      { "day": 4, "type": "test", "title": "TEST FINAL 2/2 — max reps, dips & muscle-up", "ex": [
        "ORDRE : échauffement complet → muscle-up → max reps → dips",
        "Muscle-up : le maximum de reps enchaînées EN FORME CONSTANTE, même critère d'arrêt qu'au test de la S9 (bras après bras, appel qui augmente, transition qui cale). Chemin parcouru : bras après bras en S3, les deux bras ensemble en S5, 3 d'affilée avec appel léger en S7.",
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
