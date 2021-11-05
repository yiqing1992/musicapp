import Vue from 'vue'
import Vuex from 'vuex'
import { getLogin} from 'network/me.js'
import { userDetail} from 'network/me.js'
import { userSong} from 'network/me.js'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{
      isLogin: false,
      username: '未登录',
      account: {},
      userDetail: {},
      userSong: {}
    }
  },
  mutations: {
    setUser(state, value){
      state.user =value
    }
  },
  actions: {
    async phoneLogin(content, payload){
      //console.log(payload)
      let res = await getLogin(payload.phone, payload.password)
      if(res.code == 200){
        content.state.user.isLogin = true
        content.state.user.account = res.account
        //console.log(res.account.id);

        let userD = await userDetail(res.account.id)
        content.state.user.userDetail = userD
        
        //console.log(userD);

        let userS = await userSong(res.account.id)
        content.state.user.userSong = userS
        console.log(userS);

        localStorage.userData = JSON.stringify(content.state.user)
        content.commit('setUser',content.state.user)
        
      }
      
      //console.log(res);
      return res
    }
  },
  modules: {
  }
})
