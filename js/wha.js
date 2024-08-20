function abrirWhatsapp() {
    var nome = document.getElementById("Name").value;
    var celular = document.getElementById("Phone").value;
    var company = document.getElementById("Company").value;
    var email = document.getElementById("Email").value;
    var msg = document.getElementById("Message").value;
    var url = "https://wa.me/5596981027821?text=" // Seu numero
      + "Formulário de Contato" + "%0a" // Mensagem personalizada
      + "%0a" // Quebra de linha
      + "Nome: " + nome + "%0a" // Dados do formulário
      + "Celular: " + celular + "%0a"
      + "Empresa: " + company + "%0a"
      + "Email: " + email + "%0a"
      + "Mensagem: " + msg;
    window.open(url, '_blank').focus();
  }