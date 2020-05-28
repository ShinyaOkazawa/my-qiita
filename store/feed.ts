import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { Post } from '~/types/qiita'
import { $axios } from '~/utils/api'

@Module({
  name: 'feed',
  stateFactory: true,
  namespaced: true,
})
export default class Feed extends VuexModule {
  posts: Post[] = []

  public get value(): Post[] {
    return this.posts
  }

  @Mutation
  addPost(posts: Post[]) {
    this.posts = posts
  }

  @Action({ rawError: true })
  async loadPosts(query: string = '') {
    console.log(query)
    const result = await $axios.get(`https://qiita.com/api/v2/items${query}`)
      .then(res => res)
      .catch(error => error.response)
    this.addPost(result.data)
  }
}
