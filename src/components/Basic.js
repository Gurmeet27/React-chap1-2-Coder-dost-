function Basic(){
    var ac=[1,2,3];
    var [a,b,c]=ac;//Array Destructuring Egs

    var obj={Name:"Gurmeet", Age:"23",City:"Jamshedpur"};
    var {Name,Age,City}=obj;

    var p={Comp:"Incture",Role:"ASE",Sal:"6000000"};
    var p1={...p};
    p1.Role="Frontend Developer";
return(
console.log(a,b,c),

console.log(Name,Age,City),//In object destructuing name should exactly match.For eg : Name and Name not Name and name it will show undefined

console.log(p1,p)
)
}

function Sum({a,b}){
    return (a+b)
}

export  {Basic,Sum};