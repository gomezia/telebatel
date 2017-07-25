<template>
  <div>
    <md-button id="backToChannel_btn" class="md-fab" @click.native="actionBackToChannels">
      <md-icon>close</md-icon>
      <md-tooltip md-direction="bottom">Back to home</md-tooltip>
    </md-button>

    <!-- <div id="player" data-type="youtube" :data-video-id="selectedChannel.url"></div> -->
    <div id="yplayer" data-type="youtube" data-video-id=""></div>
    <video preload="none" id="player" autoplay controls crossorigin></video>


  </div>
</template>

<script>
  import store from '../store/Store'
  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'


  export default {
    store: store,
    computed: {
      ...mapGetters({
        channels: 'getChannels',
        selectedChannel: 'getSelectedChannel'
      })
    },
    methods: {
      ...mapActions(['actionPlayChannel', 'actionBackToChannels'])
    }
  }

</script>
