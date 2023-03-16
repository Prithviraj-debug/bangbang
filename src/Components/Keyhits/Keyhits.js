import React, { useEffect } from 'react'
import Block from './Block';
import "./Keyhits.css"
import { keyes, keys1, keys2, keys3 } from './Keys';

export default function Keyhits() {


    function playSound(e) {
        // selects the audio element where data-key="e.keyCode"
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)

        //if there is no audio element with the corresponding keyCode, then don't do anything
        if (!audio) return;
        audio.currentTime = 0
        audio.play()

        const key = document.querySelector(`kbd[data-key="${e.keyCode}"]`)

        // key.classList.add('playing')
    }

    function removeTransition(e) {
        //transitionend is triggered on a variety of properties, (border, box shadow, etc)
        // just select one - in this case 'transform'
        if (e.propertyName != 'transform') return;
        e.target.classList.remove('playing')
    }

    const keys = document.querySelectorAll(".key")
    keys.forEach(key => key.addEventListener('transitionend', removeTransition))
    window.addEventListener('keydown', playSound)

    function downHandler({ key }) {
        key = key.toLowerCase();
        keyes.map((k) => {
            if (key === k) {
                const currKey = document.querySelector(`#${key}`)
                currKey.classList.add("press")
            }
        })
    }

    const upHandler = ({ key }) => {
        key = key.toLowerCase();
        keyes.map((k) => {
            if (key === k) {
                const currKey = document.querySelector(`#${key}`)
                currKey.classList.remove("press")
            }
        })
    }

    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", upHandler);
    })

    if (window.innerWidth < 700) {
        return (
            <p>We apologize! Your screen size is not supported to use this application!</p>
        )
    }
    return (
        <div className='keyboard'>

            <Block keys={keys1} cName="" />
            <Block keys={keys2} cName="b2" />
            <Block keys={keys3} cName="b3" />

            <audio data-key="65" src="https://raw.githubusercontent.com/deepakkarki/js-projects/master/01-js-drum-kit/sounds/clap.wav"></audio>
            <audio data-key="83" src="https://raw.githubusercontent.com/deepakkarki/js-projects/master/01-js-drum-kit/sounds/hihat.wav"></audio>
            <audio data-key="68" src="https://raw.githubusercontent.com/deepakkarki/js-projects/master/01-js-drum-kit/sounds/kick.wav"></audio>
            <audio data-key="70" src="https://raw.githubusercontent.com/deepakkarki/js-projects/master/01-js-drum-kit/sounds/openhat.wav"></audio>
            <audio data-key="71" src="https://raw.githubusercontent.com/deepakkarki/js-projects/master/01-js-drum-kit/sounds/boom.wav"></audio>
            <audio data-key="72" src="https://raw.githubusercontent.com/deepakkarki/js-projects/master/01-js-drum-kit/sounds/ride.wav"></audio>
            <audio data-key="74" src="https://raw.githubusercontent.com/deepakkarki/js-projects/master/01-js-drum-kit/sounds/snare.wav"></audio>
            <audio data-key="75" src="https://raw.githubusercontent.com/deepakkarki/js-projects/master/01-js-drum-kit/sounds/tom.wav"></audio>
            <audio data-key="76" src="https://raw.githubusercontent.com/deepakkarki/js-projects/master/01-js-drum-kit/sounds/tink.wav"></audio>

            <audio data-key="80" src="https://raw.githubusercontent.com/deepakkarki/js-projects/master/01-js-drum-kit/sounds/clap.wav"></audio>
            <audio data-key="81" src="https://raw.githubusercontent.com/deepakkarki/js-projects/master/01-js-drum-kit/sounds/hihat.wav"></audio>
            <audio data-key="82" src="https://raw.githubusercontent.com/deepakkarki/js-projects/master/01-js-drum-kit/sounds/kick.wav"></audio>
            <audio data-key="84" src="https://raw.githubusercontent.com/deepakkarki/js-projects/master/01-js-drum-kit/sounds/openhat.wav"></audio>
            <audio data-key="85" src="https://raw.githubusercontent.com/deepakkarki/js-projects/master/01-js-drum-kit/sounds/boom.wav"></audio>
            <audio data-key="89" src="https://raw.githubusercontent.com/deepakkarki/js-projects/master/01-js-drum-kit/sounds/ride.wav"></audio>
            <audio data-key="69" src="https://raw.githubusercontent.com/deepakkarki/js-projects/master/01-js-drum-kit/sounds/snare.wav"></audio>
            <audio data-key="87" src="https://raw.githubusercontent.com/deepakkarki/js-projects/master/01-js-drum-kit/sounds/snare.wav"></audio>
            <audio data-key="73" src="https://raw.githubusercontent.com/deepakkarki/js-projects/master/01-js-drum-kit/sounds/tom.wav"></audio>
            <audio data-key="79" src="https://raw.githubusercontent.com/deepakkarki/js-projects/master/01-js-drum-kit/sounds/tink.wav"></audio>

            <audio data-key="88" src="https://raw.githubusercontent.com/deepakkarki/js-projects/master/01-js-drum-kit/sounds/clap.wav"></audio>
            <audio data-key="86" src="https://raw.githubusercontent.com/deepakkarki/js-projects/master/01-js-drum-kit/sounds/hihat.wav"></audio>
            <audio data-key="90" src="https://raw.githubusercontent.com/deepakkarki/js-projects/master/01-js-drum-kit/sounds/kick.wav"></audio>
            <audio data-key="78" src="https://raw.githubusercontent.com/deepakkarki/js-projects/master/01-js-drum-kit/sounds/openhat.wav"></audio>
            <audio data-key="77" src="https://raw.githubusercontent.com/deepakkarki/js-projects/master/01-js-drum-kit/sounds/boom.wav"></audio>
            <audio data-key="67" src="https://raw.githubusercontent.com/deepakkarki/js-projects/master/01-js-drum-kit/sounds/ride.wav"></audio>
            <audio data-key="66" src="https://raw.githubusercontent.com/deepakkarki/js-projects/master/01-js-drum-kit/sounds/snare.wav"></audio>
        </div>
    )
}
