import React, { useState, useEffect } from 'react';
import style from './styles.module.css';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDz91V8iQGtKLc8C8TzhRwGOL2soBtsMXo",
  authDomain: "testedelyv.firebaseapp.com",
  projectId: "testedelyv",
  storageBucket: "testedelyv.appspot.com",
};

export default function Produtor({ imageUrl }) {
  const [progress, setProgress] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [dados, setDados] = useState({ title: '', value: '' });

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 34) {
          return prevProgress + 1;
        } else {
          return prevProgress;
        }
      });
    }, 100); // Ajustado o intervalo para 1000ms (1 segundo)

    const fetchData = async () => {
      // Inicializar o app do Firebase
      initializeApp(firebaseConfig);

      // Configurar o Firebase Storage
      const storage = getStorage();

      // Referência para o arquivo no Firebase Storage
      const storageRef = ref(storage, imageUrl);

      // Obter a URL de download da imagem
      try {
        const url = await getDownloadURL(storageRef);
        setImageLoaded(true);
        // Fazer algo com a URL, se necessário
      } catch (error) {
        console.log('Erro ao obter a URL da imagem:', error);
      }

      // Configurar o Firestore
      const db = getFirestore();

      // Referência para a coleção "dados"
      const dadosCollection = collection(db, 'dados');

      // Obter todos os documentos da coleção "dados"
      try {
        const querySnapshot = await getDocs(dadosCollection);
        const data = querySnapshot.docs.map((doc) => doc.data());
        const item = data.find((item) => item.imageUrl === imageUrl);
        if (item) {
          setDados(item);
        }
      } catch (error) {
        console.log('Erro ao obter os dados do Firestore:', error);
      }
    };

    fetchData();

    return () => {
      clearInterval(timer);
    };
  }, [imageUrl]);

  if (!imageLoaded) {
    return (
      <div className={style.container}>
        <div className={style.head}></div>

        <div className={style.info}>
          <div className={style.img}>
            {/* Exibir um indicador de carregamento enquanto a imagem está sendo carregada */}
            <div className={style.loadingIndicator}></div>
          </div>
          <div className={style.progressBar}>
            <div className={style.progressFill} style={{ width: `${progress}%` }}>
              {progress}%
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={style.container}>
      <div className={style.head}></div>

      <div className={style.info}>
        <div className={style.img}>
          <img src={imageUrl} alt="" />
        </div>
        <h3>{dados.title}</h3>
        <h4>Valor R${dados.value}</h4>
        <div className={style.progressBar}>
          <div className={style.progressFill} style={{ width: `${progress}%` }}>
            {progress}%
          </div>
        </div>
      </div>
    </div>
  );
}
