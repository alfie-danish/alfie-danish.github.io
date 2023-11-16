// Changing words
(function () {
  var words = ["Coder", "Data Analyst", "Problem Solver", "Data Scientist", "People Tech Analyst", "Creative Thinker", "Workday Administrator", "Happy Person"],
    i = 0;
  setInterval(function () {
    $('#words').fadeOut(function () {
      $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
    });
  }, 2800)
})();

// Highlight navigation links and jump to section
$(document).ready(function() {
  // Smooth scrolling for anchor links
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 0);
  });

  // Highlight navigation links when scrolling to sections
  $(window).scroll(function() {
    var scrollPos = $(document).scrollTop();
    $('section').each(function() {
      var currLink = $(this);
      var refElement = $(currLink.attr('id'));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('.nav-link').removeClass('active');
        currLink.addClass('active');
      } else {
        currLink.removeClass('active');
      }
    });
  });
});

$(document).ready(function() {
  // Get the current section ID from the URL hash
  var currentSection = window.location.hash;

  // Add the "active" class to the corresponding navigation link
  $('a.nav-link[href="' + currentSection + '"]').addClass('active');
});

// Scroll to top
$(document).ready(function() {
  // Scroll to the Home section
  $('#home')[0].scrollIntoView();
});


// Filter projects by data-filter
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the clicked filter button (highlight it)
var btnContainer = document.getElementById("filterContainer");
var btns = btnContainer.getElementsByClassName("btn-filter");

// Add click event listener to each filter button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    // Get the filter container
    var btnContainer = document.getElementById("filterContainer");

    // Get the currently active filter button and remove the "active" class
    var currentActive = btnContainer.getElementsByClassName("active");
    currentActive[0].className = currentActive[0].className.replace(" active", "");

    // Add the "active" class to the clicked filter button
    this.className += " active";
  });
}

$(document).ready(function() {
  $( ".card" ).hover(
  function() {
    $(this).addClass('shadow-lg').css('cursor', 'pointer'); 
  }, function() {
    $(this).removeClass('shadow-lg');
  }
);
});
