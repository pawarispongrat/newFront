<script setup>
import { ref, onBeforeMount } from 'vue';
import { getAnnouncement } from '../assets/data-handler.js';
import { formatDate, TIMEZONE } from '../assets/utils';

const announcements = ref([])
const loaded = ref(false)
onBeforeMount(async () => {
  announcements.value = await getAnnouncement()
  loaded.value = true
})

</script>

<template>
  <div class="h-screen w-screen font bg-base-200 flex flex-col justify-center items-center">
    <div v-show="loaded">
      <h1 class="text-3xl font-bold text-center pb-5">
        SIT Announcement System (SAS)
      </h1>
      <div v-if="announcements?.length !== 0">
        <h2 class="text-xl font-bold p-4 text-success">
          Date/Time shown in Timezone: {{ TIMEZONE }}
        </h2>
        <table class="bg-base-100 shadow-md">
          <thead>
            <tr class="bg-success uppercase text-sm text-gray-100">
              <th class="p-5">No.</th>
              <th class="text-left">Title</th>
              <th class="text-left">Category</th>
              <th class="text-left">Publish Date</th>
              <th class="text-left">Close Date</th>
              <th class="text-left">Display</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(announcement, index) in announcements" :key="announcement.id"
              class="hover border-base-300 border-b kanit-light">
              <th class="py-6">{{ index + 1 }}</th>
              <td>{{ announcement.announcementTitle }}</td>
              <td class="p-4">{{ announcement.announcementCategory }}</td>
              <td class="px-2">{{ formatDate(announcement.publishDate) }}</td>
              <td class="px-2">{{ formatDate(announcement.closeDate) }}</td>
              <td>{{ announcement.announcementDisplay }}</td>
              <td class="text-center">
                <router-link class="text-sm px-4 py-1 border mx-2 rounded-lg btn-outline btn-success text-white"
                  :to="{ name: 'AnnouncementDetails', params: { id: announcement.id } }">VIEW</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else class="flex justify-center items-center h-1/2 w-full">
        <div class="text-error text-3xl">No Announcement</div>
      </div>
    </div>
  </div>
</template>