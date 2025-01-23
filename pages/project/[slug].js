import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import { useRouter } from 'next/router';
import Project from '../../api/Projects';
import Contact from './contact';
import RelatedProject from './related';
import Footer from '../../components/footer/Footer';
import Image from 'next/image';

import { projectContent } from '../../api/ProjectContent';

const ProjectSinglePage = (props) => {
    const router = useRouter();

    const projectDetails = Project.find(item => item.slug === router.query.slug);

    const content = projectContent.find(item => item.slug === router.query.slug);

    return (
      <Fragment>
          <Navbar hclass={'wpo-header-style-2'} />
          <PageTitle pageTitle={projectDetails?.pTitle} pagesub={'Проект'} />
          <div className="wpo-project-single-area section-padding">
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-lg-10 col-12">
                          <div className="wpo-project-single-wrap">
                              <div className="wpo-project-single-item">
                                  <div className="row align-items-center">
                                      <div className="col-lg-7">
                                          <div className="wpo-project-single-title">
                                              <h3>{content?.title}</h3>
                                          </div>
                                          {content?.description.map((paragraph, index) => (
                                            <p key={index}>{paragraph}</p>
                                          ))}
                                      </div>
                                      <div className="col-lg-5">
                                          <div className="wpo-project-single-content-des-right">
                                              <ul>
                                                  <li>Местоположение: <span>{content?.details.location}</span></li>
                                                  <li>Клиент: <span>{content?.details.client}</span></li>
                                                  <li>Консультант: <span>{content?.details.consult}</span></li>
                                                  <li>Тип проекта: <span>{content?.details.projectType}</span></li>
                                                  <li>Длительность: <span>{content?.details.duration}</span></li>
                                                  <li>Завершение: <span>{content?.details.completion}</span></li>
                                                  <li>Доля: <span>{content?.details.share}</span></li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="wpo-project-single-main-img">
                                      <Image src={projectDetails?.pSImg} alt="" />
                                  </div>
                              </div>
                              <div className="wpo-project-single-item list-widget">
                                  <div className="row">
                                      <div className="col-lg-6">
                                          <div className="wpo-project-single-title">
                                              <h3>Наши стратегии</h3>
                                          </div>
                                          <p>Мы стремимся к постоянному совершенствованию наших процессов и технологий.</p>
                                          <ul>
                                              {content?.strategies.map((strategy, index) => (
                                                <li key={index}>{strategy}</li>
                                              ))}
                                          </ul>
                                      </div>
                                      <div className="col-lg-6">
                                          <div className="wpo-project-single-item-quote">
                                              <p>"Компания Varro Operating Group демонстрирует высочайший уровень профессионализма и инноваций в области добычи нефти и газа."</p>
                                              <span>Алексей Иванов - <span>Главный инженер</span></span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="wpo-project-single-item">
                                  <div className="wpo-project-single-title">
                                      <h3>Наш подход</h3>
                                  </div>
                                  {content?.approach.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                  ))}
                              </div>
                              <div className="wpo-project-single-gallery">
                                  <div className="row mt-4">
                                      <div className="col-md-6 col-sm-6 col-12">
                                          <div className="wpo-p-details-img">
                                              <Image src={projectDetails?.ssImg1} alt="" />
                                          </div>
                                      </div>
                                      <div className="col-md-6 col-sm-6 col-12">
                                          <div className="wpo-p-details-img">
                                              <Image src={projectDetails?.ssImg2} alt="" />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="wpo-project-single-item list-widget">
                                  <div className="row">
                                      <div className="col-lg-6">
                                          <div className="wpo-project-single-title">
                                              <h3>Достигнутые цели</h3>
                                          </div>
                                          <ul>
                                              {content?.goals.map((goal, index) => (
                                                <li key={index}>{goal}</li>
                                              ))}
                                          </ul>
                                      </div>
                                      <div className="col-lg-6 list-widget-s">
                                          <div className="wpo-project-single-title">
                                              <h3>Результаты</h3>
                                          </div>
                                          <ul>
                                              {content?.results.map((result, index) => (
                                                <li key={index}>{result}</li>
                                              ))}
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                              <RelatedProject />
                              <div className="wpo-project-single-item">
                                  <div className="wpo-project-contact-area">
                                      <div className="wpo-contact-title">
                                          <h2>Есть проект? Давайте обсудим</h2>
                                          <p>Свяжитесь с нами, чтобы узнать, как мы можем помочь вам с вашим проектом.</p>
                                      </div>
                                      <div className="wpo-contact-form-area">
                                          <Contact />
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <Footer />
          <Scrollbar />
      </Fragment>
    )
};

export default ProjectSinglePage;
