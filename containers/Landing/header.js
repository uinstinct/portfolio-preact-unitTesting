import { useState, useEffect } from 'react';

import styles, { mouser } from '@/styles/header';

export default function Header() {

    const [isMounted, setMounted] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setMounted(true);
        }, 2000);
    }, []);

    const mouseTrans =
        <>
            <style jsx>
                {mouser}
            </style>
            <div className="mouser">
                <div className="scrollball" />
            </div>
        </>;

    return (
        <>
            <style jsx>
                {styles}
            </style>
            <div className="container">
                <div className="box">
                    <div className="title">
                        <span className="block"></span>
                        <h1>Aditya Mitra<span /></h1>
                    </div>
                    <div className="role">
                        <div className="block" />
                        <p>UInstinct</p>
                    </div>
                </div>
                {isMounted ? mouseTrans : null}
            </div>
        </>
    );
}