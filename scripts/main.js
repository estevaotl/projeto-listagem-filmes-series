document.addEventListener('DOMContentLoaded', () => {
    const loading = document.getElementById('loading-overlay');
    const container = document.getElementById('listagem-filmes-series');

    fetch(`/.netlify/functions/tmdb-get-data?path=${encodeURIComponent('trending/all/day')}`)
        .then(res => res.json())
        .then(data => {
            data.results.forEach(item => {
                const title = item.title || item.name;
                const imgSrc = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
                const corBadge = item.popularity > 10.000 ? 'success' : 'danger';
                const badgeMovieTv = item.media_type == "movie" ? "./images/clapperboard.png" : "./images/drama.png";

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

                        <span class="position-absolute top-0 start-0 translate-middle badge rounded-pill badge-movie-tv">
                            <img src="${badgeMovieTv}" />
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
});