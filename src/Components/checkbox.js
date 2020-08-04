import React from 'react'

const Checkbox = ({ name = '', onChange, active = false }) => {
  // console.log('active', { active, name });
  return (
    <div className="button-switch">
      <input onChange={onChange} type="checkbox" name={name} id={`switch-blue`} className="switch" />
      <label for="switch-blue" className="lbl-off">Off</label>
      <label for="switch-blue" className="lbl-on">On</label>
    </div>
  )
}

export default React.memo(Checkbox);