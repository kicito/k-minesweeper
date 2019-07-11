<template>
  <div id="app">
    <el-container direction="vertical">
      <the-header/>
      <the-main/>
    </el-container>
  </div>
</template>

<script>
import Header from '@components/TheHeader';
import Main from '@components/TheMain';

export default {
	name: 'app',
	components: {
		'the-header': Header,
		'the-main': Main,
	},
};
</script>

<style lang="stylus">
</style>
