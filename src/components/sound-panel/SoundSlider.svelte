<script>
    import { sound } from "../../store/soundStore";

    let thisSound;
    let soundLength;
    let soundSeek;

    sound.subscribe(value => {
        thisSound = value;
    });

    setInterval(() => {
        soundSeek = thisSound?.seek();
        soundLength = thisSound?.duration();
    }, 10);
</script>

<section>
    {#if thisSound}
        <input type="range" value={soundSeek} min={0} max={soundLength} step={0.01} on:input={(e) => thisSound?.seek(e.target.value)}>
        <div class="mask-slider">
            <span style:width={`${soundSeek / (soundLength / 100)}%`} class="mask-toggle"></span>
        </div>
    {/if}
</section>

<style>
    section {
        position: absolute;
        top: 0;
        left: 0px;
        width: 100vw;
    }
    input {
        margin: 0;
        width: 100%;
        opacity: 0;
    }
    .mask-slider {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(192, 192, 192);
        pointer-events: none;   
        z-index: 10;
    }
    .mask-toggle {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background-color: #333;
        pointer-events: none;
        z-index: 10;
    }
</style>