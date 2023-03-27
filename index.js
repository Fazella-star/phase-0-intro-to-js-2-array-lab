// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push('Ralph');
}
function destructivelyPrependCat(name){
    cats.unshift("Bob");
}function destructivelyRemoveLastCat(){
    let removelastcat = cats.pop();
}
function destructivelyRemoveFirstCat(){
    let removefirstcat = cats.shift();
}
function appendCat(name){
let cat = cats.slice();
cat.push(name);
return cat;
}
function prependCat(name){
    let cat = cats.slice();
    cat.unshift(name)
    return cat;
}
function removeLastCat(){
    let cat = cats.slice();
    cat.pop()
    return cat; 
}
function removeFirstCat(){
    let cat = cats.slice();
    cat.shift()
    return cat; 
}