<script>
	import ListBar from "./components/ListBar.svelte";
	import TrackBar from "./components/TrackBar.svelte";

	let list = [
		{id: 1, name: 'cancun', position: 0},
		{id: 123, name: 'FollowGod', position: 1},
		{id: 33, name: 'vodila', position: 2},
	]

	let selectedTrack = {};
</script>

<div class="main">
	<TrackBar selectedTrack={selectedTrack} list={list}/>
	<ListBar on:select={(e) => selectedTrack = e.detail} list={list}/>
</div>

<style>
	.main {
		margin: 0;
		background-color: antiquewhite;
		width: 100%;
		height: 100%;
	}
</style>

