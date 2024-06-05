// Função para obter dados do localStorage
function getData() {
    const data = localStorage.getItem('formData');
    return data ? JSON.parse(data) : [];
}

// Função para salvar dados no localStorage
function saveData(data) {
    localStorage.setItem('formData', JSON.stringify(data));
}

// Função para enviar o formulário
function submitForm() {
    // Obter valores dos campos do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const description = document.getElementById('description').value;

    // Obter os dados existentes e adicionar o novo
    const data = getData();
    data.push({ name, email, description });

    // Salvar os dados no localStorage
    saveData(data);

    // Limpar os campos do formulário
    document.getElementById('help-form').reset();
}

// Função para mostrar a tabela
function showTable() {
    const container = document.getElementById('table-container');
    container.innerHTML = ''; // Limpar o conteúdo do container

    const data = getData();

    if (data.length === 0) {
        container.innerHTML = '<p>Nenhum dado disponível.</p>';
        return;
    }

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Cabeçalho da tabela
    const headers = ['Nome', 'Email', 'Descrição'];
    const tr = document.createElement('tr');
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        tr.appendChild(th);
    });
    thead.appendChild(tr);

    // Dados da tabela
    data.forEach(item => {
        const tr = document.createElement('tr');
        Object.values(item).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    container.appendChild(table);
    container.classList.remove('hidden');
}