let lista1 = [1,3,5];
let lista2 = [2,3,5];

function sumaDeListas(listaa,listab){
    let lista3=[];
    for (let i=0; i< listaa.length;i++) {
        lista3.push(listaa[i]+listab[i]);
    }
    return lista3;
}

console.log(sumaDeListas(lista1,lista2));
