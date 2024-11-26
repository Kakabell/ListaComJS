const buttun = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')


let minhaListaItens = []

function AdicionarNovaTarefa() {
   
    if (input.value == '') {
        alert('Impossível adiconar tarefa vazia')
        return;
    }

    minhaListaItens.push({
        tarefa: input.value,
        concluida: false
    })   

    input.value = ''
    mostrarTarefas()
}

function mostrarTarefas(){

    let NovaLI = ''

    minhaListaItens.forEach((item, posicao) => {

        NovaLI = NovaLI +
                    `  <li class="task ${item.concluida && "done"}">
                        <img src="./img/check.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
                            <p> ${item.tarefa}</p>
                        <img src="./img/trash.png" alt="check-na-tarefa" onclick="deletarItem(${posicao})">
                    </li>`
    })
    
    listaCompleta.innerHTML = NovaLI

    localStorage.setItem('lista', JSON.stringify(minhaListaItens))

}

function deletarItem(posicao){
    minhaListaItens.splice(posicao, 1)
    mostrarTarefas()    
}

function concluirTarefa(posicao){
    minhaListaItens[posicao].concluida = !minhaListaItens[posicao].concluida
    mostrarTarefas()
}

function recarregarTarefas() {
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if (tarefasDoLocalStorage) {
        minhaListaItens = JSON.parse(tarefasDoLocalStorage)
    }
    

    mostrarTarefas()
}

recarregarTarefas()

buttun.addEventListener('click', AdicionarNovaTarefa)