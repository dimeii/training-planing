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
    { "id": 3, "name": "Muscle-up & bascule course", "start": 10, "end": 13, "color": "#C77F00" },
    { "id": 4, "name": "Semi-marathon & hyrox", "start": 14, "end": 18, "color": "#2E7D7B" }
  ],

  "goals": [
    { "label": "Semi 22 nov", "value": "sub 1h50 · 5:12/km" },
    { "label": "Max reps", "value": "17 → 23 · cible 25-30" },
    { "label": "1RM lesté", "value": "35 → 45 kg · cible 50" },
    { "label": "Objectif", "value": "MU enchaînés · hyrox" }
  ],

  "metrics": [
    { "key": "reps",    "label": "Max reps tractions",  "unit": "reps", "color": "#3E5F8A", "start": 17,   "target": 25, "dir": "up" },
    { "key": "pull1rm", "label": "1RM lesté tractions", "unit": "kg",   "color": "#B3402E", "start": 35,   "target": 50, "dir": "up" },
    { "key": "dip1rm",  "label": "1RM lesté dips",      "unit": "kg",   "color": "#C77F00", "start": 47,   "target": 70, "dir": "up" },
    { "key": "long",    "label": "Sortie longue",       "unit": "km",   "color": "#4B7F52", "start": 12,   "target": 20, "dir": "up" },
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
    { "label": "Structure de semaine", "text": "CE QUI CONTRAINT : télétravail LUN et VEN · bureau MAR-JEU, 1 h de trajet, retour vers 18h30 · cours sur site le MER 19h30-22h30 · visio 1 h le JEU soir · révisions LUN, MAR, VEN soir et une partie du week-end · 5 km en groupe le dimanche. CE QUE TU AS DEMANDÉ LE 18 SEPTEMBRE : garder le lourd ET le volume aux tractions, progresser en course, et ne pas raccourcir les séances — tu as du temps le lundi midi et le samedi. LA SEMAINE : LUN midi — SALLE 1, muscle-up + false grip + tractions lourdes + tirage + push, 75 min · MAR — course qualité depuis chez toi · MER — REPOS (cours) · JEU — footing facile, optionnel · VEN — SALLE 2, jambes + circuit hyrox · SAM — SALLE 3, volume tractions (EMOM, dips, rowing, abdos), 50 min · DIM matin — SORTIE LONGUE. Trois séances de salle, deux à trois courses, un jour de repos. POURQUOI CET ORDRE, ET IL N'EST PAS ARBITRAIRE. (1) La séance qui décide du cycle est le LUNDI MIDI : ton meilleur créneau, sans montre, et le jour le plus fiable du carnet (dix semaines sans exception). (2) Les JAMBES SONT LE VENDREDI, jamais le samedi : il faut 40 h entre des jambes chargées et la sortie longue du dimanche matin. (3) Le SAMEDI EST DU HAUT DU CORPS : l'EMOM et les dips ne coûtent rien aux 20 km du lendemain. (4) La course dure est le MARDI — zéro logistique un jour de bureau, et cinq jours de recul avant la sortie longue. (5) Le JEUDI, ta pire soirée (bureau + trajet + visio), ne porte qu'un footing facile écrit comme optionnel. TROIS LIGNES QUI NE BOUGENT JAMAIS : la sortie longue du dimanche, le lundi midi, la séance de seuil du mardi. Tout le reste peut sauter une fois sans conséquence." },
    { "label": "Allures de course (référence : 10 km en 47:00)", "text": "Toutes les allures du plan sortent de ce seul chiffre : 10 km en 47:00 = 4:42/km. FACILE / ENDURANCE FONDAMENTALE : 5:45-6:00/km — c'est l'allure où tu peux tenir une conversation en phrases complètes, et c'est 80 % de ton volume. SORTIE LONGUE : 5:40-5:55/km. ALLURE SEMI CIBLE (sub 1h50) : 5:12/km — filet de sécurité sub 2h à 5:41/km, pari sub 1h45 à 4:58/km. SEUIL / TEMPO : 4:50-4:55/km, l'allure que tu tiendrais ~1h en course, trois mots pas trois phrases. INTERVALLES 1000 m : 4:30-4:35/km. INTERVALLES 800 m : 4:20-4:25/km. Et une correction : les 5x600 m courus à 3:30-3:45/km le 16 août étaient à allure 1500 m, largement trop vite pour un plan semi — ça ne développe pas l'endurance, ça fatigue. SI TON 10 KM EST EN RÉALITÉ PLUS RAPIDE (le 5 km en 21:30 sur tapis et les 7 km à 4:34 suggèrent plutôt 45'), toutes ces allures descendent de 10 s/km et la cible passe à 1h45. Un 10 km chronométré sur les six premières semaines permettrait de trancher — mais pas en compétition la semaine d'une sortie longue. TRANCHÉ À MOITIÉ LE 20 SEPTEMBRE : 16 km en 1h20, soit 5:00/km de moyenne, au lendemain d'un Cindy, ressenti « Dur », quadriceps qui tirent. Couru à 45 s/km de trop par rapport à la consigne, c'est une faute d'entraînement — mais c'est aussi une information sur le moteur : 16 km à 5:00 sur des jambes fatiguées, ça ne ressemble pas à un coureur de 1h50, ça ressemble à 1h45-1h48 tenu sagement. LA CIBLE N'EST PAS RELEVÉE AUJOURD'HUI POUR AUTANT : elle se tranche le DIMANCHE 11 OCTOBRE (S12), sur les 5 km à 5:12 de la sortie longue. S'ils passent en te disant « je pourrais tenir ça longtemps », toutes les allures de ce tableau descendent de 10 s/km et la cible devient 1h45 (4:58/km). Et la conséquence immédiate ne bouge pas d'un mot : le facile reste à 5:45-6:00. Ce sont les kilomètres lents qui construisent les 21 km, pas les sorties à 5:00." },
    { "label": "Hyrox — stations et substitutions", "text": "LE FORMAT : 8 fois (1 km de course + une station), dans cet ordre — 1000 m ski erg · 50 m sled push · 50 m sled pull · 80 m burpee broad jump · 1000 m rameur · 200 m farmers carry 2x24 kg · 100 m fentes sandbag 20 kg · 100 wall balls 6 kg. LA QUALITÉ QUI DÉCIDE DU CHRONO, ce n'est aucune des stations prises isolément : c'est la CAPACITÉ À COURIR AVEC LE CARDIO DÉJÀ EN L'AIR. C'est pour ça que le plan contient une simulation « course compromise » (mardi de la S15 : 4 tours de 800 m + une station de 2 min enchaînés) plutôt que des stations travaillées séparément. SUBSTITUTIONS quand le matériel n'est pas libre : ski erg → rameur, corde à sauter 3 min, ou tirage poulie haute debout · sled push → fentes marchées lestées, presse à cuisses en séries longues, ou pousser une plaque sur le sol · sled pull → tirage poulie basse lourd en continu, ou rowing · burpee broad jump → burpees + saut en longueur, faisable partout · rameur → vélo, assault bike, ou tapis · farmers carry → 2 kettlebells 20-24 kg · fentes sandbag → fentes barre sur le dos ou 2 kettlebells · wall balls → medecine ball contre un mur, ou thrusters haltère. CE QUE TU AS DÉJÀ : ton squat à 80 kg, tes fentes à 2x20 kg et ton soulevé de terre à 100 kg couvrent largement la partie force des stations. Ce qui te manque n'est pas la force, c'est la filière — et c'est la course qui la construit. JUSQU'AU 22 NOVEMBRE, l'hyrox est le FORMAT du travail de force, pas un objectif concurrent : un circuit par semaine, jamais à fond la veille d'une séance de course. Le vrai bloc hyrox commence le 23 novembre, avec le bilan du semi." },
    { "label": "Épaule gauche", "text": "Signalée trois fois en S5 (mercredi 19 dès l'échauffement, vendredi 21 séance écourtée, samedi 22 sur un upper chest flight). RÉSOLU EN S6 : bloc épaule complet remonté en échauffement du lundi → aucune douleur de la semaine, un simple titillement aux dips le mercredi, « c'est vite parti ». CONFIRMÉ EN S7 : deuxième semaine complète sans la moindre mention de douleur, y compris sur les dips lestés à 40 kg et sur du développé incliné ajouté deux fois. La cause était la place du renfo, pas la charge. Ça ne bouge plus : le renfo épaule est EN PREMIER dans les séances du haut, point. Le code couleur reste valable si ça revient. VERT — rien à l'échauffement : séance normale. ORANGE — ça tire à l'échauffement ou sur un mouvement : tu supprimes CE mouvement (dips, straight bar dips, écarté / pec deck / upper chest flight, développé) et tu gardes le tirage, qui ne l'irrite pas ; le renfo coiffe se fait quand même. ROUGE — ça réveille la nuit, ça tire au repos, ou tu perds de l'amplitude : kiné avant de continuer le bloc, il reste 6 semaines, une épaule ne se rattrape pas." },
    { "label": "Pectoral gauche (19 septembre)", "text": "NOUVEAU SIGNAL, et il ne se confond pas avec l'épaule : après le Cindy du samedi 19 septembre (20 min de 5 tractions / 10 pompes / 15 squats, ressenti « Dur »), tu notes « peut-être douleur au pectoraux gauche ou grosse courbature ». Un Cindy, c'est 150 à 250 pompes en vingt minutes quand tu n'en fais jamais : la courbature est de loin l'explication la plus probable. LE TEST EN DIX SECONDES, à faire avant la séance du lundi. COURBATURE : gêne diffuse sur tout le muscle, sensible à la palpation large, à peu près symétrique, et elle DIMINUE quand tu t'échauffes — partie sous 72 h. LÉSION : douleur POINTUE et localisée, le plus souvent près de l'aisselle ou du sternum, réveillée par l'étirement bras écarté en arrière et par une contraction résistée, et que l'échauffement n'améliore pas. SI C'EST UNE COURBATURE : séance normale, tu ne changes rien. SI C'EST POINTU : niveau ORANGE de la note « Épaule gauche » appliqué aux mêmes mouvements — développé incliné et dips SUPPRIMÉS, tirage et tractions GARDÉS (ils ne mettent pas le pectoral en tension), et tu revérifies le samedi. SI C'EST ENCORE POINTU LE SAMEDI 26 : les dips sautent aussi, et deux semaines de suite relèvent d'un avis médical, pas d'une adaptation de programme. Ce qui ne se discute pas : un pectoral douloureux ne se teste pas en chargeant « pour voir »." },
    { "label": "Deload & taper", "text": "LE PRINCIPE, valable pour les deux échéances de ce carnet : un taper coupe le VOLUME de 40 à 60 %, il ne coupe PAS l'intensité. Dix jours sans rien toucher de lourd (ou de rapide) et on arrive plat — le système nerveux se désamorce et la performance baisse au lieu de monter. CE QUI A ÉTÉ VÉRIFIÉ EN SEPTEMBRE : la décharge de la S8 a très bien marché côté volume (les trois séances notées « Facile ») et le 1RM a pris +5 kg derrière — mais le rappel d'intensité du vendredi 11 n'a PAS été fait, ce qui a laissé 14 jours sans rien au-dessus de 88 % devant le test. Leçon appliquée deux fois : un rappel d'intensité posé en fin de semaine a une chance sur deux de sauter, donc il se place en DÉBUT de semaine (lundi 12 octobre pour le test de tractions, lundi 16 novembre pour le semi). TAPER TRACTIONS (S12-S13) : dernier contact lourd le lundi 5 octobre, jambes allégées et EMOM coupé de moitié le 9-10, rappel à 92 % le lundi 12, premier test le vendredi 16. TAPER SEMI (S17-S18) : le volume de course baisse de 40 % en S17 et de 65 % en S18, mais les allures restent — 4x1000 à allure 10 km le mardi 10 novembre, 8 km à allure course le dimanche 15, des rappels de 1 min à 5:12 le 17 et le 21. Zéro séance de salle dure en semaine 18, plus de circuit hyrox à partir du 13 novembre, et plus aucune courbature possible à partir du 9. Repères généraux : une décharge toutes les 4 à 6 semaines de charge, une semaine pleine, et 10 à 14 jours entre le dernier gros volume et un test — la dernière grosse sortie longue est le 8 novembre, soit 14 jours avant le semi." },
    { "label": "Pourcentages", "text": "Sur les tractions et les dips, un % se calcule sur la charge TOTALE (poids de corps + lest), jamais sur le lest seul. 1RM total = poids de corps + lest max. Lest à mettre = (% × 1RM total) − poids de corps. Exemple avec les chiffres à jour : 82,5 kg de corps + 45 kg de lest = 127,5 kg de total ; 92 % = 117,3 kg → 35 kg de lest à la ceinture. Même calcul aux dips : 82,5 + 65 = 147,5 kg ; 78 % = 115 kg → 32,5 kg de lest. C'est ce qui a été corrigé après la S3 : les charges de la phase 2 calculées sur le lest seul valaient 95-98 % du total, infaisables en 5x3." },
    { "label": "Barème phase 3 (mesuré les 14 et 16 septembre)", "text": "TRACTIONS — 45 kg de lest, lundi 14 septembre, à froid et en ouverture de séance. Déroulé : 3 @15 · 1 @25 · 1 @32 · 1 @42,5 (palier sauté par erreur de comptage, la rep passe quand même) · 1 @45 avec un petit appel en haut · puis 1 @45 et encore 1 @45 PROPRES · 1 @47,5 raté de quelques centimètres · 1 @47,5 en échec. Trois singles à 45 kg dans la même séance, ce n'est pas un maximum arraché : c'est une charge tenue. Le 1RM réel est probablement entre 46 et 47, mais on programme sur 45, la valeur validée. PROGRESSION : 35 kg au départ (20 juillet, estimation), 37,5 le 12 août, 40 le 24 août, 45 le 14 septembre — +10 kg en huit semaines, dont +5 sur un bloc de force max suivi d'une décharge complète. L'objectif du cycle (43 kg) est dépassé avec quatre semaines d'avance, la cible du graphique est passée à 50 kg à ta demande pour le test final du VENDREDI 16 OCTOBRE (47,5 reste le chiffre attendu, 50 le pari). POIDS DE CORPS ENFIN REPESÉ : 82,5 kg le 15 septembre (c'est lui qui rend le calcul juste) → 1RM TOTAL 127,5 kg. Lest correspondant : 80 % → 19,5 kg · 85 % → 26 kg · 88 % → 30 kg · 90 % → 32 kg · 92 % → 35 kg · 95 % → 38,5 kg · 100 % → 45 kg. Repère concret : le 5x3 @30 kg de la S7, qui était ton 92 %, est devenu ton 88 % — la même séance est désormais du travail de maintenance, et c'est exactement ce qu'elle est en S10. DIPS — RETESTÉS LE 16 SEPTEMBRE, en même temps que le max reps : 57,5 puis 60 puis 65 kg validés, échec à 70. Le barème d'août (57,5 kg) est périmé de 7,5 kg. Nouveau 1RM lesté 65 kg → 1RM TOTAL 147,5 kg. Lest correspondant : 78 % → 32,5 kg · 80 % → 35,5 kg · 84 % → 41,5 kg · 87 % → 46 kg · 90 % → 50 kg · 95 % → 57,5 kg. Toutes les lignes de dips de la phase 3 sont recalées là-dessus : l'ancien « 4x8 à 78 % » valait 27,5 kg, il vaut maintenant 32,5. Si le poids de corps bouge de plus de 2 kg, tout se recalcule (le lest baisse quand le corps monte, et inversement)." },
    { "label": "Mesures", "text": "Le carnet a enfin des chiffres dedans : 1RM lesté 40 kg (24/08) puis 45 kg (15/09), poids de corps 82,5 kg (15/09), et le premier point du graphique max reps. RESTENT À SAISIR, ET ILS SONT MAINTENANT TROIS, tous visibles dans le bilan du 21 septembre : le MAX REPS À 23 (16/09, record) · le 1RM DIPS À 65 KG (16/09, record) · les 16 KM DU 20 SEPTEMBRE, déjà la plus longue sortie du carnet et le premier point possible du graphique « Sortie longue ». Trois records mesurés, zéro saisi : le carnet affiche « aucune mesure enregistrée » sur deux graphiques alors que les chiffres sont écrits dans tes propres remarques de séance. CINQ GRAPHIQUES DEPUIS LE 17 SEPTEMBRE : max reps (17 → 25) · 1RM lesté tractions (35 → 50, cible relevée à ta demande) · 1RM lesté dips (47 → 70) · SORTIE LONGUE (12 → 20 km — c'est le graphique qui porte le semi, une valeur par dimanche) · poids de corps (83,8 → 80). La sortie longue est celui qu'il faut vraiment tenir à jour : c'est la seule métrique qui prédit le chrono du 22 novembre, bien mieux que le fractionné. Une ligne par semaine, dix secondes." },
    { "label": "Ce qui est en dernier ne se fait pas", "text": "Sept semaines d'observation, aucune exception : gainage et étirements de la séance jambes, transitions MU reportées en fin de test, renfo épaule et false grip du vendredi, circuit abdos du mercredi — tout ce qui est placé en dernier saute, tout ce qui remonte en tête se fait. Puis le constat a changé d'échelle : ce n'était plus seulement la fin de séance, c'était LE VENDREDI — écourté ou annulé une semaine sur deux depuis la S5, celui du 11 septembre annulé en entier. LA RÈGLE QUI EN SORT, et elle a résisté à trois réorganisations en deux jours : CE QUI DÉCIDE DU CYCLE SE MET SUR LE JOUR LE PLUS FIABLE ET SUR LE MEILLEUR CRÉNEAU. Aujourd'hui c'est le LUNDI MIDI, en télétravail : muscle-up, false grip, tractions lourdes. Le reste est réparti selon ce que chaque jour peut vraiment absorber — course sur les jours de bureau (aucune logistique), salle sur les jours de télétravail et le samedi, footing optionnel sur la soirée la plus chargée. Ce n'est plus une question d'ordre dans la séance, c'est une question de créneau. Le corollaire tient toujours : dans une séance, les lignes sont numérotées par ordre d'importance et ce sont les dernières qui sautent — c'est prévu. Vérifié en S7 : la séance jambes ramenée à 5 lignes a été faite EN ENTIER, avec du dépassement partout, après un abandon en cours de séance en S6 sur le format à 7 lignes." },
    { "label": "Face pulls", "text": "Déplacés du mardi au lundi (S4) : ils partent en ÉCHAUFFEMENT du jour force, avant les tractions lestées, + 1 série le vendredi. VALIDÉ EN S6 : bloc en tête de séance = zéro douleur d'épaule de la semaine, contre trois séances douloureuses en S5 avec le même bloc relégué en fin de séance. Charge LÉGÈRE, coudes hauts, aucun haussement d'épaules, la 15e rep doit rester facile — c'est de la prévention, pas un tirage. Si un face pull fatigue, il est trop lourd." },
    { "label": "Tests", "text": "Les tests ne se font plus le même jour — un max reps fait 15 min après des singles lourds coûte 2 à 4 reps. CE QUI S'EST PASSÉ EN S9, et qui sert de modèle : le 1RM lesté pris SEUL le lundi 14 (45 kg), puis le max reps ET le 1RM dips ENSEMBLE le mercredi 16 (23 reps et 65 kg, deux records). Tractions et dips ne partagent pas la musculature, ils ne se gênent pas ; ce qui ne se regroupe pas, c'est tirage max + tirage max, et le muscle-up ne se mesure jamais derrière une série à l'échec. TEST FINAL DU CYCLE TRACTIONS, calé sur tes créneaux réels : VENDREDI 16 OCTOBRE le 1RM lesté seul, sur un jour de télétravail — pas de trajet, pas d'horaire subi, quatre jours pleins depuis le rappel d'intensité du lundi 12 (cible 47,5, pari 50) · SAMEDI 17 le muscle-up seul, 20 minutes · LUNDI 19 le max reps en ouverture PUIS les dips, encore un jour de télétravail. POURQUOI LE MAX REPS EST REPOUSSÉ AU LUNDI : c'est l'objectif principal du carnet (17 → 25 reps), il mérite le meilleur créneau — 48 h après le muscle-up, prise et épaules reposées. Trois tests en trois jours d'affilée lui auraient coûté deux ou trois reps. LE QUATRIÈME TEST DU CARNET EST LE SEMI LUI-MÊME, le dimanche 22 novembre, et la répétition générale est le dimanche 15 novembre (14 km dont 8 à allure course), qui vaut validation ou non de la cible sub 1h50. Consigne héritée de la S4 : un test posé un jour épuisant mesure la fatigue, pas la forme." },
    { "label": "Muscle-up", "text": "Diagnostic S3 : le MU passait bras après bras parce que le gainage lâchait à la bascule — le facteur limitant n'a jamais été la force de tirage. Le diagnostic était le bon : négatifs + tractions explosives jambes bloquées + hollow → 2 MU LES DEUX BRAS ENSEMBLE le 21 août, un premier MU propre en S6, puis 3 D'AFFILÉE le 4 septembre. En sept semaines la ligne est passée de « bras après bras » à un enchaînement de trois. TA FORME EXACTE : ce n'est pas un MU strict — il y a un LÉGER APPEL DES DEUX GENOUX et une rotation des poignets par-dessus la barre. Deux choses très différentes. (1) La ROTATION DES POIGNETS n'est pas de la triche, c'est la technique : sans false grip, le poignet est sous la barre et il DOIT tourner. Le false grip est l'autre chemin — poignet déjà au-dessus au départ, plus rien à tourner ; c'est ce qui rend le strict possible. (2) Le LÉGER APPEL DE GENOUX est bien une assistance, un kip minimal : muscle-up légitime, le plus répandu, mais pas le strict. TA FORCE N'EST PAS LE FREIN, les tests de septembre l'ont confirmé : 45 kg de lest en traction = 55 % de ton poids de corps ajouté, 65 kg aux dips = 79 %, les deux très au-dessus du seuil habituellement admis pour un MU strict (~40-50 % en traction). Ce qui manque n'est ni le dos ni les triceps : c'est la HAUTEUR DE TIRAGE et la transition. SA PLACE DANS LA SEMAINE, depuis le 17 septembre : EN OUVERTURE DU LUNDI, à froid, avant les tractions lourdes — c'est le jour le plus fiable du carnet et c'est le bon ordre physiologique (explosif puis force max). Le false grip le suit immédiatement. LE CHEMIN VERS LE STRICT, dans cet ordre : le false grip d'abord (c'est LA ligne qui sautait systématiquement quand elle était le vendredi), puis la hauteur de tirage (tractions sternum à la barre), puis les négatifs lents, puis réduire l'appel en serrant un objet entre les genoux. CRITÈRE DE MESURE, inchangé depuis le 7 septembre : on ne compte pas des reps « strictes » mais TA forme tant qu'elle reste CONSTANTE — arrêt à la première rep où l'appel augmente, où les bras passent l'un après l'autre, ou où la transition cale. RÉSULTAT DU TEST DU 18 SEPTEMBRE : 3 MU en forme constante avec un léger appel, puis 3 à 4 séries de 2-3 reps où « plus on avançait plus je kickais ». DEUX LECTURES. (1) LE CHIFFRE : 3 reps le 4 septembre, 3 reps le 18 — la série max plafonne depuis quinze jours, et c'est normal : entre les deux il y a eu une décharge complète puis une semaine de test, donc zéro travail spécifique. Ce n'est pas un plateau, c'est une absence de stimulus. (2) LE DÉROULÉ : les séries qui ont suivi le max ont dérivé rep après rep, exactement ce que la règle d'arrêt interdit — et un appel de genoux répété quinze fois, c'est un pattern qui s'ancre. CONSÉQUENCE POUR LA S10 : aucune série max, 5 séries de 2 — DIX REPS TOUTES PROPRES au lieu de trois propres et dix sales. La série max revient le 17 octobre, en test, et pas avant. CE QUI DÉCIDE LA SUITE reste la hauteur de tirage et le false grip : avec 45 kg de lest en traction, la force ne peut plus être l'explication. Et tu as ajouté de toi-même, le 18, des tractions explosives lestées à 2,5 puis 5 kg — c'est précisément le bon outil, il entre officiellement au lundi." },
    { "label": "Prise & avant-bras", "text": "Le facteur limitant récurrent du carnet, et il n'a jamais été les dorsaux ni les jambes. Soulevé de terre : série coupée par la prise en S2, en S6 (sangles oubliées) et à moitié en S7 — réglé le 1er septembre avec des gants, 100 kg passés. Tractions lourdes : les 2x2 @34 kg du lundi de la S7 en échec sur les avant-bras, au lendemain d'une séance d'escalade. LA CONSIGNE A PAYÉ EN S9 : dix jours sans dead hang lourd, sans false grip et sans soulevé de terre devant la semaine de test, et les trois chiffres sont tombés — 45 kg, 23 reps, 65 kg aux dips, aucune mention d'avant-bras dans les trois bilans. Les trois règles restent écrites dans le programme : (1) la semaine de test protège la prise — rien qui la crame dans les dix jours qui précèdent ; (2) la montée du 1RM est ÉCONOME EN REPS, parce que chaque rep de palier bas se paye au palier haut ; (3) magnésie ou craie au test, systématiquement. En phase 3 la prise redevient libre (SDT @100 kg avec gants dès la S10), puis elle se reverrouille à partir du lundi de la S12 : plus de soulevé de terre, plus de dead hang lourd jusqu'au test final. Et en positif : l'escalade et le false grip DÉVELOPPENT cette prise — le problème n'est pas de les faire, c'est de les faire la veille d'un jour lourd." },
    { "label": "EMOM tractions — le format du samedi", "text": "REMPLACE LA PYRAMIDE À PARTIR DE LA S10, à ta demande : « EMOM 70 % max sur 10-15 min puis circuits ». L'idée est bonne, LE CHIFFRE NE L'EST PAS — c'est l'erreur la plus courante sur ce format. Sur un EMOM, le repos est ce qui reste de la minute : à 70 % de 23 reps, soit 16 tractions par minute, tu es en échec à la deuxième minute. LA RÉFÉRENCE EST 30-40 % DU MAX, soit 7 à 8 reps par minute pour toi. Ça donne 70-80 reps sur 10 minutes — EXACTEMENT le volume de l'ancienne pyramide (60-74 reps), en 10 minutes au lieu de 35, avec la densité en plus. C'est un meilleur outil pour les 25 reps, et c'est le langage hyrox. LE FORMAT RETENU garde la spécificité d'une grosse série : 7-8 reps au top de chaque minute sur les 9 premières, puis LA MINUTE 10 EN SÉRIE LIBRE. Le max sort à la fin, à la fatigue, sans en faire un test — et il n'y a plus aucune série max hebdomadaire jusqu'au 19 octobre (les faits ont tranché : 21 le 26/08, 20 le 02/09, puis 23 le 16/09 après DEUX SEMAINES SANS AUCUN MAX). PROGRESSION, par la durée avant les reps : S10 → 7 x 10 min · S11 → 8 x 10 · S12 → 6 x 8 (taper du test) · S14 → 8 x 10 · S15 → 7 x 12 · S16 → 8 x 12 (pic, ~95 reps) · S17 → 6 x 8. SI UNE MINUTE NE PASSE PAS : tu descends d'une rep et tu termines. Noter à quelle minute ça a lâché vaut mieux que de s'arracher — c'est cette minute-là qui mesure ta progression d'une semaine sur l'autre. SA PLACE EST LE SAMEDI, avec les dips, le rowing et les abdos : c'est du haut du corps, donc ça ne coûte rien à la sortie longue du dimanche matin — alors que les jambes du vendredi, elles, ont besoin de leurs 40 h." },
    { "label": "Push ajouté", "text": "Il ajoute du push de lui-même depuis la S2, et le carnet a pour habitude d'officialiser ce qui se fait déjà plutôt que de le subir. Nouveauté de la S7 : le développé couché à plat a été remplacé de sa propre initiative par du DÉVELOPPÉ INCLINÉ (4x8-10 @40-50-60-60 le lundi, puis encore 10 @40-60-60 le mercredi), motif « développer le haut des pecs en retard ». C'est cohérent, et l'épaule n'a rien dit de la semaine. Deux réserves à tenir : l'incliné met l'épaule dans une position plus exposée que le plat — c'est la première ligne à couper si la douleur revient (note « Épaule gauche », niveau ORANGE) ; et deux séances de push par semaine s'ajoutent à quatre séances de haut du corps, donc l'incliné du mercredi reste léger. Toujours pas d'écarté / pec deck / upper chest flight : c'est le mouvement sur lequel l'épaule a lâché en S5." },
    { "label": "Course — plan semi (22 novembre)", "text": "OBJECTIF : semi-marathon le DIMANCHE 22 NOVEMBRE, cible sub 1h50, référence 10 km en 47:00. CE QUE DIT LE CALCUL : un 10 km à 47:00 (4:42/km) prédit un semi autour de 1h43-1h45 pour quelqu'un qui a le volume derrière. Ta vitesse n'est pas le problème — sub 1h50 (5:12/km) est dans tes cordes, sub 2h (5:41/km) est le filet. LE PROBLÈME EST LE VOLUME : tu courais une fois par semaine, 7 à 12 km. L'ÉCHELLE A ÉTÉ RECALÉE LE 21 SEPTEMBRE SUR CE QUE TU FAIS DÉJÀ : les 16 km du 20 septembre rendaient absurde une progression qui repartait de 12. Le volume monte à ~28 km en S10 et ~38 km au pic (S16), avec une sortie longue qui va de 14 km (27/09) à 20 km (08/11) — 14 · 16 · 17 · 12 (semaine de test) · 18 · 14 · 20 · 14 (répétition générale) · 21,1. Ce qui progresse en premier n'est donc plus la distance mais l'allure, qui doit REDESCENDRE : tu as déjà la distance, tu n'as pas encore le facile. LES TROIS CRÉNEAUX : MARDI la qualité (seuil ou intervalles, version courte de 38-42 min écrite à côté de la complète) · JEUDI un footing facile optionnel · DIMANCHE MATIN la sortie longue, 40 h après les jambes du vendredi. LE 5 KM DU DIMANCHE EN GROUPE EST INTÉGRÉ À LA SORTIE LONGUE, jamais ajouté : version idéale, il en constitue les 5 derniers kilomètres (un long qui finit un peu plus vite est un excellent exercice de semi) ; version simple, il l'ouvre. Ce qu'il ne faut PAS faire : courir 5 km avec eux et appeler ça la sortie du dimanche. LA RÈGLE QUI DÉCIDE DE TOUT : 80 % du volume en FACILE, à 5:45-6:00/km. Trois fois en phase 1 la sortie « facile » du dimanche est partie en fractionné (5x600 m à 3:30/km le 16 août). Il n'y a plus de sortie facile le dimanche — il y a la sortie longue, et elle se court lentement. TROIS SIGNAUX D'ALERTE qui imposent de couper une sortie : douleur de tibia ou de genou qui persiste au-delà de l'échauffement, sommeil dégradé deux nuits de suite, ou une sortie facile qui devient pénible à 6:00/km. ET UNE VÉRIFICATION À MI-PARCOURS : la séance de 20 min continues au seuil du 3 novembre et la répétition générale du 15 novembre (8 km à 5:12) valident — ou non — la cible sub 1h50. CE QUI S'EST PASSÉ LE 20 SEPTEMBRE, ET C'EST LA QUATRIÈME FOIS : 16 km à 5:00/km au lieu de 5:45-6:00, parce que tu es arrivé trop tard, que tu as accéléré pour rattraper le groupe, coupé une partie du circuit, puis rajouté des kilomètres derrière pour compléter. Sortie juste sur la distance, fausse sur l'allure, et elle a coûté une journée de récupération. LA RÈGLE QUI EN SORT : on ne rattrape jamais un groupe en cours de sortie longue. Soit tu pars 10 minutes avant eux et ils te rejoignent, soit tu les retrouves au point suivant, soit tu cours seul — mais l'allure de ta sortie longue ne se décide pas par la position des autres sur le parcours." },
    { "label": "Sports ajoutés", "text": "Badminton, tennis, escalade, séances avec des amis : il y en a toutes les semaines et c'est très bien, mais depuis que le samedi est devenu une séance de salle, il n'y a plus de créneau libre — ils REMPLACENT une séance, ils ne s'ajoutent pas (note « Charge totale »). Le meilleur échange : l'escalade à la place du SAMEDI (volume tractions), puisque c'est le même travail de tirage. L'ESCALADE est une séance de tirage complète (avant-bras, dorsaux, coudes) et elle laisse des courbatures 48 h : placée le samedi elle ne gêne pas la sortie longue du dimanche (jambes) mais elle tape sur le lundi, qui porte le muscle-up et les tractions lourdes. C'est arrivé deux fois, et la deuxième est chiffrée : les 2x2 @34 kg du lundi 31 août en échec, « avant-bras trop fatigué à cause de l'escalade ». RÈGLE : une semaine sur deux au maximum, et le lundi qui suit perd une série de tractions. FENÊTRES FERMÉES : le week-end des 10-11 octobre (test la semaine suivante) et celui des 14-15 novembre (semi à huit jours). LE BADMINTON ET LE TENNIS comptent comme du travail bras au-dessus de la tête (1h30 + 1h la semaine où l'épaule a lâché) et comme de l'impact sur les jambes : un seul par week-end, et jamais le samedi si la sortie longue du lendemain dépasse 15 km. LES FORMATS À FOND (Cindy, AMRAP, WOD entre amis, hyrox improvisé) sont un cas à part, et le week-end des 19-20 septembre en donne le prix exact : un Cindy le samedi, et le dimanche une sortie longue notée « Dur » avec les quadriceps qui tirent, plus un pectoral gauche douloureux. Ils comptent POUR la séance du samedi, jamais en plus, et ils ne se font pas à fond la veille d'une sortie longue de plus de 14 km : soit tu t'arrêtes volontairement deux tours avant la fin, soit la sortie du lendemain descend à 10 km vraiment faciles, et tu le notes dans le carnet." },
    { "label": "Charge totale (sport + cours + révisions)", "text": "FORMAT : 3 séances de salle (lun midi, ven, sam) + 2 à 3 courses (mar, jeu optionnel, dim) + le mercredi en repos. Soit 5 à 6 séances, auxquelles s'ajoutent 3 h de cours le mercredi soir et quatre blocs de révisions. C'EST BEAUCOUP, ET C'EST TON CHOIX ASSUMÉ — tu as dit vouloir garder le lourd, le volume et la course. Le plan le permet, à une condition : QUE LE FACILE RESTE FACILE. Les deux seules séances dures de course sont le mardi et la fin de la sortie longue ; tout le reste se court à 5:45-6:00/km. Si tu transformes le footing du jeudi ou la sortie longue en séance de plus, le plan casse — pas à cause du volume, à cause de l'absence de récupération. LE PRÉCÉDENT : la semaine 5 réelle faisait 4 séances de salle + une séance upper body avec des amis + 1h30 de badminton + 1h de tennis. C'est la semaine où l'épaule a lâché, ce n'est pas un hasard. LES SPORTS AJOUTÉS (badminton, tennis, escalade, séance d'un ami) ne s'AJOUTENT donc plus : ils REMPLACENT une séance — en priorité le samedi (volume tractions) ou le jeudi. SI FATIGUE OU DOULEUR, l'ordre dans lequel on coupe : (1) le footing du jeudi, (2) le rowing et les abdos du samedi, (3) le circuit hyrox du vendredi, (4) le push du lundi. Ce qu'on ne coupe jamais : la sortie longue du dimanche, la qualité du mardi, le muscle-up et les tractions lourdes du lundi. LE POINT DE VIGILANCE À SURVEILLER VRAIMENT : trois heures de cours jusqu'à 22h30, c'est une nuit courte, et le sommeil passe devant tout le reste. Si le jeudi arrive systématiquement fatigué, il saute — il est écrit comme optionnel exprès. Et si après trois semaines tu ne tiens que quatre séances sur six, ce n'est pas un échec : dis-le et on passe à un format à quatre, un plan tenu à 100 % valant mieux qu'un plan tenu à 70 %." },
    { "label": "GTG optionnel", "text": "Il sert à accumuler du volume de tractions SANS fatigue — 3 à 5 séries de 8-10 reps (soit ~40 % de tes 23), toujours 4-5 reps en réserve, jamais une série dure. SON CRÉNEAU EST LE MERCREDI, le jour de repos : quelques séries étalées dans la journée si tu as une barre à la maison, avant de partir au cours. Ça ne ressemble pas à une séance et ça ne fatigue pas. Conditions inchangées : zéro douleur d'épaule, zéro courbature, et il saute dès que la semaine est chargée — c'est du bonus, pas une ligne du plan. Il redeviendra un outil central dans le bloc d'après le semi, quand l'objectif sera les 30 reps." },
    { "label": "Nutrition & ravitaillement", "text": "LE POIDS : 83,8 kg au départ, 82,5 le 15 septembre — -1,3 kg en huit semaines pour un objectif à 80. Déficit léger ~2 300-2 400 kcal · 160-170 g de protéines/jour. L'arbitrage change avec le semi : un déficit franc pendant une montée de volume de course, c'est la recette des blessures et des sorties longues ratées. DONC : jusqu'au 22 novembre, on ne cherche plus les 80 kg, on mange assez pour courir — et le poids descendra de lui-même avec 30 km hebdo. Repère utile quand même : chaque kilo en moins vaut environ une demi-rep sur une série max de tractions, et ~3 s/km sur un semi. CE QU'IL FAUT AJOUTER MAINTENANT, et qui est nouveau dans ce carnet : les GLUCIDES AUTOUR DES SORTIES LONGUES. Au-delà de 14 km, un gel vers le 8e km et un autre vers le 14e — à tester à l'entraînement, jamais découvert le jour J. Eau dès 14 km. La veille du semi : repas riche en glucides, rien de nouveau, rien de gras. Le matin : petit-déjeuner testé au moins deux fois sur une sortie longue, 2h30 avant le départ." }
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
      { "day": 0, "type": "test", "title": "Test 1/2 — 1RM lesté tractions (avancé au lundi)", "ex": [
        "TEST AVANCÉ DU MERCREDI 16 AU LUNDI 14, à ta demande. Deux raisons de dire oui : tu sors d'une semaine de décharge entièrement notée « Facile » avec cinq jours sans tirage, et surtout ça met QUATRE jours entre ce test et celui du vendredi au lieu de deux — l'écart joue en faveur du max reps du 18.",
        "Du coup l'activation prévue aujourd'hui (3x2 @25 + single @30) SAUTE : la montée du test EST le rappel d'intensité, tu ne la payes pas deux fois. Échauffement complet, puis la montée, et rien d'autre.",
        "MAGNÉSIE / craie dans le sac. En S7 les doubles à 34 kg sont tombés sur les avant-bras, pas sur le dos : si la prise lâche avant les dorsaux, le chiffre mesuré n'est pas ta force.",
        "Test 1RM lesté — cible 42,5-45 kg. Référence : 40 kg passés le 24 août EN FIN DE SÉANCE, donc à froid et reposé tu dois les dépasser.",
        "Montée ÉCONOME EN PRISE (chaque rep basse coûte au palier haut) : 5 à vide · 3 @15 · 1 @25 · 1 @32 · 1 @37 · 1 @40 · puis +2,5 kg par palier — repos 3-4 min, arrêt au 2e échec",
        "14 JOURS SANS RIEN AU-DESSUS DE 88 % (le rappel du vendredi 11 n'a pas été fait) : les premiers singles lourds, 32 et 37, peuvent sortir LENTS sans que ce soit ton plafond. C'est la réacclimatation, ça se débloque au palier suivant — ne redescends pas la charge pour ça.",
        "Si 40 kg montent franchement : tu continues par +2,5. Si 40 kg sortent limite : tu t'arrêtes là et tu notes 40 — un 1RM honnête vaut mieux qu'un chiffre arraché qui faussera tout le barème de la phase 3.",
        "Rien après le test : pas d'explosives, pas de push, pas de false grip. Le vendredi doit rester intact.",
        "Résultat + poids de corps → « 📈 Ma progression » le soir même : c'est ce chiffre qui règle toutes les charges de la phase 3",
        "Si le résultat dépasse 43 kg, l'objectif du cycle est atteint avec quatre semaines d'avance → on relève la cible pour la phase 3"
      ]},
      { "day": 1, "type": "deload", "title": "Jambes — mobilité seulement (entre deux tests)", "ex": [
        "1) Mobilité hanches/chevilles 10 min + hollow hold 3x20s",
        "2) Squat barre léger 2x8 ↘ (40-50 kg, technique)",
        "3) Étirements 10 min",
        "PAS DE SOULEVÉ DE TERRE : le 1RM et les dips sont derrière toi, mais il reste le muscle-up de vendredi et la prise y sert encore. Rappel utile — le mardi de la S8 a vu un deadlift 4x10 @60 kg ajouté (« très facile ») alors que la semaine l'interdisait déjà."
      ]},
      { "day": 2, "type": "test", "title": "Test max reps + volume (avancé du vendredi)", "ex": [
        "LE MAX REPS EST AVANCÉ À CE SOIR, à ta demande, et il compte comme test officiel. Contexte favorable : 48 h après le 1RM, deux semaines sans séance de volume, et la série part en OUVERTURE — c'est sa bonne place, démontrée en S6 (21 reps avant les séries contre 13 en fin de pyramide). Le vendredi garde le muscle-up et les dips.",
        "1) ÉCHAUFFEMENT LONG, celui des S3/S5/S6 — c'est lui qui supprime la congestion, et c'est le seul luxe de la séance.",
        "2) TEST MAX REPS tractions PDC — UNE série, cible 22+. Repères : 20 le 14/08, 21 le 26/08, 20 le 02/09. Le chiffre stagne depuis un mois pendant que le lesté monte : c'est le comportement normal d'un bloc de force max, et c'est exactement ce que ce test doit constater. → CHIFFRE À SAISIR dans « 📈 Ma progression » le soir même : c'est LE graphique vide du carnet depuis le 20 juillet. C'est aussi le dernier max du cycle, le prochain est celui du test final de la S13.",
        "3) Pyramide montante-descendante 6-8-10-8-6 ↘ derrière le max (38 reps au lieu des ~70 habituels : tu viens de sortir une série max et le muscle-up est dans 48 h). Premier vrai tour du format adopté pour la phase 3 — repos 2 min, et si la forme se dégrade au sommet tu coupes la série, elle n'est pas là pour être finie.",
        "4) Circuit abdos x3 : crunch poulie 8-10 @36-42 kg · obliques 8-10 @36-40 kg · gainage 3x40s",
        "5) Rowing horizontal 4x10 @60 kg, prise serrée, pause 1s en contraction (S7 : 54-61-68-68)",
        "PAS DE DIPS CE SOIR, ni lestés ni à vide : leur 1RM se teste vendredi, et des triceps de la veille ne mesurent rien. Pas de false grip ni de dead hang lourd non plus — la prise sert encore deux fois vendredi."
      ]},
      { "day": 4, "type": "test", "title": "Test 3/3 — muscle-up seul (25 min)", "ex": [
        "SÉANCE RÉDUITE À UNE LIGNE : tu as pris le 1RM dips en même temps que le max reps mercredi soir — 57,5, 60 et 65 kg validés, échec à 70. C'était le bon appel (musculatures différentes, deux records dans la même séance), et ça vide le vendredi. Il ne reste QUE le muscle-up.",
        "CETTE SÉANCE-LÀ NE SE SAUTE PAS, et elle tient en 25 minutes. C'est le seul chiffre du cycle qui manque encore, et c'est lui qui décide du format du bloc muscle-up de la phase 3, qui démarre lundi. Si le vendredi tombe à l'eau, tu la fais SAMEDI — jamais recollée à autre chose.",
        "1) MUSCLE-UP — UNE série max à froid, juste après l'échauffement. On ne mesure pas des reps « strictes » (tu passes avec un léger appel de genoux + rotation des poignets, c'est une forme légitime — note « Muscle-up »), on mesure TA forme tant qu'elle reste CONSTANTE. ARRÊT à la première rep où l'appel augmente — genoux plus hauts, hanches qui balancent —, où les bras passent l'un après l'autre, ou où la transition cale. → LE CHIFFRE, c'est le nombre de MU enchaînés AVANT cette rep-là.",
        "2) Puis 2 séries de rappel, pas plus : la première avec un objet serré entre les genoux (repère de progression vers le strict), la seconde libre.",
        "Rien d'autre. Pas de dips, pas de volume, pas de push : ils sont déjà faits cette semaine.",
        "LES TROIS CHIFFRES DU CYCLE sont à saisir dans « 📈 Ma progression » : 1RM 45 kg (lundi 14) ✅ déjà fait · MAX REPS 23 (mercredi 16) · 1RM DIPS 65 kg (mercredi 16 — un quatrième graphique vient d'être ajouté pour lui)."
      ]},
      { "day": 5, "type": "course", "title": "Course ou sport — les tests sont passés", "ex": [
        "8-10 km allure facile, ou un sport — un seul créneau",
        "L'escalade redevient possible dès que le muscle-up est mesuré : le lundi de la S10 est une séance de maintenance à 88 %, pas une séance lourde. C'est la bonne fenêtre du cycle."
      ]}
    ],

    /* ------ Semaine 10 — Phase 3 : le cycle tractions continue, la course démarre ------ */
    [
      { "day": 0, "type": "force", "title": "SALLE 1 — muscle-up & force lourde (midi, télétravail)", "ex": [
        "STRUCTURE ARRÊTÉE LE 18 SEPTEMBRE, sur tes créneaux et tes envies : tu prends du plaisir au lourd ET au volume, tu veux progresser en course, et tu as plus de temps que prévu (lundi midi en télétravail, samedi libre). LA SEMAINE : LUN midi SALLE 1 (lourd) · MAR course qualité · MER repos (cours) · JEU footing facile, optionnel · VEN SALLE 2 (jambes + hyrox) · SAM SALLE 3 (volume tractions) · DIM sortie longue. Trois séances de salle, deux à trois courses, un jour de repos.",
        "CELLE-CI EST LA PLUS IMPORTANTE, et elle est posée sur ton meilleur créneau : lundi midi, télétravail, pas de montre. 75 minutes, on ne la raccourcit pas.",
        "AUJOURD'HUI 21 SEPTEMBRE, TU ARRIVES ENTAMÉ : Cindy samedi, puis 16 km courus à 5:00/km hier, ressenti « Dur », quadriceps qui tirent. Aucune de ces deux fatigues ne touche le tirage — la séance se fait EN ENTIER, jambes fatiguées ou pas. Deux vérifications avant de commencer, pas une de plus : (1) le pectoral gauche, test de dix secondes dans la note « Pectoral gauche » ; (2) sur le muscle-up, si la toute première série part déjà déséquilibrée, tu descends à 4 séries de 2 et tu gardes les tractions lourdes intactes. Ce qui ne s'allège jamais pour cause de course : le lesté.",
        "1) Face pulls 3x15 LÉGERS + coiffe 2x10 @6 kg + rotations externes/internes 3x12 — en échauffement, avant tout le reste",
        "2) MUSCLE-UP à froid, 12-15 min : 5 SÉRIES DE 2, repos 2-3 min entre les séries. LE FORMAT EST TRANCHÉ PAR LE TEST DU 18 SEPTEMBRE (3 reps en forme constante, léger appel) — et le reste de ce test dit pourquoi : les 3-4 séries qui ont suivi ont dérivé, « plus on avançait plus je kickais ». Dix reps propres valent mieux que trois propres suivies de dix sales. AUCUNE SÉRIE MAX jusqu'au test du 17 octobre. ARRÊT à la première rep où l'appel de genoux augmente ou où les bras passent l'un après l'autre : une série s'arrête à 1 si la 2e n'est pas propre, et ce n'est pas un échec.",
        "3) False grip hang 3x30s — la ligne qui débloque le muscle-up strict",
        "4) Tractions explosives lestées 3x3 @5 kg — sternum à la barre, jambes strictement immobiles. TU LES AS AJOUTÉES TOI-MÊME LE 18 SEPTEMBRE (2x4 à vide, 2x4 @2,5 kg, 2x4 @5 kg) et c'est exactement le bon outil : le frein du muscle-up est la hauteur de tirage, pas la force. Elles servent aussi de montée en charge au lesté qui suit, donc elles ne coûtent pas une minute à la séance.",
        "5) Tractions lestées 4x4 @30 kg (88 % du barème : 45 kg de lest + 82,5 de corps = 127,5 de total). Repos 3 min. C'est le bloc qui va chercher les 50 kg du 16 octobre : la charge monte de semaine en semaine, jamais le nombre de reps.",
        "6) Tirage vertical lourd 3x8-10 à RPE 8-9 (en kg ça ne veut rien dire d'une machine à l'autre — règle la charge pour que la dernière rep soit difficile)",
        "7) Développé incliné 4x8-10 @50-60 kg — PREMIÈRE LIGNE COUPÉE si le pectoral gauche est pointu et pas seulement courbatu (note « Pectoral gauche ») ; si c'est une courbature de Cindy, tu fais la séance normalement.",
        "8) Curl biceps 3x8-10 @16 kg"
      ]},
      { "day": 0, "type": "revisions", "title": "Révisions — soir", "ex": [
        "Bloc de révisions. Coche-le comme une séance et note en deux mots ce que tu as bossé : le carnet sert aussi à voir la CHARGE TOTALE de la semaine, et trois heures de cours plus quatre blocs de révisions en font partie (note « Charge totale »).",
        "Les jours de télétravail, l'ordre qui marche est : séance à midi ou en fin d'après-midi, révisions derrière. La salle ferme, pas tes cours."
      ]},
      { "day": 1, "type": "course", "title": "Course — qualité (seuil), depuis chez toi", "ex": [
        "CRÉNEAU SERRÉ ASSUMÉ : bureau, retour 18h30, révisions le soir. Une course ne demande aucune logistique — chaussures et dehors à 18h45, rentré à 19h35. C'est pour ça que la séance dure de course est ici et pas à la salle.",
        "VERSION COMPLÈTE (~9 km, 50 min) : 20 min d'échauffement à 5:45-6:00/km · 2 x 10 min à 4:55/km (allure seuil : trois mots, pas trois phrases) · récup 3 min en trottinant · 10 min de retour au calme",
        "VERSION COURTE (~7 km, 38 min) : 12 min d'échauffement · 2 x 8 min à 4:55 · récup 2 min · 8 min de retour au calme. Elle garde 80 % du bénéfice — un soir chargé, c'est elle qu'on fait, pas rien.",
        "Référence de calcul : 10 km en 47:00 = 4:42/km (note « Allures »). C'est LA séance qui fait progresser sur semi, avec la sortie longue."
      ]},
      { "day": 1, "type": "revisions", "title": "Révisions — soir", "ex": [
        "Bloc de révisions — note ce que tu as bossé."
      ]},
      { "day": 2, "type": "cours", "title": "Cours — 19h30-22h30 (sur site)", "ex": [
        "Trois heures de cours sur site. AUCUN ENTRAÎNEMENT ce jour-là : c'est le jour de repos de la semaine, et il tombe au bon endroit — au milieu, entre le lundi lourd et le vendredi jambes.",
        "Seule chose possible dans la journée si tu as une barre chez toi : quelques séries de GTG (3-5 x 8-10 tractions, loin de l'échec, étalées). Facultatif, et ça ne doit jamais ressembler à une séance.",
        "La nuit sera courte : c'est la variable qui compte le plus pour la récupération. Si le jeudi arrive systématiquement fatigué, c'est le footing du jeudi qui saute — il est écrit comme optionnel pour ça."
      ]},
      { "day": 3, "type": "course", "title": "Footing facile — 5 km (optionnel)", "ex": [
        "LA JOURNÉE LA PLUS CONTRAINTE REÇOIT LA SÉANCE LA PLUS LÉGÈRE : bureau, 1 h de trajet, visio d'1 h. 30 minutes, 5 km à 6:00/km, avant ou après la visio.",
        "C'est la SEULE séance vraiment facultative du plan. Si la soirée ne le permet pas : repos, sans culpabilité."
      ]},
      { "day": 4, "type": "jambes", "title": "SALLE 2 — jambes & circuit hyrox (télétravail)", "ex": [
        "La séance jambes est de retour comme séance à part entière, et elle porte tout le travail hyrox. Elle est le VENDREDI et pas le samedi : il faut 40 h entre des jambes chargées et la sortie longue du dimanche matin.",
        "1) Hollow hold 3x30s + gainage latéral 3x40s — EN PREMIER (c'est le gainage du muscle-up)",
        "2) Squat jumps 3x5 — explosivité, transfert muscle-up et course",
        "3) Squat barre 4x6 @70-80 kg (S7 : 4x8 @65-70 avec des séries à 80)",
        "4) Fentes marchées 3x10/jambe @2x20 kg",
        "5) Soulevé de terre roumain 3x8 @90-100 kg AVEC GANTS — non négociable, la prise sert demain à l'EMOM (note « Prise & avant-bras »)",
        "6) CIRCUIT HYROX 3 tours, 90s entre les tours : 20 wall balls (ou goblet squat + press @20 kg) · 40 m farmers carry @2x20 kg · 12 burpees · 250 m rameur — substitutions dans la note « Hyrox »",
        "Le circuit est de la force-endurance, pas un metcon à fond. Si tu finis à quatre pattes, c'était trop : tu cours long dimanche."
      ]},
      { "day": 4, "type": "revisions", "title": "Révisions — soir", "ex": [
        "Bloc de révisions — note ce que tu as bossé."
      ]},
      { "day": 5, "type": "volume", "title": "SALLE 3 — volume tractions (EMOM)", "ex": [
        "LA SÉANCE VOLUME QUE TU VOULAIS, et elle est au samedi pour une raison précise : c'est du HAUT DU CORPS, donc elle ne coûte rien à la sortie longue du lendemain. Les jambes, elles, ont été faites vendredi.",
        "1) EMOM TRACTIONS 10 minutes : 7 reps au début de chaque minute sur les 9 premières, puis la MINUTE 10 EN SÉRIE LIBRE. Soit ~70 reps, le volume de ton ancienne pyramide en 10 minutes au lieu de 35. Le repos, c'est ce qui reste de la minute. Voir la note « EMOM tractions » : 7-8 reps, c'est 30-40 % de ton max, et c'est LA référence — pas 70 %.",
        "2) Dips lestés 3x8 @32,5 kg (78 % du nouveau barème dips : 65 kg mesurés le 16/09) — À SUPPRIMER si le pectoral gauche est encore pointu samedi : dans ce cas EMOM + rowing + abdos, et rien d'autre. Le dip est le mouvement qui met le plus de tension sur le pectoral.",
        "3) Rowing horizontal 4x10 @60-68 kg, prise serrée, 1s de pause en contraction (S7 : 54-61-68-68, la machine ne plafonne plus)",
        "4) Circuit abdos x3 : crunch poulie 8-10 @36-42 kg · obliques 8-10 @36-40 kg · gainage 3x40s",
        "50 minutes. Puis révisions — c'est le meilleur enchaînement du week-end."
      ]},
      { "day": 5, "type": "revisions", "title": "Révisions — week-end", "ex": [
        "Bloc de révisions — note ce que tu as bossé."
      ]},
      { "day": 6, "type": "course", "title": "SORTIE LONGUE — 14 km (dimanche matin)", "ex": [
        "14 km à 5:45-6:00/km ↗. LA DISTANCE MONTE parce que tu as déjà couru 16 km le 20 septembre : repartir à 12 aurait été un recul. → CHIFFRE À SAISIR dans « 📈 Ma progression » (graphique « Sortie longue », de 12 à 20 km d'ici le 8 novembre).",
        "ET L'ALLURE, ELLE, DESCEND — c'est tout l'enjeu de la semaine. Dimanche dernier : 16 km à 5:00/km, ressenti « Dur ». Aujourd'hui la consigne est 5:50/km, et le critère de réussite n'est pas le chrono mais l'état d'arrivée : tu dois pouvoir repartir pour 3 km de plus. Si tu finis cuit, c'est que tu es encore allé trop vite — et une sortie longue trop rapide ne se rattrape pas, elle se paye le lundi.",
        "TON 5 KM DU DIMANCHE EN GROUPE SE FOND ICI, il ne s'ajoute pas : 9 km seul, puis tu rejoins le groupe pour les 5 derniers. ET TU PARS ASSEZ TÔT POUR ÇA : arriver en retard et accélérer pour les rattraper, c'est précisément ce qui a transformé la sortie du 20 septembre en séance de seuil. Si les horaires ne collent pas, tu pars avec eux et tu continues seul derrière — jamais l'inverse.",
        "C'est la séance qui décide de ton semi. Pas le fractionné : la sortie longue. Sub 1h50 se gagne sur la capacité à tenir 1h50, pas sur la vitesse — que tu as déjà.",
        "Puis révisions l'après-midi : tu sors d'une heure et demie dehors, c'est le meilleur moment de la semaine pour bosser."
      ]}
    ],

    /* ------ Semaine 11 — Phase 3 ------ */
    [
      { "day": 0, "type": "force", "title": "SALLE 1 — muscle-up & force ↗", "ex": [
        "1) Face pulls 3x15 LÉGERS + coiffe 2x10 + rotations 3x12 — en échauffement",
        "2) MUSCLE-UP à froid, 12-15 min : CLUSTERS — 4 blocs de 3 reps espacées de 15s, 3 min entre les blocs ↗. Douze reps au total, aucune près de la rep cassée : le cluster est fait exactement pour ça, et il est calé sur le test du 18 septembre (3 reps en forme constante). Si la 3e rep d'un bloc part en appel, ce bloc s'arrête à 2 et les suivants aussi.",
        "3) False grip hang 3x35s ↗",
        "4) Tractions explosives lestées 3x3 @7,5 kg ↗ — sternum à la barre, jambes immobiles ; elles servent de montée en charge au lesté qui suit",
        "5) Tractions lestées 5x3 @32 kg ↗ (90 % du barème) — repos 3 min, déborder à 3:30 n'est pas un défaut",
        "6) Tirage vertical lourd 3x8-10 à RPE 8-9",
        "7) Développé incliné 4x8-10 @55-65 kg ↗",
        "8) Curl biceps 3x8-10 @16 kg"
      ]},
      { "day": 0, "type": "revisions", "title": "Révisions — soir", "ex": [
        "Bloc de révisions — note ce que tu as bossé."
      ]},
      { "day": 1, "type": "course", "title": "Course — intervalles 1000 m", "ex": [
        "VERSION COMPLÈTE (~10 km) : 20 min d'échauffement, 5 x 1000 m à 4:30-4:35/km (allure 10 km), récup 2 min en trottinant, 10 min de retour au calme",
        "VERSION COURTE (~8,5 km, 42 min) : 12 min d'échauffement · 4 x 1000 m · 8 min de retour au calme",
        "Les 1000 m se courent RÉGULIERS : si le dernier est plus lent que le premier de plus de 5 s, tu es parti trop vite."
      ]},
      { "day": 1, "type": "revisions", "title": "Révisions — soir", "ex": [
        "Bloc de révisions — note ce que tu as bossé."
      ]},
      { "day": 2, "type": "cours", "title": "Cours — 19h30-22h30 (sur site)", "ex": [
        "Trois heures de cours sur site — jour de repos, aucun entraînement."
      ]},
      { "day": 3, "type": "course", "title": "Footing facile — 6 km (optionnel)", "ex": [
        "6 km à 6:00/km, autour de la visio. Ou repos."
      ]},
      { "day": 4, "type": "jambes", "title": "SALLE 2 — jambes & circuit hyrox", "ex": [
        "1) Hollow hold 3x30s + gainage latéral 3x40s",
        "2) Squat jumps 3x5",
        "3) Squat barre 4x6 @75-80 kg ↗",
        "4) Fentes marchées 3x10/jambe @2x20 kg",
        "5) Soulevé de terre roumain 3x8 @100 kg ↗ avec gants",
        "6) CIRCUIT HYROX 4 tours ↗ : 20 wall balls · 40 m farmers carry @2x24 kg · 12 burpees · 250 m rameur"
      ]},
      { "day": 4, "type": "revisions", "title": "Révisions — soir", "ex": [
        "Bloc de révisions — note ce que tu as bossé."
      ]},
      { "day": 5, "type": "volume", "title": "SALLE 3 — volume tractions ↗", "ex": [
        "1) EMOM TRACTIONS 10 min : 8 reps/min sur les 9 premières ↗, minute 10 en série libre (~80 reps)",
        "2) Dips lestés 3x8 @35,5 kg ↗ (80 % du barème)",
        "3) Rowing horizontal 4x10 @68 kg, prise serrée",
        "4) Circuit abdos x3"
      ]},
      { "day": 5, "type": "revisions", "title": "Révisions — week-end", "ex": [
        "Bloc de révisions — note ce que tu as bossé."
      ]},
      { "day": 6, "type": "course", "title": "SORTIE LONGUE — 16 km ↗", "ex": [
        "16 km à 5:45-6:00/km ↗ : 11 km seul, puis les 5 km du groupe pour finir. MÊME DISTANCE QUE LE 20 SEPTEMBRE, 45 secondes au kilomètre plus lentement — c'est la séance qui prouve que l'allure facile est acquise, et pour ton semi elle vaut plus que les 16 km à 5:00. → à saisir dans « 📈 Ma progression ».",
        "Prends de l'eau à partir de cette distance, et teste un gel vers le 10e km : ce qui passe à l'entraînement passera le 22 novembre."
      ]}
    ],

    /* ------ Semaine 12 — Phase 3 (dernière semaine lourde avant le test) ------ */
    [
      { "day": 0, "type": "force", "title": "SALLE 1 — dernier contact lourd", "ex": [
        "DERNIÈRE SÉANCE LOURDE AVANT LE TEST DU 16 OCTOBRE. Après elle le volume descend et l'intensité reste : c'est tout le principe du taper (note « Deload & taper »).",
        "1) Face pulls 3x15 LÉGERS + coiffe 2x10 — en échauffement",
        "2) MUSCLE-UP à froid : 3 séries seulement ↘, technique, jamais près de la rep cassée",
        "3) Tractions lestées 4x3 @35 kg ↗ (92 % du barème) — repos 3-4 min, la 3e rep doit être dure, jamais d'échec",
        "4) Tirage vertical 3x8 à RPE 8",
        "5) Développé incliné 3x8 @55-60 kg ↘",
        "PAS DE FALSE GRIP cette semaine ni la suivante : la prise est ton facteur limitant n°1 et elle sert trois fois au test."
      ]},
      { "day": 0, "type": "revisions", "title": "Révisions — soir", "ex": [
        "Bloc de révisions — note ce que tu as bossé."
      ]},
      { "day": 1, "type": "course", "title": "Course — seuil 3x10 min", "ex": [
        "20 min d'échauffement, puis 3 x 10 min à 4:50/km ↗, récup 2:30, puis 10 min de retour au calme (~11 km). Version courte : 2 x 10 min.",
        "La course ne s'allège pas cette semaine : c'est le test de tractions qui est en taper, pas le semi."
      ]},
      { "day": 1, "type": "revisions", "title": "Révisions — soir", "ex": [
        "Bloc de révisions — note ce que tu as bossé."
      ]},
      { "day": 2, "type": "cours", "title": "Cours — 19h30-22h30 (sur site)", "ex": [
        "Trois heures de cours sur site — jour de repos, aucun entraînement."
      ]},
      { "day": 3, "type": "course", "title": "Footing facile — 6 km (optionnel)", "ex": [
        "6 km à 6:00/km, ou repos."
      ]},
      { "day": 4, "type": "jambes", "title": "SALLE 2 — jambes allégé", "ex": [
        "1) Hollow hold 3x30s + mobilité 10 min",
        "2) Squat barre 3x6 @60-70 kg ↘",
        "3) CIRCUIT 3 tours ↘, sans chercher le temps : 15 wall balls · 40 m farmers carry · 250 m rameur",
        "PAS DE SOULEVÉ DE TERRE, plus de fentes lourdes : le 1RM est vendredi prochain et c'est la prise qui décide."
      ]},
      { "day": 4, "type": "revisions", "title": "Révisions — soir", "ex": [
        "Bloc de révisions — note ce que tu as bossé."
      ]},
      { "day": 5, "type": "volume", "title": "SALLE 3 — volume ↘ (taper)", "ex": [
        "1) EMOM TRACTIONS 8 min : 6 reps/min ↘ (~48 reps, la moitié du pic). Pas de série libre cette semaine.",
        "2) Dips lestés 3x6 @35,5 kg ↘",
        "3) Circuit abdos x3",
        "Pas de rowing. Le volume descend, la charge reste — c'est ce qui a fait +5 kg au 1RM entre le 24 août et le 14 septembre."
      ]},
      { "day": 5, "type": "revisions", "title": "Révisions — week-end", "ex": [
        "Bloc de révisions — note ce que tu as bossé."
      ]},
      { "day": 6, "type": "course", "title": "SORTIE LONGUE — 17 km dont 5 à allure semi", "ex": [
        "17 km ↗ : pars avec le groupe sur les 5 premiers km (ils remplacent l'échauffement), puis 7 km à 5:45/km, puis 5 km à 5:12/km (allure semi cible)",
        "PREMIER CONTACT AVEC L'ALLURE DE COURSE, ET C'EST LE JUGE DE PAIX DE LA CIBLE. À 5:12 tu dois te dire « je pourrais tenir ça longtemps ». SI C'EST FACILE : la cible passe à 1h45 et toutes les allures du plan descendent de 10 s/km (note « Allures ») — c'est ce que laissent penser tes 16 km à 5:00 du 20 septembre. SI C'EST DUR APRÈS 5 KM : on reste sur sub 1h50, voire sub 2h (5:41/km), et rien n'est perdu. → à saisir dans « 📈 Ma progression »."
      ]}
    ],

    /* ------ Semaine 13 — Phase 3 (TEST FINAL du cycle tractions) ------ */
    [
      { "day": 0, "type": "deload", "title": "Rappel d'intensité — 25 min", "ex": [
        "CE RAPPEL EST EN DÉBUT DE SEMAINE ET C'EST UNE LEÇON PAYÉE : celui du vendredi 11 septembre n'a pas été fait, ce qui a laissé 14 jours sans rien au-dessus de 88 % devant le test.",
        "1) Face pulls 2x15 légers + coiffe 2x10 — en échauffement",
        "2) Tractions lestées 2x1 @35 kg (92 %) puis 1x2 @30 kg ↘ — repos 4 min, VITESSE à la montée, jamais à l'échec",
        "25 minutes, rien d'autre. Pas de muscle-up, pas de false grip, pas de dead hang lourd, pas de soulevé de terre de toute la semaine. C'est la seule séance de salle avant vendredi."
      ]},
      { "day": 0, "type": "revisions", "title": "Révisions — soir", "ex": [
        "Bloc de révisions — note ce que tu as bossé."
      ]},
      { "day": 1, "type": "course", "title": "Footing facile — 6 km", "ex": [
        "6 km à 6:00/km, tranquille. Pas de qualité cette semaine : le 1RM est vendredi."
      ]},
      { "day": 1, "type": "revisions", "title": "Révisions — soir", "ex": [
        "Bloc de révisions — note ce que tu as bossé."
      ]},
      { "day": 2, "type": "cours", "title": "Cours — 19h30-22h30 (sur site)", "ex": [
        "Trois heures de cours sur site — jour de repos, aucun entraînement."
      ]},
      { "day": 3, "type": "course", "title": "Repos", "ex": [
        "Repos complet. Tu testes demain."
      ]},
      { "day": 4, "type": "test", "title": "TEST FINAL 1/3 — 1RM lesté (télétravail)", "ex": [
        "LE TEST EST POSÉ UN VENDREDI DE TÉLÉTRAVAIL, le meilleur créneau de ta semaine : pas de trajet, pas d'horaire subi, et quatre jours pleins depuis le rappel du lundi. En fin de matinée si tu peux — un 1RM à 18h après une journée d'écran vaut moins.",
        "Échauffement complet, puis la montée, et RIEN D'AUTRE. MAGNÉSIE dans le sac.",
        "Montée ÉCONOME EN PRISE : 5 à vide · 3 @15 · 1 @25 · 1 @35 · 1 @42,5 · 1 @45 · 1 @47,5 · puis 50 — repos 3-4 min, arrêt au 2e échec.",
        "CIBLE : 47,5 kg, et tu as demandé 50. Le 14 septembre : trois singles à 45 dont deux propres, 47,5 raté de quelques centimètres. 47,5 est le chiffre attendu, 50 est le pari — et un 1RM honnête vaut mieux qu'un chiffre arraché.",
        "Surveille l'APPEL DE GENOUX au-dessus de 90 % : s'il devient systématique, c'est la hauteur de tirage qui plafonne, pas la force.",
        "Résultat + poids de corps du matin → « 📈 Ma progression » le soir même."
      ]},
      { "day": 4, "type": "revisions", "title": "Révisions — soir", "ex": [
        "Bloc de révisions — note ce que tu as bossé."
      ]},
      { "day": 5, "type": "test", "title": "TEST FINAL 2/3 — muscle-up (20 min)", "ex": [
        "VINGT MINUTES, UNE SEULE LIGNE. Échauffement complet, puis UNE série max de muscle-ups à froid.",
        "Le muscle-up passe AVANT le max reps (lundi) et jamais après : mesuré derrière une série à l'échec, il mesurerait ta fatigue.",
        "Critère d'arrêt inchangé : on ne compte pas des reps « strictes » mais TA forme tant qu'elle reste CONSTANTE — arrêt à la première rep où l'appel de genoux augmente, où les bras passent l'un après l'autre, ou où la transition cale.",
        "LE CHEMIN PARCOURU : bras après bras le 7 août, les deux bras ensemble le 21 août, 3 d'affilée le 4 septembre. En trois mois."
      ]},
      { "day": 5, "type": "revisions", "title": "Révisions — week-end", "ex": [
        "Bloc de révisions — note ce que tu as bossé."
      ]},
      { "day": 6, "type": "course", "title": "SORTIE LONGUE allégée — 12 km ↘", "ex": [
        "12 km à 5:50-6:00/km ↘ : 7 km seul + les 5 km du groupe, ou l'inverse. Semaine de test, on ne cherche rien.",
        "Elle ne gêne pas le test de demain — ce sont les jambes, pas la prise ni les dorsaux."
      ]}
    ],

    /* ------ Semaine 14 — Phase 4 : SEMI & HYROX ------ */
    [
      { "day": 0, "type": "test", "title": "TEST FINAL 3/3 — max reps & dips (télétravail)", "ex": [
        "DERNIER CHIFFRE DU CYCLE, ET IL EST POSÉ ICI EXPRÈS : c'est l'objectif principal du carnet (17 → 25 reps), il mérite le meilleur créneau — télétravail, 48 h après le test de muscle-up, prise et épaules reposées. Trois tests en trois jours d'affilée lui auraient coûté deux ou trois reps.",
        "ORDRE IMPOSÉ : échauffement long → MAX REPS en ouverture → 15 min de repos → 1RM dips. C'est le couple qui a donné deux records le 16 septembre : musculatures différentes, ils ne se gênent pas.",
        "1) TEST MAX REPS tractions PDC — UNE série. CIBLE 25, et tu as demandé 25-30 : 25 est l'objectif du cycle (17 au départ, 20 le 14/08, 21 le 26/08, 23 le 16/09), 30 est l'objectif du bloc d'après le semi — c'est l'EMOM qui le construira.",
        "2) TEST 1RM DIPS lestés — cible > 65 kg. Montée 3 @30 · 2 @45 · 1 @57,5 · 1 @65 · puis +2,5 kg, arrêt au 2e échec.",
        "Les deux chiffres → « 📈 Ma progression » le soir même. À partir de demain, LE SEMI PREND LA MAIN : il est dans 5 semaines, les charges de salle ne montent plus, mais le volume reste — tu gardes tes trois séances."
      ]},
      { "day": 0, "type": "revisions", "title": "Révisions — soir", "ex": [
        "Bloc de révisions — note ce que tu as bossé."
      ]},
      { "day": 1, "type": "course", "title": "Course — seuil 2x15 min", "ex": [
        "20 min d'échauffement, puis 2 x 15 min à 4:55/km ↗, récup 3 min, puis 10 min de retour au calme (~11 km)",
        "VERSION COURTE : 12 min d'échauffement · 2 x 12 min · récup 3 min · 8 min de retour au calme (45 min).",
        "Le seuil est LA séance qui fait progresser sur semi. Si tu ne dois garder qu'une séance de qualité, c'est celle-là."
      ]},
      { "day": 1, "type": "revisions", "title": "Révisions — soir", "ex": [
        "Bloc de révisions — note ce que tu as bossé."
      ]},
      { "day": 2, "type": "cours", "title": "Cours — 19h30-22h30 (sur site)", "ex": [
        "Trois heures de cours sur site — jour de repos, aucun entraînement."
      ]},
      { "day": 3, "type": "course", "title": "Footing facile — 6 km (optionnel)", "ex": [
        "6 km à 6:00/km, autour de la visio."
      ]},
      { "day": 4, "type": "jambes", "title": "SALLE 2 — jambes & circuit hyrox complet", "ex": [
        "PHASE 4 : les charges ne montent plus jusqu'au 22 novembre, mais rien n'est supprimé. Entretenir, ce n'est pas arrêter.",
        "1) Gainage 3x40s + hollow 3x30s",
        "2) Squat barre 3x6 @70 kg (entretien, pas de record)",
        "3) Fentes marchées 3x10/jambe @2x20 kg",
        "4) CIRCUIT HYROX 4 tours, 2 min entre les tours : 20 wall balls · 50 m sled push (ou fentes lestées 20 m) · 40 m farmers carry @2x24 kg · 10 burpee broad jumps · 250 m rameur",
        "Plus de soulevé de terre à partir d'ici : la prise sert à l'EMOM du samedi, et le volume de course monte."
      ]},
      { "day": 4, "type": "revisions", "title": "Révisions — soir", "ex": [
        "Bloc de révisions — note ce que tu as bossé."
      ]},
      { "day": 5, "type": "volume", "title": "SALLE 3 — volume tractions", "ex": [
        "1) MUSCLE-UP à froid : 4-5 séries au format validé par le test du 17 octobre — il passe ici depuis que le lundi porte les tests, et il revient au lundi la semaine prochaine",
        "2) EMOM TRACTIONS 10 min : 8 reps/min sur les 9 premières, minute 10 en série libre",
        "3) Dips lestés 3x8 @32,5 kg",
        "4) Rowing horizontal 4x10 @68 kg, prise serrée",
        "5) Circuit abdos x3"
      ]},
      { "day": 5, "type": "revisions", "title": "Révisions — week-end", "ex": [
        "Bloc de révisions — note ce que tu as bossé."
      ]},
      { "day": 6, "type": "course", "title": "SORTIE LONGUE — 18 km dont 6 à allure semi", "ex": [
        "18 km ↗ : pars avec le groupe sur les 5 premiers km, puis 6 km à 5:45/km, puis 6 km à 5:12/km (allure semi), puis 1 km de retour au calme",
        "→ à saisir dans « 📈 Ma progression ». Teste ton ravitaillement : un gel vers le 8e km, un autre vers le 14e."
      ]}
    ],

    /* ------ Semaine 15 — Phase 4 (semaine d'absorption) ------ */
    [
      { "day": 0, "type": "force", "title": "SALLE 1 — muscle-up & force d'entretien", "ex": [
        "1) Face pulls 3x15 + coiffe 2x10 — en échauffement",
        "2) MUSCLE-UP à froid : 4-5 séries au format validé par le test du 17 octobre",
        "3) False grip hang 3x30s",
        "4) Tractions lestées 4x3 @30 kg (88 %) — charge d'entretien, elle ne bougera plus jusqu'au semi",
        "5) Tirage vertical 3x8-10 à RPE 8",
        "6) Développé incliné 4x8 @55 kg"
      ]},
      { "day": 0, "type": "revisions", "title": "Révisions — soir", "ex": [
        "Bloc de révisions — note ce que tu as bossé."
      ]},
      { "day": 1, "type": "course", "title": "Course — 6x800 m", "ex": [
        "20 min d'échauffement, puis 6 x 800 m à 4:20-4:25/km, récup 90s, puis 10 min de retour au calme (~10 km). Version courte : 5 x 800 m.",
        "Allure 5 km, pas allure 1500 : si le dernier est nettement plus lent que le premier, tu es parti trop vite (ça t'est arrivé le 16 août avec des 600 m à 3:30)."
      ]},
      { "day": 1, "type": "revisions", "title": "Révisions — soir", "ex": [
        "Bloc de révisions — note ce que tu as bossé."
      ]},
      { "day": 2, "type": "cours", "title": "Cours — 19h30-22h30 (sur site)", "ex": [
        "Trois heures de cours sur site — jour de repos, aucun entraînement."
      ]},
      { "day": 3, "type": "course", "title": "Footing facile — 6 km (optionnel)", "ex": [
        "6 km à 6:00/km."
      ]},
      { "day": 4, "type": "jambes", "title": "SALLE 2 — SIMULATION HYROX (course compromise)", "ex": [
        "SÉANCE PLAISIR ET SÉANCE UTILE : c'est le format hyrox en vrai, et « courir avec le cardio déjà en l'air » est la qualité n°1 de cette discipline — celle qui ne se travaille dans aucune de tes autres séances. Elle tombe dans une semaine d'absorption, avec une sortie longue allégée derrière : c'est la seule fenêtre du bloc où elle ne coûte rien.",
        "4 tours de : 800 m course (allure 5:00-5:10) + une station à fond pendant 2 min, enchaînés sans pause. Stations dans l'ordre : wall balls · farmers carry · sled push (ou fentes lestées) · rameur. Repos 2 min entre les tours. ~45 min.",
        "Pas de squat ni de fentes cette semaine : la simulation les remplace."
      ]},
      { "day": 4, "type": "revisions", "title": "Révisions — soir", "ex": [
        "Bloc de révisions — note ce que tu as bossé."
      ]},
      { "day": 5, "type": "volume", "title": "SALLE 3 — volume tractions ↗", "ex": [
        "1) EMOM TRACTIONS 12 min ↗ : 7 reps/min sur les 11 premières, minute 12 en série libre (~85 reps — on allonge la durée avant d'augmenter les reps)",
        "2) Dips lestés 3x8 @32,5 kg",
        "3) Rowing horizontal 4x10 @68 kg",
        "4) Circuit abdos x3"
      ]},
      { "day": 5, "type": "revisions", "title": "Révisions — week-end", "ex": [
        "Bloc de révisions — note ce que tu as bossé."
      ]},
      { "day": 6, "type": "course", "title": "SORTIE LONGUE — 14 km ↘", "ex": [
        "14 km à 5:45-6:00/km ↘, tout en facile : 9 km seul + les 5 km du groupe. SEMAINE D'ABSORPTION — on recule d'un cran pour encaisser les trois semaines précédentes. Le pic arrive la semaine prochaine.",
        "→ à saisir dans « 📈 Ma progression »."
      ]}
    ],

    /* ------ Semaine 16 — Phase 4 (PIC DE VOLUME) ------ */
    [
      { "day": 0, "type": "force", "title": "SALLE 1 — muscle-up & force d'entretien", "ex": [
        "1) Face pulls 3x15 + coiffe 2x10",
        "2) MUSCLE-UP à froid : 4-5 séries",
        "3) False grip hang 3x30s",
        "4) Tractions lestées 4x3 @30 kg",
        "5) Développé incliné 4x8 @55 kg"
      ]},
      { "day": 0, "type": "revisions", "title": "Révisions — soir", "ex": [
        "Bloc de révisions — note ce que tu as bossé."
      ]},
      { "day": 1, "type": "course", "title": "Course — 20 min continu au seuil", "ex": [
        "20 min d'échauffement, puis 20 min CONTINUES à 4:50-4:55/km ↗, puis 10 min de retour au calme (~11 km)",
        "Vingt minutes d'affilée au seuil, c'est la séance de référence du semi. Si tu la tiens sans dériver, sub 1h50 est acquis."
      ]},
      { "day": 1, "type": "revisions", "title": "Révisions — soir", "ex": [
        "Bloc de révisions — note ce que tu as bossé."
      ]},
      { "day": 2, "type": "cours", "title": "Cours — 19h30-22h30 (sur site)", "ex": [
        "Trois heures de cours sur site — jour de repos, aucun entraînement."
      ]},
      { "day": 3, "type": "course", "title": "Footing facile — 6 km (optionnel)", "ex": [
        "6 km à 6:00/km."
      ]},
      { "day": 4, "type": "jambes", "title": "SALLE 2 — jambes allégé (pic de course)", "ex": [
        "1) Gainage 3x40s + hollow 3x30s",
        "2) CIRCUIT 3 tours ↘ : 20 wall balls · 40 m farmers carry · 250 m rameur",
        "PAS DE SQUAT LOURD, PAS DE SLED, PAS DE FENTES cette semaine : la sortie longue de dimanche est le pic du plan, c'est elle qui compte."
      ]},
      { "day": 4, "type": "revisions", "title": "Révisions — soir", "ex": [
        "Bloc de révisions — note ce que tu as bossé."
      ]},
      { "day": 5, "type": "volume", "title": "SALLE 3 — EMOM au pic", "ex": [
        "1) EMOM TRACTIONS 12 min : 8 reps/min sur les 11 premières ↗, minute 12 en série libre (~95 reps — pic de volume tractions du bloc)",
        "2) Dips lestés 3x8 @32,5 kg",
        "3) Circuit abdos x3",
        "Pas de rowing : 20 km demain matin, on ne finit pas la veille sur les tirages lourds."
      ]},
      { "day": 5, "type": "revisions", "title": "Révisions — week-end", "ex": [
        "Bloc de révisions — note ce que tu as bossé."
      ]},
      { "day": 6, "type": "course", "title": "SORTIE LONGUE — 20 km ↗ (PIC)", "ex": [
        "20 km à 5:40-5:55/km ↗ : 15 km seul, puis les 5 km du groupe pour finir. C'est le pic du plan, posé à 14 jours de la course — la dernière longue sortie qui apporte quelque chose le 22 novembre.",
        "Préviens le groupe que tu arriveras déjà entamé, et ne te laisse pas emmener plus vite que 5:30/km.",
        "Ravitaillement complet, comme le jour J : gel au 8e et au 16e km, eau régulière. Tu ne cherches pas l'allure, tu cherches à finir en pouvant encore parler.",
        "→ à saisir dans « 📈 Ma progression » : c'est la valeur cible du graphique."
      ]}
    ],

    /* ------ Semaine 17 — Phase 4 (affûtage) ------ */
    [
      { "day": 0, "type": "force", "title": "SALLE 1 — allégé", "ex": [
        "1) Face pulls 2x15 + coiffe 2x10",
        "2) MUSCLE-UP à froid : 3 séries, technique",
        "3) Tractions lestées 3x3 @30 kg ↘",
        "L'affûtage commence : le volume descend partout, la vitesse et la charge restent."
      ]},
      { "day": 0, "type": "revisions", "title": "Révisions — soir", "ex": [
        "Bloc de révisions — note ce que tu as bossé."
      ]},
      { "day": 1, "type": "course", "title": "Course — 4x1000 m allure 10 km", "ex": [
        "20 min d'échauffement, puis 4 x 1000 m à 4:35/km, récup 2 min, puis 10 min de retour au calme (~9 km)",
        "Volume réduit, allure conservée. C'est exactement ce qui fait qu'on arrive frais ET rapide."
      ]},
      { "day": 1, "type": "revisions", "title": "Révisions — soir", "ex": [
        "Bloc de révisions — note ce que tu as bossé."
      ]},
      { "day": 2, "type": "cours", "title": "Cours — 19h30-22h30 (sur site)", "ex": [
        "Trois heures de cours sur site — jour de repos, aucun entraînement."
      ]},
      { "day": 3, "type": "course", "title": "Footing facile — 5 km", "ex": [
        "5 km à 6:00/km, décontracté."
      ]},
      { "day": 4, "type": "jambes", "title": "SALLE 2 — gainage & mobilité (25 min)", "ex": [
        "Gainage 3x40s + hollow 3x30s + mobilité hanches/chevilles 15 min",
        "PAS DE CIRCUIT, PAS DE SQUAT : plus rien qui laisse des courbatures à 9 jours de la course. L'hyrox reprend le 23 novembre."
      ]},
      { "day": 4, "type": "revisions", "title": "Révisions — soir", "ex": [
        "Bloc de révisions — note ce que tu as bossé."
      ]},
      { "day": 5, "type": "volume", "title": "SALLE 3 — EMOM ↘ (30 min)", "ex": [
        "1) EMOM TRACTIONS 8 min : 6 reps/min ↘",
        "2) Dips lestés 2x8 @32,5 kg ↘",
        "Dernière séance de volume avant la course. Rien de dur, rien de nouveau."
      ]},
      { "day": 5, "type": "revisions", "title": "Révisions — week-end", "ex": [
        "Bloc de révisions — note ce que tu as bossé."
      ]},
      { "day": 6, "type": "course", "title": "RÉPÉTITION GÉNÉRALE — 14 km dont 8 à allure semi", "ex": [
        "14 km ↘ : 4 km à 5:45/km, puis 8 km à 5:12/km (allure semi), puis 2 km de retour au calme",
        "LES 8 KM À ALLURE COURSE SE COURENT SEUL ET D'UN SEUL TENANT : c'est la simulation du jour J, le groupe attendra la semaine d'après.",
        "Mêmes chaussures, même petit-déjeuner, même gel que le 22 novembre. Si les 8 km à 5:12 passent en restant sous contrôle, la cible sub 1h50 est validée — sinon on part sur 5:25/km et on avise au 15e km.",
        "→ à saisir dans « 📈 Ma progression »."
      ]}
    ],

    /* ------ Semaine 18 — Phase 4 (SEMAINE DU SEMI — dimanche 22 novembre) ------ */
    [
      { "day": 0, "type": "deload", "title": "Salle — très léger (25 min)", "ex": [
        "1) Face pulls 2x15 + coiffe 2x10",
        "2) Tractions lestées 2x3 @20 kg ↘ — juste pour ne pas perdre le contact, aucune série dure",
        "Rien d'autre de la semaine côté salle : pas de circuit, pas d'EMOM, pas de muscle-up. Tout reprend le lundi 23."
      ]},
      { "day": 0, "type": "revisions", "title": "Révisions — soir", "ex": [
        "Bloc de révisions — note ce que tu as bossé."
      ]},
      { "day": 1, "type": "course", "title": "Course — 6 km avec rappels d'allure", "ex": [
        "6 km facile avec 4 x 1 min à 5:12/km (allure course) au milieu, récup 2 min",
        "Ces rappels servent à réveiller les jambes, pas à s'entraîner. Aucune fatigue ne doit rester."
      ]},
      { "day": 1, "type": "revisions", "title": "Révisions — soir", "ex": [
        "Bloc de révisions — note ce que tu as bossé."
      ]},
      { "day": 2, "type": "cours", "title": "Cours — 19h30-22h30 (sur site)", "ex": [
        "Trois heures de cours sur site — jour de repos, aucun entraînement."
      ]},
      { "day": 3, "type": "course", "title": "Footing — 5 km + lignes droites", "ex": [
        "5 km très facile + 4 accélérations de 20 s en fin de sortie (cale-le autour de la visio)",
        "Dernière sortie avec un peu de rythme. Ensuite, du repos et des glucides."
      ]},
      { "day": 5, "type": "course", "title": "Déverrouillage — 20 min", "ex": [
        "20 min de footing + 2 x 1 min à allure course. C'est tout — pas de salle aujourd'hui.",
        "PRÉPARATION DE LA COURSE : dossard, épingles, gels (2, un au 8e et un au 15e km), chaussures déjà portées sur la répétition générale du 15 novembre. Repas de la veille riche en glucides, pas d'aliment nouveau.",
        "Rien de nouveau le jour J — ni chaussure, ni gel, ni petit-déjeuner."
      ]},
      { "day": 5, "type": "revisions", "title": "Révisions — week-end", "ex": [
        "Bloc de révisions — note ce que tu as bossé."
      ]},
      { "day": 6, "type": "test", "title": "SEMI-MARATHON — 21,1 km", "ex": [
        "PLAN DE COURSE SUB 1h50 (5:12/km) : les 3 premiers kilomètres à 5:20-5:25, volontairement trop lents — c'est là que se perdent tous les semis. Puis 5:10-5:12 jusqu'au 15e. À partir du 16e, tu accélères si tu en as, tu tiens si tu n'en as pas.",
        "Si tout passe facilement au 10e km, tu peux descendre à 5:00/km : 1h46 est dans tes cordes avec un 10 km à 47:00. Si c'est dur dès le 8e, tu bascules sur 5:30/km — sub 2h reste une belle course.",
        "Ravitaillement : gel au 8e et au 15e km, eau à chaque poste. Ne saute pas le premier gel parce que « ça va bien » : il agit 20 minutes plus tard.",
        "Repères de ce cycle, à relire sur la ligne de départ : 17 tractions le 20 juillet, 23 le 16 septembre · 35 kg de lest au départ, 45 le 14 septembre · une sortie par semaine en septembre, trois par semaine et 20 km en novembre — le tout avec un cours du soir et des révisions.",
        "Temps final → « 📈 Ma progression » (et le bilan complet s'exporte depuis « 📤 Export bilan pour relecture » : c'est lui qui servira à écrire le bloc suivant — hyrox, et les 30 tractions)."
      ]}
    ]
  ]
};