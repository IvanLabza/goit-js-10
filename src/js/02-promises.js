import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const submitBtn = document.getElementById('submit');
const delay = document.getElementsByName('delay');
const fulfilled = document.getElementsByName('fulfilled');
const rejected = document.getElementsByName('rejected');

iziToast.show({
  title: 'Hey',
  message: 'What would you like to add?',
});
