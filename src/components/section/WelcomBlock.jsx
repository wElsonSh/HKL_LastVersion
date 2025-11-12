import styles from "@/styles/section/WelcomBlock.module.scss";
import { Header } from "../ui/Header";

import WelcomBlockBg from "@/styles/img/section/gruzovik-v-sudohodnom-portu.jpg";
import WelcomBlockLogo from "@/styles/svg/logo-hkl.svg";

import { Link } from "react-scroll";

export function WelcomBlock() {
    return (
        <section className={styles.welcom_block}>
            <div
                className={styles.welcom_block_container}
                style={{ 'background-image': `url(${WelcomBlockBg})` }}>
                <Header />
                <div className={styles.welcom_block_content}>
                    <div className={styles.welcom_block_left}>
                        <div className={styles.welcom_block_about_us}>
                            <div className={styles.welcom_block_about_us_container}>
                                <div className={styles.welcom_block_about_us_text}>
                                    <p>Опыт, гибкость, скорость, честность, лояльность и индивидуальный подход - это все про нас.  Личная ответственность и вовлеченность руководителей в каждую перевозку - гаранты высокого качества. Поэтому свыше двух десятков клиентов работают с нами постоянно уже больше 10 лет...</p>
                                    <div className={styles.welcom_block_about_us_btn_container}>
                                        <Link to="about_us" smooth={true} duration={500}>Read more</Link>
                                    </div>
                                </div>
                                <div className={styles.welcom_block_about_us_title}>
                                    <h1>Halaburda<br />&<span>Logistic</span><br />Kravel</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.welcom_block_right}>
                        <div className={styles.welcom_block_logo_container}
                            style={{ 'background-image': `url(${WelcomBlockLogo})` }}>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
