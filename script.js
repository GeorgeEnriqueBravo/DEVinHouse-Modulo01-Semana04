let contas = []

const nome = document.getElementById('nome')
const cpf = document.getElementById('cpf')
const celular = document.getElementById('cel')
const senha = document.getElementById('senha')
const confirmaSenha = document.getElementById('confirmaSenha')
const botaoCadastrar = document.getElementById('cadastrar')
// const botaoCadastrarInput = document.getElementById('cadastrarInput')
const botaoLimpar = document.getElementById('limpar')

botaoCadastrar.addEventListener('click', cadastroConta)
// botaoCadastrarInput.addEventListener('click', cadastroConta)

const validaSenha = (evento) => {
    evento.preventDefault()

    if (senha.value !== confirmaSenha.value) {
        alert('Senhas não correspondem')
        return false
    }
    return true
}

function cadastroConta(evento) {
    evento.preventDefault()

    if (validaSenha(evento)) {
        const novaConta = {
            nome: nome.value,
            cpf: cpf.value,
            celular: celular.value,
            senha: senha.value,
            conta: Math.floor(1000 + Math.random() * 90000),
            saldo: 0
        }
        contas.push(novaConta)
        console.log(contas)
        alert(`Conta criada com sucesso ${novaConta.conta}`)
    }
}

// function validaAlgoEscrito(event) {
//     event.preventDefault()
//     console.log('chego')

//     if (nome.value.length === 0) {
//         alert('Preencha todos os campos por favor!')
//     }
// }

// function gerarConta(num) {
//     return Math.floor(Math.random() * num)
// }