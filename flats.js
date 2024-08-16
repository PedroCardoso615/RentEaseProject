let flats = JSON.parse(localStorage.getItem('flats')) || [];
let favourites = JSON.parse(localStorage.getItem('favourites')) || [];

function addToList() {  //ParseInt e ParseFloat para converter a string para numeros.
    const flat = {
        city: document.getElementById('city').value,
        streetName: document.getElementById('streetName').value,
        streetNumber: parseInt(document.getElementById('streetNumber').value),
        areaSize: parseFloat(document.getElementById('areaSize').value),
        hasAC: document.getElementById('hasAC').checked,
        yearBuilt: parseInt(document.getElementById('yearBuilt').value),
        rentPrice: parseFloat(document.getElementById('rentPrice').value),
        dateAvailable: document.getElementById('dateAvailable').value
    };

    flats.push(flat);
    localStorage.setItem('flats', JSON.stringify(flats));
    renderList();

    document.getElementById('flat-form').reset();
}

function renderList() {
    const flatList = document.getElementById('flats');
    flatList.innerHTML = '';

    flats.forEach((flat, index) => {
        const newFlat = document.createElement('li');
        newFlat.innerHTML = `
        <hr>
        <strong>City:</strong> ${flat.city} <br>
        <strong>Street:</strong> ${flat.streetName} ${flat.streetNumber} <br>
        <strong>Area:</strong> ${flat.areaSize} m² <br>
        <strong>AC:</strong> ${flat.hasAC ? 'Yes' : 'No'} <br>
        <strong>Year Built:</strong> ${flat.yearBuilt} <br>
        <strong>Rent:</strong> $${flat.rentPrice}/month <br>
        <strong>Available:</strong> ${flat.dateAvailable}
    `;

        const favButton = document.createElement('button');
        const isFavourite = favourites.some(fav => JSON.stringify(fav) === JSON.stringify(flat));
        favButton.textContent = isFavourite ? 'Unfavourite' : 'Favourite';

        favButton.onclick = () => add_remFavourite(index);

        newFlat.appendChild(favButton);
        flatList.appendChild(newFlat);
    });
}

function add_remFavourite(index) {
    const flat = flats[index];
    const favouriteIndex = favourites.findIndex(fav => JSON.stringify(fav) === JSON.stringify(flat));

    if (favouriteIndex !== -1) {
        favourites.splice(favouriteIndex, 1);;
    } else {
        favourites.push(flat);
    }

    localStorage.setItem('favourites', JSON.stringify(favourites));
    renderList();
}

document.addEventListener('DOMContentLoaded', () => {
    renderList();
});
