
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['學習力', '專注力', '合作力', '領導力', '反應力'],
        datasets: [{
            data: [85, 87, 65, 30, 76],
            borderColor: "#9A7F87",
            pointBackgroundColor: "#9A7F87",
            pointHoverBackgroundColor: "#E69997",
            backgroundColor: "rgba(245,185,178,0.3)"
                    }],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
            enabled: false
        },
        legend: {
            display: false
        },
        scale: {
            // 中心點射向周圍性向的線條
            angleLines: {
                display: true,
                color: '#595757'
            },

            // 同心五角形的線條
            gridLines: {
                display: true,
                color: "#595757",
            },

            // 外框上面性向的文字
            pointLabels: {
                fontColor: '#595757',
                fontSize: '18',
                fontFamily: '微軟正黑體',
                fontStyle: 'bold'
            },

            // 刻度
            ticks: {
                beginAtZero: true,
                display: false,
                stepSize: 100,
            }
        }
    }
});
