

let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abrirFecharMenu() {
    if(menu.classList.contains("menu-fechado")) {
        menu.classList.remove("menu-fechado")

        iconeX.style.display = "inline"

        iconeBarras.style.display = "none"
    }else {
        menu.classList.add("menu-fechado")

        iconeX.style.display = "none"

        iconeBarras.style.display = "inline"
    }
}
window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconeX.style.display = "inline"
    iconeBarras.style.display = "none"
}



const solicitarOrcamento = (event) => {
    // Pegar valores dos inputs
    let valorNome = document.getElementById("campo-nome").value
    let valorEmpresa = document.getElementById("campo-empresa").value
    let valorDescricao = document.getElementById("campo-descricao").value

    // Organizar objeto com os valores
    let dadosForm = {
        nome: valorNome,
        Empresa: valorEmpresa,
        descricao: valorDescricao
    }

    // Enviar requisição para a API
    // 127.0.0.1 -> localhost
    // Método HTTP POST - Create -> Cadastrar ou criar
        fetch("http:/127.0.0.1:3000/solicitacoes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dadosForm)
        })
        .then( resposta => {
            console.log(resposta)

            // Limpar os campos
            document.querySelector("#formulario form").reset()

            // Mostar alert com msg de sucesso
            alert("Solicitação cadastrada")
        })
        .catch(erro => {
             // CASO ERRO - alert com msg erro
            console.error(erro)
            alert("Erro na requisição") 
        }) 
        event.preventDefault()
              
}
