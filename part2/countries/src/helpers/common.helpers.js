export function showAlertMessage(message) {
  return window.alert(message);
}

export function showConfirmMessage(message) {
  return window.confirm(message);
}

export function debounce(mainFunction, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      mainFunction(...args);
    }, delay);
  };
}

export function showErrorMessage(message, setNotification) {
  setNotification({ message, type: 'error' });
  setTimeout(() => {
    setNotification(null);
  }, 2500);
}
