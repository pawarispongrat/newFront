<script setup>
import { onBeforeMount,ref } from 'vue';
import { getAnnouncementById } from '../assets/data-handler.js';
import { formatDate } from '../assets/utils';
import { useRoute } from 'vue-router';

const announcement = ref('')
onBeforeMount(async () => {
  const route = useRoute()
  announcement.value = await getAnnouncementById(route.params.id)
})
</script>
<template>
 <div class="flex justify-center items-center bg-base-200 w-screen h-screen font text-5xl ">
    Page Not Found
  </div>
</template>
<style scoped>

</style>