<template>
  <div id="app" class="phone-viewport">
    <PlayerScreen v-show="isPlaying"></PlayerScreen>
    <ChannelsScreen v-show="!isPlaying"></ChannelsScreen>
  </div>
</template>

<script>
import PlayerScreen from './components/PlayerScreen.vue'
import ChannelsScreen from './components/ChannelsScreen.vue'
import store from './store/Store'
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'

export default {
  name: 'app',
  components: {
    PlayerScreen, ChannelsScreen
  },
  data () {
    return {
    }
  },
  store: store,
  computed: {
    ...mapGetters({
      isPlaying: 'getPlaying'
    })
  },
  methods: {
  ...mapActions(['actionPlayChannel'])
  }
}
</script>
