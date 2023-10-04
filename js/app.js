let totalGeral;
limpar();

function adicionar() {
    // recuperar valores: nome do produto, quantidades e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    // calcular o subtotal
    let preco = quantidade * valorUnitario;

    // adicionar no carrinho
    if (quantidade != 0) {
        let carrinho = document.getElementById('lista-produtos');
        carrinho.innerHTML += `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`
    }
    

    // atualizar o valor total
    totalGeral += preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.innerHTML = 'R$' + totalGeral;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$0';
}