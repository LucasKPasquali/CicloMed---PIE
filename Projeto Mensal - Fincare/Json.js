document.addEventListener('DOMContentLoaded', () => {
    const ctx1 = document.getElementById('cashFlowChart').getContext('2d');
    const ctx2 = document.getElementById('monthResultChart').getContext('2d');

    // Gráfico de fluxo de caixa
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['03 set.', '05 set.'],
            datasets: [{
                label: 'Conta corrente',
                data: [10000, 12000],
                borderColor: '#333',
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Saldo: R$ ${context.raw.toLocaleString()}`;
                        }
                    }
                }
            },
            onClick: (event, elements) => {
                if (elements.length > 0) {
                    const elementIndex = elements[0].index;
                    alert(`Você clicou no ponto ${elementIndex + 1} do gráfico de fluxo de caixa.`);
                }
            }
        }
    });

    // Gráfico de resultado do mês
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Receitas', 'Despesas'],
            datasets: [{
                label: 'Resultado do mês',
                data: [20000, -1000],
                backgroundColor: ['#4caf50', '#f44336']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            onClick: (event, elements) => {
                if (elements.length > 0) {
                    const clickedElement = elements[0];
                    const label = clickedElement.element.$context.raw.label;
                    alert(`Você clicou na barra: ${label}`);
                }
            }
        }
    });
});

// Função para alternar a visibilidade da sidebar
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('hidden');
}
