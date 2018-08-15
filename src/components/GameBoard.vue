<template>
	<div>
		This is a board

		<div class="game-container">
			<div v-for="r in rows" :key="r">
				<div class="game-row">
					<div v-for="c in cols" :key="c">
						<game-block/>
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
			default: 10,
			validator: function(value) {
				return Number.isInteger(value);
			},
		},
		cols: {
			type: Number,
			default: 8,
			validator: function(value) {
				return Number.isInteger(value);
			},
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
	justify-content center
</style>
