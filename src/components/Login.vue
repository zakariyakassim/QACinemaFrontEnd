<template>
  <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6>
<br><br><br>
        <h1>Enter you account details</h1>
      </div>
      <br>
      <br>

      <v-card id="form" ref="form">
        <v-card-text>

          <v-text-field
        label =  Email
            ref="email"
            v-model="email"
            :rules="[() => !!email || 'This field is required']"
            :error-messages="errorMessages"
            placeholder="Example@email.com"
            required
            colour = white;
          ></v-text-field>
                 <br>
          <v-text-field
          label = Password
          :append-icon="show1 ? 'visibility_off' : 'visibility'"
          :type="show1 ? 'text' : 'password'"
            ref="password"
            v-model="password"
            :rules="[() => !!email || 'This field is required']"
            :error-messages="errorMessages"

            placeholder="Enter your password here..."
            counter
            @click:append="show1 = !show1"
            required
          ></v-text-field>
        </v-card-text>
        <v-divider class="mt-5"></v-divider>
        <v-card-actions>
          <v-btn  flat @click="resetForm">Clear</v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <br>
            <v-tooltip
              v-if="formHasErrors"
              left>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn  flat @click="submit">Submit</v-btn>

        </v-card-actions>
      </v-card>
      </div>
    </v-flex>
  </v-layout>
  </template>

<script>
import {checkLogin} from '../App'
import TheMovieDB from '@/services/api/TheMovieDB'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
var app = require('../App')
export default {
  name: 'Login',
  el: '',
  data: () => ({
    errorMessages: '',

    email: null,
    password: null,
    formHasErrors: false,
    show1: false,
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Invalid e-mail.'
      }
    }
  }),

  computed: {
    form () {
      return {
        email: this.email,
        password: this.password
      }
    }
  },

  watch: {
    name () {
      this.errorMessages = ''
    }
  },

  methods: {

    resetForm () {
      this.errorMessages = []
      this.formHasErrors = false

      Object.keys(this.form).forEach(f => {
        this.$refs[f].reset()
      })
    },

    submit () {
      this.formHasErrors = false

      Object.keys(this.form).forEach(f => {
        if (!this.form[f]) this.formHasErrors = true

        this.$refs[f].validate(true)
      })
      if (!this.formHasErrors) {
        var obj = {email: this.form.email, password: this.form.password}
        var json = JSON.stringify(obj)
        console.log('JSON format: ' + json)
        console.log(this.form)
        TheMovieDB.login(this.form)
        alert('ok')
      }
    }
  }
}

</script>
  <style>
.v-text-field__label {
   style: center;
}
</script>

<style scoped>
.v-text-field__label {
   style: center;
}
.v-label {
position: relative;
 style: center;
}
  h1, h2 {
    font-weight: lighter;
    color:white;
    font-size: 20px;
    font-family: monospace ;
    text-transform: uppercase   }
.form {
  color: white;
}

  .title {
   position: relative;

     text-align: center;
    width: 105%;
    height: 60px;
    font-size: 20px;
    font-weight: lighter;
    background-color: #00294d;
    padding-top: 20px;
    color: white;
border-bottom: black 1px solid;
 border-radius: 30px;
  }
  .v-model {
    background-color: white;

  }
  .v-label__v-label--active__error--text {
      style: center;
      position:relative;

  }
  .v-text-field {
    color:white;
     padding: 3px;
     border-color: white;

}
.v-text-field__label {
    position: relative;
    style:center;
}
 .v-card-text{
   background-color: white;
       color:white;
     padding: 5px;
     border-color: white;
 }
.v-btn   {
  font: 16px Arial;
  background-color: white;
  color: black;
    padding: 2px 20px 2px 20px;
  border-radius: 3px;
    cursor:pointer;
}
.v-card-text {
    font-color: white;

}

label {
position:relative;
top: 1000px;
}
</style>
