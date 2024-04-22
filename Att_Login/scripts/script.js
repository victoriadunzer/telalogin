var usuario = {
    nome: "Victoria",
    senha: "123"
}
function entrar(){
    var nome= document.getElementById('nome').value;
    var senha= document.getElementById('senha').value;

    var login = {
        nome: nome,
        senha: senha
    }
    if (login.nome == usuario.nome && login.senha == usuario.senha) {
        location.replace("./prox.html");
    } else {
        alert ("Usuário e/ou senha incorretos");
    }
}
