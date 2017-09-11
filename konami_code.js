const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {

  // Keep track of index outside of the event handler.
  let index = 0;

  window.addEventListener('keydown', KeyDownHandler(event) )

  // This is the function that would be invoked by the event listener.
  function KeyDownHandler(event) {
    const key = parseInt(event.detail || event.location || event.which);

    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert("Hurray!");

        index = 0
      }
    } else {
      index = 0;
    }
  }


}
