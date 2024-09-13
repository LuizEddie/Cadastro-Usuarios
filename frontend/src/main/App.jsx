import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import Footer from '../components/template/Footer';
import Logo from '../components/template/Logo';
import Nav from '../components/template/Nav';
import React from 'react';
import Routes from './Routes';
import { BrowserRouter} from 'react-router-dom';

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo></Logo>
            <Nav></Nav>
            <Routes></Routes>
            <Footer></Footer>
        </div>
    </BrowserRouter>
