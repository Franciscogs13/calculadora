// @ts-nocheck
function calcularImc() {
  const form = document.querySelector('.form');
  const peso = document.querySelector('#peso');
  const altura = document.querySelector('#altura');
  const resultado = document.querySelector('#resultado');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    resultado.innerHTML = '';
    resultado.classList.remove('resultado', 'pesoNormal', 'alterado');

    if (
      !peso.value ||
      isNaN(peso.value) ||
      !altura.value ||
      isNaN(altura.value)
    ) {
      resultado.classList.add('resultado');
      resultado.innerHTML = 'Altura ou peso inválidos.';
      return;
    }

    const imc = parseFloat(peso.value) / parseFloat(altura.value) ** 2;

    let mensagem = '';
    if (imc < 18.5) {
      mensagem = 'Você está abaixo do peso.';
      resultado.classList.add('alterado');
    } else if (imc >= 18.5 && imc <= 24.9) {
      mensagem = 'Você está com peso normal.';
      resultado.classList.add('pesoNormal');
    } else if (imc >= 25 && imc <= 29.9) {
      mensagem = 'Você está com sobrepeso.';
      resultado.classList.add('alterado');
    } else if (imc >= 30 && imc <= 34.9) {
      mensagem = 'Você está com obesidade grau 1.';
      resultado.classList.add('alterado');
    } else if (imc >= 35 && imc <= 39.9) {
      mensagem = 'Você está com obesidade grau 2.';
      resultado.classList.add('alterado');
    } else if (imc >= 40) {
      mensagem = 'Você está com obesidade grau 3.';
      resultado.classList.add('alterado');
    }

    peso.value = '';
    altura.value = '';
    peso.focus();
    resultado.innerHTML = `Seu imc é ${imc.toFixed(2)} e ${mensagem}`;
  });
}
calcularImc();
