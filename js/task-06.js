const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', () => {
  const inputLength = validationInput.value.length;
  const requiredLength = parseInt(validationInput.getAttribute('data-length'));

  validationInput.classList.remove('valid', 'invalid');

  if (inputLength === requiredLength) {
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.add('invalid');
  }
});
