
  document.addEventListener("DOMContentLoaded", function() {
    // Hide the loader on page load
    document.getElementById("loading-screen").style.display = "none";

    // Show the loader when a link is clicked
    document.body.addEventListener("click", function(event) {
      var target = event.target;
      if (target.tagName.toLowerCase() === "a") {
        showLoader();
      }
    });

    // Show the loader when refreshing the page
    window.addEventListener("beforeunload", function() {
      showLoader(true); // Pass true to indicate a longer duration
    });

    // Function to show the loader
    function showLoader(extendedDuration) {
      document.getElementById("loading-screen").style.display = "block";

      // Simulate a delay (adjust as needed)
      setTimeout(function() {
        // Hide the loader after the delay
        document.getElementById("loading-screen").style.display = "none";
      }, extendedDuration ? 5000 : 2000); // Adjust the delay in milliseconds
    }
  });

