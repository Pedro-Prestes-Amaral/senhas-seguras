function gerarSenha() {
  const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
  const numeros = '0123456789';
  const todosCaracteres = letrasMaiusculas + letrasMinusculas + numeros;

  let senha = '';
  const tamanhoSenha = 12;

  for (let i = 0; i < tamanhoSenha; i++) {
    const randomIndex = Math.floor(Math.random() * todosCaracteres.length);
    senha += todosCaracteres[randomIndex];
  }

  document.getElementById('senha').value = senha;
}

// Gera uma senha ao abrir a página
gerarSenha();
