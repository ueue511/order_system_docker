import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    subtotalList: [], //商品ボタンを押した際、追加
    DeleteSub: "hidden",
    tablemember: "", //人数
    tableno: "", //テーブル番号
    isAction: 1,
    showid: "" //商品ボタンの個数表示
  },
  mutations: {
    // 商品ボタンの商品を追加
    //subtotalListオブジェクトの中に追加されたメニューがあるか確認
    //mune_id...someでの繰り返し回数 ※のちにid指定で使用
    SubTotalVuex(state, { full_name, child_price }) {
      let mune_id = 0
      const result = state.subtotalList.some(function (item) {
        mune_id++
        if (item.name === full_name) {
          return mune_id
        }
      });
      //someでのtrun判定で数量を増加
      //false判定、新規作成
      if (result) {
        let index = mune_id - 1
        state.subtotalList[index].quantity++;
        state.showid = state.subtotalList[index].quantity;
      } else {
        state.subtotalList.push({ name: full_name, price: child_price, quantity: 1 });
        state.showid = 1
      }
    },

    //全てリセット
    ResetList(state) {
      state.subtotalList = [];
      state.tablemember = "";
      state.tableno = "";
    },

    //取り消しボタンを押し、削除ボタンの表示判定
    Delete(state, show) {
      if(show === "visible") {
        return state.DeleteSub = "visible";
      } else {
        return state.DeleteSub = "hidden";
      }
    },

    // 取り消しボタンのリセット
    ResetDelete(state) {
      state.DeleteSub = "hidden"
    },

    //客数・卓番の追加
    GestoMenber(state, menber) {
      return state.tablemember = menber
    },
    Table(state, tablenum) {
      return state.tableno = tablenum
    }
  },
})