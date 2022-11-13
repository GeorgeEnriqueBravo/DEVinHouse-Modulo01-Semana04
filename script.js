let contas = []

const nome = document.getElementById('nome')
const cpf = document.getElementById('cpf')
const celular = document.getElementById('cel')
const senha = document.getElementById('senha')
const confirmaSenha = document.getElementById('confirmaSenha')
const botaoCadastrar = document.getElementById('cadastrar')

botaoCadastrar.addEventListener('click', cadastroConta)

const valor = document.getElementById('valor')
const conta = document.getElementById('conta')
const password = document.getElementById('password')
const botaoConfirma = document.getElementById('confirmar')

botaoConfirma.addEventListener('click', validaConta)

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


const validaConta = (evento) => {
    evento.preventDefault()

    if (conta.value === contas[])

    if (senha.value !== confirmaSenha.value) {
        alert('Senhas não correspondem')
        return false
    }
    return true
}

function saque() {

}

function deposito() {

}

function consulta() {

}
// function validaAlgoEscrito(event) {
//     event.preventDefault()
//     console.log('chego')

//     if (nome.value.length === 0) {
//         alert('Preencha todos os campos por favor!')
//     }
// }
