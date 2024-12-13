import { createRouter, createWebHashHistory } from 'vue-router'
// home
import HomeView from '@/views/home/home-page.vue'
import homeContentView from '@/views/home/components/home-content.vue'
import DiscoveryView from '@/views/discovery/discovery-page.vue'
import friendsPage from '@/views/friends/friends-page.vue'
import partiesPage from '@/views/parties/parties-page.vue'
import mediaPage from '@/views/media/media-page.vue'
import settingPage from '@/views/setting/setting-page.vue'
import comingPage from '@/views/coming/coming-page.vue'
import communityPage from '@/views/community/community-page.vue'
// detail
import detailPage from '@/views/detail/detail-page.vue'
import detailSeat from '@/views/detail/components/detail-seat.vue'
import detailSession from '@/views/detail/components/detail-session.vue'
import detailPay from '@/views/detail/components/detail-pay.vue'
import detailTicket from '@/views/detail/components/detail-ticket.vue'
const routes = [
  {
    path: '/', component: HomeView, children: [
      { path: '', component: homeContentView },
      { path: '/discovery', component: DiscoveryView },
      { path: '/friends', component: friendsPage },
      { path: '/parties', component: partiesPage },
      { path: '/media', component: mediaPage },
      { path: '/setting', component: settingPage },
      { path: '/coming', component: comingPage },
      { path: '/community', component: communityPage },
    ]
  },
  {
    path: '/detail', component: detailPage, children: [
      { path: '', component: detailSession },
      { path: 'seat', component: detailSeat },
      { path: 'pay', component: detailPay },
      { path: 'ticket', component: detailTicket },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router