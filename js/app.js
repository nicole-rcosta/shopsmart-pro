const input01 = document.getElementById('valor01');
const input02 = document.getElementById('valor02');

const resultado = document.getElementById('resultado');


function calcularTotal() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);
    
    if (isNaN(v1) || isNaN(v2)) {
        alert('Valor 01 ou Valor 02 inválido. Digite um número.')
    } 
    else {
        resultado.style.display = 'flex';

        resultado.innerHTML = `
            <h2>TOTAL</h2>
        <ul>      
            <li>A compra de ${v1} para ${v2} itens resultou em: <span>R$${v1 * v2}</span></li>
        </ul>
        `
    }


}

function desconto() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    const desconto = (v1 * v2) / 100
    
    if (isNaN(v1) || isNaN(v2)) {
        alert('Valor 01 ou Valor 02 inválido. Digite um número.')
    } 
    else {
        resultado.style.display = 'flex';

        resultado.innerHTML = `
            <h2>DESCONTO</h2>
        <ul>      
            <li>Do valor da compra de ${v1} foi inserido um desconto que resultou em: <span>R$${v1 - desconto}</span></li>
        </ul>
        `
    }

}

function juros() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    const acrescimo = (v1 * v2) / 100
    
    if (isNaN(v1) || isNaN(v2)) {
        alert('Valor 01 ou Valor 02 inválido. Digite um número.')
    } 
    else {
        resultado.style.display = 'flex';

        resultado.innerHTML = `
            <h2>JUROS</h2>
        <ul>      
            <li>O resultado do juros adicionado ao valor de ${v1} foi: <span>R$${v1 + acrescimo}</span></li>
        </ul>
        `
    }


}

function comissao() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    
    if (isNaN(v1) || isNaN(v2)) {
        alert('Valor 01 ou Valor 02 inválido. Digite um número.')
    } 
    else {
        resultado.style.display = 'flex';

        resultado.innerHTML = `
            <h2>COMISSÃO</h2>
        <ul>      
            <li>O valor da comissão de ${v2} com base no valor da venda de  ${v1} foi: <span>R$${(v1 * v2)/100}</span></li>
        </ul>
        `
    }


}

function lucro() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    
    if (isNaN(v1) || isNaN(v2)) {
        alert('Valor 01 ou Valor 02 inválido. Digite um número.')
    } 
    else {
        resultado.style.display = 'flex';

        resultado.innerHTML = `
            <h2>LUCRO</h2>
        <ul>      
            <li>O valor de venda ${v1} e o valor de custo ${v2} resultou em um lucro de: <span>R$${v1 - v2}</span></li>
        </ul>
        `
    }


}

function limpar() {
    resultado.style.display = 'none';

    input01.value = '';
    input02.value = '';

    input01.focus();

}