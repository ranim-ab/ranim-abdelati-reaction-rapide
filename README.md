<<<<<<< HEAD
###### ***Description:***

Ce projet a pour objet un "Jeu de Réaction Rapide" qui a comme objectif de mesurer le réflexe du joueur par le biais d'un signal qu'in choisit , soit visuel soit auditif.



\###L'interface### contient un HEADER, un TITRE (balise h1) et 3 BOUTONS: 2 pour choisir le signal et un sur lequel le joueur appuis et les scores sont affichés.



Le jeu/test ne commence que lorsqu'on appuis sur un des deux boutons BTN\_VISUEL ou BTN\_AUDIO.
 
Avant ça, l'appui sur le bouton BTN n'a aucun rôle.

* **TEST VISUEL**: on clique sur le grand bouton (BTN) pour commencer la partie. Le joueur attend le rouge et clique dès qu'il le voit. Son temps de réflexe est immédiatement affiché dans le bouton même. S'il clique trop tôt, le message "Oops ! Trop tôt, recommencez!" s'affiche mais l'essai ne se réinitialise pas (la partie continue).



* **TEST AUDITIF:** de même, on clique sur le bouton (BTN) pour commencer la partie. Le joueur attend le signal (beep) et clique dès qu'il l'entend. Son temps de réflexe est immédiatement affiché dans le bouton même. S'il clique trop tôt, le message "Oops ! Trop tôt, recommencez!" s'affiche mais l'essai ne se réinitialise pas (la partie continue).



   Après une partie qui consiste de 3 essais, la moyenne est affichée dans le bouton même ainsi qu'un commentaire d'évaluation des réflexes du joueur.

Un clic sur le bouton BTN\_VISUEL ou BTN\_AUDITIF après ou lors de la partie la réinitialise.



###### ***Difficultés:***

* Au début, j'ai employé les EventListeners sur BTN pour réinitialiser les parties (addEventListener, removeEventListener). Leur superposition a engendré plusieurs erreurs parmi lesquels un blockage complet du code lorsqu'on appuis plusieurs fois consecutives sur le boutons BTN\_VISUEL et BTN\_AUDIO. J'ai alors recourus à remplacer le bouton BTN lui même par cloneNode(true) et parentNode.replaceChild(newBtn, btn), afin d'écraser tout les evenements et le contenu précédents.



* Pour rendre la page responsive, j'ai utilisé les dimensions vh, vw et % pour les éléments.



* J'ai oublié de faire un clearTimeout pour le timer que j'ai utilisé ce qui a engendré un changement de couleur et un signal sonore lorsque la partie est supposée réinitialisée.



###### ***Nouveautés:***

* Le bouton avec l'effet de clic à l'aide de TranslateY().
* L'utilisation de plusieurs EventListeners à la fois.
=======
Description:
Ce projet a pour objet un "Jeu de Réaction Rapide" qui a comme objectif de mesurer le réflexe du joueur par le biais d'un signal qu'in choisit , soit visuel soit auditif.

Le site contient un HEADER, un TITRE (balise h1) et 3 BOUTONS: 2 pour choisir le signal et un sur lequel le joueur appuis et les scores sont affichés.

Le jeu/test ne commence que lorsqu'on appuis sur un des deux boutons BTN_VISUEL ou BTN_AUDIO.
Avant ça, l'appui sur le bouton BTN n'a aucun rôle.

⦁	TEST VISUEL: on clique sur le grand bouton (BTN) pour commencer la partie. Le joueur attend le rouge et clique dès qu'il le voit. Son temps de réflexe est immédiatement affiché dans le bouton même. S'il clique trop tôt, le message "Oops ! Trop tôt, recommencez!" s'affiche mais l'essai ne se réinitialise pas (la partie continue).

⦁	TEST AUDITIF: de même, on clique sur le bouton (BTN) pour commencer la partie. Le joueur attend le signal (beep) et clique dès qu'il l'entend. Son temps de réflexe est immédiatement affiché dans le bouton même. S'il clique trop tôt, le message "Oops ! Trop tôt, recommencez!" s'affiche mais l'essai ne se réinitialise pas (la partie continue).

   Après une partie qui consiste de 3 essais, la moyenne est affichée dans le bouton même, ainsi qu'un commentaire d'évaluation des réflexes du joueur.
Un clic sur le bouton BTN_VISUEL ou BTN_AUDITIF après ou lors de la partie la réinitialise.

Difficultés:

⦁	Au début, j'ai employé les EventListeners sur BTN pour réinitialiser les parties (addEventListener, removeEventListener). Leur superposition a engendré plusieurs erreurs parmi lesquels un blockage complet du code lorsqu'on appuis plusieurs fois consecutives sur le boutons BTN_VISUEL et BTN_AUDIO. J'ai alors recourus à remplacer le bouton BTN lui même par cloneNode(true) et parentNode.replaceChild(newBtn, btn), afin d'écraser tout les evenements et le contenu précédents.

⦁	Pour rendre la page responsive, j'ai utilisé les dimensions vh, vw et % pour les éléments.

⦁	J'ai oublié de faire un clearTimeout pour le timer que j'ai utilisé ce qui a engendré un changement de couleur et un signal sonore lorsque la partie est supposée réinitialisée.

Nouveautés:

⦁	Le bouton avec l'effet de clic à l'aide de TranslateY().
⦁	L'utilisation de plusieurs EventListeners à la fois.
>>>>>>> f69b7fb67baf3c060d2ceac34af08c66b347e897
