<script>
    import Controls from "./Controls.svelte";
    import GlobalControls from "./GlobalControls.svelte";
    import SoundInfo from "./SoundInfo.svelte";
    import SoundSlider from "./SoundSlider.svelte";

    export let list = [];
    export let selectedSound = null;
</script>


<section>
    <SoundSlider />
    <Controls list={list} selectedSound={selectedSound} />
    <div class="settings">
        <SoundInfo selectedSound={selectedSound} />
        <GlobalControls />
    </div>
</section>

<style>
    section {
        position: absolute;
        bottom: 0;
        width: calc(100% - 20px);
        height: 60px;
        padding: 30px 10px 10px;
        background-color: #fff;
        display: flex;
    }
    .settings {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>