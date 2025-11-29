let btn = document.getElementById("ref");
let btn_visuel = document.getElementById("btnv");
let btn_audio = document.getElementById("btna");
const audio =new Audio('beep-329314.mp3');

let tm1=0;
let wait = false;
let to = null;
let now = 0;
let moy=0;
let i=0;

function reset_btn(){ //crée un nouveau btn à chaque partie (au lieu de listeners)

    const newBtn = btn.cloneNode(true);// true pour copier le contenu html du btn  
    btn.parentNode.replaceChild(newBtn, btn);
    btn = newBtn; 
 }

function restart(){ //reinitialise la partie: moy,i=0

    tm1=0;
    wait = false;
    to = null;
    now = 0;
    moy=0;
    i=0;
    btn.style.background = "linear-gradient(135deg, #6aa3ff, #4169e1)";
    btn.innerHTML = "Cliquez pour commencer !";
}


//SI ON CLIQUE SUR BTN_VISUEL
btn_visuel.addEventListener("click", () => { //la partie ne commence que lorsque btn_visuel est cliqué

    console.log("restartvis");
    clearTimeout(to);
    reset_btn();//reinitialiser btn
    restart(); //reinitialiser la partie a chaque clic
    Commencer_visuel();//ajouter le listener
});


function Commencer_visuel() {
    btn.addEventListener("click", Clic_visuel);
}


function Clic_visuel() { //fct à appeler a chaque clic du grand btn
    if (tm1 == 0) { //on attend encore le rouge
        wait = true;
        console.log("click1");
        btn.style.background = "linear-gradient(135deg, #6aa3ff, #4169e1)";
        btn.innerHTML = "Attendez le rouge...";
        tm1=1;//pour passer directement a else au 2eme click apres le rouge

        to = setTimeout(() => {
            wait = false; 
            btn.style.background = "rgba(191, 0, 0, 1)";
            now = performance.now();
            console.log(now);
        }, 1000 + Math.random() * 3000);

        btn.addEventListener("click", Tot_visuel, { once: true });//fonctionne une seule fois uis s'enlève elle-même
        //s'éxecute seulement si on clique trop tot
        
    }
    
    else if (wait===false) { //après le rouge
        console.log("click2");
        let reaction = performance.now() - now;
        moy=moy+reaction;
        console.log(reaction);
        btn.innerHTML = Math.round(reaction) + " ms<br>Cliquez pour recommencer!";
        btn.style.background = "linear-gradient(135deg, rgba(83, 138, 158, 0.96), rgba(14, 124, 175, 1))";
        btn.removeEventListener("click", Tot_visuel);//sinon ca s'execute au début de chaque tour (wait=true)
        tm1 =0; //tour suivant
        i++;
        console.log(i);
        endgame(i);//voir si la partie est finie
    }
}

function Tot_visuel() { //si on clique trop tot
    if(wait){ //si la couleur n'a pas encore changé 
        console.log("trop tot");
        clearTimeout(to);// le tour ne continue que si on clique sur btn
        btn.innerHTML = "Oops ! Trop tôt, continuez!";
        btn.style.background = "linear-gradient(135deg, rgba(83, 138, 158, 0.96), rgba(14, 124, 175, 1))";
        tm1 = 0;

        reset_btn();//enlève tout 
        Commencer_visuel();//pour continuer la partie
    }
}


//SI ON CLIQUE SUR BTN_AUDIO (même principe pour btn_visuel)
btn_audio.addEventListener("click", () => {
    console.log("restartaud");
    clearTimeout(to);
    reset_btn();
    restart();
    Commencer_audio();
});

function Commencer_audio() {
    btn.addEventListener("click", Clic_audio);
}

function Clic_audio() {
    if (tm1 === 0) {
        wait = true;
        console.log("click1");
        btn.style.background = "linear-gradient(135deg, #6aa3ff, #4169e1)";
        btn.innerHTML = "Attendez le signal sonore...";
        tm1 = 1; 

        to = setTimeout(() => {
            wait = false; 
            audio.play();//audio commence après un certain temps
            console.log("audio now");
            now = performance.now();
        }, 1000 + Math.random() * 3000);

        btn.addEventListener("click", Tot_audio, { once: true });
    }
    
    else if (wait===false) {
        console.log("click2");
        let reaction = performance.now() - now;
        moy=moy+reaction;
        console.log(reaction);
        btn.innerHTML = Math.round(reaction) + " ms<br>Cliquez pour recommencer!";
        btn.style.background = "linear-gradient(135deg, rgba(83, 138, 158, 0.96), rgba(14, 124, 175, 1))";
        btn.removeEventListener("click", Tot_audio);
        tm1 = 0;
        i++;
        console.log(i);
        endgame(i);//voir si la partie est finie
    }
}
function Tot_audio() {
    if(wait){
        console.log("trop tot");
        clearTimeout(to);

        btn.innerHTML = "Oops ! Trop tôt, continuez!";
        btn.style.background = "linear-gradient(135deg, rgba(83, 138, 158, 0.96), rgba(14, 124, 175, 1))";

        reset_btn();//enlève tout  
        Commencer_audio();//continue la partie
    }
}
function endgame(i) {
    try{
        if(i==3) throw new Error("Test terminé");
    }
    catch (e) {

        reset_btn();//enlève tous les listeners
        console.log("Test terminé ! Vous avez fait "+i+" essais.");
        let score=Math.round(moy/3);
        let ch;
        if(score<=400){
            ch="Réflexe incroyable!";
        }
        else if(400<score && score<=800){
            ch="Réflexe moyen";
        }
        else{
            ch="Réflexe lent";
        }
        btn.innerHTML ="Votre moyenne est de: "+score+" ms<br>"+ch;
        btn.style.backgroundColor = "rgba(152, 81, 145, 1)";
        btn.style.boxShadow="none";
        //reinitialiser la partie
        tm1 = 0;
        i=0;
        moy=0;
    }
}