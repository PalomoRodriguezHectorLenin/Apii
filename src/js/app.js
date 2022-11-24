const api = {
    render: () => {

        const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=a048e153956b0178033d854e0f9569f6&hash=15722fef819c7253427082372fb36aaf';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';

        fetch(urlAPI)
            .then(res => res.json())
            .then((json) => {
                for (const hero of json.data.results) {
                    let urlHero = hero.urls[0].url;
                    contentHTML +=
                        `<div class="row" id="marvel-row">
                            <div class="col-md-4">
                            <a href="${urlHero}" target="blank">
                             <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                            </a>
                             <h3 class="title">${hero.name}</h3>
                         </div>`
                }
                container.innerHTML = contentHTML;
            })
    }
};

api.render();