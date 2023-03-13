<template>
  <div class="example">
    <h1>{{ test_msg }}</h1>
    <h6>Enter your username below:</h6>
    <input type="text" v-model="form_data.username">
    <button @click="handleSubmit()">Submit</button>
    <h1 style="color: green">{{ returned_msg }}</h1>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';
import axios from 'axios';

export default defineComponent({
  setup() {
    const test_msg = ref('');
    const form_data = ref({ username: '' });
    const returned_msg = ref('No returned Message Currently');

    const getTestMsg = async () => {
      try {
        const resData = await axios.get('http://localhost:8001/example_api/');
        if (resData.status === 200) {
          test_msg.value = resData.data;
        } else {
          alert('Unknown Error Occurs');
        }
      } catch (error) {
        alert('Unknown Error Occurs');
      } finally {
        // Empty here
      }
    };

    const handleSubmit = async () => {
      try {
        const resData = await axios.post('http://localhost:8001/example_api/post_demo', {username: form_data.value.username});
        if (resData.status === 200) {
          returned_msg.value = resData.data;
        } else {
          alert(resData.data);
        }
      } catch (error) {
        alert('Unknown Error Occurs');
      } finally {
        // Empty here
      }
    };

    // You can go to the browser console to see how 'watch' works
    watch(form_data.value, () => {
      console.log(form_data.value);
    });

    getTestMsg();

    return {
      test_msg,
      form_data,
      returned_msg,
      handleSubmit,
    };
  },
});
</script>

<style></style>