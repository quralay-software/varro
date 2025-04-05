import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Error from '../../components/404/404'
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'

const StoryPage = (props) => {

    return (
        <div>
            <Navbar hclass={'wpo-header-style-2'}/>
            <Error/>
            <Footer ftClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </div>
    )
};
export default StoryPage;


