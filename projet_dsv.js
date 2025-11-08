let btn= document.querySelector("button");
let tm1=0;
btn.onclick = function() {
    if (tm1===0){
        btn.style.backgroundColor = "rgb(27, 91, 187)"
        btn.innerHTML="Attendez le rouge";
        setTimeout( ()=> {
            btn.style.backgroundColor = "red";
            let now = new Date();
            tm1 = now.getMilliseconds();
            console.log(tm1);
        } , 3000);
    }
    else {
        let later = new Date();
        var tm2= later.getMilliseconds();
        btn.innerHTML= (tm2 -tm1) + "ms<br>Cliquez pour recommencer !";
        tm1=0;
        btn.style.backgroundColor = "rgba(101, 177, 238, 1)";
    }
};