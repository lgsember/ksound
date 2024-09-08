function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function loadArtistData(artistId) {
    const artist = artistsDetails[artistId];

    if (artist) {
        document.getElementById('artist-info').innerHTML = `
            <h1 id="artist-name">${artist.name}</h1>
            <p id="artist-description">${artist.description}</p>
            <img id="artist-image" src="${artist.image}" alt="Imagem do Artista">
        `;

        const membersHTML = artist.members.map(member => `
            <a href="${member.link}" class="card">
                <img src="${member.photo}" alt="${member.name}" class="card-image">
                <div class="card-title">${member.name}</div>
            </a>
        `).join('');
        document.getElementById('members-container').innerHTML = membersHTML;

        const discographyHTML = artist.discography.map(album => `
            <a href="${album.link}" class="card">
                <img src="${album.cover}" alt="${album.title}" class="card-image">
                <div class="card-title">${album.title}</div>
            </a>
        `).join('');
        document.getElementById('discography-container').innerHTML = discographyHTML;

        const spotifyLink = `
            <a href="${artist.socialLinks.spotify}" class="link-to-spotify" target="_blank">Ouça mais no Spotify</a>
        `;
        document.getElementById('discography-container').innerHTML += spotifyLink;

        const videographyHTML = artist.videography.map(video => `
            <a href="${video.link}" class="card">
                <img src="${video.thumbnail}" alt="${video.title}" class="card-image">
                <div class="card-title">${video.title}</div>
            </a>
        `).join('');
        document.getElementById('videography-container').innerHTML = videographyHTML;

        const youtubeLink = `
            <a href="${artist.socialLinks.youtube}" class="link-to-youtube" target="_blank">Assista mais vídeos no YouTube</a>
        `;
        document.getElementById('videography-container').innerHTML += youtubeLink;

        document.getElementById('instagram-link').href = artist.socialLinks.instagram;
        document.getElementById('amino-link').href = artist.socialLinks.amino;

        document.getElementById('instagram-link').setAttribute('target', '_blank');
        document.getElementById('amino-link').setAttribute('target', '_blank');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const artistId = getQueryParam('id');
    loadArtistData(artistId);
});
