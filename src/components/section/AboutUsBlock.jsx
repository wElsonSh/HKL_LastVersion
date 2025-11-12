import styles from "@/styles/section/AboutUsBlock.module.scss";
import AboutUsLogo from "@/styles/svg/-01.png";
export function AboutUsBlock() {
    return (
        <section id="about_us" className={styles.about_us_block}>
            <div className={styles.about_us_container}>
                <div className={styles.about_us_block_top}>
                    <div className={styles.about_us_block_top_left}>
                        <div className={styles.about_us_block_top_left_title}>
                            <h1>About Us</h1>
                        </div>
                        <div className={styles.about_us_block_top_left_text}><p>Среди наших клиентов ведущие компании из СНГ И ЕС.
                            70% перевозимых грузов - промышленное и медицинское оборудование, запасные части и техника. За 5 лет самостоятельной деятельности мы доставили более 10 негабаритных грузов наземным и морским транспортом. Организовали и выполнили поставки линий оборудования для 17 предприятий в условиях санкций и закрытых границ.<br />
                            С 2021 года оформляем и возим сортировочное и упаковочное оборудование для сельхоз организаций и производителей молочной продукции.<br />
                            С 2022 года функционирует наш офис в Польше.<br />
                            В 2023 году мы были генеральным подрядчиком, за пару месяцев осуществившим поставку 82 авто оборудования из Германии и Польши для птицефабрики в Сергиевом Посаде, МО, 43 из них шли блоками по 8-12 авто.<br />
                            В 2024 году нам доверили поставку живых взрослых деревьев из Германии в Казахстан для посадки аллеи возле Дворца спорта в Астане. Проект был под контролем президента Казахстана.<br />
                            Несколько складов в ЕС и Турции, а так же ряд брокеров позволяют оформлять и перегружать не только генеральные грузы, но и консолидировать мелкие для перевозки в составе сборных. При этом всегда фиксируем любые манипуляции с грузами на фото/видео и предоставляем отчет заказчику.
                            Прямые контракты со всеми подрядчиками, включая  ТЛЦ и специалистов по ЭПИ, исключают лишние комиссии в стоимости услуги лишние звенья в коммуникации, что  дает прямой доступ к информации о местонахождении груза. За частую мы поддерживаем связь непосредственно с водителями в период перевозки.<br />
                            Дополнительно проверяем документы, помогаем с письмами, разбивками, подбором кодов, оформлением ЦМР и доверенностей, в любое время суток держим связь с ключевыми участниками поставки. По запросу доступно дополнительное страхование груза.
                        </p></div>
                    </div>
                    <div className={styles.about_us_block_top_right}>
                        <div className={styles.about_us_block_top_right_logo} style={{ 'background-image': `url(${AboutUsLogo})` }}>
                        </div>
                    </div>
                </div>
                <div className={styles.about_us_block_bottom}>
                    <div className={styles.about_us_block_bottom_text}>
                        <h2>Как мы работаем</h2>
                    </div>

                    <ul className={styles.about_us_block_bottom_list}>
                        <li className={styles.about_us_block_bottom_item}>
                            <div className={styles.about_us_block_bottom_item_container}>
                                <p>Получаем запрос с данными</p>
                            </div>
                            <div className={styles.about_us_block_bottom_item_number}><h1>1</h1></div>
                        </li>
                        <li className={styles.about_us_block_bottom_item}>
                            <div className={styles.about_us_block_bottom_item_container}>
                                <p>Уточняем условия</p>
                            </div>
                            <div className={styles.about_us_block_bottom_item_number}><h1>2</h1></div>
                        </li>
                        <li className={styles.about_us_block_bottom_item}>
                            <div className={styles.about_us_block_bottom_item_container}>
                                <p>Подбираем транспорт и маршрут, формируем цену</p>
                            </div>
                            <div className={styles.about_us_block_bottom_item_number}><h1>3</h1></div>
                        </li>
                        <li className={styles.about_us_block_bottom_item}>
                            <div className={styles.about_us_block_bottom_item_container}>
                                <p>Согласовываем условия и подписываем документы</p>
                            </div>
                            <div className={styles.about_us_block_bottom_item_number}><h1>4</h1></div>
                        </li>
                        <li className={styles.about_us_block_bottom_item}>
                            <div className={styles.about_us_block_bottom_item_container}>
                                <p>Оказываем услугу</p>
                            </div>
                            <div className={styles.about_us_block_bottom_item_number}><h1>5</h1></div>
                        </li>
                        <li className={styles.about_us_block_bottom_item}>
                            <div className={styles.about_us_block_bottom_item_container}>
                                <p>Получаем оплату</p>
                            </div>
                            <div className={styles.about_us_block_bottom_item_number}><h1>6</h1></div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}