// https://vuex.vuejs.org/en/mutations.html

import { restful } from '../api'
import { urls } from '../api/requestUrl.js'

export default {
  TOGGLE_REVIEW_MODAL_FLAGE (state, flage) {
    state.reviewModalFlage = flage
  },
  TOGGLE_NEW_RECRUITMENT_MODAL_FLAGE (state, flage) {
    state.newRecruitmentModalFlage = flage
  },
  LOGOUT (state) {
    return restful
      .getRequest(urls.logout.method, urls.DOMAIN + urls.logout.path)
      .then(data => {
        sessionStorage.removeItem('userInfo')
        state.userInfo = null
        history.go(0)
      })
      .finally(() => { })
  }
}
