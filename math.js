console.log(Math.PI);

console.log(Math.random());

console.log(Math.random()*10);

console.log(Math.trunc(Math.random()*10));

console.log(Math.trunc(Math.random()*100));
console.log(Math.trunc(Math.random()*1000));








let box1=document.querySelector("#box1")

let box2=document.querySelector("#box2")

let box3=document.querySelector("#box3")

let box4=document.querySelector("#box4")

let box5=document.querySelector("#box5")

let box6=document.querySelector("#box6")





let roll =()=>{

    let result=Math.round(Math.random()*5);



if (result==1) {

    box1.style.display="block";
    box2.style.display="none";
    box3.style.display="none";

    box4.style.display="none";

    box5.style.display="none";

    box6.style.display="none";

    

}


else if (result==2){

    box1.style.display="none";
    box2.style.display="block";
    box3.style.display="none";

    box4.style.display="none";

    box5.style.display="none";

    box6.style.display="none";
}



else if (result==3){

    box1.style.display="none";
    box2.style.display="none";
    box3.style.display="block";

    box4.style.display="none";

    box5.style.display="none";
    box6.style.display="none";

}



else if (result==4){


    box1.style.display="none";
    box2.style.display="none";
    box3.style.display="none";

    box4.style.display="block";

    box5.style.display="none";

    box6.style.display="none";

}



else if (result==5){


    box1.style.display="none";
    box2.style.display="none";
    box3.style.display="none";

    box4.style.display="none";

    box5.style.display="block";

    box6.style.display="none";
}



else if (result==6){


    box1.style.display="none";
    box2.style.display="none";
    box3.style.display="none";

    box4.style.display="none";

    box5.style.display="none";

    box6.style.display="block";
}

}