<template>
	<div class="game-block" @click="onClicked">
		<font-awesome-icon :icon="faIcon()" class="fa-fw fa-2x" />
	</div>
</template>

<script>
import { faBomb, faSquare } from '@fortawesome/free-solid-svg-icons';

export default {
	name: 'game-block',
	props: {
		icon: {
			type: String,
			default: 'blank',
			validator: function(value) {
				// The value must match one of these strings
				return ['blank', 'bomb'].indexOf(value) !== -1;
			},
		},
		row: {
			type: Number,
			required: true,
		},
		col: {
			type: Number,
			required: true,
		},
		onClicked: {
			type: Function,
			required: true,
		},
	},
	methods: {
		faIcon: function() {
			switch (this.icon) {
				case 'blank':
					return faSquare;
				case 'bomb':
					return faBomb;
			}
		},
	},
};
</script>



<style lang="stylus" scoped>
@import '~@styles/variables.styl'

.game-block
	// padding 0.5em
	// border 1px solid primary-color
	border-radius 3px
</style>
