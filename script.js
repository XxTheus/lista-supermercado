const produto = document.getElementById("inputProduto")

function adicionarProduto() {
    const item = document.createElement("li")

    item.innerHTML = `<li>
        <span>${produto.value}</span>
        <button class="excluir">X</button>
    </li>`;

    const lista = document.querySelector("#lista")
    lista.appendChild(item)

    produto.value = ""
}

const botaoAdd = document.querySelector("#bt-add")
botaoAdd.addEventListener("click", adicionarProduto)

function limparTudo(){
    const lista = document.querySelector("#lista")
    lista.innerHTML = ""
}

const botaoClear = document.querySelector(".botao2")

botaoClear.addEventListener("click", limparTudo)