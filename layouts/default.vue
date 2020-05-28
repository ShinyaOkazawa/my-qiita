<template>
  <v-app>
    <v-app-bar app>
      <v-container>
        <v-row class="align-center" no-gutters>
          <v-toolbar-title>My Qiita</v-toolbar-title>
          <v-spacer></v-spacer>
          <div class="d-flex align-center">
            <v-text-field
              v-model="input"
              label="search"
              single-line
              outlined
              hide-details
              @keydown.enter.prevent="onKeyDown"
            ></v-text-field>
            <v-btn
              outlined
              icon
              class="ml-2"
              width="40"
              height="40"
              :loading="loading"
              @click="onClick"
            >
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </div>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from 'nuxt-composition-api'
import { feedStore } from '~/store'
export default defineComponent({
  setup() {
    const input = ref('')
    const loading = ref(false)
    const loadPosts = async () => {
      loading.value = true
      await feedStore.loadPosts(`?query=${input.value}`)
      loading.value = false
    }
    const onKeyDown = () => {
      loadPosts()
    }
    const onClick = () => {
      loadPosts()
    }

    return {
      onKeyDown,
      onClick,
      input,
      loading
    }
  }
})
</script>
