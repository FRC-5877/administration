export const saveState = (state) => {
  try {
    const jsonState = JSON.stringify(state);
    window.localStorage.setItem('app_state', jsonState);
  } catch (error) {
    console.log(error);
  }
};

export const loadState = () => {
  try {
    const jsonState = window.localStorage.getItem('app_state');
    if (!jsonState) {
      return {};
    }
    const parsedState = JSON.parse(jsonState);
    parsedState.global.loading = false;
    return parsedState;
  } catch (error) {
    return {};
  }
};
