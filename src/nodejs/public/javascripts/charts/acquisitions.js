Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

const data = [
    { year:2010, count:22 },
    { year:2011, count:10 },
    { year:2012, count:5 },
    { year:2013, count:6 },
    { year:2014, count:8 },
    { year:2015, count:30 },

]

const ctx = document.getElementById("acquisitions");

const barChart = new Chart(ctx,
  {
    type: 'bar',
    data: {
      labels: data.map(row => row.year),
      datasets: [
        {
          label: 'Acquisitions by year',
          backgroundColor: "rgba(2,117,216,1)",
          borderColor: "rgba(2,117,216,1)",
          data: data.map(row => row.count)
        }
      ]
    }
  }
);