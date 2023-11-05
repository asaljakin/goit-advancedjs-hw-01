import throttle from "lodash.throttle";

const localStorageKey = "feedback-form-state";
const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

let dataForm = JSON.parse(localStorage.getItem(localStorageKey)) || {};
const { email, message } = form.elements;
refreshPage();

function refreshPage() {
    if (dataForm) {
        email.value = dataForm.email || '';
        message.value = dataForm.message || '';
    }
}

function onFormData(evt) {
    dataForm[evt.target.name] = evt.target.value;
    localStorage.setItem(localStorageKey, JSON.stringify(dataForm));
}

function onSubmitForm(evt) {
    console.log(JSON.parse(localStorage.getItem(localStorageKey)));
    
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(localStorageKey);
    dataForm = {};
}