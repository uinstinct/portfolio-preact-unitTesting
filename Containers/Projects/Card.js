import styles from "../../styles/card";

function Card() {
    return (
        <>
            <style jsx>
                {styles}
            </style>
            <div className="card">
                <div className="item">
                    <div className="imageContainer">
                        <img
                            src="https://media.comicbook.com/2020/05/dragon-ball-super-when-will-should-goku-master-ultra-instinct-1219439.jpeg?auto=webp&width=1200&height=628&crop=1200:628,smart"
                            alt="goku"
                        />
                    </div>
                    <div className="content">
                        <div className="title">This IS THE title</div>
                        <div className="description">
                            this is some description written here the links are provided here
                        </div>
                    </div>
                </div>
                <div className="bullets">
                    <label for="tap-1" className="tap">
                        <input type="radio" defaultChecked id="tap-1" />
                    </label>
                    <label for="tap-2" className="tap">
                        <input type="radio" id="tap-2" />
                    </label>
                </div>
                <div className="links">repo link</div>
            </div>
        </>
    );
}

export default Card;