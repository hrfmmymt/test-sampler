const timer = (container, message, timeout) => {
  container.textContent = message;
  setTimeout( () => {
    container.textContent = "";
  }, timeout);
};

export {timer}