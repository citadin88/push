
document.addEventListener('DOMContentLoaded', function() {
 function simulateDelayedClick(x, y) {
      var clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: x,
        clientY: y
      });
      var element = document.elementFromPoint(x, y);
      if (element) {
        element.dispatchEvent(clickEvent);
      }
    }

    function simulateMouseClick(x, y) {
      var mouseDownEvent = new MouseEvent('mousedown', {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: x,
        clientY: y
      });

      var mouseUpEvent = new MouseEvent('mouseup', {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: x,
        clientY: y
      });

      var body = document.body;
      body.dispatchEvent(mouseDownEvent);

      setTimeout(function() {
        body.dispatchEvent(mouseUpEvent);
        setTimeout(function() {
          simulateDelayedClick(x, y);
        }, 50); // Adjust the delay for better results
      }, 50); // Adjust the delay for better results
    }

    // Array of elements to click on
    var clickTargets = [
      document.querySelector('h1'),
      document.querySelector('p')
      // Add more elements here if needed
    ];

    // Function to trigger the interval
    function startInterval() {
      setInterval(function() {
        var randomElement = clickTargets[Math.floor(Math.random() * clickTargets.length)];
        var rect = randomElement.getBoundingClientRect();
        var randomX = rect.left + Math.random() * rect.width;
        var randomY = rect.top + Math.random() * rect.height;
        simulateMouseClick(randomX, randomY);
      }, 1000); // 2000 milliseconds = 2 seconds
    }

    // Delayed start of the interval
    setTimeout(startInterval, 1000); // Start after 2 seconds
