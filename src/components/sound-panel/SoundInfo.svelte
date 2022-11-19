<script>
    import { selectedSound } from '../../store/soundStore';

    let thisSelectedSound = null;

    selectedSound.subscribe(value => {
        thisSelectedSound = value;
    })
</script>

<section>
    {#if thisSelectedSound?.name}
    <div class="info">
        <img width={60} src={thisSelectedSound.img} alt={thisSelectedSound.label}>
        <div class="info-label">
            <h4>{thisSelectedSound.name} - {thisSelectedSound.artist}</h4>
        </div>
    </div>
    {/if}
</section>

<style>
    .info {
        display: flex;
        align-items: center;
        margin-left: 20px;
    }
    .info-label {
        margin-left: 20px;
    }
</style>