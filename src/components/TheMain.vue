<template>
	<el-main>
		<div>this is main</div>
		<mine-sweeper/>
	</el-main>
</template>

<script>
import MineSweeper from '@components/Game';
export default {
	name: 'the-main',
	components: { MineSweeper },
};
</script>
