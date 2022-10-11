// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(Ralph) {
    return cats.push("Ralph")
}

function destructivelyPrependCat(Bob) {
    return cats.unshift("Bob")
}

function destructivelyRemoveLastCat(Milo, Otis) {
    return cats.pop(["Milo", "Otis"])
}

function destructivelyRemoveFirstCat(Otis, Garfield) {
    return cats.shift(["Otis", "Garfield"])
}
function appendCat(Broom){
    return appendCat = [...cats, "Broom"]
}
function prependCat(Arnold){
    return prependCat = ["Arnold", ...cats]
}
function removeLastCat() {
    return removeLastCat= [...cats.slice(0, -1)]
}
function removeFirstCat() {
    return removeFirstCat = [...cats.slice(1)]
}