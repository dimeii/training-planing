# Journal de bord — Carnet Tractions & Explosivité

Point d'avancement du projet et du protocole. Entrée la plus récente en haut.

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
