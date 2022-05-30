import throttle from 'lodash.throttle';
const formRef = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const keyOfLocalStor = 'feedback-form-state';
formRef.addEventListener('input', throttle(textReader, 500));
formRef.addEventListener('submit', handlerSubmit);

function textReader(e) {
  const objectLocStorage = {
    keyOfLocalStor: {
      email: email.value,
      message: message.value,
    }
  };
  localStorage.setItem(keyOfLocalStor, JSON.stringify(objectLocStorage));
}
function handlerSubmit(e) {
  e.preventDefault();
  console.log(localStorage.getItem(keyOfLocalStor));
  localStorage.removeItem(keyOfLocalStor);
  formRef.reset();
}
updateForm();
function updateForm() {
  const startFormText = JSON.parse(localStorage.getItem(keyOfLocalStor));
  if (startFormText) {
    email.value = startFormText.email;
    message.value = startFormText.message;
  } else {
    email.value = '';
    message.value = '';
  }
}
