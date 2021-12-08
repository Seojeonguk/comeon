<template>
	<video autoplay/>
</template>

<style>
video {
  width: 90%;
  /* height: 100%; */
}
</style>

<script>
export default {
	name: 'OvVideo',

	props: {
		streamManager: Object,
	},

	mounted () {
		this.streamManager.addVideoElement(this.$el);
	},
};
</script>
