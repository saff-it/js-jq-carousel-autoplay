
images = [
    'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
    'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
    'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
    ];


const imgContainer = document.querySelector('div.ms_carou-img-cont');
const buttonNext = document.querySelector('.ms_btn-next');
const buttonPrev = document.querySelector('.ms_btn-prev');
let activeElement = 0;

console.log(imgContainer);

for ( let index = 0; index < images.length ; index++ ) {
    console.log(images[index]);

    let imgLandscape = document.createElement('img');
    imgLandscape.classList.add('w-100');
    imgLandscape.setAttribute('src', images[index]);

    if (index == activeElement) {
        imgLandscape.classList.add('active');

    }  
     

    imgContainer.append(imgLandscape);      
           
}

const imageList = document.querySelectorAll('.ms_carou-img-cont img');
const clock = setInterval(playImg, 3000, imageList);



function playImg(imageToDisplay) {
    imageToDisplay[activeElement].classList.remove('active');

    activeElement++;

    if (activeElement === imageToDisplay.length){
        activeElement = 0;
    }

    imageToDisplay[activeElement].classList.add('active');
}



buttonNext.addEventListener('click', function() {
    playImg(imageList);
    
});


buttonPrev.addEventListener('click', function() {
    playImg(imageList);

});