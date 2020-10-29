import styles from '../../styles/header';

function Header() {
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
                        <p>Instinct</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;