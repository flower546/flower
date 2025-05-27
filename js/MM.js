let name = "";
let flower = "";

$(document).ready(function () {
  if (window.innerHeight < window.innerWidth) {
    location.replace("notallow.html");
  }
  $("section:not(#start)").hide();

  $(".QRSbtn").on("click", function () {
    const showThis = $(this).data("target");
    $("section").hide();
    $(showThis).show();
  });
});

// Page 1
$(".btnpage1").on("click", function (event) {
  if (window.innerHeight < window.innerWidth) {
    location.replace("notallow.html");
    return;
  }
  name = $("input#name").val();
  if (!name) {
    event.preventDefault();
    Swal.fire({
      title: "กรุณากรอกข้อมูล",
      timer: 2000,
      icon: "error",
      showConfirmButton: false,
    });
  } else {
    document.getElementById("realbtnpage1").click();
    document.getElementById("nameonpage40").innerHTML = name;
    const audiomain = document.getElementById("ambient");
    audiomain.volume = 0.7;
    audiomain.play();
  }
});

// Page 2
$(".btnpage2").on("click", function () {
  document.getElementById("realbtnpage2").click();

  setTimeout(function () {
    document.getElementById("3").classList.add("fadeOut");
    setTimeout(function () {
      document.getElementById("realbtnpage3").click();
      const vid2 = document.getElementById("clip4");
      vid2.play();

      setTimeout(function () {
        document.body.style.backgroundImage = "url('../img/BLACK.png')";
        setTimeout(function () {
          document.getElementById("realbtnpage4").click();
          setTimeout(function () {
            document.getElementById("realbtnpage5").click();
          }, 4000);
        }, 1500);
      }, 5000);
    }, 1500);
  }, 3000);
});

// Page 8
$(".btnpage8").on("click", function () {
  const audiomain = document.getElementById("ambient");
  audiomain.pause();
  const vid = document.getElementById("clip2");
  vid.play();
  document.getElementById("realbtnpage8").click();

  setTimeout(function () {
    document.getElementById("realbtnpage9").click();
    audiomain.play();
    setTimeout(function () {
      document.getElementById("realbtnpage10").click();
    }, 3000);
  }, 32000);
});

// Page 12
$(".btnpage12").on("click", function () {
  document.getElementById("12").classList.add("fadeOut");
  document.body.style.backgroundImage = "url('../img/GARDEN.jpg')";
  setTimeout(function () {
    document.getElementById("realbtnpage12").click();
  }, 1500);
});

// Flower selection
$(".flowerbtn").on("click", function () {
  flower = $(this).data("flower");
  document.getElementById("realbtnpage15").click();
});

// Page 20
$(".btnpage20").on("click", function () {
  document.getElementById("20").style.display = "none";
  setTimeout(function () {
    document.body.style.backgroundImage = "url('../img/BLACK.png')";
    setTimeout(function () {
      document.body.style.backgroundImage = "url('../img/SUNFLOWER-01.jpg')";
      setTimeout(function () {
        document.getElementById("realbtnpage20").click();
      }, 1000);
    }, 1500);
  }, 100);
});

// Page 22
$(".btnpage22").on("click", function () {
  document.body.style.backgroundImage = "url('../img/SUNFLOWER-02.jpg')";
  document.getElementById("point_01").innerHTML =
    "ดิน<br>" + $(this).data("point");
  document.getElementById("realbtnpage22").click();
});

// Page 24
$(".btnpage24").on("click", function () {
  document.body.style.backgroundImage = "url('../img/SUNFLOWER-04.jpg')";
  document.getElementById("point_02").innerHTML =
    "น้ำ<br>" + $(this).data("point");
  document.getElementById("realbtnpage24").click();
});

// Page 26
$(".btnpage26").on("click", function () {
  document.body.style.backgroundImage = "url('../img/SUNFLOWER-03.jpg')";
  document.getElementById("point_03").innerHTML =
    "ลม<br>" + $(this).data("point");
  document.getElementById("realbtnpage26").click();
});

