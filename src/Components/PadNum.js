import React from 'react';

const PadNum = ({ keyTrigger, url, handlePlay, selected, id, clipId }) => {
  const isActive = selected && selected.keyTrigger === keyTrigger ? 'active' : '';
  return (
    <div id={id} onClick={() => handlePlay({ keyTrigger, url, id })} className={`drum-pad ${isActive}`}>
      <audio className='clip' id={keyTrigger} src={url}></audio>
      {keyTrigger}
    </div>
  )
}
export default PadNum 