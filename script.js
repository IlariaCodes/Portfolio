//Displey more info logic//
let moreInfoLink = document.getElementById('link');
let moreInfoContent = document.getElementById('more-info');
let displayLess = document.getElementById('display-less');

function displayMoreInfo(event) {
    event.preventDefault();
    moreInfoLink.style.display = 'none';
    moreInfoContent.style.display = 'block';
    displayLess.style.display = 'block';

}

moreInfoLink.addEventListener('click', displayMoreInfo);


//display less info logic//

function displayLessInfo(event) {
    event.preventDefault();
    moreInfoLink.style.display = 'block';
    moreInfoContent.style.display = 'none';
    displayLess.style.display = 'none';
}

displayLess.addEventListener('click', displayLessInfo)


//Hamburger menu logic//

let hamburgerMenuBtn = document.getElementById('hamburger-menu');
let smallScreenMenu = document.getElementById('side-drawer');
function toggleHamburgerMenu(event) {
    event.preventDefault();
    if (smallScreenMenu.style.display === 'flex') {
        smallScreenMenu.style.display = 'none';
    } else {

        smallScreenMenu.style.display = 'flex';
    }

}

hamburgerMenuBtn.addEventListener('click', toggleHamburgerMenu);




