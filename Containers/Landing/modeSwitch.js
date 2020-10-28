import styles from '../../styles/modeSwitch';

function ModeSwitch() {

    return (
        <>
            <style jsx>
                {styles}
            </style>
            <div className="container">
                <input className="l" type="checkbox" />
            </div>
        </>
    );
}

export default ModeSwitch;