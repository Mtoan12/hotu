import { useState } from 'react';
import { BsFillVolumeMuteFill, BsFillVolumeUpFill } from 'react-icons/bs';
import './App.css';
import Modal from './components/Modal';

function App() {
    const [flip, setFlip] = useState(false);
    const [audioPlay, setAudioPlay] = useState(true);
    const [audio] = useState(new Audio('/audio/sound.mp3'));
    const [display, setDisplay] = useState(true);

    const handleFlip = () => {
        setFlip(!flip);
    };

    const handleDisplay = () => {
        audio.volume = 0.5;
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
                                    srcSet="/images/back-mobile.jpg"
                                />
                                <img src="/images/back.jpg" alt="" />
                            </picture>
                        </figure>
                    </div>
                </div>
            </main>
        </>
    );
}

export default App;
