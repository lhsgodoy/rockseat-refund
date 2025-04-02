// Seleciona os elementos do formulario

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")

// Capture o evento de input

amount.oninput = () => {

    // Obtem o valor atual e formata para aceitar somente numeros
   
    let value = amount.value.replace(/\D/g, "")

    // Transforma o valor em centavos
   
    value = Number(value) / 100

   // atualiza o valor do input
  
   amount.value = FormatCurrencyBRL(value)
   
}

function FormatCurrencyBRL(value) {

    // Formata o valor no padrão BRL
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })

    // retorna o valor formatado
    return value
   
}

//Captura o evento de submit do forumlario para obter os valores
form.onsubmit = (event) => {
 
    // Não deixa recarregar a pagina
    event.preventDefault ()

    // Cria um objeto com os detalhes da nova despesa
    const NewExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        create_at: new Date(),      
}
        // Chama a função que ira adicionar o item na lista
        expenseAdd (NewExpense)
}

function expenseAdd (NewExpense) {
    try {

    } catch {
        alert("Não foi possivel atualizar a lista")
        console.log(error)
    }
}