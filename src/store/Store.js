import Vuex from 'vuex'

const my_state = {
  source_channels: [
    {
      name: 'iqraa',
      label:'Iqraa',
      url: 'http://iqraa.cdn.mangomolo.com/iqraaar/smil:iqraaardir.smil/chunklist_b2500000_t64NTc2cA==.m3u8',
      thumb: 'src/assets/iqraa.png',
      category: 'general',
      type: 'hls',
      lang: 'arabic'
    },
    {
      name: 'saudi_quran',
      label:'Saudi Coran',
      url: 'bu_2dTAg3ng',
      thumb: 'src/assets/saudi_coran.png',
      category: 'general',
      type: 'youtube',
      lang: 'arabic'
    },
    {
      name: 'saudi_sunnah',
      label:'Saudi Sunnah',
      url: 'QEhauvt75WE',
      thumb: 'src/assets/saudi_sunnah.png',
      category: 'general',
      type: 'youtube',
      lang: 'arabic'
    },
    {
      name: 'saudi1',
      label:'Saudi 1',
      url: '_PYrORU8ABU',
      thumb: 'src/assets/saudi_1.png',
      category: 'general',
      type: 'youtube',
      lang: 'arabic'
    },
    {
      name: 'almayadeen',
      label:'Al Mayadeen',
      // url: 'http://lmd.cdn.octivid.com/lmd/smil:switch.smil/chunklist_b850000_t64NTc2cA==.m3u8',
      url: 'vV04TDhU-Lg',
      thumb: 'src/assets/almayadeen.png',
      category: 'news',
      // type: 'hls',
      type: 'youtube',
      lang: 'arabic'
    },
    {
      name: 'russia_today_english',
      label:'Russia Today english',
      url: 'https://rt-eng-live-hls.secure.footprint.net/rt/eng/index2500.m3u8',
      thumb: 'src/assets/russia_today_english.png',
      category: 'news',
      type: 'hls',
      lang: 'english'
    },
    {
      name: 'russia_today_arabic',
      label:'Russia Today arabic',
      url: 'Jgb6V8ahsHo',
      thumb: 'src/assets/russia_today_arabic.png',
      category: 'news',
      type: 'youtube',
      lang: 'arabic'
    },
    {
      name: 'france24_francais',
      label:'France24 Français',
      url: 'http://f24hls-i.akamaihd.net/hls/live/221192/F24_FR_LO_HLS/master_900.m3u8',
      thumb: 'src/assets/france24_francais.png',
      category: 'news',
      type: 'hls',
      lang: 'franch'
    },
    {
      name: 'france24_arabic',
      label:'France24 Arabic',
      // url: 'http://f24hls-i.akamaihd.net/hls/live/221196/F24_AR_LO_HLS/master_900.m3u8',
      url: 'M0XbDbxBlJo',
      thumb: 'src/assets/france24_arabic.png',
      category: 'news',
      // type: 'hls',
      type: 'youtube',
      lang: 'arabic'
    },
    {
      name: 'cnews',
      label:'CNEWS',
      url: 'http://hls-m06.live-lv3.canal-plus.com/live/hls/itele-clair-hd-andr7/and-hd-clair/itele-clair-hd-video=3400000-audio_AACL_fra_96000_127=96000.m3u8',
      thumb: 'src/assets/cnews.png',
      category: 'news',
      type: 'hls',
      lang: 'french'
    },
    {
      name: 'alhiwar',
      label:'Al Hiwar',
      url: 'http://mn-i.mncdn.com/alhiwar_live/smil:alhiwar.smil/chunklist_w884021863_b1264000.m3u8',
      thumb: 'src/assets/alhiwar.png',
      category: 'news',
      type: 'hls',
      lang: 'arabic'
    },
    {
      name: 'bbc_arabic',
      label:'BBC Arabic',
      url: 'http://bbcwslive.mmdlive.lldns.net/bbcwslive/333091d555e2404785a0339bf4779ac1/chunklist_b864000.m3u8',
      // url: 'm0RMXgxMhs8',
      thumb: 'src/assets/bbc_arabic.png',
      category: 'news',
      type: 'hls',
      // type: 'youtube',
      lang: 'arabic'
    },
    {
      name: 'dubai',
      label:'Dubai',
      url: 'http://dmi.mangomolo.com:1935/dubaitv/smil:dubaitv.smil/gmswf.m3u8',
      thumb: 'src/assets/dubai.png',
      category: 'general',
      type: 'hls',
      lang: 'arabic'
    },
    {
      name: 'ennahar',
      label:'Ennahar TV',
      url: 'http://selevision9887-i.akamaihd.net/hls/live/219290/98874/1.m3u8',
      thumb: 'src/assets/ennahar.png',
      category: 'news',
      type: 'hls',
      lang: 'arabic'
    },
    {
      name: 'abudhabi1',
      label:'AbuDhabi',
      url: 'http://adtv.ercdn.net/adaloula/adaloula_480p.m3u8',
      thumb: 'src/assets/abudhabi1.png',
      category: 'general',
      type: 'hls',
      lang: 'arabic'
    },
    {
      name: 'kas2',
      label:'Al Kass2',
      url: 'http://alkass-i.akamaihd.net/hls/live/205534/2/live_40s20.m3u8',
      // url: 'k2ZXeeehZPw',
      thumb: 'src/assets/kas2.png',
      category: 'sport',
      //type: 'youtube',
      type: 'hls',
      lang: 'arabic'
    },
    {
      name: 'aljazeera',
      label:'Aljazeera',
      // url: 'http://aljazeera-ara-apple-live.adaptive.level3.net/apple/aljazeera/arabic/800.m3u8',
      url: '3LSC_9euRxk',
      thumb: 'src/assets/aljazeera.png',
      category: 'news',
      // type: 'hls',
      type: 'youtube',
      lang: 'arabic'
    },
    {
      name: 'aljazeera_english',
      label:'Aljazeera English',
      // url: 'http://aljazeera-ara-apple-live.adaptive.level3.net/apple/aljazeera/arabic/800.m3u8',
      url: 'dp6W0ZcYwE4',
      thumb: 'src/assets/aljazeera_english.png',
      category: 'news',
      // type: 'hls',
      type: 'youtube',
      lang: 'english'
    },
    {
      name: 'jazeeraDoc',
      label:'Aljazeera documentary',
      url: 'http://aljazeera-doc-apple-live.adaptive.level3.net/apple/aljazeera/hq-doc/800kStream.m3u8',
      thumb: 'src/assets/jazeera_documentary.png',
      category: 'news',
      type: 'hls',
      lang: 'arabic'
    },
    {
      name: 'noorDubai',
      label:'Noor Dubai',
      url: 'http://dmi.mangomolo.com:1935/noordubaitv/smil:noordubaitv.smil/playlist.m3u8',
      thumb: 'src/assets/noor_dubai.png',
      category: 'general',
      type: 'hls',
      lang: 'arabic'
    },
    {
      name: 'samaDubai',
      label:'Sama Dubai',
      url: 'http://dmi.mangomolo.com:1935/samadubai/smil:samadubai.smil/playlist.m3u8',
      thumb: 'src/assets/sama_dubai.png',
      category: 'general',
      lang: 'arabic'
    },
    {
      name: 'shariqa',
      label:'AlShariqa',
      url: 'http://livestreaming.itworkscdn.net/smc1live/smc1tv/playlist.m3u8',
      thumb: 'src/assets/shariqa.png',
      category: 'general',
      type: 'hls',
      lang: 'arabic'
    },
    {
      name: 'aljazeeraMubasher',
      label:'Aljazeera Mubasher',
      url: 'http://aljazeera-mubasher-apple-live.adaptive.level3.net/apple/aljazeera/mubasher/800.m3u8',
        thumb: 'src/assets/aljazeera_mubasher.png',
      category: 'news',
      type: 'hls',
      lang: 'arabic'
    },
    {
      name: 'abuDhabiDrama',
      label:'AbuDhabi Drama',
      url: 'http://adtv.ercdn.net/addrama/addrama_360p.m3u8',
      thumb: 'src/assets/abudhabi_drama.png',
      category: 'general',
      type: 'hls',
      lang: 'arabic'
    },
    {
      name: 'dubaiOne',
      label:'Dubai One',
      url: 'http://dmivll.mangomolo.com/dubaione/smil:dubaione.smil/chunklist_b1800000.m3u8',
      thumb: 'src/assets/dubai_one.png',
      category: 'general',
      type: 'hls',
      lang: 'english'
    },
    {
      name: 'natGeo',
      label:'National Geographic',
      url: 'http://selevision9877-i.akamaihd.net/hls/live/219118/98770/1.m3u8',
      thumb: 'src/assets/natgeo.png',
      category: 'news',
      type: 'hls',
      lang: 'arabic'
    },
    {
      name: 'dubaiSport3',
      label:'Dubai Sport3',
      url: 'http://dmiftvll.mangomolo.com/dubaisports/smil:dubaisports.smil/chunklist_b1750000.m3u8',
      thumb: 'src/assets/dubai_sport3.png',
      category: 'sport',
      type: 'hls',
      lang: 'arabic'
    },
    {
      name: 'alan',
      label:'AlAan',
      url: 'http://alaan.cdn.mangomolo.com/alaantv/smil:switch.smil/playlist.m3u8',
      thumb: 'src/assets/alaan.png',
      category: 'general',
      type: 'hls',
      lang: 'arabic'
    },
    {
      name: 'cnbcarabiya',
      label:'CNBC Arabiya',
      url: 'http://vod.hibridcdn.net/cnbc/liveabr/playlist.m3u8',
      thumb: 'src/assets/cnbcarabiya.png',
      category: 'news',
      type: 'hls',
      lang: 'arabic'
    },
    {
      name: 'skynewsarabiya',
      label:'Sky News Arabic',
      // url: 'http://skynewsl.skynews.cshls.lldns.net/skynews/skynewsl/skynewsl.m3u8',
      url: 'i-PshDEz1C8',
      thumb: 'src/assets/skynewsarabiya.png',
      category: 'news',
      // type: 'hls',
      type: 'youtube',
      lang: 'arabic'
    },
    {
      name: 'qatar',
      label:'Qatar',
      url: 'http://qtv-i.akamaihd.net/hls/live/213233/QTV/s_264s30.m3u8',
      thumb: 'src/assets/qatar.png',
      category: 'general',
      type: 'hls',
      lang: 'arabic'
    },
    {
      name: 'alarabiya',
      label:'Al Arabiya',
      url: 'kvov-9qsDsc',
      thumb: 'src/assets/alarabiya.png',
      category: 'news',
      type: 'youtube',
      lang: 'arabic'
    },
    {
      name: 'alikhbaria',
      label:'Al Ikhbaria',
      url: 'cCe0Hzqjhso',
      thumb: 'src/assets/alikhbaria.png',
      category: 'news',
      type: 'youtube',
      lang: 'arabic'
    },
    {
      name: 'dw_arabic',
      label:'DW Arabic',
      url: 'ZVAcKLFvMyk',
      thumb: 'src/assets/dw_arabic.png',
      category: 'news',
      type: 'youtube',
      lang: 'arabic'
    },
    {
      name: 'roya',
      label:'Roya',
      url: 'JK_X3kM2g2U',
      thumb: 'src/assets/roya.png',
      category: 'general',
      type: 'youtube',
      lang: 'arabic'
    },
    {
      name: 'bein_news',
      label:'Bein News',
      url: 'wjZsWw4x3iU',
      thumb: 'src/assets/bein_news.png',
      category: 'sport',
      type: 'youtube',
      lang: 'arabic'
    },
    {
      name: 'cbc_sofra',
      label:'CBC Sofra',
      url: 'OsGTO242TDE',
      thumb: 'src/assets/cbc_sofra.png',
      category: 'general',
      type: 'youtube',
      lang: 'arabic'
    },
    {
      name: 'tunisie_1',
      label:'Tunisie 1',
      url: '7IymnBrCwng',
      thumb: 'src/assets/tunisie_1.png',
      category: 'general',
      type: 'youtube',
      lang: 'arabic'
    },
    {
      name: 'tunisie9',
      label:'Tunisie 9',
      url: 'uEo_bnFgcFA',
      thumb: 'src/assets/tunisie9.png',
      category: 'general',
      type: 'youtube',
      lang: 'arabic'
    },
    {
      name: 'toyor_jennah_1',
      label:'Toyor el jennah',
      url: 'roHmaGwTdsM',
      thumb: 'src/assets/toyor_jennah.png',
      category: 'cartoon',
      type: 'youtube',
      lang: 'arabic'
    },
    {
      name: 'france_info',
      label:'France info',
      url: 'SN7sncKzRq4',
      thumb: 'src/assets/france_info.png',
      category: 'news',
      type: 'youtube',
      lang: 'french'
    },
    {
      name: 'euronews_fr',
      label:'Euronews Fr',
      url: 'ptI3tanRuds',
      thumb: 'src/assets/euronews_fr.png',
      category: 'news',
      type: 'youtube',
      lang: 'french'
    },
    {
      name: 'africa24',
      label:'africa24',
      url: 'gO77vBB3R7g',
      thumb: 'src/assets/africa24.png',
      category: 'news',
      type: 'youtube',
      lang: 'french'
    },
    {
      name: 'ntv_sport_turkish',
      label:'NTV Sport',
      url: 'uxgKogFymQU',
      thumb: 'src/assets/ntv_sport.png',
      category: 'sport',
      type: 'youtube',
      lang: 'turkish'
    },
    {
      name: 'nasa_from_space',
      label:'NASA Live',
      url: 'RtU_mdL2vBM',
      thumb: 'src/assets/nasa_live.png',
      category: 'news',
      type: 'youtube',
      lang: 'english'
    },
    {
      name: 'aljadeed',
      label:'Al jadeed',
      url: '4FVPhnIJKTY',
      thumb: 'src/assets/aljadeed.png',
      category: 'general',
      type: 'youtube',
      lang: 'arabic'
    },
    {
      name: 'almoustakbal',
      label:'Al Mostakbal',
      url: 'http://futuretv.cdn.mangomolo.com/futuretv/smil:futuretv.smil/chunklist_b650000.m3u8',
      thumb: 'src/assets/almoustakbal.png',
      category: 'general',
      type: 'hls',
      lang: 'arabic'
    },
    {
      name: 'majid',
      label:'Majid',
      url: 'http://adtv.ercdn.net/adsport7/adsport7_360p.m3u8',
      thumb: 'src/assets/majid.png',
      category: 'cartoon',
      type: 'hls',
      lang: 'arabic'
    },
    {
      name: 'mangas',
      label:'Mangas tv',
      url: 'http://live-trl102.abweb.com/liveabtrl102/ngrp:mangas.stream_bis/chunklist_b1096000.m3u8',
      thumb: 'src/assets/mangas.png',
      category: 'cartoon',
      type: 'hls',
      lang: 'french'
    },
    {
      name: 'koky_kids',
      label:'Koky kids',
      url: 'http://50.23.65.8/live/koky_kids/index.m3u8',
      thumb: 'src/assets/koky.png',
      category: 'cartoon',
      type: 'hls',
      lang: 'arabic'
    },
    {
      name: 'abudhabi_sport1',
      label:'AbuDhabi Sport1',
      url: 'http://adtv.ercdn.net/adsport2/adsport1_720p.m3u8',
      thumb: 'src/assets/abudhabi_sport1.png',
      category: 'sport',
      type: 'hls',
      lang: 'arabic'
    },
    {
      name: 'abudhabi_sport2',
      label:'AbuDhabi Sport2',
      url: 'http://adtv.ercdn.net/adsport2/adsport2_720p.m3u8',
      thumb: 'src/assets/abudhabi_sport2.png',
      category: 'sport',
      type: 'hls',
      lang: 'arabic'
    },
    {
      name: 'skynews_english',
      label:'SKYNEWS English',
      url: 'y60wDzZt8yg',
      thumb: 'src/assets/skynews_en.png',
      category: 'news',
      type: 'youtube',
      lang: 'english'
    },
    {
      name: 'trtworld',
      label:'TRT World',
      url: 'OV2dzG8qNwY',
      thumb: 'src/assets/trtworld.png',
      category: 'news',
      type: 'youtube',
      lang: 'english'
    },
    {
      name: 'cgtn_america',
      label:'CGTN America',
      url: 'O3DuEqEJgFc',
      thumb: 'src/assets/cgtn_america.png',
      category: 'news',
      type: 'youtube',
      lang: 'english'
    },
    {
      name: 'lequipe',
      label:'L\'équipe',
      url: 'http://163.172.41.213:8080/3e7ab19c826daa1a95648bdd2268a1a676063153cbdd5bafc81426aa4cb8bb50/hls/lequipe.m3u8',
      thumb: 'src/assets/lequipe.png',
      category: 'sport',
      type: 'hls',
      lang: 'french'
    },
    {
      name: 'lunivers',
      label:'L\'univers',
      url: 'http://62.210.82.111:8080/3e7ab19c826daa1a95648bdd2268a1a676063153cbdd5bafc81426aa4cb8bb50/hls/lunivers.m3u8',
      thumb: 'src/assets/lunivers.png',
      category: 'news',
      type: 'hls',
      lang: 'french'
    },
    {
      name: 'tf1',
      label:'TF1',
      url: 'http://163.172.41.213:8080/3e7ab19c826daa1a95648bdd2268a1a676063153cbdd5bafc81426aa4cb8bb50/hls/tf1.m3u8',
      thumb: 'src/assets/tf1.png',
      category: 'general',
      type: 'hls',
      lang: 'french'
    },
    {
      name: 'france2',
      label:'France2',
      url: 'http://163.172.41.213:8080/3e7ab19c826daa1a95648bdd2268a1a676063153cbdd5bafc81426aa4cb8bb50/hls/france2.m3u8',
      thumb: 'src/assets/france2.png',
      category: 'general',
      type: 'hls',
      lang: 'french'
    },
    {
      name: 'france3',
      label:'France3',
      url: 'http://163.172.41.213:8080/3e7ab19c826daa1a95648bdd2268a1a676063153cbdd5bafc81426aa4cb8bb50/hls/france3.m3u8',
      thumb: 'src/assets/france3.png',
      category: 'general',
      type: 'hls',
      lang: 'french'
    },
    {
      name: 'france5',
      label:'France5',
      url: 'http://163.172.41.213:8080/3e7ab19c826daa1a95648bdd2268a1a676063153cbdd5bafc81426aa4cb8bb50/hls/france5.m3u8',
      thumb: 'src/assets/france5.png',
      category: 'general',
      type: 'hls',
      lang: 'french'
    },
    {
      name: 'm6',
      label:'M6',
      url: 'http://163.172.41.213:8080/3e7ab19c826daa1a95648bdd2268a1a676063153cbdd5bafc81426aa4cb8bb50/hls/m6france.m3u8',
      thumb: 'src/assets/m6.png',
      category: 'general',
      type: 'hls',
      lang: 'french'
    },
    {
      name: 'arte_france',
      label:'Arte',
      url: 'http://163.172.41.213:8080/3e7ab19c826daa1a95648bdd2268a1a676063153cbdd5bafc81426aa4cb8bb50/hls/artefr.m3u8',
      thumb: 'src/assets/arte.png',
      category: 'general',
      type: 'hls',
      lang: 'french'
    },
    {
      name: 'tv5monde',
      label:'TV5 Monde',
      url: 'http://62.210.82.111:8080/3e7ab19c826daa1a95648bdd2268a1a676063153cbdd5bafc81426aa4cb8bb50/hls/tv5.m3u8',
      thumb: 'src/assets/tv5monde.png',
      category: 'general',
      type: 'hls',
      lang: 'french'
    },
    {
      name: 'c8',
      label:'C8',
      url: 'http://hls-live-m5-l3.canal-plus.com/live/hls/d8-clair-hd-and/and-hd-clair/d8-clair-hd-video=2100000-audio_AACL_fra_96000_127=96000.m3u8',
      thumb: 'src/assets/c8.png',
      category: 'general',
      type: 'hls',
      lang: 'french'
    },
    {
      name: 'w9',
      label:'W9',
      url: 'http://163.172.41.213:8080/3e7ab19c826daa1a95648bdd2268a1a676063153cbdd5bafc81426aa4cb8bb50/hls/w9france.m3u8',
      thumb: 'src/assets/w9.png',
      category: 'general',
      type: 'hls',
      lang: 'french'
    },
    {
      name: 'bfm',
      label:'BFM TV',
      url: 'http://62.210.82.111:8080/3e7ab19c826daa1a95648bdd2268a1a676063153cbdd5bafc81426aa4cb8bb50/hls/bfmtv.m3u8',
      thumb: 'src/assets/bfm.png',
      category: 'news',
      type: 'hls',
      lang: 'french'
    },
    {
      name: 'rmc',
      label:'RMC',
      url: 'http://62.210.82.111:8080/3e7ab19c826daa1a95648bdd2268a1a676063153cbdd5bafc81426aa4cb8bb50/hls/rmc.m3u8',
      thumb: 'src/assets/rmc.png',
      category: 'news',
      type: 'hls',
      lang: 'french'
    },
  ],
  channels: [],
  playing: false,
  selectedChannel: {},
  hlsInstance: '',
  languageSelected: ''
}

