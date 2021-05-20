<template>
  <div id="box">
    <div id="app">
      <form @submit.prevent="onSubmit">
        <input type="submit" value="Generera Hund Fakta" />
      </form>
      <div>
        <ol style="text-align: left">
          <li
            style="margin: 1rem 0"
            :key="DogFact.id"
            v-for="DogFact in DogFacts"
          >
            {{ DogFact.fact }}
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "dogInfo",
  components: {},

  data() {
    return {
      DogFacts: null,
    };
  },
  methods: {
    onSubmit() {
      this.generateDogFact();
    },

    generateDogFact() {
      fetch(
        "https://cors-anywhere.herokuapp.com/https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all"
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result[0]);
          this.DogFacts = result.slice(0, 10);
        });
    },
  },
};
</script>

