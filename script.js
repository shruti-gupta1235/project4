let cal=document.getElementById("index");
let Buttons=document.querySelectorAll("button");
let string="";
let Arr=Array.from(Buttons);
Arr.forEach((button)=>{
button.addEventListener("click",(e)=>{
    if(e.target.innerHTML=="="){
        string=eval(string);
        cal.value=string;
    }
    else if(e.target.innerHTML=="AC"){
        string="";
        cal.value=string;

}
else{

    string+=e.target.innerHTML;
    cal.value=string;
}
})
})