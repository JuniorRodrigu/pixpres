



import Banner from './components/Banner';
import Produtor from './components/Produtor';
import SearchInput from './components/Searchlnput';


import styles from './Home.module.css';



const Home = () => {
    const handlerSearch = (searchValue: string) => {


    }
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
                <Produtor />
                <Produtor />
                <Produtor />
                <Produtor />
              
               

            </div>
        </div>
    );
}
export default Home;

