const nome = "Tonio Academia";
const email = "lmelhorhomem@email.com";
let anoNascimento = 1998;
let usuarioAtivo = true;


console.log("DADOS DO USUÁRIO");
console.log("Nome:", nome);
console.log("E-mail:", email);
console.log("Idade:", 2026 - anoNascimento);
console.log("Usuário ativo:", usuarioAtivo);




const botao = document.getElementById("btnCalcular");

botao.addEventListener("click", function () {
    const campo1 = document.getElementById("numero1");
    const campo2 = document.getElementById("numero2");
    const resultado = document.getElementById("resultado");

    if (campo1.value === "" || campo2.value === "") {
        resultado.textContent = "Preencha os dois números.";
        return;
    }

    const numero1 = Number(campo1.value);
    const numero2 = Number(campo2.value);
    const soma = numero1 + numero2;
    const subtracao = numero1 - numero2;
    const multiplicacao = numero1 * numero2;
    const divisao = numero2 === 0
        ? "Não é possível dividir por zero."
        : numero1 / numero2;

    resultado.innerHTML = `
    <p>Soma: ${soma}</p>
    <p>Subtração: ${subtracao}</p>
    <p>Multiplicação: ${multiplicacao}</p>
    <p>Divisão: ${divisao}</p>
    `;
});




const calcularMediaBtn = document.getElementById("calcular");

calcularMediaBtn.addEventListener("click", function () {
  const nota1Input = document.getElementById("nota1");
  const nota2Input = document.getElementById("nota2");
  const nota3Input = document.getElementById("nota3");
  const resultadoMedia = document.getElementById("resultado_calculos");

  // Valida se os campos estão preenchidos
  if (
    nota1Input.value === "" ||
    nota2Input.value === "" ||
    nota3Input.value === ""
  ) {
    resultadoMedia.textContent = "Preencha as três notas para calcular.";
    return;
  }

  // Converte texto em número
  const n1 = parseFloat(nota1Input.value);
  const n2 = parseFloat(nota2Input.value);
  const n3 = parseFloat(nota3Input.value);

  // Calcula e exibe
  const media = (n1 + n2 + n3) / 3;
  resultadoMedia.textContent = `A Média foi de: ${media.toFixed(2)}`;
});
