const ctx = document.getElementById('miGrafico');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Manzana', 'Banana', 'Pollo', 'Arroz', 'Huevos'],
        datasets: [{
            label: 'Calorías',
            data: [52, 89, 165, 130, 155],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});