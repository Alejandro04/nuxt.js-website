export const state = () => ({
  sessionType: ''
})

export const mutations = {
  session_type_change (state, sessionType) {
    state.sessionType = sessionType
  }
}
