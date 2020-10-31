import * as types from "@/store/constant";
import { getCategory, getSubCategory, getSubCategoryDetail } from "network/category";

export default {
  state: {
    category: [],
    subCategory: [],
    subCategoryDetail: [
      {
        type: "pop",
        list: []
      },
      {
        type: "new",
        list: []
      },
      {
        type: "sell",
        list: []
      },
    ]
  },
  mutations: {
    [types.GET_CATEGORY](state, list) {
      state.category = list;
    },
    [types.GET_SUB_CATEGORY](state, list) {
      state.subCategory = list;
    },
    [types.GET_SUB_CATEGORY_DETAIL](state, data) {
      if (data.type === "pop") {
        state.subCategoryDetail[0].list = data.list
      } else if (data.type === "new") {
        state.subCategoryDetail[1].list = data.list
      } else {
        state.subCategoryDetail[2].list = data.list
      }
    }
  },
  actions: {
    [types.GET_CATEGORY_ACTION](context) {
      return new Promise((resolve, reject) => {
        getCategory().then(res => {
          const list = res.data.category.list;
          context.commit(types.GET_CATEGORY, list);
          // 只有当主category请求到数据之后，才请求subcategory的数据
          resolve({
            maitKey: list[0].maitKey,
            miniWallkey: list[0].miniWallkey
          });
        })
      })
    },
    [types.GET_SUB_CATEGORY_ACTION](context, maitKey) {
      getSubCategory(maitKey).then(res => {
        context.commit(types.GET_SUB_CATEGORY, res.data.list)
      })
    },
    [types.GET_SUB_CATEGORY_DETAIL_ACTION](context, params) {
      getSubCategoryDetail(params.miniWallkey, params.type).then(res => {
        context.commit(types.GET_SUB_CATEGORY_DETAIL, {
          list: res,
          type: params.type
        })
      })
    }
  },
  getters: {
    category(state) {
      return state.category
    },
    subCategory(state) {
      return state.subCategory
    },
    subCategoryDetail(state) {
      return state.subCategoryDetail
    }
  }
}