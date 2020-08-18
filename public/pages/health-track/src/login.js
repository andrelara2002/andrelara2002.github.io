const loginElement = document.getElementById('fname');
const passElement = document.getElementById('fpass')

let users = {
    usuario: 'fiap-teste',
    senha: 'fiap1234'
}

document.querySelector('button').onclick = function(){
    if (loginElement.value === ''){
        alert('Usuário: fiap-teste, Senha: fiap1234')
    }
    else if (passElement.value === ''){
        alert('Usuário: fiap-teste, Senha: fiap1234')
    }
    else{
        if (passElement.value === users.senha && loginElement.value === users.usuario){
            alert('Autenticação realizada')
            window.location.href = 'userResumo.html'
        }
        else{
            alert('Usuário ou senha incorreta')
        }
    }
}