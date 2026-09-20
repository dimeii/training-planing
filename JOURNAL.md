# Journal de bord — Carnet Tractions & Explosivité

Point d'avancement du projet et du protocole. Entrée la plus récente en haut.

---

## 2026-09-21 — Bilan S9 : le muscle-up plafonne, le pectoral parle, la course a deux semaines d'avance

Bilan exporté le 21 septembre, semaine 10/18. Il couvre la semaine de test (S9) et les trois séances que le programme ne connaissait pas encore — il a été écrit les 17 et 18 septembre, avant le test muscle-up du vendredi, le Cindy du samedi et les 16 km du dimanche.

### Les trois faits neufs

- **Test muscle-up du 18 septembre** : 3 MU en forme constante avec un léger appel, puis 3-4 séries de 2-3 reps où « plus on avançait plus je kickais ». Le chiffre est identique au 4 septembre (3 reps) — et c'est normal : entre les deux il y a eu une décharge complète et une semaine de test, donc aucun travail spécifique. Ce n'est pas un plateau, c'est une absence de stimulus. Le déroulé, lui, est un vrai problème : quinze reps avec un appel croissant, c'est un pattern qui s'ancre. Il a aussi ajouté de lui-même des **tractions explosives lestées** (2x4 à vide, @2,5, @5 kg) — exactement le bon outil.
- **Cindy le samedi 19** (20 min de 5 tractions / 10 pompes / 15 squats) : ressenti « Dur », et « peut-être douleur au pectoral gauche ou grosse courbature ». Premier signal sur le pectoral, à distinguer de l'épaule gauche (réglée depuis la S6).
- **16 km en 1h20 le dimanche 20**, soit **5:00/km** — arrivé en retard, accéléré pour rattraper le groupe, circuit coupé, kilomètres rajoutés derrière. Ressenti « Dur », quadriceps qui tirent. C'est la **quatrième fois** que la sortie du dimanche part en intensité.

### Ce que ça change dans `program.js`

- **Muscle-up, S10** : le format conditionnel (« 3 reps → 5x2 ; 2 reps → 4x2 ; 1 rep → 6 singles ») est tranché en **5 séries de 2**, sans série max jusqu'au test du 17 octobre. Dix reps propres valent mieux que trois propres suivies de dix sales. La S11 garde les clusters, sa branche conditionnelle disparaît aussi.
- **Tractions explosives lestées officialisées** au lundi (3x3 @5 kg en S10, @7,5 en S11), en ligne 4 : elles servent de montée en charge au lesté, donc elles ne coûtent pas une minute. Le lundi passe à 8 lignes numérotées.
- **Nouvelle note « Pectoral gauche »** : le test en dix secondes courbature *vs* lésion (diffus et améliorée par l'échauffement / pointue, localisée, réveillée par l'étirement et la contraction résistée), et la conduite à tenir — développé incliné et dips coupés si c'est pointu, tirage et tractions gardés. Garde-fous posés sur l'incliné du lundi et les dips du samedi.
- **L'échelle de la sortie longue est recalée sur ce qu'il fait déjà** : repartir de 12 km après en avoir couru 16 n'avait plus de sens. Nouvelle progression **14 · 16 · 17 · 12 (test) · 18 · 14 · 20 (pic le 8/11) · 14 (répétition générale)**, cible du graphique portée de 19 à 20 km, volume hebdo ~28 km en S10 et ~38 km au pic.
- **Ce qui progresse en premier n'est plus la distance, c'est l'allure — vers le bas.** La distance est acquise, le facile ne l'est pas. Règle ajoutée à la note « Course » : *on ne rattrape jamais un groupe en cours de sortie longue* (partir 10 min avant, les retrouver au point suivant, ou courir seul).
- **Les 16 km à 5:00 sur jambes fatiguées** valent quand même une information : ça ressemble plus à 1h45-1h48 qu'à 1h50. La cible n'est pas relevée pour autant — elle se tranche le **11 octobre**, sur les 5 km à 5:12 de la sortie longue de la S12, devenue le juge de paix.
- **Formats à fond** (Cindy, AMRAP, WOD) : ils comptent pour la séance du samedi, jamais en plus, et pas à fond la veille d'une sortie longue de plus de 14 km. Le week-end des 19-20 en donne le prix : une sortie longue « Dur » et un pectoral douloureux.
- **Garde-fou du jour** ajouté en tête du lundi 21 : il arrive entamé, la séance se fait quand même en entier — ni le Cindy ni les 16 km ne touchent le tirage.
- Correction au passage : la répétition générale est le **dimanche 15 novembre**, pas le samedi 14 (la note « Tests » et la note « Course » se contredisaient).

### Le point qui ne bouge pas

**Trois records mesurés, zéro saisi.** Max reps 23 (16/09), 1RM dips 65 kg (16/09) et maintenant 16 km (20/09) sont dans les remarques de séance, pas dans « 📈 Ma progression » — deux graphiques sur cinq affichent encore « aucune mesure enregistrée ». Le graphique sortie longue est celui qui prédit le chrono du 22 novembre.

---

## 2026-09-18 (fin) — La colonne s'élargit sur grand écran

Demande : élargir la colonne qui contient les séances et les révisions sur les écrans plus grands. Elle était figée à 640 px depuis le début, ce qui suffisait tant qu'une journée n'avait qu'une carte — depuis le regroupement sport + révisions, 612 px de contenu pour deux cartes, c'est serré.

- La largeur passe de l'inline style au CSS (une largeur fixe en style inline ne peut pas varier selon l'écran) : `.page` à **640 px par défaut, 880 px au-delà de 940 px de large, 980 px au-delà de 1300 px**. Concrètement la ligne du lundi passe de 330/210 px à ~520/305 px sur un écran de portable, et ~575/340 px sur un grand moniteur.
- La carte sport prend `flex-grow: 2` contre 1 pour les révisions : tout l'espace gagné va à 2/3 vers la séance de sport, qui en a besoin.
- **Garde-fou de lisibilité** : le texte des exercices est borné à `88ch`. Sans ça, une note de trois lignes s'étalerait sur 130 caractères de large dans une carte pleine largeur — techniquement correct, illisible en pratique.
- Rien ne change sous 940 px : téléphone et petite fenêtre gardent exactement le rendu d'avant, cartes empilées.
- Smoke test étendu aux points de rupture, à la classe `.page`, à l'absence de `max-width` inline (qui aurait écrasé le CSS) et aux ratios de flex : **62/62 OK**.

---

## 2026-09-18 (suite) — Stratégie revue : plus de séances, pas moins

J'avais proposé de réduire à quatre séances et de faire du semi la priorité unique. **Ses réponses ont dit l'inverse, et elles sont légitimes** : « je prends du plaisir aux tractions en lourd, et à travailler en volume. Je veux aussi être meilleur en course », « lundi salle, mardi salle/course, jeudi peut-être course, vendredi salle, samedi salle, dimanche run/salle », et « ne raccourcis pas forcément les séances, le lundi midi j'ai le temps ».

Deux informations neuves : **le lundi midi est un vrai créneau** (télétravail, sans horaire) et **le samedi est disponible pour la salle**. J'avais sous-estimé sa capacité et sur-optimisé la réduction.

### La semaine, version définitive

LUN midi — **SALLE 1** : muscle-up + false grip + tractions lourdes + tirage + push + curl, 75 min · MAR — course qualité · MER — repos (cours) · JEU — footing facile, optionnel · VEN — **SALLE 2** : jambes + circuit hyrox · SAM — **SALLE 3** : volume tractions (EMOM, dips, rowing, abdos), 50 min · DIM matin — sortie longue.

Trois séances de salle, deux à trois courses. Les quatre décisions de placement, toutes contraintes :

- **La séance qui décide du cycle est le lundi midi** — meilleur créneau, jour le plus fiable (dix semaines sans exception), et bon ordre physiologique : explosif et technique à froid, force max ensuite, push en dernier.
- **Les jambes sont le vendredi, jamais le samedi** : il faut 40 h entre des jambes chargées et la sortie longue du dimanche matin. La séance jambes séparée, supprimée hier faute de créneau, est donc de retour avec le soulevé de terre et le circuit hyrox complet.
- **Le samedi est du haut du corps** : l'EMOM, les dips et le rowing ne coûtent rien aux 19 km du lendemain.
- **La course dure est le mardi** : zéro logistique un jour de bureau, et cinq jours de recul avant le dimanche.

### Ce que ça change côté contenu

