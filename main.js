// Part One - Side Effect Query Functions


lineThroughFirstLi = () => {
    const firstLi = document.querySelector('li');
    firstLi.style.textDecoration = 'line-through';
}
lineThroughFirstLi();

addImage = (id, url) => {
    const imageLocation = document.querySelector('#' + id);
    imageLocation.src = url;
    imageLocation.style.height = "200px";
}
addImage('image-1', 'https://www.skiresort.info/typo3temp/_processed_/ef/ff/f7/7d/3838c0a241.jpg');
addImage('image-2', 'https://www.castafari.com/assets/news/home_pic/canyon-jumpingfish.jpg');
addImage('image-3', 'https://apiaudio.com/img2x/sc_1608/sc1608_031_lg.jpg');

removeLastLi = () => {
    const lastLi = document.querySelector('#arguments li:last-child');
    console.log(lastLi.lastChild)
    lastLi.remove()
    // lastLi.removeChild(lastLi.childNodes[0]);
}
removeLastLi();
removeLastLi();
// removeLastLi();
// removeLastLi();

// Part Two - Side Effect Node Element Functions

addArgument = (element) => {
    document.querySelector('#arguments').appendChild(element);
}
addArgument(document.createElement('img'))


changeToThirtyPixel = (id) => {
    const imageLocation = document.querySelector('#' + id);
    imageLocation.style.height = '30px';
}
changeToThirtyPixel('image-1');


makeInvisible = (element) => {
    const byeNow = document.querySelector(element);
    byeNow.className = 'invisible';
}
makeInvisible('#image-2')



changeFontSize = (size, id) => {
    document.querySelector(id).style.fontSize = size 
}

changeFontSize('200px', '#lorem');


// Part Three - Pure Functions Returning Node Elements 




