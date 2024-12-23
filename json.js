let fetchapi =async()=>{

let url="https://jsonplaceholder.typicode.com/posts";

let res=await fetch(url)
let post =await res.json();
console.log(post);

}