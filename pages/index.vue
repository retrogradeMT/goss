<template>
  <section class="container">
    <div>

      <h2 class="subtitle">
        Music
      </h2>
      <form role="search" class="app-search">

                  <input type="text"
                        placeholder="Search Artists"
                        v-model="keyword"
                        >

        </form>

      <div>
        <ul>
            <Li style="padding-bottom:20px" v-if="Object.keys(artists).length === 0"> No Mathes Found </Li>
          <li v-for="(songs, a) in artists" :key="a"><a @click="setActive(a)">{{a}}</a>
            <ul class="sublist" v-if="active == a">
                <li  v-for="song in songs" :key="song.number">{{song.title}} - #{{song.Number}}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
import _ from "lodash";

export default {
    components: {
        AppLogo
    },
    data() {
        return {
            songs: this.$store.state.songs,
            active: null,
            keyword: ""
        };
    },
    computed: {
        filteredArtists() {
            return this.artists;
        },
        artists() {
            var sorted = _.sortBy(this.songs, "Artist");
            var keyword = new RegExp(this.keyword, "i");
            if (this.keyword.length > 0) {
                console.log(keyword);
                sorted = _.filter(sorted, function(obj) {
                    return obj.Artist.match(keyword);
                });
            }
            var a = _.groupBy(sorted, "Artist");
            return a;
        }
    },
    methods: {
        setActive(a) {
            this.active = a;
        }
    },
    watch: {}
};
</script>

<style>
input[type="text"] {
    font-size: 18px;
    /* height: 30px; */
    padding: 7px;
    width: 80%;
    border: 1px solid rgba(0, 0, 0, 0.27);
}
.container {
    min-height: 100vh;
    /* display: flex; */
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
        Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
ul {
    list-style-type: none;
    padding: 0;
    background: #fff;
    text-align: left;
}
li {
    min-height: 19px;
    border-top: 1px solid rgba(0, 0, 0, 0.27);
    padding: 10px;
}

ul li:first-child {
    border-top: 0;
}

a {
    display: block;
    padding: 9px 10px 5px 10px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-decoration: none;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-weight: bold;
    color: #000;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
a:hover,
a:active {
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #058cf5), color-stop(100%, #015ee6));
    background: -webkit-linear-gradient(top, #058cf5 0%, #015ee6 100%);
    background: linear-gradient(top, #058cf5 0%, #015ee6 100%);
    color: #fff;
}
a:after {
    content: "〉";
    float: right;
    font-weight: bold;
    color: #808080;
    font-size: 13px;
    text-shadow: 1px 0 1px #808080;
}
a:hover:after,
a:hover:after {
    color: #fff;
    text-shadow: 1px 0 1px #fff;
}
.sublist {
    padding: 7px;
}
.sublist > li {
    padding-left: 15px;
    border-top: none;
}
</style>
