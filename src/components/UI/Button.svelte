<script>
    export let label = '';
    export let cover = '';
    export let size = null;
    export let disabled = false;
    export let onClick;
</script>

<button disabled={disabled} on:click={onClick}>
    {#if cover}
        <img width={size} src={cover} alt={label}>
    {/if}
    {#if label}
        {label}
    {/if}
</button>

<style>
    button {
        border: none;
        background-color: transparent;
    }
    button:disabled {
        opacity: .5;
    }
</style>