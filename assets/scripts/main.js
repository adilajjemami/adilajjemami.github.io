(function(document) {
  document.addEventListener("DOMContentLoaded", function (event) {
    var sidebarIsShown = false;
    var burger = document.querySelector('.navbar-burger');
    var sidebar = document.querySelector('aside.sidebar');
    burger.addEventListener('click', function(event) {
      event.stopPropagation();
      if (sidebarIsShown) {
        sidebar.classList = 'sidebar';
        sidebarIsShown = false;
      } else {
        sidebar.classList = 'sidebar show';
        sidebarIsShown = true;
      }
    })
  });
})(document);
