let btn = document.getElementById("ref");
btn.addEventListener("click", fct1);
btn.addEventListener("click", fct2);
let a=0;
let tst=false;
function fct1() {
    if(a===0){
        console.log("fct1");
        a++;
    }
    else if(!tst){
        console.log("fct1 again");
        a=0;
    }
    
}
function fct2() {
    if(tst){
        console.log("fct2");
        a=0;
        tst=false;
    }
    
}