<template>
  <div id="box">
    <div id="app">
      <h1>Sök efter en stad för att se väderprognosen!</h1>
      <p>Din senaste sökning: {{ $store.state.LastSearchedCity }}</p>
      <form id="newForm" @submit.prevent="onSubmit">
        <input
          v-model="message"
          id="searchInput"
          placeholder="Sök efter en stad.."
        />
        <input id="knapp" type="submit" value="Sök" />
      </form>
      <p style="text-align: left" id="box-value">
        Du sökte efter: {{ message }}
      </p>
      <div id="weatherForeCast">
        <div class="la-ball-spin-clockwise la-dark la-2x" id="load">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <tableVue :weatherWeek="weatherWeek"></tableVue>
      </div>
    </div>
  </div>
</template>



<script>
import tableVue from "@/components/tableVue.vue";

export default {
  name: "weatherCast",
  components: {
    tableVue,
  },

  data() {
    return {
      message: null,
      weatherWeek: null,
    };
  },
  methods: {
    onSubmit() {
      this.message;
      this.weatherForCast();
      this.$store.commit("SaveLastSearch", this.message);
    },

    weatherForCast() {
      fetch(
        "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=" +
          this.message
      )
        .then((response) => response.json())
        .then((result) => {
          fetch(
            "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/" +
              result[0].woeid
          )
            .then((response) => response.json())
            .then((resultId) => {
              console.log(resultId);
              this.weatherWeek = resultId.consolidated_weather;
            });
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
