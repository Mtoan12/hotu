import { useState } from 'react';
import './modal.css';

export default function Modal({ display, handleDisplay }) {
    return (
        <>
            {display && (
                <div className="modal" onClick={handleDisplay}>
                    <div className="modal__body">
                        Bạn sắp nghe một đoạn nhạc. Hãy mở âm thanh hoặc đeo tai nghe vào. Click bất
                        kỳ đâu để tiếp tục.
                    </div>
                </div>
            )}
        </>
    );
}
