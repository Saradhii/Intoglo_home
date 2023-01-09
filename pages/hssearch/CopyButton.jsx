import React, { useState } from 'react';

const CopyButton = ({ code, copy }) => {
  const [isVisible, setIsVisible] = useState(false);

  const timeCopiedButton = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 800);
  };

  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 cursor-pointer ml-1 relative"
        data-tooltip-target="tooltip-animation"
        onClick={() => {
          timeCopiedButton();
          copy(code, { debug: true, message: 'Copy to clipboard' });
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
        />
      </svg>
      <div
        id="tooltip-animation"
        role="tooltip"
        className={`inline-block ${
          isVisible ? 'visible' : 'hidden'
        } absolute -top-10 -left-4  z-100 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-100 transition-opacity duration-300 tooltip`}
      >
        Copied
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
  );
};

export default CopyButton;
