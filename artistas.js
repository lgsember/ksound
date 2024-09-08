document.addEventListener('DOMContentLoaded', () => {
    if (typeof artistsData !== 'undefined' && Array.isArray(artistsData)) {
        const artistsSection = document.querySelector('#allArtists');

        let htmlContent = '';

        let allCards = [];

        artistsData.forEach(artistData => {
            artistData.cards.forEach(cardData => {
                allCards.push(cardData);
            });
        });

        allCards.sort((a, b) => a.title.localeCompare(b.title));

        htmlContent = `<section id="artistas">
            <h2>Todos os Artistas</h2>
            <div class="cards-container">`;

        allCards.forEach(cardData => {
            htmlContent += `<div class="card">
                <a href="${cardData.link}" class="card-link">
                    <div class="card-image" style="background-image: url(${cardData.image});">
                        <div class="card-title">${cardData.title}</div>
                    </div>
                </a>
            </div>`;
        });

        htmlContent += `</div></section>`;

        artistsSection.innerHTML = htmlContent;
    } else {
        console.error('artistsData não está definido ou não é um array.');
    }
});
