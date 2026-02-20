const input01 = document.getElementById('valor01');
const input02 = document.getElementById('valor02');

const resultado = document.getElementById('resultado');


function calcularTotal() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);
    
    if (isNaN(v1) || isNaN(v2)) {
        resultado.style.display = 'flex';
        resultado.innerHTML = `Valor 01 ou Valor 02 inválido. Digite um número.`
    } 
    else {
        resultado.style.display = 'flex';

        resultado.innerHTML = `
            <h2>Total de Compra</h2>
        <ul>      
            <li>Você está adquirindo ${v2} unidade(s) com valor unitário de ${v2}.</li>
            <li><span>Valor total da compra: R$ ${(v1 * v2).toFixed(2)}</span></li>
        </ul>
        `
    }


}

function desconto() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    const desconto = (v1 * v2) / 100
    
    if (isNaN(v1) || isNaN(v2)) {
        resultado.style.display = 'flex';
        resultado.innerHTML = `Valor 01 ou Valor 02 inválido. Digite um número.`
    } 
    else {
        resultado.style.display = 'flex';

        resultado.innerHTML = `
            <h2>Desconto Aplicado</h2>
        <ul>      
            <li>Foi aplicado um desconto de ${v2}% sobre o valor de R$${v1}.</li> 
            <li><span>Valor final com desconto: R$ ${(v1 - desconto).toFixed(2)}</span></li>
        </ul>
        `
    }

}

function juros() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    const acrescimo = (v1 * v2) / 100
    
    if (isNaN(v1) || isNaN(v2)) {
        resultado.style.display = 'flex';
        resultado.innerHTML = `Valor 01 ou Valor 02 inválido. Digite um número.`
    } 
    else {
        resultado.style.display = 'flex';

        resultado.innerHTML = `
            <h2>Acréscimo Aplicado</h2>
        <ul>      
            <li>Foi aplicado um acréscimo de ${v2} sobre o valor de R$${v1}.</li>
            <li><span>Valor final com juros: R$ ${(v1 + acrescimo).toFixed(2)}</span></li>
        </ul>
        `
    }


}

function comissao() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    
    if (isNaN(v1) || isNaN(v2)) {
        resultado.style.display = 'flex';
        resultado.innerHTML = `Valor 01 ou Valor 02 inválido. Digite um número.`
    } 
    else {
        resultado.style.display = 'flex';

        resultado.innerHTML = `
            <h2>Comissão Calculada</h2>
        <ul>      
            <li>Comissão de ${v2}% sobre uma venda de R$${v1}.</li>
            <li><span>Valor da comissão: R$ ${((v1 * v2)/100).toFixed(2)}</span></li>
        </ul>
        `
    }


}

function lucro() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    
    if (isNaN(v1) || isNaN(v2)) {
        resultado.style.display = 'flex';
        resultado.innerHTML = `Valor 01 ou Valor 02 inválido. Digite um número.`
    } 
    else {
        resultado.style.display = 'flex';

        resultado.innerHTML = `
            <h2>Lucro Obtido</h2>
        <ul>      
            <li>Preço de venda: R$${v1} | Custo: R$${v2}</li>
            <li><span>Resultado financeiro: R$ ${(v1 - v2).toFixed(2)}</span></li>
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