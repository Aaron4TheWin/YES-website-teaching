document.addEventListener('DOMContentLoaded', (event) => {
    const ctx = document.getElementById('reflectanceChart').getContext('2d');
    const data = {
        labels: ['Mrs.', 'Garcia', 'Quit', 'Chemistry', 'For', 'Night', 'Clubs'],
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
                        text: 'Tip Amount ($$$)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'AP Chemistry'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Garcia Report'
                }
            }
        }
    };

    new Chart(ctx, config);
});``
