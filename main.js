function Coletar() {
    let input = document.querySelector('.input-cep').value
    console.log(input)
    Dados(input)
}

//funcao para consumir a api viacep
async function Dados(input) {
    let dados = await fetch(`https://viacep.com.br/ws/${input}/json/`).then(response => response.json())
    console.log(dados)
    ExibirDados(dados)
}

//inserir dados na tela
function ExibirDados(dados) {


    document.querySelector('.endereco').value = dados.logradouro
    document.querySelector('.bairro').value = dados.bairro
    document.querySelector('.cidade').value = dados.localidade
}

const from = document.querySelector('form')
const submit = document.querySelector('button[type="submit"]')

from.addEventListener
    ('keydown', function (e) {
        if (e.key === 'Enter' && !e.shiftkey) {
            e.preventDefault()
            submit.click()
        }
    }
    )