

let i1=document.querySelector("#i1")

i1.addEventListener("click", function(){

ans1=prompt("enter ur fav sub");


})


i2.addEventListener("click", function(){
    let i3=document.querySelector("#i3")

    i3.innerHTML=ans1

})

//<!-- ============================================================================================= -->


let i5=document.querySelector("#i5")

i5.addEventListener("click",function(){

    let ans2=prompt("enter msg here");

    let i6=document.querySelector("#i6")
    up=(ans2.toUpperCase())

    i6.innerHTML=up;


})


//<!-- ===================================================================================================== -->



let i7=document.querySelector("#i7")

let i8=document.querySelector("#i8")

i7.addEventListener("click", function(){

ans3=parseInt(prompt("enter 1st digit sum u want"))

i8.innerHTML=`the sum is ${ans3+ans4}`


let temp=0;
for (i=1; i<=ans3; i++){


}
})

let temp=10;

inc=()=>{

    let i9=document.querySelector("#i9")

    i9.innerHTML=temp;
    temp=temp+3;


}

dec=()=>{

    let i9=document.querySelector("#i9")

    i9.innerHTML=temp;
    temp=temp-3;


}

//=====================================================================================================

run1 =()=>{


    ans10=prompt("enter msg")

   let result= ans10.slice(0,5);
i10=document.querySelector("#i10")

i10.innerHTML=`${result}`;

}

//=====================================================================================================


run2 =()=>{


  let  ans11=prompt("enter word")

let i11=document.querySelector("#i11")

let reuslt2=ans11.endsWith("ing");

if (reuslt2)  {

    i11.innerHTML="yes";


}

else {
    i11.innerHTML="no";

}



}


//=====================================================================================================



run3 =()=>{

    let i12=document.querySelector("#i12")

    let arr=[2,4,6,8,10];


  for (i=0;i<arr.length;i++)


  {
arr[i]=arr[i] +5;


i12.innerHTML=arr;


}
  
  
  }


run4 =()=>{

let i13=document.querySelector("#i13")

let arr1=[2,4,6,8,10];

for(i=0;i<5;i++){

    arr1[i]=arr1[i] +5;

    i13.innerHTML=arr1;

}

  
  
  }



  
run5 =()=>{

    ans4=parseInt(prompt("enter any number"));


    
    let i14=document.querySelector("#i14")


    if (ans4<=100){

        i14.innerHTML=`samalller  than 100`;

    }
    
    else {
        i14.innerHTML=`grater than 100`;

    }
    

      
      
      }


      //=====================================================================================================


     
run6 =()=>{



    

    str4=("JavaScript is amazing . Learing JavaScript is fun !")

   let tt= str4.replace(/JavaScript/ig,"mern")



    
    let i15=document.querySelector("#i15")


        i15.innerHTML=tt;

    
    
        // //console.log(text.replace(/This/gi,"Hello"))

      
      }




        
run7 =()=>{

    let i17=document.querySelector("#i17")

    
    let arr4=["apple","mango","banana","orange"]


    let newarr4=arr4.pop();

    i17.innerHTML=arr4;

      
      }



      run8 =()=>{



        document.body.style.backgroundColor=    

        document.querySelector("#i18").value;
    

        
    
          
          }