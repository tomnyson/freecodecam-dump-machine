import React from 'react'

const Checkbox = ({ name = '', onChange, active = false }) => {
  console.log('active', { active, name });
  return (
    <div class="button-switch">
      <input onClick={onChange} type="checkbox" name={name} id="switch-blue" class="switch" defaultChecked={active} />
      <label for="switch-blue" class="lbl-off">Off</label>
      <label for="switch-blue" class="lbl-on">On</label>
    </div>
  )
}

export default Checkbox;