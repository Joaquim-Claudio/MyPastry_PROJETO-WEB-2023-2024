const url_base = 'https://mypastry.onrender.com/';

window.addEventListener('DOMContentLoaded', async(event) => {
    Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
    Chart.defaults.global.defaultFontColor = '#292b2c';

    try {
        const response = await fetch(`${url_base}/data/statistics/users/genders`, {
            headers: { 'Content-Type': 'application/json' },
            method: 'GET',
        })

        if(response.ok) {
            var data = await response.json();

            let total = 0;
            for (let row of data) {
                total += parseInt(row.count);
            }

            for(let i=0; i<data.length; i++) {
                let value = parseInt(data[i].count)
                data[i].count = (value/total) * 100;
            }

            console.log(data)
            
        }
    } catch (err) {
        throw new Error(response.status);
    }
    

    var ctx = document.getElementById("genderPieChart");
    var pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: [
                'Mulher',
                'Homem',
                'Outros'
            ],
            datasets: [{
                label: 'Gênero dos utilizadores',
                data: data.map(row => row.count),
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                hoverOffset: 4
            }],
        }
    });
});