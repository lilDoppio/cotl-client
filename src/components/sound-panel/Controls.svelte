<script>
    import { Howl } from "howler";
    import Button from "../UI/Button.svelte";
    import { 
        list, 
        selectedSound,
        isRun,
        isMuted,
        isRepeat,
        sound,
        soundId
    } from '../../store/soundStore';

    let thisList;
    let thisSelectedSound;
    let thisIsRun;
    let thisIsMuted;
    let thisIsRepeat;
    let thisSound;
    let thisSoundId;
    
    list.subscribe(value => {
        thisList = value;
    })
    selectedSound.subscribe(value => {
        thisSelectedSound = value;
    })
    isRun.subscribe(value => {
        thisIsRun = value;
    })
    isMuted.subscribe(value => {
        thisIsMuted = value;
    })
    isRepeat.subscribe(value => {
        thisIsRepeat = value;
    })
    sound.subscribe(value => {
        thisSound = value;
    })
    soundId.subscribe(value => {
        thisSoundId = value;
    })

    $: if (thisSelectedSound) {
        console.log(thisSelectedSound);
        if (thisSoundId) {
            thisSound.stop();
        };
        soundId.set(null);
        runTrack(thisSelectedSound);
    }

    const runTrack = (track) => {
        // localStorage.setItem('selectedSound', JSON.stringify(thisSelectedSound));
        if (thisSoundId) {
            thisSound.play(thisSoundId);
        } else {
            sound.set(new Howl({
                src: [`http://127.0.0.1:3000/music/${track.id}.mp3`],
                volume: 0.5,
                mute: thisIsMuted,
                onplay: () => isRun.set(true),
                onpause: () => isRun.set(false),
                onend: () => {
                    if (thisList[thisSelectedSound.position]) {
                        runNext(thisSelectedSound)
                    }
                    if (thisIsRepeat) {
                        selectedSound.set(thisList[track.position - 1])
                    }
                }
            }))

            soundId.set(thisSound.play());
        }
    }

    const runPlayPause = (track) => {
        if (!thisIsRun) {
            runTrack(track);
        } else {
            thisSound.pause(thisSoundId)
        }
        isRun.set(!thisIsRun);
    }

    const runPrevious = (track) => {
        selectedSound.set(thisList[track.position - 2]);
    }

    const runNext = (track) => {
        selectedSound.set(thisList[track.position]);
    }
</script>

<section>
    <Button
        disabled={!thisList[thisSelectedSound.position - 2]} 
        cover={'../icons/player/rewind.png'}
        size={36}
        onClick={() => runPrevious(thisSelectedSound)}
    />
    <Button 
        disabled={!thisSelectedSound.id} 
        cover={thisIsRun ? '../icons/player/pause.png' : '../icons/player/play.png'}
        onClick={() => runPlayPause(thisSelectedSound)}
    />
    <Button 
        disabled={!thisList[thisSelectedSound.position]} 
        cover={'../icons/player/forward.png'}
        size={36}
        onClick={() => runNext(thisSelectedSound)}
    />
</section>

<style>
    section {
        width: 100%;
        max-width: 280px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>