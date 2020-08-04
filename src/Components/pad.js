import React from 'react'

const onStyle = { transform: "scale(0.95)", boxShadow: "1px 1px 4px 4px cyan, -1px -1px 4px 4px cyan" };
const offStyle = { transform: "scale(1)", boxShadow: "none" };

class Pad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.onPlay = this.onPlay.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(e) {
    if (e.keyCode === this.props.pad.keycode) {
      this.onPlay();
    }
  }

  onPlay() {
    if (this.props.power) {
      const sound = document.getElementById(this.props.pad.letter);
      sound.currentTime = 0;
      sound.volume = this.props.volume;
      sound.play();
      this.props.updateDisplay(this.props.pad.id);
      this.setState({ playing: true })
      setTimeout(() => {
        this.setState({ playing: false })
      }, 100);
    }
  }

  render() {
    const style = !this.props.power ? { background: '#476b68' } : this.state.playing ? onStyle : offStyle;
    return (
      <div style={style} className="outer-drum-pad">
        <div className="drum-pad"
          id={this.props.pad.id}
          onClick={this.onPlay}
        >
          <audio id={this.props.pad.letter}
            src={this.props.pad.url}
            className="clip"
          >
          </audio>
          {this.props.pad.letter}
        </div>
      </div>
    )
  }
}

export default Pad;