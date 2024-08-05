import React, { useState } from "react";
import "./CopyButton.css";

/** Dummy component to get started */
const CopyButton: React.FC<{ value: string, label: string }> = ({ value, label }) => {
    const [counter, setCounter] = useState(0);
    const [showPopup, setShowPopup] = useState(false);

    // https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText
    const copyToClipboard = async () => {
        try {
          await navigator.clipboard.writeText(value);

          setCounter(counter + 1);
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 2000);
        } catch (err) {
          console.error('Failed to copy:', err);
        }
    };

    return (
        <div>
            <button onClick={copyToClipboard}>{label} ({counter})</button>
            {showPopup && <div className="popup">Copied!</div>}
        </div>
    );
};

export default CopyButton;
