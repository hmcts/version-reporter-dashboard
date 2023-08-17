<script setup>
import {ref} from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>

  <div class="dashboard">
    <div style="display: flex;
    justify-content: center;
    flex-direction: column-reverse;
    text-align: center;">
      <p style="font-size:3em;">
        🤓
      </p>
      <p>
        Check out
        <a href="https://github.com/hmcts/version-reporter-services/blob/master/README.md" target="_blank"
        >the README</a>, for more detail
      </p>
      <p class="read-the-docs">This is currently a work-in-progress and would be updated often</p>
    </div>
  </div>

</template>

