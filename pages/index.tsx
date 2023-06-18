import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import Produtor from './components/Produtor';
import Banner from './components/Banner';
import styles from './Home.module.css';
import Link from 'next/link';

const firebaseConfig = {
  apiKey: "AIzaSyDz91V8iQGtKLc8C8TzhRwGOL2soBtsMXo",
  authDomain: "testedelyv.firebaseapp.com",
  projectId: "testedelyv",
  storageBucket: "testedelyv.appspot.com",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Home = () => {
  const [dados, setDados] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();

      const snapshot = await db.collection('dados').get();
      const data = snapshot.docs.map((doc) => doc.data());

      setDados(data);
    };

    fetchData();
  }, []);

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSearch = (searchValue) => {
    // Lógica de pesquisa aqui
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLeft}>
            <div className={styles.headerTitle}>Seja bem-vindo(a) 👋</div>
            <div className={styles.headerSubtitle}>O que deseja para hoje?</div>
          </div>
          <div className={styles.headerTopRight}>
            <Link href="/components/Painel">
              <div className={styles.menuButton}>
                <div className={styles.menuButtonLine}></div>
                <div className={styles.menuButtonLine}></div>
                <div className={styles.menuButtonLine}></div>
              </div>
            </Link>
          </div>
        </div>
      </header>
      <Banner />

      <div className={styles.grid}>
        {dados.map((item, index) => (
          <div key={index} className={styles.produtorContainer} onClick={() => openModal(item.imageUrl)}>
            <Produtor imageUrl={item.imageUrl} />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Modal Content</h2>
            <img src={modalImage} alt="Imagem do produto" />
            <button onClick={closeModal}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
