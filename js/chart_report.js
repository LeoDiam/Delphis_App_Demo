/* globals Chart:false, feather:false */

(function () {
    'use strict'

    feather.replace()

    // Graphs
    var ctx = document.getElementById('myChart')
    // eslint-disable-next-line no-unused-vars
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: [
                'Exkalsa',
                'Mitsubishi',
                'Daikin',
                'Remis',
                'Clint',
                'Lennox',
            ],
            datasets: [{
                data: [
                    12349,
                    11345,
                    28483,
                    24003,
                    8489,
                    22392,
                ],
                backgroundColor: [
                    'rgb(255,99,143)',
                    'rgb(172,54,235)',
                    'rgb(86,89,255)',
                    'rgb(99,255,224)',
                    'rgb(72,235,54)',
                    'rgb(238,255,86)',
                ],
                // lineTension: 1000,
                // backgroundColor: 'transparent',
                borderColor: '#000000',
                borderWidth: 4,
                // pointBackgroundColor: '#007bff'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    })
})()
