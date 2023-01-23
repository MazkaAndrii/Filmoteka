import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBM7qZzHkWQksciEPD3_K4ysG_DoJGpr4k',
  authDomain: 'filmoteka-9f4e7.firebaseapp.com',
  projectId: 'filmoteka-9f4e7',
  storageBucket: 'filmoteka-9f4e7.appspot.com',
  messagingSenderId: '746113909904',
  appId: '1:746113909904:web:ce56e139f2779fc7300415',
};

export const app = initializeApp(firebaseConfig);
