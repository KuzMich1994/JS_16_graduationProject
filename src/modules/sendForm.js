const sendForm = () => {
  const errorMessage = 'Что-то пошло не так...';
  const loadMessage = 'Загрузка...';
  const successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
  const form = document.getElementById('form');
  const statusMessage = document.createElement('div');
  const inputName = document.querySelector('[placeholder="Ваше имя"]');
  const inputPhone = document.querySelector('.tel');

  const postData = formData => fetch('./server.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: formData,
    credentials: 'include'
  });

  const validateInputs = (selector, regPattern, regExp) => {
    selector.setAttribute('pattern', regPattern);
    selector.value = selector.value.replace(regExp, '');
  };

  document.addEventListener('input', e => {
    const target = e.target;
    if (target.matches('[placeholder="Ваше имя"]')) {
      validateInputs(target, '[а-яА-ЯЁё\\-]{2,}', /[a-z0-9().,/-_=+!@#$%^&*№"'|]/);
    }
    if (target.matches('.tel')) {
      validateInputs(target, '[0-9\\+]{11,12}', /[^+\-()\d]/);
    }
  });

  const showLoadMessage = () => {
    statusMessage.textContent = loadMessage;
  };

  let formData;

  form.addEventListener('submit', e => {
    e.preventDefault();
    form.append(statusMessage);
    showLoadMessage();
    formData = new FormData(form);

    postData(formData)
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Status network not 200');
        }
        statusMessage.textContent = successMessage;
      })
      .catch(error => {
        statusMessage.textContent = errorMessage;
        console.error(error);
      })
      .then(() => {
        setTimeout(() => {
          const modalCallback = document.querySelector('.modal-callback');
          const modalOverlay = document.querySelector('.modal-overlay');

          modalCallback.style.display = 'none';
          modalOverlay.style.display = 'none';
        }, 3000);
      });
  });
};

export default sendForm;
