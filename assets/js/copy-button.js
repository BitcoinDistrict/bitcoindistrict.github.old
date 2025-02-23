// assets/js/copy-button.js
function copyText(element) {
    // Find the closest preceding element with text to copy
    var textElement = element.previousElementSibling;
    if (textElement) {
      var textToCopy = textElement.innerText;
      navigator.clipboard.writeText(textToCopy).then(function() {
        // Visual feedback: swap icon to checkmark
        element.classList.remove("fa-copy");
        element.classList.add("fa-check");
        setTimeout(() => {
          element.classList.remove("fa-check");
          element.classList.add("fa-copy");
        }, 2000); // Reverts after 2 seconds
      }, function(err) {
        console.error("Failed to copy text: ", err);
      });
    } else {
      console.error("No text element found to copy");
    }
  }
  
  // Attach event listeners to all copy icons after DOM is loaded
  document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".copy-icon").forEach(function(icon) {
      icon.addEventListener("click", function() {
        copyText(this);
      });
    });
  });