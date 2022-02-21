import React, { Component } from 'react';
import Paragraph from '../../Atom/Paragraph';
import Head1 from '../../Atom/h1';
import './index.css'

class Jumbotron extends Component {
    state = {  } 
    render() { 
        return (
            <div className='head'>
                <Paragraph id='welcome'>Selamat Datang</Paragraph>
                <Head1 >Komunitas Developer React JS Indonesia</Head1>
                <Paragraph>ReactJS ID adalah komunitas para developer React dan React Native. Kami mengadakan ajang meetup setiap bulannya, dimana para developer React bertukar informasi mengenai React dan ekosistemnya.</Paragraph>
            </div>

        );
    }
}
 
export default Jumbotron;
