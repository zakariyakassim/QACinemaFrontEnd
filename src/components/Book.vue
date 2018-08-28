<template>
  <v-layout>

    <div id="seats">
      <center>
        <p>Select {{totalQuantity}} seats</p>
        <p>Selected seats {{selectedSeats}}</p>
        <table cellpadding="5">
          <tbody>
          <tr v-for="(row, key) in seats">
            <td v-for="seat in row" data-selected="0" :data-seat="key+seat" @click="selectSeat">
              {{key+seat}}
            </td>
          </tr>
          </tbody>
        </table>
      </center>
      <p id="screen">SCREEN</p>
    </div>

    <div id="dropdowns">
      <b-dropdown id="ddown-buttons" text="Adult Standard Tickets  " class="m-2">
        <b-dropdown-item-button @click="calculateAdult(x)" v-for="x in 10">{{x}}</b-dropdown-item-button>
      </b-dropdown>
      <b-dropdown id="ddown-buttons" text="Child Standard Tickets  " class="m-2">
        <b-dropdown-item-button @click="calculateChild(x)" v-for="x in 10">{{x}}</b-dropdown-item-button>
      </b-dropdown>
      <b-dropdown id="ddown-buttons" text="Students or OAP Tickets" class="m-2">
        <b-dropdown-item-button @click="calculateStudent(x)" v-for="x in 10">{{x}}</b-dropdown-item-button>
      </b-dropdown>
      <p class="total" style="margin-top: 50px">Adult: £{{adultTotalPrice}}</p>
      <p class="total">Child: £{{childTotalPrice}}</p>
      <p class="total">Student/OAP: £{{studentTotalPrice}}</p>
      <p class="total" style="margin-top: 50px; font-size: 30px">Total: £{{totalPrice}}</p>
      <div>
      <button type="button" style="float: left; margin-top: 100px" class="btn btn-primary btn-lg">CHECKOUT</button>
      </div>
    </div>
  </v-layout>

</template>

<script>
import seatsJson from '../json/seats.json'
import seatUnselected from '../assets/seat.png'
import seatSelected from '../assets/seathover.png'
import seatUnavailable from '../assets/seatnotavailable.png'
export default {
  name: 'Book',
  data () {
    return {
      seats: seatsJson,
      totalQuantity: 0,
      adultQuantity: 0,
      childQuantity: 0,
      studentQuantity: 0,
      adultTotalPrice: 0.0,
      childTotalPrice: 0.0,
      studentTotalPrice: 0.0,
      totalPrice: 0.0,
      seatSelectedTotal: 0,
      selectedSeats: []
    }
  },
  methods: {
    calculateAdult: function (quantity) {
      this.adultQuantity = quantity
      this.adultTotalPrice = quantity * 6
      this.totalQuantity = this.adultQuantity + this.childQuantity + this.studentQuantity
      this.totalPrice = this.adultTotalPrice + this.childTotalPrice + this.studentTotalPrice
    },
    calculateChild: function (quantity) {
      this.childQuantity = quantity
      this.childTotalPrice = quantity * 3
      this.totalQuantity = this.adultQuantity + this.childQuantity + this.studentQuantity
      this.totalPrice = this.adultTotalPrice + this.childTotalPrice + this.studentTotalPrice
    },
    calculateStudent: function (quantity) {
      this.studentQuantity = quantity
      this.studentTotalPrice = quantity * 4
      this.totalQuantity = this.adultQuantity + this.childQuantity + this.studentQuantity
      this.totalPrice = this.adultTotalPrice + this.childTotalPrice + this.studentTotalPrice
    },
    /* calculate: function (quantity, price) {
      totalQuantity =
      return price * quantity
    }, */
    selectSeat: function (event) {
      var max = this.seatSelectedTotal === this.totalQuantity
      var eventSeat = event.target.dataset.seat

      // if (this.seatSelectedTotal <= this.totalQuantity) {
      if (event.target.dataset.selected === '0') {
        if (!max) {
          event.target.style.backgroundImage = 'url(\'' + seatSelected + '\')'
          event.target.dataset.selected = '1'
          this.seatSelectedTotal++
          this.selectedSeats.push(event.target.dataset.seat)
        }
      } else if (event.target.dataset.selected === '1') {
        event.target.style.backgroundImage = 'url(\'' + seatUnselected + '\')'
        event.target.dataset.selected = '0'
        this.seatSelectedTotal = this.seatSelectedTotal - 1
        this.selectedSeats.splice(this.selectedSeats.indexOf(eventSeat), 1)
      }
    }

  }
}
</script>

<style scoped>

  #dropdowns {
    display: inline-block;
    margin-top: 60px;
    margin-left: 50px;
  }
  .total{
    text-align: left;
    font-size: 20px;
    color: white;
    font-weight: lighter;
    margin-top: 10px;
    margin-left: 10px;
  }

  #seats {
    width: 500px;
    margin-left: 100px;
    margin-top: 50px;
    border: 1px solid #005baa;
  }

  #seats tr td {
    text-align: center;
    color: white;
    border: 0px solid white;
    height: 70px;
    width: 70px;
    background-image: url("../assets/seat.png");
    background-size: 90% 90%;
    background-position: center;
    background-repeat: no-repeat;
  }
  /*#seats tr td:hover {
   // background-color: #389dc1;
    background-image: url("../assets/seathover.png");
  } */
  /* #seats tr td:active {
   // background-color: #389dc1;
     background-image: url("../assets/seathover.png");
   } */
  #screen {
    height: 30px;
    width: 100%;
    background-color: white;
    margin-top: 20px;
  }
</style>
