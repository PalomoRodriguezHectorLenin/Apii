async function api(){
    

        const urlAPI = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=a048e153956b0178033d854e0f9569f6&hash=15722fef819c7253427082372fb36aaf';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';

        const api = await fetch(urlAPI);
        const data = await marvel.json();
    
        Object.values(dato.data.results).forEach(hero => {
            let urlHero = hero.urls[0].url;
            contentHTML += `
                <div class="col-md-4">
                    <a href="${urlHero}" target="_blank">
                      <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                    </a>
                    <h3 class="title">${hero.name}</h3>
                </div>`;
        });
        container.innerHTML = contentHTML;
    }