let okk = ()=>{

let ans = new Date ();

// let ans2=ans.getFullYear()
// let ans3=ans.getMonth()
// let ans4=ans.getDay()
// let ans5=ans.getHours()
// let ans6=ans.getSeconds()
// let ans7=ans.getMilliseconds()
// console.log(ans)
// console.log(ans2)
// console.log(ans3)
// console.log(ans4)
// console.log(ans5)
// console.log(ans6)
// console.log(ans7)
//let cdate= ans.getFullYear();

let hour=ans.getHours();
if(hour>=5 && hour<12)
{
console.log("good morning");
}
else if(hour>=12 && hour<16)
{
    console.log("good afternood");
}
else if(hour>=17 && hour<19)
    {
        console.log("good evening");
    }
    else if(hour>=20 && hour<23)
        {
            console.log("good night");
        }

 }
okk();