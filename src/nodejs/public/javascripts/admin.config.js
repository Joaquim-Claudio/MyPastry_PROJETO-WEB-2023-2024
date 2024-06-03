const url_base = 'http://localhost:5300'

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

    const map = L.map('map').setView([38.750553,-9.1970225], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const storeMarker = L.marker([38.750553,-9.1970225]).addTo(map)
        .bindPopup('<b>MyPastry</b> <i class="fa-solid fa-map-pin text-danger"></i> <br>Fica localizada aqui.')
        .openPopup();

    const radius = {
        inner: [0, 265],
        medium: [265, 530],
        outer: [530, 795]
    }
    
    const outerDonut = L.donut([38.750553,-9.1970225], {
        color: '#ff1a1a',
        fillColor: '#ff4d4d',
        fillOpacity: 0.25,
        radius: radius.outer[1],
        innerRadius: radius.outer[0],
        innerRadiusAsPercent: false,
    }).addTo(map);


    const mediumDonut = L.donut([38.750553,-9.1970225],{
        color: '#ffa900',
        fillColor: '#ffc34d',
        fillOpacity: 0.25,
        radius: radius.medium[1],
        innerRadius: radius.medium[0],
        innerRadiusAsPercent: false,
    }).addTo(map);

    const innerDonut = L.circle([38.750553,-9.1970225], {
        color: '#30be25',
        fillColor: '#45c53b',
        fillOpacity: 0.25,
        radius: radius.inner[1]
    }).addTo(map);


    (async function loadData () {
        try {
            const  response = await fetch(`${url_base}/admin/map/active-clients`, {
                headers: {"Content-Type": "application/json"},
                method: 'GET'
            })

            var data = await response.json();
        } catch (err) {
            throw new Error(err);
        }

        let [numInner, numMedium, numOuter] = [0, 0, 0];

        for (let row of data) {
            if(row.dist < radius.inner[1]) numInner++;
            else if(row.dist < radius.medium[1]) numMedium++;
            else if(row.dist < radius.outer[1]) numOuter++;
        }

        innerDonut.bindPopup(`<i class="fa-solid fa-street-view"></i> 200 metros <br> <b>Nº de clientes:</b> ${numInner}`);
        mediumDonut.bindPopup(`<i class="fa-solid fa-street-view"></i> 500 metros <br> <b>Nº de clientes:</b> ${numMedium}`);
        outerDonut.bindPopup(`<i class="fa-solid fa-street-view"></i> 1 Km <br> <b>Nº de clientes:</b> ${numOuter}`);
        
    })();

    
});