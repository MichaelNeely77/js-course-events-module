const buttons = document.querySelectorAll('button');

// button.onclick = function () {
//
// }

const buttonClickHandler = event => {
    // event.target.disabled = true;
    console.log(event);
}

const anotherClickHandler = () => {
   console.log('Button was clicked');
}

// button.onclick = buttonClickHandler;

// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//     button.removeEventListener('click', buttonClickHandler);
// }, 2000);

// buttons.forEach(btn => {
//     btn.addEventListener('mouseenter', buttonClickHandler);
// });
//
// window.addEventListener('scroll', event => {
//     console.log(event);
// });


// let curElementNumber = 0;
//
// function scrollHandler() {
//     const distanceToBottom = document.body.getBoundingClientRect().bottom;
//
//     if(distanceToBottom < document.documentElement.clientHeight + 150) {
//         const newDataElement = document.createElement('div');
//         curElementNumber++;
//         newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
//         document.body.append(newDataElement);
//     }
// }
//
// window.addEventListener('scroll', scrollHandler);

const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();
    console.log(event);


})