import styles from "../../styles/deviceChange";
function DeviceChange() {
    return (
        <>
            <style jsx>
                {styles}
            </style>
            <div className="container">
                <section className="modernWeb section">
                    <div className="modernWrap section-wrap">
                        <div className="center">
                            <div className="part part-1" />
                            <div className="part part-2">
                                <span>instinct</span>
                            </div>
                            <div className="part part-3" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default DeviceChange;