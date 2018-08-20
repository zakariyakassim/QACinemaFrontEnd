<template>
  <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6>

      <table style="width:100%">
        <tr>
          <th>Name</th>
          <th>Telephone</th>
          <th>Telephone</th>
        </tr>
        <tr>
          <td>Bill Gates</td>
          <td>55577854</td>
          <td>55577855</td>
        </tr>
      </table>


      <div class="container">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" class="image" style="width:100%">
        <div class="middle">
          <div class="text">John Doe</div>
        </div>
      </div>

    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'WhatsOn'
}
</script>

<style scoped>
  .container {
    position: relative;
    width: 50%;
  }

  .image {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
  }

  .middle {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }

  .container:hover .image {
    opacity: 0.3;
  }

  .container:hover .middle {
    opacity: 1;
  }

  .text {
    background-color: #4CAF50;
    color: white;
    font-size: 16px;
    padding: 16px 32px;
  }
</style>
