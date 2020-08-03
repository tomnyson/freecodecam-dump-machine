import React from 'react'
const Range = ({ value, onChange }) => {
  return (
    <div class="wrapper">
      <input onChange={onChange} id="volume" type="range" min="0" max="100" step="1" />
      <label class="visually-hidden" for="volume">Volume</label>
    </div>
  )
}
export default Range
