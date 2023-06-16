import React, { useState, useEffect } from 'react';
import style from './styles.module.css';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDz91V8iQGtKLc8C8TzhRwGOL2soBtsMXo",
  authDomain: "testedelyv.firebaseapp.com",
  projectId: "testedelyv",
  storageBucket: "testedelyv.appspot.com",
};

export default function Produtor() {
  const [progress, setProgress] = useState(0);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 50) {
        setProgress((prevProgress) => prevProgress + 10);
      }
    }, 1000);

    // Inicializar o app do Firebase
    initializeApp(firebaseConfig);

    // Configurar o Firebase Storage
    const storage = getStorage();

    // Referência para o arquivo no Firebase Storage
    const storageRef = ref(storage, 'images/download.jpg');

    // Obter a URL de download da imagem
    getDownloadURL(storageRef)
      .then((url) => {
        setImageUrl(url);
      })
      .catch((error) => {
        console.log('Erro ao obter a URL da imagem:', error);
      });

    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  return (
    <div className={style.container}>
      <div className={style.head}></div>

      <div className={style.info}>
        <div className={style.img}>
          <img src={imageUrl} alt="" />
        </div>
        <h3>Valor R$100,00</h3>
        <div className={style.progressBar}>
          <div className={style.progressFill} style={{ width: `${progress}%` }}>
            {progress}%
          </div>
        </div>
      </div>
    </div>
  );
}

