let btn = document.getElementById("ref");
let btn_visuel = document.getElementById("btnv");
let btn_audio = document.getElementById("btna");
let audio=new Audio('c:\\Users\\Rim\\Downloads\\beep-329314.mp3');

let tm1=0;
let wait = false;
let to = null;
let now = 0;
let moy=0;
let i=0;

function reset_btn(){
    const newBtn = btn.cloneNode(true);     
    btn.parentNode.replaceChild(newBtn, btn);
    btn = newBtn; 
 }

function restart(){
    tm1=0;
    wait = false;
    to = null;
    now = 0;
    moy=0;
    i=0;
    btn.style.backgroundColor = "rgb(89, 140, 217)";
    btn.innerHTML = "Cliquez pour commencer !";
}

btn_visuel.addEventListener("click", () => {
    console.log("restartvis");
    clearTimeout(to);
    reset_btn();//reset btn maghir listeners
    
    restart(); //reinitialisation a chaque clic
    Commencer_visuel();
});


function Commencer_visuel() {
    btn.addEventListener("click", Clic_visuel);
}


function Clic_visuel() {
    if (tm1 == 0) {
        wait = true;
        console.log("click1");
        btn.style.backgroundColor = "rgb(89, 140, 217)";
        btn.innerHTML = "Attendez le rouge...";
        tm1=1;//bch yetaada toul lel click2

        to = setTimeout(() => {
            wait = false; 
            btn.style.backgroundColor = "rgba(191, 0, 0, 1)";
            now = performance.now();
            console.log(now);
        }, 1000 + Math.random() * 3000);

        btn.addEventListener("click", Tot_v, { once: true });//tkhdem mara bark
        
    }
    
    else if (wait===false) {
        console.log("click2");
        let reaction = performance.now() - now;
        moy=moy+reaction;
        console.log(reaction);

        btn.removeEventListener("click", Tot_v);//sinon ca s'execute apres le resultat à chaque fois
        btn.innerHTML = Math.round(reaction) + " ms<br>Cliquez pour recommencer!";
        btn.style.backgroundColor = "rgba(66, 126, 148, 0.96)";

        tm1 =0;
        i++;
        console.log(i);
        endgame(i);
    }
}

function Tot_visuel() {
    if(wait){
        console.log("trop tot");
        clearTimeout(to);
        btn.innerHTML = "Oops ! Trop tôt, continuez!";
        btn.style.backgroundColor = "rgba(66, 126, 148, 0.96)";
        wait = false;
        tm1 = 0;

        reset_btn();//tnahi kol chay
        Commencer_visuel();//taawd mloul
    }
    
}



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
        btn.style.backgroundColor = "rgb(89, 140, 217)";
        btn.innerHTML = "Attendez le signal sonore...";
        tm1 = 1; 

        to = setTimeout(() => {
            wait = false; 
            audio.play();
            now = performance.now();
        }, 1000 + Math.random() * 3000);

        btn.addEventListener("click", Tot_audio, { once: true });//tkhdm mara w ttfaskh
    }
    
    else if (wait===false) {
        console.log("click2");
        let reaction = performance.now() - now;
        moy=moy+reaction;
        console.log(reaction);

        btn.innerHTML = Math.round(reaction) + " ms<br>Cliquez pour recommencer!";
        btn.style.backgroundColor = "rgba(66, 126, 148, 0.96)";

        tm1 = 0;
        i++;
        console.log(i);
        endgame(i);
    }
}
function Tot_audio() {
    if(wait){
        console.log("trop tot");
        clearTimeout(to);

        btn.innerHTML = "Oops ! Trop tôt, continuez!";
        btn.style.backgroundColor = "rgba(66, 126, 148, 0.96)";
        wait = false;
        tm1 = 0;

        reset_btn();//tnahi kol chay 
        Commencer_audio();//taawd
    }
}
function endgame(i) {
    try{
        if(i==3) throw new Error("Test terminé");
    }
    catch (e) {

        reset_btn();//tnahi listeners lkol
        console.log("Test terminé ! Vous avez fait "+i+" essais.");
        let score=Math.round(moy/3);
        let ch;
        if(score<=400){
            ch="Réflexe incroyable!";
        }
        else if(400<score<=800){
            ch="Réflexe moyen";
        }
        else{
            ch="Réflexe lent";
        }
        btn.innerHTML ="Votre moyenne est de: "+score+" ms<br>"+ch;
        btn.style.backgroundColor = "rgba(152, 81, 145, 1)";
        btn.style.boxShadow="none";
        tm1 = 0;
        i=0;
        moy=0;
        
    }
}