// Page 28
$(".btnpage28").on("click", function () {
  document.getElementById("point_04").innerHTML =
    "ไฟ<br>" + $(this).data("point");
  document.body.style.backgroundImage = "url('../img/BLACK.png')";
  document.getElementById("realbtnpage28").click();

  setTimeout(function () {
    document.getElementById("realbtnpage29").click();

    if (flower === "SUNFLOWER") {
      setTimeout(function () {
        applyFlower(
          "../img/SUNFLOWER-05.jpg",
          "../img/CARD/CARD-SUN.png",
          "ดอกทานตะวัน",
          "realbtnpage30-1"
        );
      }, 4000);
    } else if (flower === "LOTUS") {
      setTimeout(function () {
        applyFlower(
          "../img/LOTUS-05.jpg",
          "../img/CARD/CARD-LOT.png",
          "ดอกบัว",
          "realbtnpage30-2"
        );
      }, 4000);
    } else if (flower === "ORCHID") {
      setTimeout(function () {
        applyFlower(
          "../img/ORCHID-05.jpg",
          "../img/CARD/CARD-ORC.png",
          "ดอกกล้วยไม้",
          "realbtnpage30-3"
        );
      }, 4000);
    } else if (flower === "TULIP") {
      setTimeout(function () {
        applyFlower(
          "../img/TULIP-05.jpg",
          "../img/CARD/CARD-TUL.png",
          "ดอกทิวลิป",
          "realbtnpage30-4"
        );
      }, 4000);
    } else if (flower === "BOUG") {
      setTimeout(function () {
        applyFlower(
          "../img/BOUG-05.jpg",
          "../img/CARD/CARD-DOU.png",
          "ดอกเฟื่องฟ้า",
          "realbtnpage30-5"
        );
      }, 4000);
    } else if (flower === "DAISY") {
      setTimeout(function () {
        applyFlower(
          "../img/DAISY-05.jpg",
          "../img/CARD/CARD-DAI.png",
          "ดอกเดซี่",
          "realbtnpage30-6"
        );
      }, 4000);
    } else {
      setTimeout(function () {
        applyFlower(
          "../img/SUNFLOWER-05.jpg",
          null,
          "ดอกทานตะวัน",
          "realbtnpage30-1"
        );
      }, 4000);
    }
  }, 4000);
});

// Page 31
$(".btnpage31").on("click", function () {
  document.body.style.backgroundImage = "url('../img/BLACK.png')";
  document.getElementById("realbtnpage31").click();
  setTimeout(function () {
    document.getElementById("realbtnpage37").click();
    setTimeout(function () {
      document.body.style.backgroundImage = "url('../img/ALLFLOWER.jpg')";
      setTimeout(function () {
        const vid39 = document.getElementById("clip39");
        vid39.play();
        setTimeout(function () {
          document.getElementById("realbtnpage38").click();
        }, 1000);
        setTimeout(function () {
          document.body.style.backgroundImage = "url('../img/Full.jpg')";
          setTimeout(function () {
            document.getElementById("realbtnpage39").click();
          }, 4000);
        }, 3000);
      }, 4000);
    }, 4000);
  }, 4000);
});

// Page 42
$(".btnpage42").on("click", function () {
  document.getElementById("realbtnpage42").click();
  setTimeout(function () {
    document.getElementById("realbtnpage40").click();
  }, 5000);
});

// Page 44
$(".btnpage44").on("click", function () {
  document.body.style.backgroundImage = "url('../img/Full.jpg')";
  document.getElementById("realbtnpage44").click();
});

// Download Card
$(".downloadbtn").on("click", function () {
  const img = document.getElementById("cardimg");
  const link = document.createElement("a");
  link.href = img.src;
  link.download = "Flowersblooming.sds.jpg";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

/**
 * Helper function to apply flower visuals and triggers.
 */
function applyFlower(bgImage, cardSrc, flowerName, btnId) {
  document.body.style.backgroundImage = `url('${bgImage}')`;
  if (cardSrc) {
    document.getElementById("cardimg").src = cardSrc;
  }
  document.getElementById("flowernamehere").innerHTML = flowerName;
  document.getElementById(btnId).click();
}
