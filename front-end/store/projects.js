export const state = () => ({
  list: {}
})

export const actions = {
  getProjectsByCategory({ commit }, id) {
    return new Promise((resolve, reject) => {
      this.$axios.get(`/emprendimientos?categoryId=${id}`).then((response) => {
        commit('SET_LIST', { id, data: response.data })
        resolve({ id, data: response.data })
      }).catch((err) => {
        reject(err)
      })
    })
  }
}

export const mutations = {
  SET_LIST(state, { id, data }) {
    state.list[id] = data
  }
}
