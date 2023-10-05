import { useRef, useState } from 'react';
import './App.css';
import { BsFillVolumeUpFill, BsFillVolumeMuteFill } from 'react-icons/bs';
import Modal from './components/Modal';

function App() {
    const [flip, setFlip] = useState(false);
    const [audioPlay, setAudioPlay] = useState(true);
    const [audio, setAudio] = useState(new Audio('/audio/sound.mp3'));
    const [display, setDisplay] = useState(true);

    const handleFlip = () => {
        setFlip(!flip);
    };

    const handleDisplay = () => {
        audio.play();
        setAudioPlay(true);
        setDisplay(false);
    };

    const handleToggleVolume = () => {
        if (audioPlay) {
            audio.pause();
        } else {
            audio.play();
        }
        setAudioPlay(!audioPlay);
    };
    return (
        <>
            <Modal display={display} handleDisplay={handleDisplay} />
            <div>
                {audioPlay ? (
                    <BsFillVolumeUpFill className="volume" onClick={handleToggleVolume} />
                ) : (
                    <BsFillVolumeMuteFill className="volume" onClick={handleToggleVolume} />
                )}
            </div>

            <main className="flip-card-container " onClick={handleFlip}>
                <div className={`flip-card ${flip && 'flipped'}`}>
                    <div className="card-front">
                        <figure>
                            <picture>
                                <source
                                    media="(max-width: 800px)"
                                    srcSet="/images/front-mobile.jpg"
                                />
                                <img src="/images/front.jpg" alt="" />
                            </picture>
                        </figure>
                    </div>
                    <div className="card-back">
                        <figure>
                            <picture>
                                <source
                                    media="(max-width: 800px)"
                                    srcSet="/images/back-mobile.png"
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