const my_mutations = {
  TOOGLEPLAYING: (state) => {
    state.playing = !state.playing
  },
  SELECTCHANNEL: (state, channel) => {
    state.selectedChannel = channel
  },
  SAVEHLS: (state, instance) => {
    state.hlsInstance = instance
  },
  FILTERBYLANG: (state, lang) => {
    if (lang == 'all') {
      state.channels = state.source_channels
      state.languageSelected = 'all'
    }
    else {
      state.channels = state.source_channels.filter(channel => channel.lang == lang)
      state.languageSelected = lang
    }

  }
}

const my_getters = {
  getChannels: state => state.channels = state.source_channels,
  getSportChannels: state => state.channels.filter(channel => channel.category == 'sport'),
  getNewsChannels: state => state.channels.filter(channel => channel.category == 'news'),
  getGeneralChannels: state => state.channels.filter(channel => channel.category == 'general'),
  getCartoonChannels: state => state.channels.filter(channel => channel.category == 'cartoon'),
  getPlaying: state => state.playing,
  getSelectedChannel: state => state.selectedChannel,
  getLanguage: state => state.languageSelected,
}

const my_actions = {
  actionPlayChannel: (store, channel) => {

    store.commit("SELECTCHANNEL", channel)

    var options = {
    controls: ['play-large', 'play', 'mute', 'volume', 'captions'],
    autoplay: true,
    clickToPlay: true,
    }
    var video = document.querySelector('#player')
    var youtube = document.querySelector('#yplayer')

    if (channel.type == 'hls') {
      video.style.display = "block"
      if (Hls.isSupported()) {
        var hls = new Hls()
        hls.loadSource(channel.url)

        hls.attachMedia(video)
        hls.on(Hls.Events.MANIFEST_PARSED,function() {
          video.play()
        })
        plyr.setup(video, options)
        store.commit("SAVEHLS", hls)
      }
    }
    else if (channel.type == 'youtube') {
      video.style.display = "none"
      youtube.setAttribute('data-video-id', channel.url)
      var yhls = plyr.setup(youtube, options)[0]
      store.commit("SAVEHLS", yhls)
    }

    store.commit("TOOGLEPLAYING")

  },
  actionBackToChannels: (store) => {

    store.commit("TOOGLEPLAYING")
    var obj= document.querySelector('.md-tabs-content')
    obj.style.height= "100%"


    // Destroy video instance
    if (store.rootState.hlsInstance ) {
      store.rootState.hlsInstance.destroy()
    }

  },
  actionFilterByLang: (store, lang) => {
    store.commit("FILTERBYLANG", lang)
  }
}


export default new Vuex.Store({
  state: my_state,
  mutations: my_mutations,
  getters: my_getters,
  actions: my_actions,

})
