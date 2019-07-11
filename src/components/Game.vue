<template>
	<game-board :rows="rows" :cols="cols" :onBlockClicked="blockClicked"></game-board>
</template>

<script>
import GameBoard from './GameBoard.vue';
export default {
	name: 'mine-sweeper',
	components: {
		GameBoard,
	},
	data() {
		return {
			rows: 8,
			cols: 10,
		};
	},
	methods: {
		blockClicked: function(row, col) {
			return function(event) {
				console.log(row, col, event);
			};
		},
	},
};
</script>
