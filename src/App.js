import React from 'react';
import {Route, Link, Routes} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';

import {Navbar, Contact, Homepage, Cryptocurrencies, News, CryptoDetails} from './components';
import './App.css'


const app = () => {
    return (
        <div className = "app">
            <div className = "navbar">
                <Navbar/>

            </div>
            <div className = "main">
                <Layout>
                    <div className="routes">
                        <Routes>            
                            <Route path='/' element={<Homepage/>} />
                            <Route path='/contact' element={<Contact/>} />
                            <Route path='/cryptocurrencies' element={<Cryptocurrencies/>} />
                            <Route path='/crypto/:coinId' element={<CryptoDetails/>} />
                            <Route path='/news' element={<News/>} />
                        </Routes>
                    </div>
                </Layout>
            
                <div className = "footer">
                    <Typography.Title level ={5} style = {{color: 'white', textAlign: 'center'}}>
                        Crypto Crane <br/>
                        Todos los derechos reservados
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/contact">Contacto</Link>
                        <Link to="/news">Noticias</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default app
