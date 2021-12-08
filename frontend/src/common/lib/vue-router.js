import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/home'
import ConferencesDetail from '@/views/conferences/conference-detail'
import History from '@/views/history/history'
import Finish from '@/views/finish/finish'
import Profile from '@/views/profile/profile'
import Ranking from '@/views/ranking/ranking'
import StudyRoomList from '@/views/studyroomlist/studyroomlist'

const fullMenu = require('@/views/main/menu.json')
function makeRoutesFromMenu () {
  let routes = Object.keys(fullMenu).map((key) => {
    if (key === 'home') {
      return { path: fullMenu[key].path, name: key, component: Home  }
    } else if (key === 'history') {
      return { path: fullMenu[key].path, name: key, component: History }
    }else if(key === 'ranking'){
      return { path: fullMenu[key].path,name:key, component: Ranking }
    }
    else if(key === 'profile'){
      return {path: fullMenu[key].path,name:key, component:Profile}
    }else if(key ==='studyRoomList'){
      return {path: fullMenu[key].path,name:key, component:StudyRoomList}
    }
     else { // menu.json 에 들어있는 로그아웃 메뉴
      return null
    }
  })
  // 로그아웃 파싱한 부분 제거
  routes = routes.filter(item => item)
  // menu 자체에는 나오지 않는 페이지 라우터에 추가(방 상세보기)
  routes.push({
    path: '/conferences/:conferenceId',
    name: 'conference-detail',
    component: ConferencesDetail
  })

  routes.push({
    path: '/conferences/:conferenceId/end',
    name: 'finish',
    component: Finish
  })
  return routes
}

const routes = makeRoutesFromMenu()

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach((to) => {
  console.log('to', to)
})

export default router
