ok = ()=>{


let show =document.querySelector("#show")
let yage =document.querySelector("#inp").value ;

let date=new Date ();

let cdate= date.getFullYear();

let hour=date.getHours();
if(hour>=5 && hour<12)
{
show.innerHTML("good morning");
}
else if(hour>=12 && hour<16)
{
    show.innerHTML("good afternood");
}
else if(hour>=17 && hour<19)
    {
        show.innerHTML("good evening");
    }
    else if(hour>=20 && hour<23)
        {
            show.innerHTML("good night");
        }



//show.innerHTML=`ur age is ${(cdate-yage)}`


}



