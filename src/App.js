import { useState } from 'react';
import './App.css';
import { BsFillVolumeUpFill, BsFillVolumeMuteFill } from 'react-icons/bs';
import Modal from './components/Modal';

function App() {
    const [flip, setFlip] = useState(false);
    // const [play, setPlay] = useState(true);
    const [display, setDisplay] = useState(true);

    const handleFlip = () => {
        setFlip(!flip);
    };

    let audio = new Audio('/audio/sound.mp3');
    const handleDisplay = () => {
        audio.play();
        setDisplay(false);
    };
    return (
        <>
            <Modal display={display} handleDisplay={handleDisplay} />
            {/* <div className="volume">
                {play ? (
                    <BsFillVolumeUpFill onClick={(audio.muted = true)} />
                ) : (
                    <BsFillVolumeMuteFill onClick={(audio.muted = false)} />
                )}
            </div> */}

            <main className="flip-card-container " onClick={handleFlip}>
                <div className={`flip-card ${flip && 'flipped'}`}>
                    <div className="card-front">
                        <figure>
                            <picture>
                                <source
                                    media="(max-width: 800px)"
                                    srcset="/images/front-mobile.png"
                                />
                                <img src="/images/front.png" alt="" />
                            </picture>
                        </figure>
                    </div>
                    <div className="card-back">
                        <figure>
                            <picture>
                                <source
                                    media="(max-width: 800px)"
                                    srcset="/images/back-mobile.png"
                                />
                                <img src="/images/back.png" alt="" />
                            </picture>
                        </figure>
                    </div>
                </div>
            </main>
        </>
    );
}

export default App;
