function classChange() {
    const element = document.querySelector('.modal-overlay');
    element.classList.toggle("active");
}

const transactions = [
    {id:1, description: "Luz", amount: -50000, date:'23/01/2021',}, 
    {id:2, description: "Website", amount: 500000, date:'23/01/2021',}, 
    {id:3, description: "Internet", amount: -20000, date:'23/01/2021',}, 

]

//var para somar e subtrair a grana
const Transaction = {
    incomes() {
        //somar as entradas
    }, 
    expenses() {
        //somar as saídas
    },
    total() {
        //entradas-saídas
    }
}

//Pegar as transactions e colocar no HTML

const DOM = {
    transactionsContainer: document.querySelector('#data-table, tbody'),
    addTransaction(transaction, index) {
        //criando um item e atribuindo um item
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        //criando tags tr para cada item que virá
        DOM.transactionsContainer.appendChild(tr)

    },
    innerHTMLTransaction(transaction) {
        //if income for maior que 0, ele põe o income, se não, ele põe como expense
        const CSSclass = transaction.amount > 0 ? "income":"expense"

        //const amount = 
        //criando o modelo que tinha no html e fazendo as substituições com o arrayt transaction
        const html = `
        <tr>
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover Transação">
            </td>
        </tr>
        `
        return html
    }
}


transactions.forEach(function(transactions) {
    DOM.addTransaction(transactions)
})