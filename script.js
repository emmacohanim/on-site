const input = document.querySelector('.aboutme')
function showDescription() {
        let hidden1 = document.querySelector('#small1');
        if (hidden1.style.display === "none") {
    hidden1.style.display = "block";
        } else {
    hidden1.style.display = "none";
     }
    }
input.addEventListener('click', showDescription);

const input2 = document.querySelector('.contact')
function showDescription2() {
        let hidden2 = document.querySelector('#small2');
        if (hidden2.style.display === "none") {
    hidden2.style.display = "block";
        } else {
    hidden2.style.display = "none";
     }
    }
input2.addEventListener('click', showDescription2);