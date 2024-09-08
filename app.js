if (typeof artistsData !== 'undefined' && Array.isArray(artistsData)) {
    const mainContent = document.querySelector('main');

    let htmlContent = '';

    artistsData.forEach(artistData => {
        let sectionHtml = `<section id="artistas">
            <h2>${artistData.title}</h2>
            <div class="cards-container">`;

        artistData.cards.forEach(cardData => {
            sectionHtml += `<div class="card">
                <a href="${cardData.link}" class="card-link">
                    <div class="card-image" style="background-image: url(${cardData.image});">
                        <div class="card-title">${cardData.title}</div>
                    </div>
                </a>
            </div>`;
        });

        sectionHtml += `</div></section>`;

        htmlContent += sectionHtml;
    });

    mainContent.innerHTML = htmlContent;

    const searchButton = document.getElementById('search-bttn');
    searchButton.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Oops! Essa função ainda não está disponível!');
    });

} else {
    console.error('artistsData não está definido ou não é um array.');
}
