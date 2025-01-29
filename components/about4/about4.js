import React from 'react';
import Link from 'next/link';
import abimg from '/public/images/about.jpg';
import sign from '/public/images/signeture.png';
import Image from 'next/image';

const About4 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <section className={`Arkitek-about-section ${props.abClass}`}>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-4 col-md-8 col-12">
                        <div className="about-left-item">
                            <div className="wpo-section-title">
                                <span>О компании Varro Operating Group</span>
                                <h2>Максимизация ценности ресурсов и устойчивое развитие</h2>
                                <p>
                                    Varro Operating Group занимается добычей и переработкой нефти и газа. 
                                    Наш комплексный подход позволяет увеличивать ценность наших ресурсов, обеспечивая 
                                    ответственное управление окружающей средой.
                                </p>
                                <p>
                                    Мы ведем добычу углеводородов на месторождении Толкын, управляем Боранкольским
                                    газоперерабатывающим заводом (БГПЗ) и реализуем продукцию на внутреннем и
                                    международном рынках. Наши основные принципы – инновации, эффективность и
                                    устойчивое развитие.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-8 col-12">
                        <div className="about-middle-item">
                            <Image src={abimg} alt="Операции компании" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-8 col-12">
                        <div className="about-right-item">
                            <p>
                                <span>Н</span>аша деятельность основана на применении передовых технологий и стратегического планирования. 
                                Мы стремимся к увеличению коэффициента нефтеотдачи, снижению негативного воздействия на окружающую среду 
                                и повышению эффективности производственных процессов.
                            </p>
                            <h2>Роберт Маркель</h2>
                            <h3>- Генеральный директор Varro Operating Group</h3>
                            <div className="signeture-img">
                                <Image src={sign} alt="Подпись CEO" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    }
}

export default About4;
