<script setup>
import { onBeforeMount, ref } from 'vue';
import { getAnnouncementById } from '../assets/data-handler.js';
import { formatDate } from '../assets/utils';
import { useRoute } from 'vue-router';
import router from '../router/index.js';

const announcement = ref('')
const loaded = ref(false)
onBeforeMount(async () => {
  const route = useRoute()
  announcement.value = await getAnnouncementById(route.params.id)
  if (!announcement.value) router.push(`/${route.params.id}/notfound`)
  loaded.value = true
})
</script>
<template>
  <div class="flex flex-col justify-center items-center bg-base-200 w-screen h-screen gap-y-5 font ">
    <div v-show="loaded">
      <h1 class="w-full text-2xl font-bold text-center pb-5">Announcement Detail</h1>
      <div class="max-w-lg overflow-hidden bg-base-100 shadow-lg">
        <div class="font-bold text-xl text-gray-100 py-4 px-6 mb-4 bg-success">{{ announcement.announcementTitle }}</div>
        <p class="text-gray-500 text-base mb-4 px-6">{{ announcement.announcementDescription }}</p>
        <p class="text-gray-400 px-6 kanit-light">Publish Date: {{ formatDate(announcement.publishDate) }}</p>
        <p class="text-gray-400 px-6 kanit-light">Close Date: {{ formatDate(announcement.closeDate) }}</p>

        <div class="px-6 pt-4 pb-4">
          <span span class="inline-block rounded-xl px-3 py-2 text-sm mr-2 bg-opacity-20"
            :class="announcement.announcementDisplay === 'Y' ? 'bg-success text-success' : 'bg-error text-error'">{{
              announcement.announcementDisplay }}</span>
          <span class="inline-block bg-info rounded-xl px-3 py-2 text-sm text-info mr-2 bg-opacity-20">{{
            announcement.announcementCategory }}</span>
          <router-link class="inline-block btn-outline btn-error float-right px-3 py-2 text-sm border rounded-xl"
            to="/">BACK</router-link>

        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>