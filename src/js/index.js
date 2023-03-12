const slideButtons = document.querySelectorAll('.button');
const images = document.querySelectorAll('.image');
slideButtons.forEach((button, index)=>{
    button.addEventListener('click', () =>{
        disableSelectedButton();

        selectSlideButton(button);

        hideActiveImage();

        showBackgroundImage(index);
    })
})

function showBackgroundImage(index) {
    images[index].classList.add('active');
}

function selectSlideButton(button) {
    button.classList.add('selected');
}

function hideActiveImage() {
    const activeImage = document.querySelector('.active');
    activeImage.classList.remove('active');
}

function disableSelectedButton() {
    const activeButton = document.querySelector('.selected');
    activeButton.classList.remove('selected');
}
