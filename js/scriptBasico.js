
function sortear(lista) {
    let listaEmbaralhada = embaralharArray(lista.slice());
    let sorteados = rotacionarArray(listaEmbaralhada.slice());

    console.log(listaEmbaralhada , sorteados)
}

function embaralharArray(array) {
    for (let i = 0; i < array.length; i++) {
        let j = Math.floor(Math.random() * array.length)
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}

function rotacionarArray(arr) {
    let ultimo = arr.pop();
    arr.unshift(ultimo);
    return arr;
}

let pessoas = ["papai", "mamae", "pedro", "raquel", "cecilia"]
let sorteio = []

sorteio = sortear(pessoas)