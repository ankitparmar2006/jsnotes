let go =()=>{

let show =document.querySelector("#text")


setTimeout(()=>{

    show.innerHTML="";


},3000)

}


//setTimeout(go,3000)    //  thorugh function 



let run =()=>{

    let show =document.querySelector("#time")

    let Alaram =document.querySelector("#Alaram")
    let ptag =document.querySelector("#show-alm")


    let Alaram2 =document.querySelector("#Alaram2")


    
let date = new Date ();

let hour= date.getHours();
let min= date.getMinutes();
let sec= date.getSeconds();
let mil= date.getMilliseconds();


if (Alaram==date)
{
    
    ptag.innerHTML=`alaram ring`
}

        show.innerHTML=`  ${hour}  : ${min}  :  ${sec}  `;
    
    
    }


    setInterval(run,1000)
    