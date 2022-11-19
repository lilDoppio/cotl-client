<script>
    import { Howler } from 'howler';
    import Button from '../UI/Button.svelte';
    import { 
        isMuted,
        isRepeat,
        globalVolume
    } from '../../store/soundStore';

    let thisGlobalVolume;
    let thisIsMuted;
    let thisIsRepeat;

    isMuted.subscribe(value => {
        thisIsMuted = value;
    })
    isRepeat.subscribe(value => {
        thisIsRepeat = value;
    })
    globalVolume.subscribe(value => {
        thisGlobalVolume = value;
    })

    $: Howler.volume(thisGlobalVolume);
    $: Howler.mute(thisIsMuted);
    // $: localStorage.setItem('globalMuted', thisIsMuted);
    $: localStorage.setItem('globalRepeat', thisIsRepeat);
    $: localStorage.setItem('globalVolume', thisGlobalVolume);
</script>


<section>
    <input type="range" bind:value={thisGlobalVolume} min="0" max="1" step="0.01">
    <Button 
        cover={thisIsMuted ? '../icons/player/volume-mute.png' : '../icons/player/volume-max.png'}
        size={24}
        onClick={() => isMuted.set(!thisIsMuted) }
    />
    <Button 
        cover={thisIsRepeat ? '../icons/player/repeat.png' : '../icons/player/repeat-off.png'}
        size={24}
        onClick={() => isRepeat.set(!thisIsRepeat) }
    />
</section>

<style>
    section {
        display: flex;
    }
    input[type=range] {
        width: 100%;
        margin: 5px 0;
        background-color: transparent;
        -webkit-appearance: none;
    }
    input[type=range]:focus {
        outline: none;
    }
    input[type=range]::-webkit-slider-runnable-track {
        background: #c0c0c0;
        border: 0;
        width: 100%;
        height: 8px;
        cursor: pointer;
    }
    input[type=range]::-webkit-slider-thumb {
        margin-top: -5px;
        width: 12px;
        height: 18px;
        background: #333333;
        border: 1px solid #333333;
        cursor: pointer;
        -webkit-appearance: none;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
        background: #c0c0c0;
    }
    input[type=range]::-moz-range-track {
        background: #c0c0c0;
        border: 0;
        width: 100%;
        height: 8px;
        cursor: pointer;
    }
    input[type=range]::-moz-range-thumb {
        width: 12px;
        height: 18px;
        background: #333333;
        border: 1px solid #333333;
        cursor: pointer;
    }
    input[type=range]::-ms-track {
        background: transparent;
        border-color: transparent;
        border-width: 5px 0;
        color: transparent;
        width: 100%;
        height: 8px;
        cursor: pointer;
    }
    input[type=range]::-ms-fill-lower {
        background: #c0c0c0;
        border: 0;
        }
    input[type=range]::-ms-fill-upper {
        background: #c0c0c0;
        border: 0;
    }
    input[type=range]::-ms-thumb {
        width: 12px;
        height: 18px;
        background: #333333;
        border: 1px solid #333333;
        cursor: pointer;
        margin-top: 0px;
    }
    input[type=range]:focus::-ms-fill-lower {
        background: #c0c0c0;
    }
    input[type=range]:focus::-ms-fill-upper {
        background: #c0c0c0;
    }
    @supports (-ms-ime-align:auto) {
        input[type=range] {
            margin: 0;
        }
    }
</style>