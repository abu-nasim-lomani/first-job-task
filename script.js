const slide1 = document.querySelector('.slide1');
const slide2 = document.querySelector('.slide2');
const slide3 = document.querySelector('.slide3');
const slide4 = document.querySelector('.slide4');
const slide5 = document.querySelector('.slide5');
const slide6 = document.querySelector('.slide6');

const next1 = document.querySelector('.next1');
const next2 = document.querySelector('.next2');
const next3 = document.querySelector('.next3');
const next4 = document.querySelector('.next4');
const next5 = document.querySelector('.next5');
const submit = document.querySelector('.submit');
const prev2 = document.querySelector('.prev2');
const prev3 = document.querySelector('.prev3');
const prev4 = document.querySelector('.prev4');
const prev5 = document.querySelector('.prev5');
const prev6 = document.querySelector('.prev6');

const circleBox = document.querySelector('.circle-box');
const circleBox2 = document.querySelector('.circle-box2')
const direction1 = document.querySelector('.direction1');
const direction2 = document.querySelector('.direction2');

const career = document.querySelector('.career');
const dream = document.querySelector('.dream');
const interest = document.querySelector('.interest');
const graduate = document.querySelector('.graduate');
const certificate = document.querySelector('.certificate');


next1.addEventListener('click', () => {
    handleNextBtn(slide1, slide2, career);
    circleBox.style.backgroundColor = 'white';
    direction1.style.backgroundColor = 'white';
    direction2.style.backgroundColor = 'white';
    circleBox.style.color = 'black';
    circleBox2.style.backgroundColor = '#514BB2';
    circleBox2.style.color = 'white';
})

next2.addEventListener('click', () => {
    handleNextBtn(slide2, slide3, dream);
})
prev2.addEventListener('click', () => {
    handlePrevBtn(slide2, slide1, career);
    circleBox.style.backgroundColor = '#514BB2';
    direction1.style.backgroundColor = '#514BB2';
    direction2.style.backgroundColor = '#514BB2';
    circleBox.style.color = 'white';
    circleBox2.style.backgroundColor = '';
    circleBox2.style.color = '';
})

next3.addEventListener('click', () => {
    handleNextBtn(slide3, slide4, interest);
})
prev3.addEventListener('click', () => {
    handlePrevBtn(slide3, slide2, dream);
})

next4.addEventListener('click', () => {
    handleNextBtn(slide4, slide5, graduate);
})
prev4.addEventListener('click', () => {
    handlePrevBtn(slide4, slide3, interest);
})

next5.addEventListener('click', () => {
    handleNextBtn(slide5, slide6, certificate);
})
prev5.addEventListener('click', () => {
    handlePrevBtn(slide5, slide4, graduate);
})

submit.addEventListener('click', () => {
    alert("complete Your Proffile Successfully");
})
prev6.addEventListener('click', () => {
    handlePrevBtn(slide6, slide5, certificate);
})


const handleNextBtn = (current, next, sub) => {
    current.style.display = "none";
    next.style.display = "block";
    sub.style.display = "block";
}
const handlePrevBtn = (current, prev, sub) => {
    current.style.display = "none";
    prev.style.display = "block";
    sub.style.display = "none";
}
