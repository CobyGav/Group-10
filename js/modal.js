const reservation = document.querySelector('#reservation');
const fullName = document.querySelector('#fullName');
const phoneNumber = document.querySelector('#phone');
const email = document.querySelector('#email');
const numberOfGuests = document.querySelector('#number-guests');
const date = document.querySelector('#date');
const time = document.querySelector('#time');

const reserveInputs = [];

reservation.addEventListener(
    'submit',
    (e) => {
        e.preventDefault();

        const reserve = {
            fullName: fullName.value,
            phoneNumber: phoneNumber.value,
            email: email.value,
            numberOfGuests: numberOfGuests.value,
            date: date.value,
            time: time.value
        }
        console.log(reserve);
    }
);