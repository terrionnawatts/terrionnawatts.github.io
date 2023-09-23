// getting the output elements
const output_day = document.querySelector('.output-day');
const output_month = document.querySelector('.output-month');
const output_year = document.querySelector('.output-year');


// getting the input elements
let isValid = false;
const input_day = document.querySelector('#day');
const input_month = document.querySelector('#month');
const input_year = document.querySelector('#year');
const submit_btn = document.querySelector('.submit-btn')
submit_btn.addEventListener('click', calculateDate);

// selecting error elements
const error_day = document.querySelector('.error-day');
const error_month = document.querySelector('.error-month');
const error_year = document.querySelector('.error-year');
input_day.addEventListener('input', (e) => {
    if (!input_day.value){
        isValid = false;
        error_day.textContent = 'This Field Is Required';
        isValid = false;
        return;
    } else {
        isValid = true;
        error_day.textContent = '';
    
    }
});

input_month.addEventListener('input', (e) => {
    if (!input_month.value){
        isValid = false;
        error_month.textContent = 'This Field Is Required';
        isValid = false;
        return;
    } else {
        isValid = true;
        error_month.textContent = '';
    
    }
});

input_year.addEventListener('input', (e) => {
    if (!input_year.value){
        isValid = false;
        error_year.textContent = 'This Field Is Required';
        isValid = false;
        return;
    } else {
        isValid = true;
        error_year.textContent = '';
        
    }
});


function calculateDate() {
    if (isValid) {


        const birthday = new Date(`${input_month.value}/${input_day.value}/${input_year.value}`);
        const currentDate = new Date();

        const ageDiff = currentDate - birthday;
        const ageDate = new Date(ageDiff);

        const ageYear = ageDate.getUTCFullYear() - 1970;
        const ageMonth = ageDate.getUTCMonth();
        const ageDay = ageDate.getUTCDate() - 1;

        output_day.textContent = ageDay;
        output_month.textContent = ageMonth;
        output_year.textContent = ageYear;
    } else {
        alert('ERROR');
    }
}


