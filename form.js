let Sub =()=>{


    let name=document.querySelector("#name").value;
    let number=document.querySelector("#num").value;

    let email=document.querySelector("#email").value;

    let pass=document.querySelector("#pass").value;

    let cpass=document.querySelector("#cpass").value;



    if (name===" "){

        errorname.textcontant="please enter your name";
        errorname.style.color="red";
        errorname.style.fontSize="28px";
        return false ;
    }



   else if (number===" "){

        errornum.textcontant="please enter your number";
        errornum.style.color="red";
        errornum.style.fontSize="28px";
        return false ;
    }



    else if (isNaN(number)){
errornum.innerHTML="please enter number only";
        return false ;
    }


    else if  (number.length !==10){
        errornum.innerHTML="please enter vaild number";

        return false ;

    }






}