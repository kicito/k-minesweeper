<template>
	<el-main>
		<div>this is main</div>
		<GameBoard/>
	</el-main>
</template>

<script>
import GameBoard from '@components/GameBoard';
export default {
	name: 'main',
	components: { GameBoard },
};
</script>
