let btn= document.getElementById("ref");
let btnv= document.getElementById("btnv");
let btna= document.getElementById("btna");
btnv.addEventListener("click", () =>{
    let tm1=0;
    btn.style.backgroundColor = "rgb(27, 91, 187)"
    btn.innerHTML="Cliquez pour commencer !";
    btn.addEventListener("click", () =>{
        if (tm1===0){
            btn.style.backgroundColor = "rgb(27, 91, 187)"
            btn.innerHTML="Attendez le rouge";
            let to =setTimeout( ()=> {
                btn.style.backgroundColor = "red";
                let now = new Date();
                tm1 = now.getMilliseconds();
                console.log(tm1);
            } , 3000);
            btnv.addEventListener("click", (e) =>{
                alert("Oops! Vous allez recommencer !");
                e.stopPropagation();
                e.preventDefault();
                clearTimeout(to);
                return;
            });
        }
        else {
            let later = new Date();
            var tm2= later.getMilliseconds();
            btn.innerHTML= (tm2 -tm1) + "ms<br>Cliquez pour recommencer !";
            tm1=0;
            btn.style.backgroundColor = "rgba(101, 177, 238, 1)";
            btn.style.padding= "90px 180px"
        }
    });
});