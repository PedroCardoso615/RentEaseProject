function renderFavourites() {
    const favList = document.getElementById('favourites');
    favList.innerHTML = '';

    const favourites = JSON.parse(localStorage.getItem('favourites')) || [];

    favourites.forEach((flat) => {
        const favFlat = document.createElement('li');
        favFlat.innerHTML = `
        <hr>
        <strong>City:</strong> ${flat.city} <br>
        <strong>Street:</strong> ${flat.streetName} ${flat.streetNumber} <br>
        <strong>Area:</strong> ${flat.areaSize} m² <br>
        <strong>AC:</strong> ${flat.hasAC ? 'Yes' : 'No'} <br>
        <strong>Year Built:</strong> ${flat.yearBuilt} <br>
        <strong>Rent:</strong> $${flat.rentPrice}/month <br>
        <strong>Available:</strong> ${flat.dateAvailable} <br>
    `;
        favList.appendChild(favFlat);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderFavourites();
});
