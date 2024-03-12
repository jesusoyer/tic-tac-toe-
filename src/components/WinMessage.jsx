import React from 'react';

function WinMessage({ previousMark }) {
  return (
    <div className='bg-green-600 w-full text-center mx-auto p-4 sm:w-2/3'>{previousMark} has won! Click reset to play again.</div>
  );
}

export default WinMessage;