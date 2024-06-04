let arr = [1, 2, 3];

// 1. 배열 구조 분해 할당
let [one, two, three] = arr;

console.log(one);

// 2. 객체 구조 분해 할당
let student = {
    name: "홍길동",
    age: 20,
    hobby: "피아노",
}

let { name, age, hobby } = studnet;

console.log(name, age, hobby);

// ...연산자 - spread 연산자 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려줌
let arr1 = [1, 2, 3];
let arr2 = [4, 5, arr1[0], arr1[1], arr1[2], 6];

console.log(arr2);

let obj1 = {
    a:1,
    b:2,
}

let obj2={
    a:obj1.a,
    b:obj1.b,
    c:3,
    d:4,
    e:5,
}

console.log(obj2);

function fun(p1,p2,p3){
    console.log(p1.p2.p3);
}

fun(...arr1);