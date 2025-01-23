import React from 'react';
import Link from 'next/link';

const PageTitle = (props) => {
    return (
      <div className="wpo-page-title">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="wpo-breadcumb-wrap">
                          <h2 style={{ fontFamily: 'Arial' }}>{props.pageTitle}</h2>
                          <ol>
                              <li><Link href="/pages/home-n">Главная</Link></li>
                              <li><span>{props.pagesub}</span></li>
                          </ol>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
};

export default PageTitle;
