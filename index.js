const cats = ['Milo', 'Otis', 'Garfield'];

let copyCats

function destructivelyAppendCat(name) {
    return cats.push(name);    
}

function destructivelyPrependCat (name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name) {
    return copyCats = [...cats, name];
}

function prependCat(name) {
    return copyCats = [name, ...cats];
}

function removeLastCat() {
    return cats.slice(0, -1);
}

function removeFirstCat() {
    return cats.slice(1);
}