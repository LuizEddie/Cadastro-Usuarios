import Header from './Header';
import './Main.css'
import React from 'react';

export default props =>
    <>
        <Header {...props}></Header>
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </> 