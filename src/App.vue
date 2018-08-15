<template>
  <div id="app">
    <el-container direction="vertical">
      <Header/>
      <Main/>
    </el-container>
  </div>
</template>

<script>
import Header from '@components/Header';
import Main from '@components/Main';

export default {
	name: 'app',
	components: {
		Header,
		Main,
	},
};
</script>

<style lang="stylus">
</style>
