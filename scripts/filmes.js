document.addEventListener('DOMContentLoaded', () => {
    const loading = document.getElementById('loading-overlay');
    const container = document.getElementById('listagem-filmes-populares');
    const container2 = document.getElementById('listagem-filmes-no-cinema');
    const container3 = document.getElementById('listagem-filmes-top-rated');
    const container4 = document.getElementById('listagem-filmes-lancamento-proximo');

    fetch(`/.netlify/functions/tmdb-get-data?path=${encodeURIComponent('movie/popular')}`)
        .then(res => res.json())
        .then(data => {
            data.results.forEach(item => {
                const title = item.title || item.name;
                const imgSrc = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
                const corBadge = item.popularity > 10.000 ? 'success' : 'danger';

                container.innerHTML += `<div class="card" style="width: 18rem;">
                    <input type="hidden" id="id-filme" value="${item.id}" />
                    <img src="${imgSrc}" class="card-img-top imagem-card-filme" alt="">
                    <div class="card-body">
                        <div id="container-info-filme">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">${item.overview.substring(0, 100)}...</p>
                        </div>

                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-${corBadge}">
                            ${item.popularity}
                        </span>
                    </div>
                </div>`;
            });
        })
        .catch(err => console.error(err))
        .finally(() => {
            loading.classList.add('hidden');
            container.style.display = 'flex';
        });

    fetch(`/.netlify/functions/tmdb-get-data?path=${encodeURIComponent('movie/now_playing')}`)
        .then(res => res.json())
        .then(data => {
            data.results.forEach(item => {
                const title = item.title || item.name;
                const imgSrc = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
                const corBadge = item.popularity > 10.000 ? 'success' : 'danger';

                container2.innerHTML += `<div class="card" style="width: 18rem;">
                    <input type="hidden" id="id-filme" value="${item.id}" />
                    <img src="${imgSrc}" class="card-img-top imagem-card-filme" alt="">
                    <div class="card-body">
                        <div id="container-info-filme">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">${item.overview.substring(0, 100)}...</p>
                        </div>

                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-${corBadge}">
                            ${item.popularity}
                        </span>
                    </div>
                </div>`;
            });
        })
        .catch(err => console.error(err))
        .finally(() => {
            loading.classList.add('hidden');
            container2.style.display = 'flex';
        });

    fetch(`/.netlify/functions/tmdb-get-data?path=${encodeURIComponent('movie/top_rated')}`)
        .then(res => res.json())
        .then(data => {
            data.results.forEach(item => {
                const title = item.title || item.name;
                const imgSrc = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
                const corBadge = item.popularity > 10.000 ? 'success' : 'danger';

                container3.innerHTML += `<div class="card" style="width: 18rem;">
                    <input type="hidden" id="id-filme" value="${item.id}" />
                    <img src="${imgSrc}" class="card-img-top imagem-card-filme" alt="">
                    <div class="card-body">
                        <div id="container-info-filme">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">${item.overview.substring(0, 100)}...</p>
                        </div>

                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-${corBadge}">
                            ${item.popularity}
                        </span>
                    </div>
                </div>`;
            });
        })
        .catch(err => console.error(err))
        .finally(() => {
            loading.classList.add('hidden');
            container3.style.display = 'flex';
        });

    fetch(`/.netlify/functions/tmdb-get-data?path=${encodeURIComponent('movie/upcoming')}`)
        .then(res => res.json())
        .then(data => {
            data.results.forEach(item => {
                const title = item.title || item.name;
                const imgSrc = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
                const corBadge = item.popularity > 10.000 ? 'success' : 'danger';

                container4.innerHTML += `<div class="card" style="width: 18rem;">
                    <input type="hidden" id="id-filme" value="${item.id}" />
                    <img src="${imgSrc}" class="card-img-top imagem-card-filme" alt="">
                    <div class="card-body">
                        <div id="container-info-filme">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">${item.overview.substring(0, 100)}...</p>
                        </div>

                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-${corBadge}">
                            ${item.popularity}
                        </span>
                    </div>
                </div>`;
            });
        })
        .catch(err => console.error(err))
        .finally(() => {
            loading.classList.add('hidden');
            container4.style.display = 'flex';
        });
});