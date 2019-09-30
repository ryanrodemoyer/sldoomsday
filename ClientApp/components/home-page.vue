<template>
  <div>
    <h1 class="mt-4">
      Silverlight Doomsday
    </h1>

    <div class="row">
      <div class="col">

        <h3 class="mt-5">
          Ticking...
        </h3>
        <p>
          {{ui.now}}
        </p>

      </div>
    </div>
    
    <div class="row">

      <div class="col-6">
        <h3 class="mt-5">
          Dev Complete Date
        </h3>
        <p>
          {{dcDateFormatted}}
        </p>
      </div>

      <div class="col-6">
        <h3 class="mt-5">
          End of Life Date
        </h3>
        <p>
          {{eolDateFormatted}}
        </p>
      </div>

    </div>

    <div class="row">

      <div class="col-6">
        <h4>Calendar Stats</h4>
        <!--<h6>108 weeks and 4 days</h6>nowDcDiff-->
        <h6>{{ toCalendarDays(nowDcDiff) }} calendar days</h6>
        <!--<h6>523 working days</h6>-->
        <h6>{{ toHours(nowDcDiff) }} hours</h6>
        <h6>{{ toSeconds(nowDcDiff) }} seconds</h6>
      </div>

      <div class="col-6">
        <h4>Calendar Stats</h4>
        <!--<h6>108 weeks and 4 days</h6>-->
        <h6>{{ toCalendarDays(nowThenDiff) }} calendar days</h6>
        <!--<h6>523 working days</h6>-->
        <h6>{{ toHours(nowThenDiff) }} hours</h6>
        <h6>{{ toSeconds(nowThenDiff) }} seconds</h6>
      </div>

    </div>

    <br><br><br>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  import * as Calcs from '../lib/jasmine_examples/Calcs'

  export default {
    data() {
      return {
        autoCount: 0,
        state: {
          eolDate: new Date(Date.UTC(2021,9,1,6)),
          dcDate: new Date(Date.UTC(2021,3,12,6)),
        },
        ui: {
          now: new Date(),
        }
      }
    },

    computed: {
      //...mapState({
      //  calendar: state => state.calendar
      //}),
      eolDateFormatted() {
        return this.toFormattedDate(this.state.eolDate);
      },
      dcDateFormatted() {
        return this.toFormattedDate(this.state.dcDate);
      },
      nowThenDiff() {
        return this.state.eolDate - this.ui.now;
      },
      nowDcDiff() {
        return this.state.dcDate - this.ui.now;
      },
      //toHours() {
      //  return this.calendar.eolDate.get
      //},
    },

    methods: {
      //...mapActions(['setCounter']),

      toFormattedDate(d) {
        return Calcs.toFormattedDate(d);
      },

      toCalendarDays(ts) {
        return Calcs.tsToCalendarDays(ts);
      },

      toHours(ts) {
        return Calcs.tsToHours(ts);
      },

      toSeconds(ts) {
        return Calcs.tsToSeconds(ts);
      }

    },

    created() {
      setInterval(() => {
        this.ui.now = new Date();
      }, 1000)
    }
  }
</script>

<style>
</style>
