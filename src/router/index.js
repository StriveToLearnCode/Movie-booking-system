import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
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
// login
import loginPage from '@/views/login/login-page.vue'
// stytem
import systemPage from '@/views/system/system-page.vue'
import systemOverall from '@/views/system/components/system-overall.vue'
import systemRootmanagement from '@/views/system/components/system-rootmanagement.vue'
import systemUserlist from '@/views/system/components/system-userlist.vue'
import systemOrdermanagement from '@/views/system/components/system-ordermanagement.vue'
import systemFilmlist from '@/views/system/components/system-filmlist.vue'
import systemCinemaList from '@/views/system/components/system-cinemalist.vue'
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
  },
  {
    path: '/login', component: loginPage
  },
  {
    path: '/system', component: systemPage, children: [
      { path: '', component: systemOverall },
      { path: 'rootmanagement', component: systemRootmanagement },
      { path: 'userlist', component: systemUserlist },
      { path: 'ordermanagement', component: systemOrdermanagement },
      { path: 'filmlist', component: systemFilmlist },
      { path: 'cinemaList', component: systemCinemaList },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router