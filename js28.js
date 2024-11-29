let double = (a)=>{



let pera =document.querySelector("#pera")

pera.innerHTML=`the square of ${a} is ${a*a}`

}


// <!-- ------------------------------------------------------------------ -->


let run = (a,b)=>{


    let add= document.querySelector("#add-text")

    add.innerHTML=`the additon of ${a} and  ${b} is  ${a+b}`

    

}



let grt = (a,b)=> {

let add = document.querySelector("#textg");

if (a>b) {
    add.innerHTML=` a ${a} is greter than b  ${b} `
}


else {
    add.innerHTML=`  b ${b}is greter than a  ${a}` 

}


}


// <!-- ------------------------------------------------------------------ -->


let one = (a) => {


let textall=document.querySelector("#textall")


if(a%2==0){
    textall.innerHTML=`even`
}

else{
    textall.innerHTML=`odd`

}
textall.innerHTML=`
the square is ${a*a}  <br> 

the cube is ${a*a*a}  <br>

${(a%2==0) ? "even" : "odd"}

`;


}


//--------------------------------------------------------------------------------