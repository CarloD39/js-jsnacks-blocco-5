// Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
// Calcolare perimetro e area e stampare il risultato con console.log


var triangle = {
    width : 10,
    height : 5
}

console.log(triangle);

var area = ((10 * 5) / 2);
console.log(area);

var ipotenusa = Math.sqrt((Math.pow(triangle.width,2)) + (Math.pow(triangle.height,2)));
console.log(ipotenusa);

var perimetr = ipotenusa + triangle.width + triangle.height;
console.log(perimetr);
