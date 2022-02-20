import React, { Component } from 'react';

import './Jumbotron.css'

class JumbotronEdit extends Component {
    state = {  } 
    render() { 
        return (

            <div className='head'>
                <p id='welcome'>Selamat Datang</p>
                <h1>Komunitas Developer ReactJS Indonesia</h1>
                <p>ReactJS ID adalah komunitas para developer React dan React Native. Kami mengadakan ajang meetup setiap bulannya, dimana para developer React bertukar informasi mengenai React dan ekosistemnya.</p>
            </div>

        );
    }
}
 
export default JumbotronEdit;
