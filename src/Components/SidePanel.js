import React from 'react'
class SidePanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const style = this.props.power ? { background: "#0ad82c" } : { background: "#063d0f", boxShadow: "none" };

    return (
      <div className="side-panel">
        <div className="label">Drum Machine 3000</div>
        <div style={this.props.colorStyle} className="display" id="display">{this.props.currentSound}</div>
        <div>
          <p>Power</p>
          <button style={style} onClick={this.props.togglePower}></button>
        </div>
        <div>
          <p>Volume</p>
          <input value={this.props.volumeInput}
            type="range"
            min="1"
            max="100"
            onChange={this.props.changeVolume}>
          </input>
        </div>
        <div className="speakers">
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
        </div>
      </div>
    )
  }
}

export default SidePanel