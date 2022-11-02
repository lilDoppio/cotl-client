<script>
    import { createEventDispatcher } from 'svelte';

    export let list = [];

    const dispatch = createEventDispatcher();

    const setSelectedTrack = (id, name, position) => {
        dispatch('select', {
            id: id,
            name: name,
            position: position
        })
    }
</script>

<section>
    {#each list as {id, name, position} (id)}
        <div>
            <button on:click={() => setSelectedTrack(id, name, position)}>№{position}. {name}</button>
        </div>
    {/each}
</section>

<style>
    section {
        height: calc(100% - 80px);
        width: 100%;
        max-width: 300px;
        background-color: azure;
    }
</style>