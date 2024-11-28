
 

// // 27 nov
// // template lateral =          ` `

// const letsgo =()=>{

// para =`"this "is" string"`;   
// console.log(para)
// }
// letsgo ();

// //---------------------------------------------------------------------
// benefits of template laterals

// `"this "ankit" string"`

// `this is 
// ankit`

// `value of ${s+2} s is `

//---------------------------------------------------------------------------

// const letsgo =()=>{
//     let s=56;
//     let s2=5;
//     para =`the sum of ${s}+ ${s2}+ ${s+s2} `;   
//     console.log(para)
//     }
//     letsgo ();
    

    //---------------------------------------------------------------------------

 //------------------imidetly envoked function (iife)------------
    

//  (function(){
//     console.log("hello world")
//  }())


//  thin tarha ke function hote hello

//  arrow and function () and last this 

//  (function(){
//     console.log("hello world")
//  }())


    //---------------------------------------------------------------------------


     //------------------parameter function------------


//      let go = (a,b)=>{

// console.log (2+7)

//      }
// go (2,7)

//---------------------------------------------------

// let go = (a,b)=>{

//   return a+b;               //agr ans ka he kuch krna h tab return use krte h

//  }
//    let ans = go(2,7)
//   console.log(ans*2)
//   console.log(ans/2)
//   console.log(ans-2)
//   console.log(ans+2)

// let para =(a,b)=> {

// all =document.querySelector("#text")


//  console.log(a+b)



// }


//===============        28 nov                ====================
     
let showSquare = () => {
     
    let num=prompt(`enter the num u want square`)

    num=num*num;
let Result = document.querySelector("#squareResult")

Result.innerHTML=(num)

}


// .---------------------------------------------------

par =()=> {

    let num1= parseInt(prompt("enter num1 "));
    let num2=parseInt(prompt("enter num2 "));
    
    
        let sum=num1+num2;
    
      let  result =document.querySelector("#text")
    
        result.innerHTML=`sum of  ${sum}`
    
    
    }
    par (); 


//--------------------------------------------------------

    

paranum = ()=>{


    let num1= parseInt(prompt("enter num1 "));
    let num2=parseInt(prompt("enter num2 "));


           let  result =document.querySelector("#textt")


    if (num1>num2){
        
     
       result.innerHTML=`num1 is greater`
       console.log(num1)

    }
else {
    result.innerHTML=`num2 is greater`
    console.log(num2)


}


}

parnum ();

//-----------------------------------------------------------



naam =()=>{

let n=prompt ("enter ur name ")

let p=document.querySelector("#texttt")

p.innerHTML=`ur name is `${sum};




}
naam ();