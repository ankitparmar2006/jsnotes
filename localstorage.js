



let run =()=>{

    let namee = document.querySelector("#name").value;
    let number = document.querySelector("#number").value;
    let email = document.querySelector("#email").value;
    let pass = document.querySelector("#pass").value;
    
    
    let errorname = document.querySelector("#errorname")
    let errornumber = document.querySelector("#errornumber")
    let errorpass = document.querySelector("#errorpass")
    let erroremail = document.querySelector("#erroremail")

    

if (namee===""){

errorname.innerHTML=`please enter ur name`;
errorname.style.color="red"
return false;
}

else if (number===""){

    errornumber.innerHTML=`please enter ur name`;
    errornumber.style.color="red"

    return false;
    }
    

    else if (pass===""){

        errorpass.innerHTML=`please enter ur name`;
        errorpass.style.color="red"

        return false;
        }

        
    else if (email===""){

        erroremail.innerHTML=`please enter ur name`;
        erroremail.style.color="red"

        return false;
        }



    localStorage.setItem("usernamee",namee)
    localStorage.setItem("usernumber",number)

    localStorage.setItem("userpass",pass)

    localStorage.setItem("useremail",email)


    window.location.href="settimeout.html"
    return false;

}



let det=document.querySelector("#det")
 let ans=localStorage.getItem("usernamee")
 det.innerHTML=` ur name is`+ans;


 
let det1=document.querySelector("#det1")
let ans1=localStorage.getItem("userpass")
det1.innerHTML=`ur pass is`+ans1;



let det2=document.querySelector("#det2")
let ans2=localStorage.getItem("useremail")
det2.innerHTML=`ur email is`+ans2;

let det3=document.querySelector("#det3")
let ans3=localStorage.getItem("usernumber")
det3.innerHTML=`ur num is`+ans3;


let logout=()=>{

    localStorage.clear();
}

//==============================================================================================

let signup=()=>{

localStorage.setItem("name",signname)
localStorage.setItem("email",signmail)

localStorage.setItem("password",signpass)

window.location.href="locallogin.html"

return false ;
}



//==============================================================================================


let login=()=>{



    let loginname=document.querySelector("#loginname").value
    let loginpass=document.querySelector("#loginpass").value
let checkname=localStorage.getItem("name")
let checkpass=localStorage.getItem("password")

if (loginname===checkname && loginpass ===checkpass) {


    alert("login suceess")

    window.location.href="index.html"

}
else {
    alert("login faild")
}
return false;

}

