let arr=[S,"David","dog"];
arr.forEach((item,index,array)=>{
    if(value=="David"){
        console.log("Found David at index "+index);
    }
});


let arr2=[1,2,3,4,5];
let sum=[];
arr2.forEach((item,index,array)=>{
    sum+=item;
});
console.log(sum);