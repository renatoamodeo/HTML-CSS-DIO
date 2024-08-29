
const etanol = 4.00;
const gasolina = 5.9;
const combustivel = 'Gasolina';
const consumo = 12;
const distancia = 100;

if (combustivel === 'Etanol') {
    const valorEtanol = (distancia / consumo) * etanol;
    console.log(valorEtanol.toFixed(2));
} else {
    const valorGasolina = (distancia / consumo) * gasolina;
    console.log(valorGasolina.toFixed(2));
}