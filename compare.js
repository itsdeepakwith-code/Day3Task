let obj1 = {
    name: "person",
    age:5
}

let obj2 = {
    age: 5,
    name:"person"
}

if (obj1 == obj2 || obj1===obj2) {
    console.log("Objects are equal")
} else {
    console.log("Objects are not equal")
}