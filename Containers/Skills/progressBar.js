import styles from "../../styles/progressBar";

function ProgressBar({ progress }) {
    const width = progress;
    return (
        <>
            <style jsx>
                {styles}
            </style>
            <div className="progress progress-success progress-striped active">
                <div className="bar" style={{ width: `${width}%` }}>
                    {width}%
            </div>
            </div>
        </>
    );
}

export default ProgressBar;