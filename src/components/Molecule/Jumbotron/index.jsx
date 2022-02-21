import React, { Component } from 'react';
import Paragraph from '../../Atom/Paragraph';
import './index.css'

class Jumbotron extends Component {
    state = {  } 
    render() { 
        return (
            <div className='head'>
                <Paragraph id='welcome'>Selamat Datang</Paragraph>
                <h1>Komunitas Developer ReactJS Indonesia</h1>
                <Paragraph>ReactJS ID adalah komunitas para developer React dan React Native. Kami mengadakan ajang meetup setiap bulannya, dimana para developer React bertukar informasi mengenai React dan ekosistemnya.</Paragraph>
            </div>

        );
    }
}
 
export default Jumbotron;
