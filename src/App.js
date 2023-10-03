import './App.css';

function App() {
    return (
        <div className="App">
            <main>
                <div class="flip-card-container">
                    <div class="flip-card">
                        <div class="card-front">
                            <figure>
                                <img src="/front.jpg" alt="" />
                            </figure>
                        </div>
                        <div class="card-back">
                            <figure>
                                <img src="/back.jpg" alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
