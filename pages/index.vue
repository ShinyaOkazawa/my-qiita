<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-list>
            <v-list-item
              v-for="post in posts"
              :key="post.id"
              :href="post.url"
              target="_blank"
            >
              {{ post.title }}
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  onServerPrefetch
} from 'nuxt-composition-api'
import { feedStore } from '~/store'

export default defineComponent({
  setup() {
    // TODO
    // - 日付表示
    // - ページング
    const posts = computed(() => feedStore.posts)
    onServerPrefetch(async () => {
      await feedStore.loadPosts()
    })

    return {
      posts
    }
  }
})
</script>
