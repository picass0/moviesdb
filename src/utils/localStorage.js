export function saveState(state) {
  try {
    const jsonState = JSON.stringify(state);
    localStorage.setItem('state', jsonState);
  } catch (e) {
    console.error(e);
  }
}

export function loadState() {
  try {
    const jsonState = localStorage.getItem('state');
    return JSON.parse(jsonState);
  } catch (e) {
    console.error(e);
    return undefined;
  }
}
