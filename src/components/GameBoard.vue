<template>
	<div>
		This is a board

		<div class="game-container">
			<div class="game-row">
				r/c
				<div v-for="c in cols" :key="c">
					{{c}}
				</div>
			</div>

			<div v-for="r in rows" :key="r">
				<div class="game-row">
					{{r}}
					<div v-for="c in cols" :key="c">
						<game-block :icon="(c%2===0)?'blank':'bomb'" :row="r" :col="c" :onClicked="onBlockClicked(r,c)" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import GameBlock from '@components/GameBlock.vue';
export default {
	name: 'game-board',
	components: {
		GameBlock,
	},
	props: {
		rows: {
			type: Number,
			required: true,
			default: 10,
			validator: function(value) {
				return Number.isInteger(value);
			},
		},
		cols: {
			type: Number,
			required: true,
			default: 8,
			validator: function(value) {
				return Number.isInteger(value);
			},
		},
		onBlockClicked: {
			type: Function,
			required: true,
		},
	},
	computed: {},
};
</script>



<style lang="stylus" scoped>
.game-container
	display flex
	flex-direction column

.game-row
	display flex
	flex-direction row
	flex-wrap nowrap
	justify-content space-around
</style>
