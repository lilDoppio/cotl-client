<script>
	import ListBar from "./components/playlist/ListBar.svelte";
	import TrackBar from "./components/sound-panel/TrackBar.svelte";
	import { list } from "./store/soundStore";

	fetch('http://127.0.0.1:3000/')
		.then(res => {
			return res.json();
		})
		.then(res => {
			list.set(res);
		})
		.catch(err => {
			console.log(err)
		})


</script>

<div class="main">
	<ListBar />
	<TrackBar />
</div>

<style>
	.main {
		margin: 0;
		background-color: antiquewhite;
		width: 100%;
		height: 100%;
	}
</style>

