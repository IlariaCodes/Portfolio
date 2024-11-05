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


function displayLessInfo(event) {
    event.preventDefault();
    moreInfoLink.style.display = 'block';
    moreInfoContent.style.display = 'none';
    displayLess.style.display = 'none';
}

displayLess.addEventListener('click', displayLessInfo)


