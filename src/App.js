import './App.css';

function App() {
    return (
        <main class="flip-card-container">
            <div class="flip-card">
                <div class="card-front">
                    <figure>
                        <picture>
                            <source media="(max-width: 800px)" srcset="/images/front-mobile.jpg" />
                            <img src="/images/front.jpg" alt="" />
                        </picture>
                    </figure>
                </div>
                <div class="card-back">
                    <figure>
                        <picture>
                            <source media="(max-width: 800px)" srcset="/images/back-mobile.jpg" />
                            <img src="/images/back.png" alt="" />
                        </picture>
                    </figure>
                </div>
            </div>
        </main>
    );
}

export default App;
