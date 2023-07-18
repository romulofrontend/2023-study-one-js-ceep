
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

 
  // 6) Valido que se o input não for preenchido é exibida uma mensagem que solicita o preenchimento
  if(valor == '')
  {
    alert("Informe um nome para a tarefa")
  } 
  // 7) Se tiver o input tiver sido preenchido criar o item na lista
  else
  {

    //Texto a ser inserido na li
    const novaTask = `<p class="task" data-task>
      ${valor}
    </p>`;
    
    //Acessando e atribuindo a li a uma var 
    const listaItem = document.createElement('li');

    //Inserindo a class na li
    listaItem.classList.add('listItem');

    //Inserindo o data-attribute na li
    listaItem.setAttribute('data-list-item','');

    //Inserindo o texto dentro da li
    listaItem.innerHTML = novaTask;

    //Acessando e atribuindo a lista a uma var
    const lista = document.querySelector('[data-list]');

    //Inserindo a li após a última li da lista
    lista.appendChild(listaItem);
    
  }
});