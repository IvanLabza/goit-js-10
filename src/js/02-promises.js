import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();

  const delay = document.querySelector('input[name="delay"]').value;
  const state = document.querySelector('input[name="state"]:checked').value;

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  myPromise
    .then(delay => {
      iziToast.show({
        position: 'topRight',
        timeout: delay,
        backgroundColor: '#008000',
        messageColor: '#fff',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      iziToast.show({
        position: 'topRight',
        timeout: delay,
        backgroundColor: '#FF0000',
        messageColor: '#fff',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
});
