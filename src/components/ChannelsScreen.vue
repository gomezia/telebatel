<template>
  <div>
    <md-toolbar>
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">
        <md-avatar class="md-avatar-icon">
            <img src="src/assets/logo.png" alt="Avatar">
        </md-avatar>
        Telebatel beta
      </h2>
      <span style="flex: 1 1 0%;"></span>

      <md-menu md-size="1">
        <md-button md-menu-trigger><md-icon>language</md-icon> {{languageSelected}}</md-button>

        <md-menu-content>
          <md-menu-item @click.native="actionFilterByLang('all')">All</md-menu-item>
          <md-menu-item @click.native="actionFilterByLang('arabic')">Arabic</md-menu-item>
          <md-menu-item @click.native="actionFilterByLang('french')">French</md-menu-item>
          <md-menu-item @click.native="actionFilterByLang('english')">English</md-menu-item>
          <md-menu-item @click.native="actionFilterByLang('turkish')">Turkish</md-menu-item>
        </md-menu-content>
      </md-menu>

    </md-toolbar>
    <md-sidenav class="md-left" ref="leftSidenav">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">TELEBATEL beta</h3>
        </div>
      </md-toolbar>
      <p>contact: meziane.mustapha@gmail.com</p>
    </md-sidenav>
    <md-tabs md-centered class="md-transparent channels-tabs">
      <md-tab md-label="General">
        <md-button  class="md-raised" v-for="channel in generalChannels" :key="channel.name" @click.native="actionPlayChannel(channel)">
          <img :src="channel.thumb" alt="">
        </md-button>

          <!-- <div class="card-layout">
            <md-card class="md-primary" md-theme="blue" md-with-hover  v-for="channel in generalChannels" :key="channel.name">
              <md-card-media @click.native="actionPlayChannel(channel)">
                <img :src="channel.thumb" alt="">
              </md-card-media>

              <md-ink-ripple></md-ink-ripple>

              <md-card-actions>
                <md-button class="md-icon-button">
                  <md-icon>favorite</md-icon>
                </md-button>

                <md-button class="md-icon-button">
                  <md-icon>bookmark</md-icon>
                </md-button>

                <md-button class="md-icon-button">
                  <md-icon>share</md-icon>
                </md-button>
              </md-card-actions>
            </md-card>
          </div> -->
      </md-tab>
      <md-tab md-label="News / documentary">
        <md-button  class="md-raised" v-for="channel in newsChannels" :key="channel.name" @click.native="actionPlayChannel(channel)">
          <img :src="channel.thumb" alt="">
        </md-button>
      </md-tab>
      <md-tab md-label="Sport">
        <md-button  class="md-raised" v-for="channel in sportChannels" :key="channel.name" @click.native="actionPlayChannel(channel)">
          <img :src="channel.thumb" alt="">
        </md-button>
      </md-tab>
      <md-tab md-label="Cartoon">
        <md-button  class="md-raised" v-for="channel in cartoonChannels" :key="channel.name" @click.native="actionPlayChannel(channel)">
          <img :src="channel.thumb" alt="">
        </md-button>
      </md-tab>
    </md-tabs>
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
        generalChannels: 'getGeneralChannels',
        sportChannels: 'getSportChannels',
        newsChannels: 'getNewsChannels',
        cartoonChannels: 'getCartoonChannels',
        languageSelected: 'getLanguage'
      })
    },
    methods: {
      ...mapActions(['actionPlayChannel', 'actionFilterByLang']),
      toggleLeftSidenav() {
        this.$refs.leftSidenav.toggle();
      },
      closeLeftSidenav() {
        this.$refs.leftSidenav.close();
      },
    },
    mounted: function mounted() {
      this.actionFilterByLang('arabic')
    }
  }
</script>
