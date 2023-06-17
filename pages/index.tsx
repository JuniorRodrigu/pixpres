import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import Produtor from './components/Produtor';
import Banner from './components/Banner';
import styles from './Home.module.css';

const firebaseConfig = {
    apiKey: "AIzaSyDz91V8iQGtKLc8C8TzhRwGOL2soBtsMXo",
  authDomain: "testedelyv.firebaseapp.com",
  projectId: "testedelyv",
  storageBucket: "testedelyv.appspot.com",
};

const Home = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Inicializar o Firebase
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }

      // Obter uma referência para o Firestore
      const db = firebase.firestore();

      // Obter os dados do Firestore
      const snapshot = await db.collection('dados').get();
      const data = snapshot.docs.map((doc) => doc.data());

      setDados(data);
    };

    fetchData();
  }, []);

  const handlerSearch = (searchValue: string) => {
    // Lógica de pesquisa aqui
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLeft}>
            <div className={styles.headerTitle}>seja bem vindo(a) 👋</div>
            <div className={styles.headerSubtitle}>O que deseja pra hoje?</div>
          </div>
          <div className={styles.headerTopRight}>
            <div className={styles.menuButton}>
              <div className={styles.menuButtonLine}></div>
              <div className={styles.menuButtonLine}></div>
              <div className={styles.menuButtonLine}></div>
            </div>
          </div>
        </div>
      </header>
      <Banner />
      <div className={styles.grid}>
        {/* Renderizar as instâncias do componente Produtor com base nos dados */}
        {dados.map((item, index) => (
          <Produtor key={index} imageUrl={item.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default Home;
