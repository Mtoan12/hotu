import './modal.css';

export default function Modal({ display, handleDisplay }) {
    return (
        <>
            {display && (
                <div className="modal">
                    <main className="modal__main">
                        <div className="modal__title">
                            <h2>Lưu ý</h2>
                        </div>
                        <div className="modal__body">
                            Bạn sắp nghe một đoạn nhạc. Hãy mở âm thanh hoặc đeo tai nghe vào.
                        </div>
                        <div className="modal__footer">
                            <button className="modal__button" onClick={handleDisplay}>
                                Tiếp tục
                            </button>
                        </div>
                    </main>
                </div>
            )}
        </>
    );
}
