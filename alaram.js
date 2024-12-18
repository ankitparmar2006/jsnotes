

let run =()=>{

    let date = new Date ();

    let time= `${date.getHours()}: ${date.getMinutes()}`;

    let show =document.querySelector("#show")
let inp=document.querySelector("#show").value;



show.innerHTML=` please set alaram `;



if (inp==time)
    {
        show.innerHTML=`set alaral done ring`;
    
    }
    
    else {
        show.innerHTML=` alaral not set `;
    
    }
    










}
setInterval(() => {
    
} ,1000);