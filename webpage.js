document.addEventListener('DOMContentLoaded', (event) => {
    const ctx = document.getElementById('reflectanceChart').getContext('2d');
    const data = {
        labels: ['Blue', 'Cyan', 'Green', 'Yellow', 'Orange', 'Red', 'Deep Red'],
        datasets: [{
            label: 'Reflectance (%)',
            data: [31.92, 55.72, 45.16, 29.79, 24.75, 32.50, 49.25],
            backgroundColor: [
                'blue',
                'cyan',
                'green',
                'yellow',
                'orange',
                'red',
                'darkred'
            ],
            borderColor: [
                'blue',
                'cyan',
                'green',
                'yellow',
                'orange',
                'red',
                'darkred'
            ],
            borderWidth: 1
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Reflectance (%)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Colors'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Reflectance Spectrum'
                }
            }
        }
    };

    new Chart(ctx, config);
});``
