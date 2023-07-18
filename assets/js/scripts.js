
// 1) Crio o elemento do botão
const botao = document.querySelector('[data-form-button]');

// 2) Crio o escutador que realizando um evento a cada click
botao.addEventListener('click', (e) => {

  // 3) Previno o funcionamento padrão do form (reload e tentativa de envio do dado)
  e.preventDefault();

  // 4) Acesso o elemento input e atribuo a uma var
  const input = document.querySelector('[data-form-input]');

  // 5) Acesso o valor inserido no elemento input e atribuo a uma var
  const valor = input.value;

  // 6) Acesso o elemento e atibuo a uma var
  const task = document.querySelector('[data-list-text]');

  // 7) Valido que se o input não for preenchido é exibida uma mensagem que solicita o preenchimento
  if(valor == '')
  {
    task.innerText = 'Informe um nome para sua tarefa'
  } 
  // 8) Se tiver o input tiver sido preenchido é exibida uma mensagem com esse valor inserido
  else
  {
    task.innerText = valor;
  }
});