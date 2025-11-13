let btn = document.getElementById("ref");
let btnv = document.getElementById("btnv");
let btna = document.getElementById("btna");

function Commencer() {
    let tm1 = 0;
    let wait = false;
    let to = null;
    let now = 0;

    function Clic() {
        if (tm1 === 0) {
            wait = true;
            btn.style.backgroundColor = "rgb(27, 91, 187)";
            btn.innerHTML = "Attendez le rouge";

            to = setTimeout(() => {
                wait = false; 
                btn.style.backgroundColor = "red";
                now = Date.now(); 
                console.log(now);
            }, 1000 + Math.random() * 3000);

            tm1 = 1; 
        } 
        else if (!wait) {
            let later = Date.now();
            console.log(later);
            let reaction = later - now;
            btn.innerHTML = reaction + " ms<br>Cliquez pour recommencer !";
            tm1 = 0;
            btn.style.backgroundColor = "rgba(101, 177, 238, 1)";
            btn.style.padding = "90px 180px";
        }
    }

    function Tot() {
        if (wait) {
            clearTimeout(to);
            alert("Oops ! Trop tôt, recommencez !");
            btn.style.backgroundColor = "rgba(101, 177, 238, 1)";
            btn.innerHTML = "Cliquez pour recommencer !";
            wait = false;
            tm1 = 0;
        }
    }
    //tnahi listeners lkdom bch tupdatihom
    btn.removeEventListener("click", Clic);
    btn.removeEventListener("click", Tot, true);
    //update
    btn.addEventListener("click", Clic);
    btn.addEventListener("click", Tot, true);
}

btnv.addEventListener("click", () => {
    btn.style.backgroundColor = "rgb(27, 91, 187)";
    btn.innerHTML = "Cliquez pour commencer !";
    Commencer();
});