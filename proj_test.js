let btn = document.getElementById("ref");
let btnv = document.getElementById("btnv");
let btna = document.getElementById("btna");
btnv.addEventListener("click", () => {
    let tm1 = 0;
    let wait = false;
    let = null;
    let now=0;

    btn.style.backgroundColor = "rgb(27, 91, 187)"
    btn.innerHTML = "Cliquez pour commencer !";

    btn.replaceWith(btn.cloneNode(true));
    btn = document.getElementById("ref");

    btn.addEventListener("click", () => {
        if (tm1 === 0) {
            wait = true;
            btn.style.backgroundColor = "rgb(27, 91, 187)"
            btn.innerHTML = "Attendez le rouge";

            to = setTimeout(() => {
                wait = false;
                btn.style.backgroundColor = "red";
                now=Date.now();
            }, 1000 + Math.random() * 3000);
        }
        else if (!wait) {
            let later = Date.now();
            let react= later - now;
            console.log(react);
            btn.innerHTML = react + "ms<br>Cliquez pour recommencer !";
            tm1 = 0;
            btn.style.backgroundColor = "rgba(101, 177, 238, 1)";
            btn.style.padding = "90px 180px"
        } 
    });
    //btnv.addEventListener("click", (e) => {
      //  alert("Oops! Vous allez recommencer !");
        //clearTimeout(to);
        //e.stopPropagation();
        //console.log("hi2");
        //return;
    //});

    btn.addEventListener("click", () => {
        if (wait) {
            clearTimeout(to);
            alert("Oops ! Trop tôt, recommencez !");
            btn.style.backgroundColor = "rgba(101, 177, 238, 1)";
            btn.innerHTML = "Cliquez pour recommencer !";
            wait = false;
            tm1 = 0;
        }
    }, true);

});