<script>
    import ListItem from './listItem.svelte';
    import { selectedSound } from '../../store/soundStore';
    import { list } from '../../store/soundStore';

    export let thisList = [];

    list.subscribe(value => {
        thisList = value;
    })

    const setSelectedSound = (id, name, artist, position, img) => {
        selectedSound.set({id, name, artist, position, img})
    }
</script>

<section>
    {#each thisList as {id, name, artist, position, img} (id)}
        <ListItem onClick={() => setSelectedSound(id, name, artist, position, img)} name={`${name}`} artist={artist} img={img}/>
    {/each}
</section>

<style>
    section {
        height: calc(100% - 100px);
        width: 100%;
        max-width: 300px;
        background-color: #fff;
    }
</style>