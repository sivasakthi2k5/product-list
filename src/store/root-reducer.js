export default (state, action) => {
  const reducers = {}
  return Object.entries(reducers).reduce((state, [ name, reducer ]) =>
      state.set(name, reducer(state.get(name), action, state)), state)
}
