import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Feed from '~/store/feed'

let feedStore: Feed

function initialiseStores(store: Store<any>): void {
  feedStore = getModule(Feed, store)
}

export { initialiseStores, feedStore }
