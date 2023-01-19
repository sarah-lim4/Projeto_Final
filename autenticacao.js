const usuarios = [
    {
        login: 'emilly.beatriz@gmail',
        pass: '12345'
    },
    {
        login: 'sarah.lima@gmail',
        pass: '6789'
    },
    {
        login: 'flavia.jamily@gmail',
        pass: 'valente'
    }
]

let botao = document.getElementById('btnLogar');

botao.addEventListener('click', function logar(){

    let pegaUsuario = document.getElementById('usuario').value;
    let pegaSenha = document.getElementById('senha').value;
    let validaLogin = false;

    for(let i in usuarios){

        if(pegaUsuario == usuarios[i].login && pegaSenha == usuarios[i].pass){
            validaLogin = true;
            break;
        }

    }

if(validaLogin==true){
    location.href = "pagina_inicial.html";
}else{
    alert("Senha ou usuário incorreto. Tente novamente.")
}

})