- Le lundi repasse à **7 lignes** (le tirage vertical lourd et le curl reviennent), conformément à « ne raccourcis pas les séances ».
- Le **soulevé de terre roumain revient** (vendredi, avec gants — la prise sert à l'EMOM du lendemain), ainsi que les **squat jumps** et les **fentes**.
- Le volume tractions gagne une séance complète au lieu d'être un bloc coincé dans une autre séance : EMOM + dips + rowing prise serrée + circuit abdos.
- Le test final ne bouge pas : **ven 16/10 le 1RM, sam 17 le muscle-up, lun 19 le max reps + dips**.

### Le garde-fou, réécrit en conséquence

Le plan monte à 5-6 séances plus 3 h de cours et quatre blocs de révisions. Il tient **à une seule condition, écrite dans la note « Charge totale » : que le facile reste facile.** Les deux seules séances dures de course sont le mardi et la fin de la sortie longue ; tout le reste se court à 5:45-6:00/km. Ce n'est pas le volume qui casse un plan comme celui-là, c'est l'absence de récupération. Ordre de coupe en cas de fatigue : footing du jeudi, puis rowing et abdos du samedi, puis circuit hyrox du vendredi, puis push du lundi. Jamais la sortie longue, jamais le mardi, jamais le lundi midi.

- Sept notes réécrites (Structure de semaine, Course, EMOM — passé au samedi, Charge totale, Sports ajoutés — l'escalade remplace désormais le samedi, Ce qui est en dernier, Deload & taper).
- `program.js` validé, smoke test **53/53 OK**.

---

## 2026-09-18 — Les cours et les révisions entrent dans le carnet

Demande de Mehdi : pouvoir saisir ses cours et ses révisions dans le carnet, et **afficher sur la même ligne** la séance de sport et la séance de révisions quand elles tombent le même jour, en restant responsive.

### Un bug trouvé au passage, et il était sérieux

Les identifiants de séance étaient dérivés du JOUR : `"s" + semaine + "-d" + jour`. Tant qu'il n'y avait qu'un créneau par jour, ça tenait. Dès qu'un jour porte sport **et** révisions, les deux séances partagent le même id — donc la même case « Fait », le même bilan et les mêmes ajustements d'exercices. Corrigé : les séances suivantes d'un même jour reçoivent un suffixe (`-2`, `-3`), **la première garde son id d'origine**, donc aucune donnée déjà enregistrée ne bouge.

### Ce qui a été fait

- **Deux nouveaux types de séance** : `cours` (indigo) et `revisions` (bronze). Comme tout le reste du carnet ils sont pilotés par `program.js`, donc ils apparaissent automatiquement dans le sélecteur de « Nouvelle séance » — Mehdi peut ajouter un bloc de révisions en deux clics, n'importe quel jour.
- **Regroupement par jour** : les séances d'un même jour sont rendues dans un conteneur `flex-wrap`. La carte sport prend une base de 330 px, la carte révisions 210 px, avec `min-width: 0` — côte à côte dès ~560 px de large, empilées en dessous. Un jour à une seule séance garde exactement le rendu d'avant.
- **Bilan simplifié pour les séances hors sport** : pas de RPE, pas de douleur d'épaule, juste une note (« ce que tu as bossé ») et le bouton « Fait ». Le rappel « pense à remplir ton bilan » ne s'affiche pas non plus.
- **Le programme est pré-rempli** sur les semaines 10 à 18 : le cours du mercredi (19h30-22h30, jour de repos) et les révisions du lundi, mardi et vendredi soir. Le carnet montre donc la charge réelle de la semaine, cours compris — c'est aussi ce qui remontera dans l'export coach.
- Le pack coach documente les deux nouveaux types pour qu'une IA relisant le carnet ne les confonde pas avec du sport.

### Validation

Smoke test Node recréé (Babel + jsdom, il avait disparu depuis août) : **53/53 OK**. Il couvre la compilation du JSX, le tri des séances par jour sur les 18 semaines, le regroupement (même conteneur, `flex-wrap`, `min-width: 0`, sport à gauche), le bilan simplifié, la non-contamination des identifiants (cocher le sport ne coche pas les révisions du même jour, et l'inverse), et la présence des nouveaux types dans le formulaire de séance perso.

---

## 2026-09-17 (nuit) — Le plan est recalé sur les créneaux réels, pas sur les jours de la semaine

Trois précisions arrivées coup sur coup : **télétravail lundi et vendredi, présentiel mardi-jeudi avec 1 h de trajet et un retour vers 18h30, cours sur site le mercredi 19h30-22h30, visio 1 h le jeudi soir, révisions lundi/mardi/vendredi soir et une partie du week-end** (avec du sport possible après les révisions), et **un 5 km en groupe le dimanche**. Le plan du soir, qui supposait des soirées libres, ne tenait plus.

### Trois principes de placement, et ils ne dépendent plus des jours

1. **La salle va sur les jours de télétravail.** Pas de trajet, créneau choisi, séance à 17h30 puis révisions. Une séance de salle à 21h après une heure de transport, non — et la salle ferme, pas les cours.
2. **Les jours de bureau reçoivent de la course.** Chaussures et dehors : 40 à 50 min porte à porte, ça se glisse avant ou après les révisions. C'est pour ça que la séance DURE de la semaine est une course et pas une séance de salle.
3. **Ce qui décide du cycle est sur le lundi** — premier créneau de la semaine, jour le plus fiable du carnet.

### La semaine

LUN (TT) salle 1 : muscle-up + false grip + tractions lourdes + push, 60 min · MAR (bureau) course qualité · MER repos (cours) · JEU (bureau + visio) footing facile ou repos · VEN (TT) salle 2 : EMOM + dips + circuit hyrox, 55 min · SAM libre (révisions, sport) · DIM matin sortie longue.

- **Deux séances de salle au lieu de trois**, la séance jambes séparée disparaît : le squat et le soulevé de terre lourds sortent du programme jusqu'au 22 novembre, la course et le circuit hyrox couvrent les jambes. Arbitrage assumé et écrit, le squat revient après le semi.
- **Chaque séance de qualité a une version courte de 38-42 min** à côté de la complète — c'est elle qu'on fait un soir chargé, pas rien.
- **Le samedi est libre exprès** : il devient le jour de révisions et de sport social (escalade, badminton), et la sortie longue passe au dimanche matin — 40 h après le circuit du vendredi, et l'après-midi reste disponible pour bosser.
- **Le 5 km du dimanche en groupe est intégré à la sortie longue, pas ajouté** : version idéale, il en constitue les 5 derniers kilomètres (un long qui finit plus vite est un excellent exercice de semi) ; version simple, il l'ouvre. Ce qu'il ne faut pas faire : le compter comme la sortie du dimanche.

### Test final recalé une deuxième fois

Il tombait le mercredi (cours), puis le jeudi (bureau + visio). Version finale, posée sur les bons créneaux : **vendredi 16 octobre le 1RM lesté** (télétravail, sans horaire subi), **samedi 17 le muscle-up seul**, **lundi 19 le max reps puis les dips** — encore un jour de télétravail, 48 h après le muscle-up. Le max reps est l'objectif principal du carnet (17 → 25) : trois tests en trois jours d'affilée lui auraient coûté deux ou trois reps.

### Et un garde-fou honnête

Note « Charge totale » complétée : trois heures de cours jusqu'à 22h30 raccourcissent la nuit, et le sommeil passe devant tout le reste. **Si après trois semaines il ne tient que quatre séances sur cinq, ce n'est pas un échec — c'est le signal de passer à quatre séances et de supprimer le footing du jeudi définitivement.** Un plan tenu à 100 % vaut mieux qu'un plan tenu à 70 %.

- `program.js` validé (parse Node OK, 18 semaines, 20 notes, 5 métriques, aucun mercredi occupé).

---

## 2026-09-17 (soir) — Le mercredi soir tombe : tout ce qui décide du cycle remonte au lundi

Contrainte annoncée le soir même : **cours le mercredi de 19h30 à 22h30 à partir du 23 septembre**, et **visio d'1h le jeudi soir**. Le mercredi soir n'existe plus — or c'est là que le bloc muscle-up venait d'être placé le matin même. Deuxième réorganisation de la journée, et c'est la règle du carnet qui tranche : **ce qui décide du cycle se met sur le jour le plus fiable**.

### La semaine, deuxième version

LUN muscle-up + false grip + tractions lourdes + push (60 min) · MAR circuit hyrox/jambes · **MER repos (cours)** · JEU course qualité autour de la visio · VEN EMOM tractions + circuit street (40 min) · SAM sortie longue · DIM footing facile ou repêchage du vendredi.

- **Le bloc muscle-up remonte au lundi**, avec le false grip, devant les tractions lourdes. C'est aussi le bon ordre physiologique : explosif et technique à froid, force max ensuite, push en dernier. Le lundi passe à 60-65 min, c'est son format historique.
- **Le vendredi redevient une séance, mais seulement du volume.** Trois raisons qui n'existaient pas en phase 2 : il n'est plus la 4e séance de salle au bout d'une série lundi-mardi-mercredi, il arrive après un jour de repos, et il a un **repêchage écrit le dimanche**. S'il saute, on perd des reps, pas l'objectif.
- **Le jeudi est contraint par la visio** : chaque séance de qualité a désormais une **version courte de 40 min** écrite à côté de la version complète (elle garde ~80 % du bénéfice). C'est la seule séance dure de course de la semaine, elle ne se saute pas.
- **Variante laissée ouverte** : s'il peut s'entraîner 18h-19h15 avant le cours, l'EMOM revient au mercredi et le vendredi redevient un repos complet.

### Test final décalé

Le 1RM tombait le mercredi 14 octobre, soit en plein cours. Nouveau découpage : **jeudi 15 le 1RM lesté** (cible 47,5, pari 50), **samedi 17 le muscle-up seul**, **dimanche 18 le max reps puis les dips**. Le muscle-up passe avant le max reps et jamais après — mesuré derrière une série à l'échec, il mesurerait la fatigue. Rappel d'intensité maintenu au lundi 12, sortie longue allégée le vendredi 16 (la course ne gêne pas ces tests : ce sont les jambes, pas la prise).

### Le reste

- Neuf semaines réécrites (S10-S18), tous les mercredis libérés, la S18 était déjà compatible.
- Notes mises à jour : « Structure de semaine », « EMOM tractions » (passé au vendredi), « Muscle-up » (passé au lundi), « Tests », « Deload & taper », « Course — plan semi », « Charge totale », « Ce qui est en dernier ne se fait pas », « GTG optionnel » (créneau déplacé au mercredi, jour de repos).
- **Point de vigilance ajouté** : trois heures de cours jusqu'à 22h30, c'est un sommeil raccourci. Si le jeudi arrive systématiquement fatigué, la séance de qualité se déplace au vendredi — elle ne se supprime pas.
- `program.js` validé (parse Node OK, 18 semaines, 20 notes, 5 métriques, aucun mercredi occupé).

---

## 2026-09-17 (suite) — Semi le 22 novembre : le carnet passe à 18 semaines et bascule sur un plan hybride

Mehdi veut préparer un **semi-marathon le dimanche 22 novembre** (cible sub 1h50, référence 10 km en 47:00), progresser en course et travailler le format hyrox/crossfit. Sa proposition : « le jour de volume traction : EMOM 70 % max sur 10-15 min puis circuits hyrox/crossfit/street ». Et il maintient ses objectifs salle pour le test du 14-16 octobre : **50 kg au 1RM lesté, 25-30 en max reps, muscle-up**.

### L'EMOM : bonne idée, mauvais chiffre

70 % de 23 reps = 16 tractions par minute → échec à la 2e minute. **La référence sur un EMOM de tractions, c'est 30-40 % du max**, soit 7-8 reps/min. Ça donne 70-80 reps sur 10 minutes, c'est-à-dire exactement le volume de l'ancienne pyramide (60-74) en 10 minutes au lieu de 35. Format retenu, qui garde la spécificité d'une grosse série : **7-8 reps sur les 9 premières minutes, minute 10 en série libre**. Progression par la durée avant les reps (7x10 → 8x10 → 7x12 → 8x12, pic ~95 reps en S16). Nouvelle note « EMOM tractions ».

### La vraie contrainte n'était pas le mercredi

Un semi demande trois sorties par semaine ; il en fait une. Le carnet passe donc de « 4 salle + 1 créneau week-end » à **3 salle + 3 courses**, et le vendredi — écourté ou annulé une semaine sur deux depuis la S5 — devient un **repos assumé** plutôt qu'une séance fantôme. Structure : LUN salle haut · MAR circuit hyrox/jambes · MER muscle-up + EMOM + finisher · JEU course qualité · VEN repos · SAM sortie longue · DIM footing facile. Les trois séances de salle tombent sur les trois seuls jours réalisés à 100 % depuis dix semaines.

### Carnet étendu à 18 semaines, phase 4 ajoutée

- **S10-S13 (21 sept - 18 oct)** : le cycle tractions va au bout — charges qui montent vers les 50 kg (88 → 90 → 92 %), test final maintenu les 14, 16 et 17 octobre. La course monte en parallèle mais reste en base (23 → 31 km/semaine, une seule séance dure).
- **S14-S18 (19 oct - 22 nov)** : phase 4 « Semi-marathon & hyrox ». La salle passe en entretien (charge figée à 88 %, 40 min par séance), la course prend la main. Sortie longue 12 → 19 km (pic le 7 novembre, 15 jours avant), semaine d'absorption en S15, simulation hyrox « course compromise » le 27 octobre, répétition générale le 14 novembre (14 km dont 8 à allure course), affûtage sur deux semaines. **Le semi est écrit comme une séance de test** avec son plan de course.
- **Arbitrage assumé et écrit** : le 1RM et les dips sont déjà au-dessus des objectifs du cycle, ils se maintiennent à deux séances par semaine. Ce qui est rendu, c'est la séance d'explosivité du vendredi — dont le contenu essentiel (muscle-up, false grip) avait déjà été remonté au mercredi le matin même.
- **Objectif 30 reps reporté** au bloc d'après le semi : c'est l'EMOM qui le construira, pas quatre semaines de plus. Le graphique garde 25 comme cible du 16 octobre.

### Le reste

- **Cinquième métrique : « Sortie longue » (12 → 19 km)** — c'est elle qui prédit le chrono du 22 novembre, bien mieux que le fractionné. Cible du 1RM lesté relevée de 47,5 à **50 kg** à sa demande (47,5 reste le chiffre attendu, 50 le pari).
- **Quatre notes nouvelles ou refondues** : « Structure de semaine », « Allures de course » (toutes dérivées du 10 km en 47:00 ; au passage, les 5x600 m à 3:30/km du 16 août étaient à allure 1500 m), « Hyrox — stations et substitutions » (les 8 stations + un repli pour chacune selon ce qui est libre à la salle), « Course — plan semi ».
- **Le point de vigilance n°1 est écrit partout** : 80 % du volume en facile. Trois fois en phase 1 la sortie « facile » du dimanche est partie en fractionné. C'est ce qui coûtera le semi, pas le manque de vitesse — un 10 km à 47:00 prédit 1h43-1h45.
- `program.js` validé (parse Node OK, 18 semaines, 99 séances, 20 notes, 5 métriques). Dates vérifiées : S13 test le mer 14/10, pic de sortie longue le sam 07/11, semi le dim 22/11.

---

## 2026-09-17 — Deux records de plus, et la phase 3 réécrite autour de ce qui reste à jouer

Bilan du mercredi 16 : Mehdi a pris le **max reps ET le 1RM dips dans la même séance**, alors que le programme réservait les dips au vendredi. C'était le bon appel — tractions et dips ne partagent pas la musculature, et les deux chiffres sont des records.

- **Max reps : 23** (20 le 14/08, 21 le 26/08, 20 le 02/09). +2 d'un coup après un mois de stagnation, et ça arrive **après deux semaines sans aucune série max** — la décision qu'il avait prise seul le 2 septembre (« j'arrête les max toutes les semaines ») est validée par les faits. Objectif du cycle : 25. Il en reste deux.
- **1RM dips : 65 kg de lest** (57,5 · 60 · 65 validés, échec à 70). Le barème d'août était périmé de 7,5 kg : **1RM total 147,5 kg**, donc 78 % → 32,5 kg (au lieu de 27,5), 84 % → 41,5, 87 % → 46, 90 % → 50. Toutes les lignes de dips de la phase 3 sont recalées.
- **Poids de corps enfin repesé : 82,5 kg** (15/09) → 1RM total tractions **127,5 kg**. Les paliers ne bougent pas (19,5 · 26 · 30 · 32 · 35 · 38,5 · 45), le calcul est juste maintenant.
- **Il a commencé à saisir ses mesures** : premier point du graphique max reps après neuf cycles de rappel, 1RM et poids de corps à jour. Restent à saisir les 23 reps et les 65 kg du 16/09.
- **Quatrième métrique ajoutée** : « 1RM lesté dips » (départ 47, cible 70). Le code des métriques est entièrement piloté par `program.js` (`normMeasures` conserve les clés inconnues), l'ajout est sans risque pour l'historique.

### La décision structurante : le muscle-up quitte le vendredi

Le constat traînait depuis la S8, il est tranché. Le vendredi a été écourté ou annulé **une semaine sur deux depuis la S5** ; le lundi, le mardi et le mercredi se font **depuis dix semaines sans une seule exception**. Or le vendredi portait le muscle-up et le false grip, c'est-à-dire l'objectif du cycle.

- **Le bloc muscle-up + false grip remonte en ouverture du mercredi**, devant la pyramide. Le mercredi devient la séance clé de la phase 3.
- **Le vendredi descend à 3 lignes / 30 min** (explosif, straight bar dips, abdos) : s'il saute, le cycle ne perd plus rien. On arrête de le réparer, on arrête de compter dessus.

### Phase 3 (S10-S13) entièrement réécrite

Elle n'était qu'une esquisse. Deux objectifs restent ouverts — **les 25 tractions** et **l'enchaînement de muscle-ups** — tout le reste entretient.

- **Volume calé sur les 23 reps** : S10 → 8-10-12-12-10-8 (60 reps) · S11 → 8-10-12-14-12-10-8 (74, pic du cycle, posé 14 jours avant le test) · S12 → 6-8-10-8-6 (38, début du taper). Séries de travail à 45-60 % du max, 3-4 reps en réserve.
- **Force en maintenance** : 4x4 @30 kg (88 %) en S10, 5x3 @32 (90 %) en S11, 4x3 @35 (92 %) en S12 — dernier contact lourd. Le rappel d'intensité de la S13 est placé **le lundi**, jamais le vendredi (leçon du 11/09 : celui-là n'a pas été fait et a laissé 14 jours sans rien au-dessus de 88 % devant le test).
- **Test final éclaté sur trois créneaux** : mercredi 14/10 le 1RM lesté seul · vendredi 16 le max reps en ouverture puis les dips (le couple qui a donné deux records le 16/09) · samedi 17 le muscle-up seul en 20 min. Jamais deux tests de tirage dans la même séance, et le muscle-up jamais derrière une série à l'échec.
- **GTG réactivé avec un rôle précis** : 3-5 séries de 8-10 reps le jeudi/dimanche, c'est l'outil pour aller chercher les deux reps manquantes sans coûter au lundi ni au mercredi.
- **Vendredi 18 recadré** : il ne reste que le muscle-up (les dips sont faits), 25 minutes, et c'est le dernier chiffre manquant du cycle — c'est lui qui décide du format du bloc MU de la phase 3.

### Un bug d'exploitation : l'appli servait une version périmée

L'export du 17/09 affichait encore **« Objectif : 43 kg »** et l'ancien titre du mercredi (« Récup »), alors que les commits du 14/09 étaient poussés depuis trois jours. `index.html` chargeait `./program.js` sans aucun paramètre de cache. Ajout d'un horodatage `?v=20260917` sur `program.js` et `auth.js`, avec un commentaire qui rappelle de le bumper à chaque modification. À vérifier côté Mehdi : si le carnet affiche un bouton « Revenir au programme du site » dans la carte 🤖 Coach IA, c'est qu'un programme embarqué masque celui du dépôt — et dans ce cas aucune adaptation poussée ici ne lui parvient.

- `program.js` validé (parse Node OK, 13 semaines, 17 notes, 4 métriques).

---

## 2026-09-14 (soir) — Test 1RM : 45 kg, l'objectif du cycle tombe avec quatre semaines d'avance

Test avancé du mercredi au lundi le matin même, fait le soir. Déroulé complet : 3 @15 · 1 @25 · 1 @32 · 1 @42,5 (palier sauté par erreur de comptage, la rep passe quand même) · 1 @45 avec un petit appel en haut · 1 @45 propre · 1 @45 propre · 1 @47,5 raté de quelques centimètres · 1 @47,5 en échec.

- **45 kg de lest, et ce n'est pas un maximum arraché** : trois singles à 45 dans la même séance, dont deux sans la moindre réserve signalée. Le 1RM réel est probablement entre 46 et 47 — les 47,5 sont partis à quelques centimètres — mais le carnet programme sur **45**, la valeur validée. C'est la règle d'honnêteté posée au test de la S4, et elle a déjà payé une fois : les 40 kg ratés de 3-4 cm le 12 août sont passés douze jours plus tard.
- **Progression du cycle : 35 → 37,5 (12 août) → 40 (24 août) → 45 (14 septembre)**, soit +10 kg en huit semaines, dont +5 sur les trois dernières — un bloc de force max suivi d'une décharge complète. La décharge n'a rien coûté, elle a rapporté, et ce n'est pas anecdotique vu qu'elle avait été rallongée à contrecœur de la S8.
- **L'erreur de comptage a bien servi** : viser 37,5 et charger 42,5 a supprimé un palier intermédiaire, donc deux ou trois reps de prise économisées avant les tentatives hautes — exactement ce que la note « Prise & avant-bras » cherchait à obtenir avec la montée « économe en reps ». À reprendre volontairement au test final : 5 à vide · 3 @15 · 1 @28 · 1 @38 · 1 @44 · puis les tentatives.
- **Barème entièrement recalculé.** La note « Barème phase 2 » devient **« Barème phase 3 (mesuré le 14 septembre) »** : poids de corps 82,8 kg + 45 kg = **127,8 kg de total**. Lest correspondant : 80 % → 19,5 · 85 % → 26 · 88 % → 30 · 90 % → 32 · 92 % → 35 · 95 % → 38,5 · 100 % → 45. Soit **+5 kg sur chaque palier**. Le repère qui parle : le 5x3 @30 kg de la S7, qui était son 92 %, devient son **88 %** — la même séance est passée du travail lourd au travail d'entretien.
- **Objectif du cycle dépassé** : la cible du graphique 1RM passe de 43 à **47,5 kg** pour le test final du 14 octobre, et la vignette d'objectif affiche « 35 → 45 kg ✅ · cible 47,5 ».
- **Un point de forme à surveiller** : « un petit kick au bout » sur le premier 45. Les deux singles suivants sont notés propres, donc le chiffre tient — mais c'est le même appel léger que sur ses muscle-ups (note « Muscle-up »), et il apparaît ici sous charge maximale. À regarder au test final : si l'appel devient systématique au-dessus de 90 %, c'est la hauteur de tirage qui plafonne, pas la force.
- **Poids de corps à repeser** : le barème est calculé sur les 82,8 kg du 31 août, faute de mesure plus récente. Deux kilos d'écart déplacent tous les paliers.
- Reste de la semaine confirmé : max reps + volume allégé le mercredi 16 au soir, muscle-up + 1RM dips le vendredi 18.
- `program.js` validé (parse Node OK, 13 semaines, 17 notes, barème vérifié au calcul).

---

## 2026-09-14 — Bilan S8 : la décharge a marché, le rappel d'intensité du vendredi a sauté

Bilan de fin de S8 (export du 14 septembre), la semaine de décharge complète décidée le 7. La S9 — les deux tests, mercredi 16 et vendredi 18 — démarre aujourd'hui.

- **La décharge a fait exactement ce qu'on lui demandait** : les trois séances réalisées (lundi force, mardi jambes, mercredi volume) sont notées **« Facile »**, sans une seule mention de douleur d'épaule — quatrième semaine consécutive depuis que le bloc prévention est passé en échauffement. Le galop d'essai de la pyramide montante-descendante (5-7-9-7-5, 33 reps) est passé « sans difficultés », ce qui valide le confort du format sans rien prouver de plus : c'était la moitié du volume, en semaine allégée.
- **Le trou de la semaine : le vendredi 11 n'a pas été fait** (« pas fait, repos »). C'était le premier des deux rappels d'intensité du taper — 2x1 @30 kg. Conséquence chiffrée : hors les 3x3 @15,5 kg du lundi, **rien au-dessus de 88 % depuis le 31 août**, soit 16 jours au moment du test de mercredi. C'est précisément le scénario contre lequel la note « Deload & taper » avait été écrite (le volume se coupe, l'intensité se garde).
- **Correction appliquée au lundi 14** : la séance garde ses 3x2 @25 kg (88 %) et reçoit **un single @30 kg (92 %)**, quatre minutes de repos avant, jamais à l'échec, pas de deuxième tentative s'il monte lentement. Sept reps en tout dans la séance — le volume reste au plancher, le système nerveux revoit du lourd 48 h avant le test. La consigne du mercredi a été réécrite en conséquence, avec un repère honnête : après seize jours sans très lourd, une première montée « lente mais solide » est normale et ne justifie pas de redescendre la charge.
- **Le constat qui change d'échelle : ce n'est plus la fin de séance qui saute, c'est LE VENDREDI.** Trois vendredis sur quatre écourtés en phase 2, puis celui du 11 annulé en entier. Le lundi, le mardi et le mercredi, eux, se font — neuf semaines de suite, sans exception. Or le vendredi porte le muscle-up et le false grip, c'est-à-dire l'objectif du cycle. La note « Ce qui est en dernier ne se fait pas » enregistre le motif et pose l'alternative à trancher à la réécriture de la phase 3 : soit le bloc muscle-up remonte en **ouverture du mercredi** (le seul jour à 100 % de réalisation), soit le vendredi devient une séance de trois lignes qui tient en 30 minutes. Dans l'immédiat, le vendredi 18 est marqué comme non négociable, avec un **repli sur le samedi 19** — jamais un recollage sur le mercredi, qui coûterait 2 à 4 reps au max reps.
- **Consigne de prise partiellement contournée** : deadlift 4x10 @60 kg ajouté le mardi (« très facile ») alors que la semaine interdisait le SDT, et séance renfo en groupe avec AMRAP le jeudi. Sans conséquence à huit jours du test, mais le rappel est réécrit dans la séance du mardi de la S9, où il reste à 24 h du 1RM.
- **Mesures, neuvième cycle** : l'export affiche toujours « Aucune mesure enregistrée » pour le max reps, et le poids de corps n'a plus bougé depuis le 31 août (82,8 kg). Les trois chiffres du 16 et du 18 sont la dernière occasion propre de remplir la courbe avant le test final.
- **Phase 3 laissée telle quelle volontairement** : son cadrage (séries de la pyramide, charges à 88 %, format du muscle-up, emplacement du vendredi) dépend des trois chiffres de cette semaine. Réécriture complète prévue au bilan de la S9.
- `program.js` validé (parse Node OK, 13 semaines, 17 notes, structure des séances conforme).

---

## 2026-09-07 (fin) — Forme réelle du muscle-up : le critère du test était faux

Précision donnée par Mehdi en fin de journée : ses muscle-ups ne sont **pas stricts** — il y a un **léger appel des deux genoux** et une **rotation des poignets** par-dessus la barre au moment de la transition. Tel qu'il était écrit, le test du 18 septembre (« arrêt à la première rep cassée : jambes qui montent, passage bras après bras, kip ») lui aurait donné **zéro**, alors qu'il enchaîne 3 reps.

- **Les deux éléments ne sont pas de même nature, et le carnet ne les traite plus pareil.** La rotation des poignets n'est pas une triche : sans false grip le poignet est sous la barre et doit tourner pour passer au-dessus — c'est la technique, pas un défaut. Le léger appel de genoux, lui, est bien une assistance (kip minimal) : forme parfaitement légitime et la plus répandue, mais pas le strict.
- **Le test mesure désormais la CONSTANCE de sa forme, pas un label.** Une série max à froid, arrêt à la première rep où **l'appel augmente** (genoux plus hauts, hanches qui balancent), où les bras passent l'un après l'autre, ou où la transition cale. Les 2 séries de rappel deviennent utiles : la première avec un objet serré entre les genoux, comme repère de progression vers le strict, à coût nul en temps.
- **Le constat qui oriente la phase 3** : sa force n'est pas le frein. 40 kg de lest = **48 % du poids de corps** ajouté en traction, 57,5 kg aux dips = **69 %** — les deux au-dessus du seuil habituellement admis pour un MU strict (~40-50 %). Ce qui manque, c'est la hauteur de tirage et la transition. Le chemin vers le strict est donc écrit dans cet ordre : **false grip d'abord**, puis la hauteur (barre au bas du sternum), puis les négatifs lents, puis la réduction de l'appel.
- **Conséquence immédiate sur le programme** : le false grip hang remonte en **2e position** du vendredi de la S10 — c'est précisément la ligne qui a sauté trois vendredis sur quatre (note « Ce qui est en dernier ne se fait pas »), et c'est celle qui débloque l'objectif.
- Vignette d'objectif : « MU strict enchaîné » → **« MU enchaînés · vers le strict »**. Note « Muscle-up » réécrite, titres et critères d'arrêt harmonisés en S8, S9, S10 et au test final de la S13.
- `program.js` validé (parse Node OK, 13 semaines, 17 notes, 4 objectifs).

---

## 2026-09-07 (suite) — Le deload passe à une semaine pleine, les tests glissent en S9

Demande de Mehdi le lundi soir, après la séance de deload force : « le temps de deload n'est pas assez long d'après mes recherches ». Il a raison, et pour une raison plus précise que la durée : **la S8 telle qu'elle était écrite faisait deux choses incompatibles** — décharger et pointer un maximum — avec deux jours d'allègement seulement devant un test de 1RM.

- **État réel de la décharge avant modification** : dernière séance lourde le lundi 31/08 (5x3 @30, 2x2 @34 en échec), dernier gros volume le mercredi 02/09 (max 20 reps + pyramide + dips 4x5 @40), week-end du 5-6 en jambes légères, lundi 07/09 en deload à 80 %. Soit 7 jours sans volume et 9 sans tirage lourd au moment du test prévu — la fourchette basse d'un taper valable, mais une semaine de test qui n'a de deload que le nom.
- **Ce qui a été fait** : la **S8 devient une semaine de décharge complète sans aucun test** (mercredi à volume moitié, vendredi technique), une **nouvelle S9 porte les deux tests** (1RM mercredi **16 septembre**, muscle-up + max reps + dips vendredi **18**), et le programme passe à **13 semaines** — test final déplacé du 7-9 au **14-16 octobre**. Phases recalées : phase 2 = S5-S9, phase 3 = S10-S13.
- **Le point technique, écrit en note « Deload & taper »** : un taper coupe le VOLUME de 40-60 %, il ne coupe pas l'INTENSITÉ. Dix jours sans rien toucher de lourd et on arrive plat au test. D'où deux rappels d'intensité inscrits au plan — **2x1 @30 kg (92 %) le vendredi 11** et **3x2 @25 kg (88 %) le lundi 14**, jamais à l'échec, deux singles à chaque fois. La note fixe aussi les repères réutilisables : décharge toutes les 4-6 semaines de charge, une semaine pleine, 10-14 jours entre le dernier gros volume et un test.
- **La même logique appliquée en amont du test final** : le volume du mercredi de la S12 est déjà réduit (« début du taper », 8 jours avant) et le lundi de la S13 passe de « tractions lestées léger » à 2x1 @92 %.
- **Le mercredi de la S8 sert de galop d'essai** à la pyramide montante-descendante décidée pour la phase 3 : 5-7-9-7-5, 33 reps, la moitié du volume habituel. La note « Volume » change de titre (à partir de la S10) et le prochain max reps est celui du 18 septembre, puis plus rien jusqu'au test final.
- **Prise protégée sur dix jours** : pas de soulevé de terre, pas de false grip, pas de dead hang lourd, et **pas d'escalade sur les deux week-ends** avant le 16 — c'est elle qui a coûté le lundi force deux semaines de suite. Elle rouvre après le vendredi 18.
- La séance du lundi 07/09, déjà faite, est **laissée telle qu'elle a été réalisée** (le carnet doit refléter ce qui a été fait, pas ce qu'on aurait écrit après coup).
- `program.js` validé (parse Node OK, 13 semaines, 17 notes, structure des séances conforme à `validateProgram`, dates vérifiées : S9 = 14-20 sept, S13 = 12-18 oct).

---

## 2026-09-07 — Bilan S7 : 3 muscle-ups d'affilée, et une semaine de test à protéger

Bilan de fin de S7 (export du 7 septembre). La S8 — deload + double test — démarre aujourd'hui.

- **Le chiffre de la semaine : 3 muscle-ups enchaînés**, puis 2-2-2-2 sur les séries suivantes. En sept semaines la ligne est passée de « bras après bras » (S3) à « les deux bras ensemble » (S5) à un enchaînement de trois. L'objectif du carnet — deux propres d'affilée — est atteint sur le papier, avec une réserve honnête : c'était une séance « d'amusement avec les amis ». **Le test du vendredi change donc de nature** : plus de comptage de tentatives, mais UNE série max à froid, arrêt à la première rep cassée. C'est ce chiffre qui décide si la phase 3 travaille des séries de MU ou revient à des singles propres.
- **L'échec du lundi est un échec de prise, pas de force.** 5x3 @30 kg (92 %) passés sans commentaire, puis 2x2 @34 kg (95 %) en échec — « avant-bras trop fatigué à cause de l'escalade ». C'est la **deuxième fois de suite** que l'escalade du samedi coûte le lundi force. La note « Sports ajoutés » passe de conseil à règle, et une **nouvelle note « Prise & avant-bras »** rassemble le motif : SDT coupé par la prise en S2, S6 et S7 (réglé aux gants le 1er septembre, 100 kg), tractions lourdes en S7. La prise a limité une série lourde quatre fois ; les dorsaux, jamais.
- **La S8 est donc écrite autour d'une seule idée : amener les avant-bras intacts au mercredi.** Lundi deload sans dead hang lourd, sans false grip ; mardi jambes sans soulevé de terre ; magnésie au test ; et une **montée de test économe en reps** (5 à vide · 3 @15 · 1 @25 · 1 @32 · 1 @37 · 1 @40 · +2,5) au lieu des 10 reps d'échauffement de la version S4. Bonne nouvelle de départ : le week-end du 5-6 septembre n'a eu qu'une séance jambes légère.
- **Test 1RM mercredi, cible 42,5-45 kg**, avec une consigne d'honnêteté ajoutée : si 40 kg sortent limite, on note 40 et on s'arrête — c'est ce chiffre qui écrit tout le barème de la phase 3, un record arraché fausserait douze semaines.
- **Le format court est validé.** La séance jambes ramenée à 5 lignes a été faite **en entier**, avec du dépassement partout (squat 80 kg au lieu de 65-70, fentes 2x20 au lieu de 2x16, SDT 100 kg) — après un abandon en cours de séance en S6 sur le format à 7 lignes. Raccourcir n'a rien coûté. Le vendredi reste douteux : les négatifs de MU, le false grip et les straight bar dips reviennent sans le moindre retour.
- **Décision de Mehdi actée pour la phase 3** : « j'arrête les max toutes les semaines » et « faire une pyramide montante descendante ». Les faits lui donnent raison — 21 reps le 26/08, 20 le 02/09 : un max hebdomadaire ne mesure plus rien à ce niveau, il coûte juste une séance de volume. Nouvelle note **« Volume (nouveau format à partir de la S9) »** : plus de max hebdo (le prochain est celui de la S12), pyramide montante-descendante type 6-8-10-12-10-8-6 à volume constant (~70 reps). Cadrage définitif des séries à la réécriture de la phase 3, après le test de mercredi.
- **Développé incliné officialisé** (nouvelle note « Push ajouté ») : il a remplacé le couché à plat de lui-même, deux fois dans la semaine, motif « haut des pecs en retard ». Adopté avec deux garde-fous — c'est la première ligne coupée si l'épaule revient (position plus exposée que le plat), et la version du mercredi reste légère. Toujours pas d'écarté / pec deck.
- **Épaule : deuxième semaine complète sans une seule mention de douleur**, dips à 40 kg et incliné compris. Le déplacement du bloc prévention en échauffement (S6) tient.
- **Rowing** : 54-61-68-68 en prise serrée, la machine qui « plafonnait à 60 » ne plafonne plus. **Dips** 4x5 @40 kg propres.
- **Mesures** : le graphique max reps est **toujours vide** après huit semaines, alors qu'il y a maintenant trois valeurs dans les remarques (20 le 14/08, 21 le 26/08, 20 le 02/09). Elles racontent quelque chose d'utile — le max stagne pendant que le lesté prend 5 kg, comportement normal d'un bloc de force max — mais tant qu'elles ne sont pas saisies, la comparaison S4 → S8 → S12 n'existe pas. Poids 82,8 kg (-1 depuis le départ), objectif 80 hors d'atteinte d'ici la S12.
- `program.js` validé (parse Node OK, 12 semaines, 16 notes, structure des séances intacte).

---

## 2026-08-31 — Bilan S6 : 40 kg passés, tout le barème tractions remonte de 2,5 kg

Bilan de fin de S6 (export du 31 août). La S7 démarre aujourd'hui.

- **Le chiffre du cycle : 40 kg de lest passés en single le 24 août** — en fin de séance, après 5x3 @27,5 et 2x2 @31,5. Ce sont exactement les 40 kg ratés de 3-4 cm au test du 12 août : douze jours plus tard ils passent, et fatigué. Nouveau barème sur 40 kg + 82,7 kg de corps = **122,7 kg de total**, soit **+2,5 kg sur chaque palier** (80 % → 15,5 · 88 % → 25 · 92 % → 30 · 95 % → 34 · 97 % → 36,5). Le test du mercredi de S8 vise **42,5-45 kg** ; l'objectif du cycle (43 kg) tombera probablement avec 4 semaines d'avance.
- **L'épaule : le déplacement du bloc prévention a marché.** S5 = trois séances douloureuses avec le renfo relégué en fin de séance ; S6 = bloc complet en échauffement du lundi → **aucune douleur de la semaine**, un simple titillement aux dips « vite parti ». La note « Épaule gauche » passe de diagnostic à résolution ; le code couleur reste en cas de retour.
- **Deux séances raccourcies, même cause.** En S6 le vendredi, les **négatifs de MU — ligne prioritaire du bloc, placés en 5e position — ont sauté** (« pas le temps ») alors que les lignes 6 et 7 ont été faites : numéroter ne suffit pas, il faut raccourcir. Le vendredi passe à 6 lignes (négatifs en 3, transitions supprimées puisqu'il passe des MU complets, renfo épaule réduit à sa version courte). La séance jambes passe à 5 lignes après un abandon en cours de séance (« trop fatigué et saoulé »), avec squat ramené à 65-70 (fait : 60-65), leg press à 200-220 et un rappel **sangles** au SDT — la prise a limité la série trois fois, jamais les jambes.
- **Leg press retiré du programme** (sa demande, le jour même) : il doublonnait avec le squat barre — même mouvement bilatéral, même dominante quadriceps — et c'est la ligne qui allongeait le plus la séance. Remplacé par les **fentes marchées 3x12/jambe @2x16 kg**, qui apportent l'unilatéral, la stabilité de hanche et du transfert sur la course, et qui sont la seule ligne jambes qu'il ait fait progresser de lui-même (25 → 32 kg en S3). Répercuté sur S8 à S12 : squat léger en deload, squat 3x6 + fentes en maintenance phase 3.
- **Série max déplacée en ouverture du mercredi** : en S6 il l'a fait de lui-même avant les séries → **21 reps**, contre 13 en fin de pyramide. C'est la bonne place et c'est la répétition générale du test S8. Pyramide raccourcie à 12-10-8-6 derrière, volume total inchangé (~70 reps).
- **Dips** : 4x6 @35-37,5 tenus, puis 5 reps @40 sur la dernière série, coupée par une **perte d'équilibre**, pas par la force. S7 fixée à **4x5 @40 kg** (87 % du total) avec la consigne d'équilibre écrite dans la ligne.
- **Muscle-up** : 1er MU propre avec une simple flexion de jambes sur 4-5 séries, 2e « de plus en plus cassé ». L'objectif du bloc devient **2 reps propres d'affilée**, toujours plafonné à 3-4 tentatives à froid. La S9 est pré-cadrée : si le test S8 valide 2 reps propres, la ligne MU devient des séries de 2 au lieu de singles.
- **Nouvelle note « Sports ajoutés »** : l'escalade est une séance de tirage complète — celle du samedi de S6 a laissé des courbatures jusqu'au lundi de S7, jour force, ce qui est écrit en tête de la séance du jour. Règle : escalade le samedi = lundi allégé, ou escalade en milieu de semaine. Même logique pour la course : 7 km à 4:34 **le lundi** en S6.
- **Course** : la règle « intensité le samedi, jamais le dimanche » a tenu deux semaines de suite après trois semaines de dérive. Conservée telle quelle.
- **Mesures** : vrai progrès — le 1RM lesté est saisi (40 kg le 24/08) et le poids de corps suivi (82,7 kg, -1,1). **Le max reps reste le seul graphique vide** alors que deux valeurs existent (20 le 14/08, 21 le 26/08) : c'est celui qui porte l'objectif du cycle.
- `program.js` validé (parse Node OK, 12 semaines, 13 notes, structure des séances intacte).

---

## 2026-08-23 — Bilan S5 : l'épaule passe devant, dips recalés à la baisse, MU les deux bras ensemble

Bilan de fin de S5. La S6 démarre demain.

- **Le muscle-up est passé LES DEUX BRAS ENSEMBLE** : 2 réussis le 21 août, la 3e tentative « cassée » et arrêt immédiat. Le diagnostic de la S4 était donc le bon (le facteur limitant était le gainage à la bascule, pas la force de tirage) et les trois leviers — négatifs, explosives jambes bloquées, hollow — ont payé en deux semaines. L'objectif du carnet passe de « obtenir le MU » à « l'enchaîner » ; sa décision d'arrêter à la rep cassée devient une règle écrite (note « Muscle-up », vignette d'objectif « MU strict enchaîné »).
- **Douleur épaule gauche signalée trois fois** : mercredi 19 dès l'échauffement, vendredi 21 (séance écourtée), samedi 22 où elle apparaît sur un *upper chest flight* pendant une séance ajoutée avec des amis. C'est le signal dominant de la semaine — et il tombe sur une semaine à 4 séances de salle + 1 séance upper body + 1h30 de badminton + 1h de tennis.
  - Nouvelle note **« Épaule gauche »** placée en tête du carnet : règle vert / orange / rouge, avec le seuil explicite (douleur nocturne, au repos, ou perte d'amplitude → kiné avant de continuer le bloc). Principe retenu : on coupe le **push** (dips, straight bar dips, écarté / pec deck / upper chest flight, développé en progression) et on **garde le tirage lourd**, qui n'irrite pas l'épaule.
  - Renfo épaule + coiffe remontés **en échauffement** du lundi (S6→S12) et en **ligne 1** du vendredi. En S5 il était « tiré en fin de séance » le lundi et « pas eu le temps » le vendredi.
- **Erreur de barème sur les dips, corrigée** : la S5 prescrivait 4x8 @35 kg (84 % du total) → échec à la 8e rep de la 3e série, à la 6e de la 4e. Un 4x8 propre, c'est 78-80 %, pas 84 %. Conséquence sur le bloc : **S6 4x6 @35-37,5** (au lieu de 4x6 @40) et **S7 4x5 @40-42,5** (au lieu de 4x5 @45). La note « Barème phase 2 » gagne la lecture reps↔%.
- **À l'inverse, les tractions confirment la montée** : 5x3 @25 kg (90 %) sortis avec « je me suis pas senti à ma limite ». Sa résistance en reps est au-dessus des tables → S6 reste à 5x3 @27,5 (92 %) + 2x2 @31,5 (95 %) comme prévu, et la tentative des 40 kg en S7 est maintenue — mais **conditionnée à une S6 sans douleur d'épaule**, sinon report au test du mercredi de la S8.
- **Séance jambes réécrite sur ce qui se fait réellement** : en S5 elle a été remplacée par celle d'un ami (squat barre 3x8 @50, presse 4x8 @100-140, hip thrust, leg extension). Le 5x5 @240-250 prévu était hors sol. Squat barre et hip thrust sont officialisés, la presse revient à 200-210 (niveau S3) avant de remonter, et une **version courte assumée** est écrite noir sur blanc : squat + SDT + gainage.
- **Ordre des séances, suite** : la règle maison se confirme une fois de plus (circuit abdos « pas le temps de faire » en S3 comme en S5 ; false grip, straight bar dips et renfo épaule « pas eu le temps » trois vendredis sur quatre). Les séances du haut sont désormais **numérotées 1→7 par ordre d'importance**, abdos remontés avant rowing et dips le mercredi. La note « Fin de séance » devient **« Ce qui est en dernier ne se fait pas »**.
- **Rowing** : parti à 60 kg, redescendu à 51 dès la 2e série → S6 repart de 55, remontée à 60 seulement si les 4 séries sortent propres.
- **Week-end** : la note « Course » gagne l'ajout raquette — badminton et tennis comptent comme des séances **et** comme du travail bras au-dessus de la tête. Un seul créneau week-end à partir de la S6, le samedi : course **ou** sport.
- **Mesures** : le poids de corps est bien suivi (82,8 le 10, 83 le 13, 82,8 le 23) mais il **stagne** — -1 kg en cinq semaines pour un objectif à 80. Note « Nutrition » réécrite autour de l'arbitrage (force et MU progressent, un déficit franc coûterait les deux) plutôt qu'autour du chiffre. Et **6e cycle sans saisie des résultats du test S4** : 37,5 kg · 20 reps · 57,5 kg dips existent dans les remarques de séance mais pas dans « 📈 Ma progression », où deux graphiques sur trois affichent encore « aucune mesure ».
- `program.js` validé (parse Node OK, 12 semaines, découpage des tests sur deux jours intact).
- **Incident de synchro à noter** : cette adaptation a d'abord été écrite sur une copie locale en retard de 4 commits (base `c50870e` du 10 août), ce qui aurait écrasé les trois cycles S4. Détectée au push (non-fast-forward), rejouée sur `origin/main`, la version périmée est conservée sur la branche `wip/bilan-s5-v1`. **Réflexe à prendre : `git fetch` avant toute adaptation.**

---

## 2026-08-17 — S4 complète : 20 reps, 1RM dips 57,5 kg, phase 2 recalée sur les dips

Bilan de **fin de S4** (le vendredi de test et le week-end, qui manquaient à l'export du 13). La S5 démarre aujourd'hui.

- **Max reps enfin mesuré : 20** (départ du carnet : 17, objectif : 25). C'était la métrique jamais mesurée depuis le 20 juillet ; le découpage des tests sur deux jours a donc bien fait son travail. À relativiser à la hausse : test passé « journée très fatigante + séance tardive » — la vraie valeur est plutôt 21-22. Il reste ~5 reps à trouver en 8 semaines, c'est jouable.
- **1RM dips : 55 kg validés, 60 kg ratés de peu → ≈ 57,5 kg de lest** (140,5 kg de charge totale). L'estimation de la S1 (47 kg, extrapolée d'un 4@45) était **très** basse : toute la phase 2 travaillait les dips à 10 kg sous la cible. Recalage : S5 **4x8 @35** (84 %) · S6 **4x6 @40** (87,5 %) · S7 **4x5 @45** (90 %) · phase 3 à 78 % → 27,5 kg. Barème dips ajouté à la note « Barème phase 2 ».
- **Explosivité du vendredi : pas faite** — les transitions MU avaient été déplacées en fin de séance le 13/08 pour protéger le max reps. Ça a protégé le max reps et supprimé le travail MU. Confirmation de la règle maison : **ce qui est en fin de séance saute**. En S8 le muscle-up repasse en ouverture, mais **plafonné à 3 singles** (compromis : ~1 rep de coût sur le max reps, contre 2-3 pour 5-6 essais). En S5 les transitions restent en tout début de séance.
- **Course** : 3e semaine de suite où la sortie « facile » du dimanche part en intensité — cette fois 5x600 m à 3:30-3:45 alors que la consigne disait « VRAIMENT facile », ressenti « Dur », **la veille du jour force**. Nouvelle note « Course » : l'intensité est autorisée mais le **samedi**, jamais le dimanche ; le dimanche c'est facile réel (5:45-6:15/km) ou rien. La ligne course de S5 propose explicitement l'un **ou** l'autre.
- **Lundi S5** : garde 5x3 @25 kg, avec porte de sortie écrite (4 séries au lieu de 5 si la série 2 est dure) — première séance lourde 24 h après le fractionné.
- **Cohérence des négatifs de MU corrigée** : S6 et S7 référençaient encore « S5 : 4x1 » alors que S5 était passé à 4x2 le 13/08. Progression remise à plat : S5 4x2 @3-4s → S6 4x2 @4-5s → S7 3x3 @5s.
- **Toujours aucune mesure saisie** dans « 📈 Ma progression » (5e cycle) — mais désormais les trois chiffres existent (37,5 kg · 20 reps · 57,5 kg dips). Note « Mesures » réécrite autour de ça.
- `program.js` validé (parse Node OK, 12 semaines, structure des séances intacte).

---

## 2026-08-13 — Test 1RM S4 : 37,5 kg mesurés, toute la phase 2 recalée

Bilan exporté **en cours de S4** (le test du vendredi et la sortie du dimanche restent à faire).

- **Le chiffre du cycle** : test 1RM lesté du mercredi 12 août → **37,5 kg** (83 kg de corps, soit **120,5 kg de charge totale**). Déroulé : 35 kg « large », **40 kg raté de 3-4 cm**, puis 38,5 kg raté par fatigue. Cohérent au kilo près avec les 4x4 @24 kg de la S3 (Epley → 38,3). Le départ du carnet (35 kg) était donc légèrement sous-estimé, pas énormément.
- **Défaut de protocole à ne pas répéter** : montée 15 → 25 → 30 → 35 → **40**, soit un saut de +5 kg juste sous le max, suivi d'une 2e tentative déjà fatiguée. Près du max : **+2,5 kg par palier, arrêt au 2e échec**. Consigne écrite dans le test du vendredi S4 et dans le test S8.
- **Phase 2 recalculée** sur le total mesuré, en remplacement des hypothèses « si le test donne 40 kg » : S5 5x3 **@25 kg** (90 %) · S6 5x3 **@27,5** (92 %) + 2x2 **@31,5** (95 %) · S7 3x1 **@34 → 37,5 → 40** (97 % → 100 % → la revanche des 40 kg, frais) + back-off 2x3 **@23** (88 %) · S8 deload 3x3 **@13,5** (80 %). Note « **Barème phase 2** » ajoutée au carnet avec la table complète % → lest.
- **Bug de calcul corrigé** : le deload S8 affichait « ~75 % → 15-17,5 kg » — 15-17,5 kg correspondait en réalité à ~80 %, le libellé et le chiffre se contredisaient. Ligne reprise en 80 % → 13,5 kg.
- **Muscle-up en avance** : 3 puis 2 négatifs enchaînés en semaine de **deload**, alors que le programme en demandait 3x1. S5 passe donc à **4x2** (descente 3-4 s) au lieu de 4x1.
- **Mesures** : le poids de corps est enfin saisi (82,8 le 10, 83 le 13) — la note « Mesures » est mise à jour en conséquence. Manquent le 1RM du 12 août et le max reps du vendredi, jamais mesuré depuis le début.
- **Ordre du test du vendredi revu** (à sa demande) : plus de tentatives de MU en ouverture, transitions reportées en fin de séance. Motif retenu — 3-5 singles de MU coûtent 2-3 reps sur le **max reps** qui suivait, or c'est la métrique jamais mesurée du carnet ; et le repère MU du bloc existe déjà (3 MU en séance en S3, 3+2 négatifs le lundi S4). Nouvel ordre : max reps → dips → transitions. Réserve posée : **transitions seulement, aucun MU complet à la fatigue** — c'est là qu'on ancre le passage bras après bras (note « Muscle-up »). Test MU à froid maintenu en S8.
- `program.js` validé (parse Node OK, 12 semaines).

---

## 2026-08-10 (suite) — Tests découpés, face pulls déplacés, travail muscle-up ciblé

Trois questions posées en cours de S4, trois modifications dans `program.js`.

- **Muscle-up « bras après bras »** : le MU passe, mais un seul, et le gainage lâche autour des jambes. Diagnostic : les trois symptômes n'en font qu'un. Le gainage cède à la bascule → le corps n'est plus un bloc → l'élan du tirage se dissipe → plus assez de hauteur pour passer les deux épaules ensemble → passage dissocié, très coûteux, donc pas de 2e rep. **Le facteur limitant n'est pas la force de tirage** (4x4 @24 kg, largement au-dessus du seuil d'un MU strict). Ajouts au programme : **muscle-up négatif** (descente lente à travers la transition — le seul exercice où tricher bras après bras est impossible), **tractions explosives jambes strictement immobiles** (objet serré entre les genoux), **hollow hold** en ouverture de la séance jambes. Plus une règle : tentatives de MU uniquement à froid, en singles, 3-6 max.
- **Tests séparés sur deux jours** : le 1RM lesté passe au **mercredi** (frais, seul — c'est lui qui règle toutes les charges du bloc suivant, et il est à l'abri d'un vendredi décalé), le **max reps + dips + muscle-up** restent au vendredi, dans cet ordre. Motif : 15 min de repos après des singles lourds coûtent 2 à 4 reps sur la série max — l'objectif des 25 reps pouvait être atteint sans jamais apparaître sur le graphique. Appliqué à **S4, S8 et S12** pour que les trois tests soient comparables. Les séances « deload technique » du mercredi ont été remplacées, donc **aucune séance ajoutée**.
- **Face pulls déplacés du mardi au lundi** : il les trouvait fatigants pour le mercredi (volume). Un face pull correct ne fatigue pas — s'il fatigue, il est trop lourd ; mais le vrai suspect du mardi est plutôt le SDT @100 kg + leg press 5x5, 24 h avant la pyramide de tractions. Le déplacement règle les deux cas : en **échauffement du lundi**, avant les tractions lestées, ils préparent l'épaule au lieu de la fatiguer, ils restent en début de séance (donc toujours protégés de l'oubli, raison de leur placement initial) et le mardi n'empiète plus sur le mercredi. + 1 série le vendredi pour le volume hebdo. Le mardi garde le gainage, qui passe en hollow hold.
- Notes ajoutées au carnet : « Face pulls », « Tests », « Muscle-up ». Note « Fin de séance » mise à jour.
- `program.js` validé (parse Node OK, 12 semaines, S4/S8/S12 avec deux séances `test`).

---

## 2026-08-10 — Bilan S3 : correction des % de la phase 2, S4 (test) recadrée

- **Faits marquants du bilan S3** :
  - Force : **4x4 @24 kg validés** (S2 : 22,5 « au max des reps »). La consigne RPE 8-9 sur le tirage a réglé le problème des machines incomparables.
  - Volume : pyramide 13-11-9-7-5 finie + **11 reps en série max** (S2 : 9), sans congestion — il attribue ça à un échauffement plus long, à conserver. Rowing plafonné à 60 kg (limite machine).
  - Dips : 4x8 @30 kg avec réserve **+ 40 reps à vide** en série max → le 1RM estimé à 47 kg est nettement sous-évalué.
  - Muscle-up : **3 MU dans la séance** (séries 2, 3 et 4, bras après bras) + 4-5 séries de transitions. Il est en avance d'un bloc entier sur le plan (le MU est l'objectif de la phase 3).
  - Séance jambes enfin faite, et plus lourd que prévu : SDT monté à **100 kg** (grippe qui lâche), fentes @32 kg au lieu de 25.
  - **Russian dips impossibles** : pas de barres parallèles à disposition.
  - Toujours **aucune mesure** dans « 📈 Ma progression » — 4e cycle consécutif.
- **Erreur de programmation corrigée** : les % de la phase 2 étaient calculés sur le **lest seul** et non sur la charge totale (corps + lest). Le « 5x3 @30 kg » de S5 valait ~96 % du 1RM total — infaisable. Toute la phase 2 (S5-S8) et la phase 3 sont repassées en % de la charge totale, avec une note « Pourcentages » et sa formule dans le carnet.
- **Adaptations dans `program.js`** :
  - **S4 (en cours)** : lundi recalé à 3x3 @22 kg + transitions MU d'entretien ; vendredi **protocole de test entièrement détaillé** (ordre imposé, paliers chiffrés 20/28/34/38 puis +2,5, cibles issues des repères S3 : 40-43 kg au 1RM lesté, 18-22 en max reps) ; **test 1RM dips ajouté** puisque c'est lui qui règle les dips de la phase 2 ; ligne explicite sur la saisie des mesures.
  - **Fin de séance jambes** : face pulls, gainage et étirements déplacés **en tête de séance** dans toutes les semaines restantes (4 semaines de suite qu'ils sautent) ; mollets = seule ligne facultative. Leg extension classique officialisée à la place de l'AVL. SDT avec sangles.
  - **Muscle-up avancé en phase 2** : le vendredi devient « Muscle-up & explosivité » dès la S5 (transitions frais en début de séance, singles de MU, objectif « les deux bras ensemble »). La phase 3 passe de « obtenir le MU » à « MU strict, puis clusters, puis reps enchaînées ».
  - **Russian dips → straight bar dips** partout (faisables sans barres parallèles, et plus spécifiques à la sortie du muscle-up).
  - Bloc push (DC haltères, curl) officialisé au lundi de la phase 2 ; pyramide montée à 14-12-10-8-6 en S5/S6 puis 15-13-11-9-7 en S7 ; dips recalés en kg absolus.
  - Notes ajoutées : « Pourcentages », « Mesures », « Fin de séance ».
- **Point de vigilance** : si le test de vendredi confirme 43 kg au 1RM lesté, l'objectif des 12 semaines est atteint à la S4 → cible à relever pour la phase 2.

---

## 2026-08-02 — Bilan S2 complet : adaptation S3/S4

- **Faits marquants du bilan S2** :
  - **Premier muscle-up passé** (bras après bras) pendant la séance explosivité, jugée « Facile » — en avance sur le plan (le MU strict est l'objectif de la phase 3).
  - **Séance jambes S2 sautée** (décalée mar → jeu, jamais faite ; 2 courses de ~10 km cette semaine-là).
  - Séance explosivité transformée en séance push : false grip et russian dips **sautés**, gros ajouts développé couché (5@80 kg facile, tentative ~100 kg assistée), renfo épaule/coiffe, triceps, curl.
  - Mercredi volume : pyramide 13-11-9-7-5 complétée + max 9 ; circuit abdos monté de lui-même en x3 @36-38 kg ; rowing : échec à ~70-79 kg en 1re série, retour à 60.
  - Toujours **aucune mesure** dans « 📈 Ma progression ».
- **Adaptations dans `program.js`** :
  - Mardi S3 « Jambes & renfo — reprise » : on refait le plan S2 (leg press 4x8 @200-210, SDT 3x10 @85, fentes marchées) au lieu de la progression 4x6 @210-220 — pas de saut de charge après 2 semaines sans jambes.
  - Mercredi S3 : circuit abdos officialisé (x3, crunch 8-10 @36, obliques @36-38, gainage 3x30-40s) + curl biceps unilat. adopté (@14-16 kg).
  - Vendredi S3 « Explosivité & muscle-up » : transitions MU 3x2-3 en début de séance ; false grip 3x20s et russian dips 3x8 marqués **non négociables** ; développé couché cadré 4x5 @75-80 kg (pas de max assisté en semaine de charge) ; renfo épaule/coiffe intégré.
  - Vendredi S4 (test) : ligne ajoutée — poids de corps du matin + résultats du test à saisir dans « Ma progression ».
- Côté appli, rien à changer — dépannage « nouveau PC » fourni en conversation (recréer le profil legacy via la console, puis réactiver la synchro) ; une vraie fonctionnalité « Récupérer un profil depuis le cloud » reste à faire.

---

## 2026-08-01 (suite) — Synchro « automatique » : l'appli crée le dépôt

- Carte « ☁️ Synchronisation », nouveau parcours **Option 1 — automatique** (pensé pour les amis) : coller un token GitHub **classic** (scope `repo`) suffit — l'appli détecte le compte (`GET /user`), **crée le dépôt privé** (`POST /user/repos`, `training-data` par défaut, nom modifiable) ou le réutilise s'il existe (422), détecte la branche par défaut, vérifie que le dépôt est privé, et active la synchro sur le fichier du profil. Le parcours manuel fine-grained reste en Option 2.
- Erreur claire si le token ne peut pas créer de dépôt (fine-grained sans Administration → « utilise un token classic avec la case repo cochée »).
- Smoke test enrichi : **67/67 OK** (scénario C avec API GitHub mockée : création 201, réutilisation 422, un fichier par profil dans le même dépôt, configs isolées).

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
