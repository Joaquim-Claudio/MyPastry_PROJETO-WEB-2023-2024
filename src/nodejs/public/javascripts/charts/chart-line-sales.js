const url_base = 'http://localhost:5300';

window.addEventListener('DOMContentLoaded', async(event) => {
  Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
  Chart.defaults.global.defaultFontColor = '#292b2c';
  
  const response = await fetch(`${url_base}/data/statistics/orders/total`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'GET',
  })

  if(response.ok) {
    var data = await response.json();
  }else {
    throw new Error(response.status);
  }

 
 const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

  // Area Chart Example
  var ctx = document.getElementById("salesLineChart");
  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
      //labels: `${months[ ( new Date(data.map(row => row.date)) ).getMonth() ]} ${( new Date(data.map(row => row.date)) ).getDay()}`,
      labels: data.map(row => row.date),
      datasets: [{
        label: "Total de vendas (EUR)",
        lineTension: 0.3,
        backgroundColor: "rgba(2,117,216,0.2)",
        borderColor: "rgba(2,117,216,1)",
        pointRadius: 5,
        pointBackgroundColor: "rgba(2,117,216,1)",
        pointBorderColor: "rgba(255,255,255,0.8)",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(2,117,216,1)",
        pointHitRadius: 50,
        pointBorderWidth: 2,
        data: data.map(row => row.sum),
        // data: [10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 38451, 22554, 22514],
      }],
    },
    options: {
      scales: {
        xAxes: [{
          time: {
            unit: 'date'
          },
          gridLines: {
            display: true
          },
          ticks: {
            min: 15,
            maxTicksLimit: 7,
            callback: function(value, index, values) {
              const date = new Date(value)
              return `${months[date.getMonth()]} ${date.getDate()}`
            }
          },
          scaleLabel:{
            display: true,
            labelString: 'Últimos 15 dias'
          }
        }],
        yAxes: [{
          beginAtZero: true,
          ticks: {
            min: 0,
          },
          gridLines: {
            color: "rgba(0, 0, 0, .125)",
          },
          scaleLabel:{
            display: true,
            labelString: 'Total (EUR)'
          }
        }],
      },
      legend: {
        display: true
      }
    }
  });

});