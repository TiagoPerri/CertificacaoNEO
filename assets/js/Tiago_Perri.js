//Adicionar na Session Storage
function addSession(){
    sessionStorage.setItem("Nome", nome_id.value);
    sessionStorage.setItem("e-mail", email_id.value);
    sessionStorage.setItem("Telefone", fone_id.value); 
    sessionStorage.setItem("Assunto", assunto_id.value);
    sessionStorage.setItem("Mensagem", msg_id.value);
  
    alert("Adicionado ao SessionStorage!");
}

//Mostrar valor conforme os campos forem preenchidos
function MostrarValor(){
    var nomeCapturado = document.getElementById('nome_id').value;
    document.getElementById('nomeDigitado').innerHTML = nomeCapturado;

    var emailCapturado = document.getElementById('email_id').value;
    document.getElementById('emailDigitado').innerHTML = emailCapturado;

    var foneCapturado = document.getElementById('fone_id').value;
    document.getElementById('foneDigitado').innerHTML = foneCapturado;

    var assuntoCapturado = document.getElementById('assunto_id').value;
    document.getElementById('assuntoDigitado').innerHTML = assuntoCapturado;

    var msgCapturado = document.getElementById('msg_id').value;
    document.getElementById('msgDigitado').innerHTML = msgCapturado;  
} 

//Recuperar valores da Session Storage
var GetSessionNome = sessionStorage.getItem("Nome");
var GetSessionEmail = sessionStorage.getItem("e-mail");
var GetSessionTel = sessionStorage.getItem("Telefone");
var GetSessionAssunto = sessionStorage.getItem("Assunto");
var GetSessionMensagem = sessionStorage.getItem("Mensagem"); 