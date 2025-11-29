
# Jeu Réaction Rapide

Ce projet est un jeu qui a comme objectif de mesurer le réflexe du joueur par le biais d'un signal visuel ou sonore.

## Technologies utilisées
HTML, CSS, JavaScript.
L'interface contient 2 titres et 3 boutons.

## Fonctionnalités principales
Le jeu/test ne commence que lorsque le joueur choisit le type de réflexe qu'il veut tester: il appuis sur l'un des deux boutons **"SIGNAL VISUEL"** ou **"SIGNAL SONORE"**.

On clique sur le grand bouton pour commencer la partie qui consiste de 3 essais.

* **TEST VISUEL**:  Le joueur attend le rouge et clique dès qu'il le voit. 


* **TEST AUDITIF:**  Le joueur attend le signal sonore (beep) et clique dès qu'il l'entend. 


Son temps de réflexe est immédiatement affiché dans le bouton même. 
S'il clique trop tôt, le message **"Oops ! Trop tôt, recommencez!"** s'affiche et il doit cliquer une 2ème fois pour continuer.

A la fin de la partie, la moyenne est affichée dans le bouton même ainsi qu'un commentaire d'évaluation des réflexes du joueur (lent, moyen ou incroyable).

Un clic sur le bouton **"SIGNAL VISUEL"** ou **"SIGNAL SONORE"** après ou lors de la partie la réinitialise.

## Lien 
Ce site a été crée à l'aide de [Github Pages](https://ranim-ab.github.io/ranim-abdelati-reaction-rapide/)


## Nouveautés explorées
* Un bouton avec l'effet de clic à l'aide de ```translateY()``` quand il est actif ou le curseur est dessus.
* L'utilisation de ```addEventListener()```  dans une fonction d'un autre ```addEventListener()```.
* L'utilisation de ```àddEventListener({once: true})``` pour que l'événement n'est ajouté que pour un seul clic et est ensuite enlevé.

* La réinitialisation d'un élément avec ```cloneNode(true)```. 


## Difficultés rencontrées
* Au début, il y avait un chevauchement des signaux et des parties.

* J'ai employé les EventListeners sur le bouton pour réinitialiser les parties (```addEventListener()```, ```removeEventListener()```). Leur superposition a engendré plusieurs erreurs parmi lesquels un blockage complet du code lorsqu'on appuis plusieurs fois consecutives sur les boutons **"SIGNAL VISUEL"** et **"SIGNAL SONORE"**.

* Rendre la page responsive.
  
## Solutions apportées
* Pour éviter le chevauchement, j'ai employé ```clearTimeout()``` pour chaque nouveau clic et lorsque le joueur clique trop tôt.

* Au lieu de superposer les EventListeners, j'ai recourus à remplacer le bouton lui même à chaque clic par son clone (```cloneNode(true)``` et ```parentNode.replaceChild()```), afin d'écraser tout les événements et le contenu précédents et les réinitialiser.

* Pour rendre la page responsive, j'ai utilisé les dimensions ```vh```, ```vw``` et ```%``` pour les éléments en CSS, et ```rem``` pour le texte, ainsi qu'un bloc ```@media()```.
