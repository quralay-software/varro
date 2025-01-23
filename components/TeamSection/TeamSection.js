import React from 'react'
import Link from 'next/link'
import SectionTitle from '../SectionTitle/SectionTitle';
import Teams from '../../api/Teams'
import Image from 'next/image';

const TeamSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="Arkitek-team-section-s2 section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <SectionTitle subTitle={'OUR PROFESSIONALS'} Title={'Meet Our Skilled Team'} />
                    </div>
                </div>
                <div className="team-wrapar">
                    <div className="row">
                        {Teams.slice(0, 4).map((team, titem) => (
                            <div className="col col-lg-3 col-md-6 col-12" key={titem}>
                                <div className="team-item">
                                    <div className="image">
                                        <div className="shape-1"></div>
                                        <Image src={team.tImg} alt="" />
                                        <ul className="icon">
                                            <li><Link onClick={ClickHandler} href="/"><i className="ti-facebook"></i></Link></li>
                                            <li><Link onClick={ClickHandler} href="/"><i className="ti-twitter-alt"></i></Link></li>
                                            <li><Link onClick={ClickHandler} href="/"><i className="ti-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="team-content">
                                        <h2><Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}>{team.name}</Link></h2>
                                        <span>{team.title}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default TeamSection;
