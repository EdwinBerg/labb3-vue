<template>
  <div id="app">
    <div class="forecast-table">
      <table>
        <tbody>
          <tr>
            <th class="forecast-th">Dag/datum</th>
            <th class="forecast-th">Väder</th>
            <th class="forecast-th">Temperatur</th>
            <th class="forecast-th">Vind</th>
          </tr>
          <tr :key="weather.id" v-for="weather in weatherWeek">
            <td class="forecast-td">{{ weather.applicable_date }}</td>
            <td class="forecast-td">{{ weather.weather_state_name }}</td>
            <td class="forecast-td">{{ weather.the_temp.toFixed(1) }}°C</td>
            <td class="forecast-td">{{ weather.wind_speed.toFixed(0) }} m/s</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

 <script>
export default {
  name: "tableVue",
  props: {
    weatherWeek: {},
  },
  data() {
    return {
      weather: null,
    };
  },
};
</script>

<style>
.forecast-th,
.forecast-td {
  padding: 0.5rem 3rem;
}

.forecast-table {
  display: flex;
  justify-content: center;
}
</style>