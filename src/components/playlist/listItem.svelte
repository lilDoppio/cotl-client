<script>
    export let name = '';
    export let artist = '';
    export let disabled = false;
    export let img;
    export let onClick;

</script>

<button disabled={disabled} on:click={onClick}>
    <div class="item">
        <img width={60} src={img} alt={name}>
        <div>
            <h5>{name}</h5>
            <h6>{artist}</h6>
        </div>
    </div>
</button>

<style>
    h5, h6 {
        margin: 10px 5px;
    }
    button {
        display: block;
        width: 100%;
        height: 80px;
        padding: 10px;
        border: none;
        border-bottom: 1px solid #000;
        background-color: transparent;
    }
    .item {
        display: flex;
        width: 100%;
        text-align: start;
    }
</style>