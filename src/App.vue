<template>
  <div id="app">
    <el-container direction="vertical">
      <Header/>
      <Main/>
    </el-container>
  </div>
</template>

<script>
import Header from '@components/TheHeader';
import Main from '@components/TheMain';

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
