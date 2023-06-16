import React, { useState, useEffect } from 'react';
import style from './styles.module.css';

export default function Produtor() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 50) {
        setProgress((prevProgress) => prevProgress + 10);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  return (
    <div className={style.container}>
      <div className={style.head}></div>

      <div className={style.info}>
        <div className={style.img}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/testedelyv.appspot.com/o/images%2Fdownload.jpg?alt=media&token=80465e59-9a1e-4dcc-9b63-52f7d96454fe"
            alt=""
          />
        </div>
        <h3>Valor R$100,00</h3>
        <div className={style.progressBar}>
          <div
            className={style.progressFill}
            style={{ width: `${progress}%` }}
          >
            {progress}%

          </div>
        </div>
      </div>
    </div>
  );
}
