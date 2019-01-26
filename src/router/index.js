import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '../components/HelloWorld'

Vue.use(Router)
import HomeContainer from '../components/HomeContainer'
import StudioInfoContainer from '../components/StudioInfoContainer'
import ContactUsContainer from '../components/ContactUsContainer'
import ProSerContainer from '../components/ProSerContainer'
import RecruitmentContainer from '../components/RecruitmentContainer'
import StudynamicsContainer from '../components/StudynamicsContainer'
import StuNoticeContainer from '../components/StuNoticeContainer'
import DynamicsInfoContainer from '../components/DynamicsInfoContainer'
import DynamicsNoticeContainer from '../components/DynamicsNoticeContainer'
import RecruitInfoContainer from '../components/RecruitInfoContainer'
import RecruitApplyContainer from '../components/RecruitApplyContainer'
export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
   { path: '/home', name: 'HomeContainer', component: HomeContainer },
   { path: '/studioInfo', name: 'StudioInfoContainer', component: StudioInfoContainer },
   { path: '/contactUs', name: 'ContactUsContainer', component: ContactUsContainer },
   { path: '/proSer', name: 'ProSerContainer', component: ProSerContainer},
   { path: '/recruitment', name: 'RecruitmentContainer', component: RecruitmentContainer },
   { path: '/studynamics', name: 'StudynamicsContainer', component: StudynamicsContainer },
   { path: '/studynamics/studynamicsInfo/:id', name: 'DynamicsInfoContainer', component: DynamicsInfoContainer},
   { path: '/home/stuNotice', name: 'StuNoticeContainer', component: StuNoticeContainer },
   { path: '/home/stuNotice/noticedynamics/:id', name: 'DynamicsNoticeContainer', component: DynamicsNoticeContainer },
   { path: '/recruitment/recruitInfo/:id', name: 'RecruitInfoContainer', component: RecruitInfoContainer },
   { path: '/recruitment/recruitInfo/recruitApply/:id', name: 'RecruitApplyContainer', component: RecruitApplyContainer },
  ]
})
