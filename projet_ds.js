let btn = document.getElementById("ref");
let btnv = document.getElementById("btnv");
let btna = document.getElementById("btna");
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
    btn.style.backgroundColor = "rgb(27, 91, 187)";
    btn.innerHTML = "Cliquez pour commencer !";
}

btnv.addEventListener("click", () => {
    console.log("restartv");
    clearTimeout(to);
    reset_btn();//reset btn maghir listeners
    
    restart(); //reinitialisation a chaque clic
    Commencer_v();
});


function Commencer_v() {
    btn.addEventListener("click", Clic_v);
}


function Clic_v() {
    if (tm1 == 0) {
        wait = true;
        console.log("click1");
        btn.style.backgroundColor = "rgb(27, 91, 187)";
        btn.innerHTML = "Attendez le rouge...";
        tm1=1;//bch yetaada toul lel click2

        to = setTimeout(() => {
            wait = false; 
            btn.style.backgroundColor = "red";
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
        btn.style.backgroundColor = "rgba(101, 177, 238, 1)";

        tm1 =0;
        i++;
        console.log(i);
        endgame(i);
    }
}

function Tot_v() {
    if(wait){
        console.log("trop tot");
        clearTimeout(to);
        btn.innerHTML = "Oops ! Trop tôt, recommencez!";
        btn.style.backgroundColor = "rgba(101, 177, 238, 1)";
        wait = false;
        tm1 = 0;

        reset_btn();//tnahi kol chay
        Commencer_v();//taawd mloul
    }
    
}



btna.addEventListener("click", () => {
    console.log("restarta");
    clearTimeout(to);
    reset_btn();
    restart();
    Commencer_a();
});

function Commencer_a() {
    btn.addEventListener("click", Clic_a);
}

function Clic_a() {
    if (tm1 === 0) {
        wait = true;
        console.log("click1");
        btn.style.backgroundColor = "rgb(27, 91, 187)";
        btn.innerHTML = "Attendez le signal sonore...";
        tm1 = 1; 

        to = setTimeout(() => {
            wait = false; 
            audio.play();
            now = performance.now();
        }, 1000 + Math.random() * 3000);

        btn.addEventListener("click", Tot_a, { once: true });//tkhdm mara w ttfaskh
    }
    
    else if (wait===false) {
        console.log("click2");
        let reaction = performance.now() - now;
        moy=moy+reaction;
        console.log(reaction);

        btn.innerHTML = Math.round(reaction) + " ms<br>Cliquez pour recommencer!";
        btn.style.backgroundColor = "rgba(101, 177, 238, 1)";

        tm1 = 0;
        i++;
        console.log(i);
        endgame(i);
    }
}
function Tot_a() {
    if(wait){
        console.log("trop tot");
        clearTimeout(to);

        btn.innerHTML = "Oops ! Trop tôt, recommencez!";
        btn.style.backgroundColor = "rgba(101, 177, 238, 1)";
        wait = false;
        tm1 = 0;

        reset_btn();//tnahi kol chay 
        Commencer_a();//taawd
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
        btn.style.backgroundColor = "rgb(106, 59, 2)";
        tm1 = 0;
        i=0;
        moy=0;
        
    }
}