<script>
	import {Howl, Howler} from 'howler';
    
    export let list = [];
    export let selectedTrack = null;

    let isRun = false;
    let sound = null;
    let position = null;
    $: if (position != selectedTrack.position && position) {
        runTrack(selectedTrack);
    }

	const runTrack = (track) => {
        if (track.position != position) {
            if (position != track.position && position) sound.stop();
            position = track.position;
            sound = new Howl({
                src: [`${track.name}.mp3`],
                volume: 0.5,
            });
            sound.play();
        } else {
            if (isRun) {
                sound.pause();
            } else {
                sound.play();
            }
        }
        isRun = !isRun;
    }

    const runPlayPause = (track) => {
        runTrack(track);
    }

    const runPrevious = (position) => {
        console.log('isRun', isRun)
        sound.stop();
        isRun = !isRun;

        if (list[position - 1]) {
            selectedTrack = list[selectedTrack.position - 1];
            runTrack(selectedTrack);
        } else {
            runTrack(selectedTrack);
        }
    }

    const runNext = (position) => {
        console.log('isRun', isRun)
        sound.stop();
        isRun = !isRun;

        if (list[position + 1]) {
            selectedTrack = list[selectedTrack.position + 1];
            runTrack(selectedTrack);
        } else {
            runTrack(selectedTrack);
        }
    }
</script>


<section>
    <button on:click={() => runPrevious(selectedTrack.position)}>
        --
    </button>
    <button on:click={() => runTrack(selectedTrack)}>
		{isRun ? 'Pause' : 'Play'}
	</button>
    <button on:click={() => runNext(selectedTrack.position)}>
        >>
    </button>
</section>

<style>
    section {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 80px;
        background-color: rgb(183, 207, 207);
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>