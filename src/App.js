import React, { useState, useEffect } from 'react';
import './App.scss';
import { bankOne, bankTwo } from './const';
import { useDispatch } from 'react-redux'
import PadNum from './Components/PadNum';
import Checkbox from './Components/checkbox';
import Range from './Components/range'
import { changePower, changeBank, fetchApi } from './store/reducers/dumpSlice';

const App = () => {
  const [selected, setSelected] = useState({})
  const [bank, setBank] = useState(true)
  const [power, setPower] = useState(true)
  const [volume, setVolume] = useState(100);
  const dispatch = useDispatch();
  const source = bank ? bankOne : bankTwo;
  useEffect(() => {
    // dispatch(fetchApi());
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keyup', onKeyUp);
    }
  })

  const onKeyDown = ({ key }) => {
    const findIndex = source && source.filter(item => item.keyTrigger === key.toUpperCase());
    if (findIndex.length) {
      setSelected(findIndex[0]);
      if (power) {
        const sound = document.getElementById(findIndex[0].keyTrigger);
        sound.currentTime = 0;
        sound.volume = volume / 100;
        sound.play();
      }
    }

  }

  const onKeyUp = ({ key }) => {
    setTimeout(() => {
      setSelected({})
    }, 100);
  }

  const playAudio = (value) => {
    setSelected(value);
    if (power) {
      const sound = document.getElementById(value.keyTrigger);
      sound.currentTime = 0;
      sound.volume = volume / 100;
      sound.play();
    }
    setTimeout(() => {
      setSelected({});
    }, 100)
  }
  const onChange = (event, type) => {
    //console.log('event.target.checked', event.target.checked);
    console.log('event.target.name', event.target.name);

    if (type === 'bank') {
      setBank(!bank)
      dispatch(changeBank(!bank))
    }

    if (type === 'power') {
      setPower(!power)
      dispatch(changePower(!power))
    }

  }

  const onChangeRange = (event) => {
    setVolume(Number(event.target.value))
  }

  return (
    <div id="drum-machine">
      <div className="control">
        {source && source.map(item => {
          return (
            <PadNum handlePlay={playAudio} selected={selected}  {...item} />
          )
        })}
      </div>
      <div className="setup">
        <div id="display">{selected && selected.id}</div>
        <span>Power</span>
        <Checkbox
          name={'power'}
          active={power}
          onChange={(e) => onChange(e, 'power')}
        />
        <span>volume</span>
        <Range onChange={onChangeRange} />
        <span>bank</span>
        <Checkbox
          name={'bank'}
          active={true}
          onChange={(e) => onChange(e, "bank")}
        />

      </div>
    </div>
  );
}

export default App;
