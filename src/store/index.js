import Vue from "vue";
import Vuex from "vuex";
import homeModule from "./modules/home";
import detailModule from "./modules/detail"
import shopcartModule from "./modules/shopcart"

Vue.use(Vuex)

const state = {

}

const store = new Vuex.Store({
  state,
  modules: {
    a: homeModule,
    b: detailModule,
    c: shopcartModule
  }
})

export default store;