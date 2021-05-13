/* globals Chart:false, feather:false */

(function () {
    'use strict'

    feather.replace()

    // Graphs
    var ctx = document.getElementById('myChart')
    // eslint-disable-next-line no-unused-vars
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [
                '2014',
                '2015',
                '2016',
                '2017',
                '2018',
                '2019',
                '2020',
                '2021',
                '2022',
                '2023',
                '2024',
                '2025',
            ],
            datasets: [{
                label: "Past",
                data: [
                    17339,
                    21345,
                    18483,
                    24003,
                    22000,
                    25092,
                    21000
                ],
                lineTension: 0.5,
                backgroundColor: 'transparent',
                borderColor: '#007bff',
                borderWidth: 4,
                pointBackgroundColor: '#95ff00'
            },
                {
                    label: "Future",
                    data: [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        21000,
                        20345,
                        21483,
                        20657,
                        23903,
                        25092,
                    ],
                    lineTension: 0.5,
                    backgroundColor: 'transparent',
                    borderColor: '#ff00d5',
                    borderWidth: 4,
                    pointBackgroundColor: '#ff3300'
                },
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            },
            legend: {
                display: true,
                position: 'bottom',
            }
        }
    }
    );
    myChart.render();

})();
