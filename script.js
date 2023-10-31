$(document).ready(function () {
  // Adicionar classe 'navbar-scrolled' ao navbar ao rolar a página
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $(".navbar").addClass("navbar-scrolled");
    } else {
      $(".navbar").removeClass("navbar-scrolled");
    }
  });
});

$(document).ready(function () {
  $(".carousel").hover(
    function () {
      $(this).find(".carousel-control").css("visibility", "visible");
    },
    function () {
      $(this).find(".carousel-control").css("visibility", "hidden");
    }
  );
});

// $(document).ready(function () {
//   var navbar = $(".navbar");

//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 50) {
//       navbar.addClass("navbar-small");
//     } else {
//       navbar.removeClass("navbar-small");
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  var btnVejaMais = document.getElementById("btn-veja-mais");
  var videoModal = document.getElementById("video-modal");
  var videoPlayer = document.getElementById("video-player");
  var closeBtn = document.getElementsByClassName("close")[0];

  btnVejaMais.addEventListener("click", function () {
    videoModal.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    videoModal.style.display = "none";
    videoPlayer.pause();
  });

  window.addEventListener("click", function (event) {
    if (event.target === videoModal) {
      videoModal.style.display = "none";
      videoPlayer.play();
    }
  });

  window.addEventListener("click", function (event) {
    if (event.target === videoModal) {
      videoModal.style.display = "none";
      videoPlayer.pause();
    }
  });
});

$(document).ready(function () {
  $(".btn-add-to-cart").click(function () {
    $("#message").text("Adicionado");
    $("#message").fadeIn(300).delay(1500).fadeOut(300);
  });
});
