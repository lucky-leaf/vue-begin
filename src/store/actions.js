export default {
  updateCountAsync (context, payload) {
    setTimeout(() => {
      context.commit('updateCount', payload.num)
    }, payload.time)
  }
}
