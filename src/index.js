import * as abstractEvents from 'abstract-events';
import "bootstrap/dist/css/bootstrap.css";

let btnClickMe = document.getElementById('btnClickMe');
btnClickMe.onclick = abstractEvents.create(
    {
        type: 'count',
        count: 4
    },
    () => alert('You clicked the button 4 times!')
);

let btnClickMeFast = document.getElementById('btnClickMeFast');
btnClickMeFast.onclick = abstractEvents.create(
    {
        type: 'count',
        count: 4,
        timeout: 1500
    },
    () => alert('You clicked the button 4 times!')
);

document.addEventListener('keydown', abstractEvents.create({
    type: 'phrase',
    phrase: 'secret'
}, () => alert('You did it!')));

document.addEventListener('keydown', abstractEvents.create({
    type: 'phrase',
    phrase: 'faster',
    timeout: 1500
}, () => alert('You did it fast!')));