function gerarSenha() {
  const usarMaiusculas = document.getElementById('maiusculas').checked;
  const usarMinusculas = document.getElementById('minusculas').checked;
  const usarNumeros = document.getElementById('numeros').checked;

  let caracteres = '';
  const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
  const numeros = '0123456789';

  if (usarMaiusculas) caracteres += letrasMaiusculas;
  if (usarMinusculas) caracteres += letrasMinusculas;
  if (usarNumeros) caracteres += numeros;

  if (caracteres.length === 0) {
    document.getElementById('senha').value = 'Selecione ao menos 1 opção!';
    return;
  }

  const tamanhoSenha = 12;
  let senha = '';
  for (let i = 0; i < tamanhoSenha; i++) {
    const index = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[index];
  }

  document.getElementById('senha').value = senha;
}
