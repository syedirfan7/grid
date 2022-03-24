let cardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let colorsArray = [
    '#2B8EAD',
    '#333333',
    '#6F98A8',
    '#BFBFBF',
    '#EFEFEF',
    '#BFBFBF',
    '#EFEFEF',
    '#2F454E',
    '#72C3DC']
onSort(cardArray);
function onShuffle() {
    for (var i = cardArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = cardArray[i];
        cardArray[i] = cardArray[j];
        cardArray[j] = temp;
    }

    renderCards(cardArray);
}

function renderCards(inputArr) {
    clearCards();
    for (let index = 0; index < inputArr.length; index++) {
        document.getElementById('cards').innerHTML += `<div class="item">
            <h1 class="numberText" >${inputArr[index]}</h1>
            </div>`;
    }
    var grid = document.getElementsByClassName("item");
    var len = grid.length;

    for (var i = 0; i < len; i++) {
        const color = colorsArray[i];
        grid[i].style.backgroundColor = color;
        grid[i].style.borderLeft = `20px solid ${color}`;

    }
}

function clearCards() {
    document.getElementById('cards').innerHTML = ``;
}

function onSort() {
    cardArray = cardArray.sort();
    renderCards(cardArray);
}