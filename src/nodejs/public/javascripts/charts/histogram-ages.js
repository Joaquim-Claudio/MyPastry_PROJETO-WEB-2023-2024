const url_base = 'https://mypastry.onrender.com/';

window.addEventListener('DOMContentLoaded', async(event) => {
  Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
  Chart.defaults.global.defaultFontColor = '#292b2c';
  
  
  const response = await fetch(`${url_base}/data/statistics/users/ages`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'GET',
  })
  
  if(response.ok) {
    var data = await response.json();
  }else {
    throw new Error(response.status);
  }

  // Define os limites de cada classe
  const bins = [18, 25, 32, 39, 46, 53, 60]; 

  function calculateBinFrequencies(data, bins) {
    const frequencies = new Array(bins.length - 1).fill(0);
    data.forEach(row => {
      for (let i = 0; i < bins.length - 1; i++) {
        if (row.age >= bins[i] && row.age < bins[i + 1]) {
          frequencies[i]++;
          break;
        }
      }
    });
    return frequencies;
  }

  const frequencies = calculateBinFrequencies(data, bins);

  var ctx = document.getElementById('ageHistogram').getContext('2d');
  var myHistogram = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: bins.slice(0, -1).map((bin, index) => `${bin}-${bins[index + 1]}`),
      datasets: [{
        label: 'Idades dos utilizadores',
        data: frequencies,
        backgroundColor: 'rgba(2, 117, 216, 0.7)',
        borderColor: 'rgba(2, 117, 216, 1)',
        borderWidth: 1,
        barPercentage: 1.0,
        categoryPercentage: 1.0
      }]
    },
    options: {
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Idades (classificadas)'
          },
          gridLines: {
            display: true
          },
          ticks: {
            maxTicksLimit: bins.length
          },
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Nº de utilizadores'
          },
          ticks: {
            beginAtZero: true
          },
          gridLines: {
            display: true
          }
        }]
      },
      legend: {
        display: true
      }
    }
  });
})