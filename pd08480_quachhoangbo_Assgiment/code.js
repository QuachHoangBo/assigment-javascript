let count = 1;

function Slide(count) {
  switch (count) {
    case 1:
      document.getElementById("slide").src = "./img/slide1.jpg";
      document.getElementById("caption1").textContent =
        "Bí ẩn của Rừng Rậm Đắk Lắk";
      document.getElementById("caption2").textContent =
        "Khám phá vẻ đẹp huyền bí của rừng rậm Đắk Lắk, nơi ẩn chứa những loài động vật quý hiếm và những thảo nguyên xanh mướt.";
      document.getElementById("caption").style.textAlign = "center";
      document.getElementById("count1").style.backgroundColor = "#41cafc8f";
      document.getElementById("count2").style.backgroundColor = "white";
      document.getElementById("count3").style.backgroundColor = "white";
      break;
    case 2:
      document.getElementById("slide").src = "./img/slide2.jpg";
      document.getElementById("caption1").textContent =
        "Hành Trình Đến Với Cộng Đồng Ê Đê";
      document.getElementById("caption2").textContent =
        "Trải nghiệm văn hóa Ê Đê độc đáo và thân thiện, gặp gỡ những người dân hiền lành và hòa bình, và tham gia vào cuộc sống của họ.";
      document.getElementById("caption").style.textAlign = "left";
      document.getElementById("count2").style.backgroundColor = " #41cafc8f";
      document.getElementById("count1").style.backgroundColor = "white";
      document.getElementById("count3").style.backgroundColor = "white";
      break;
    case 3:
      document.getElementById("slide").src = "./img/silde4.jpg";
      document.getElementById("caption1").textContent =
        "Mặt Hồ Đa Nhim Lãng Mạn";
      document.getElementById("caption2").textContent =
        "Thư giãn tại Mặt Hồ Đa Nhim, nơi bạn có thể ngắm hoàng hôn tuyệt vời và tham gia các hoạt động giải trí nước sôi động.";

      document.getElementById("caption").style.textAlign = "right";
      document.getElementById("count3").style.backgroundColor = " #41cafc8f";
      document.getElementById("count2").style.backgroundColor = "white";
      document.getElementById("count1").style.backgroundColor = "white";
      break;
    default:
      console.log("ERROR");
      break;
  }
}

function Right() {
  if (count >= 3) {
    count = 1;
  } else {
    count++;
  }
  Slide(count);
}

function Left() {
  if (count <= 1) {
    count = 3;
  } else {
    count--;
  }
  Slide(count);
}

for (let i = 1; i <= 3; i++) {
  document.getElementById("count" + [i]).onclick = () => {
    count = i;
    Slide(count);
  };
}
// ------------- Destination -------------------\\
//====btnNext===\\
let btnLeftDestination = document.getElementById("leftDestination");
let btnRightDestination = document.getElementById("rightDestination");
let newDestination = document.getElementById("newDestination");
let countMax = 0;
let nextDestination;
let oneSlideDestination = -355;
btnRightDestination.onclick = () => {
  if (countMax == 3) {
    console.log("Max");
  } else {
    countMax++;
    nextDestination = oneSlideDestination * countMax;
    newDestination.style.left = nextDestination + "px";
  }
  console.log(countMax);
};
btnLeftDestination.onclick = () => {
  if (countMax == 0) {
    console.log("Min");
  } else {
    countMax--;
    nextDestination = oneSlideDestination * countMax;
    newDestination.style.left = nextDestination + "px";
  }
  console.log(countMax);
};
//===Apprecitae====\\

for (let i = 0; i <= 5; i++) {
  let sao1 = document.getElementById(`sao1${i}`);
  let sao2 = document.getElementById(`sao2${i}`);
  let sao3 = document.getElementById(`sao3${i}`);
  let sao4 = document.getElementById(`sao4${i}`);
  let sao5 = document.getElementById(`sao5${i}`);
  sao1.onclick = () => {
    sao1.style.color = "white";
    sao2.style.color = "black";
    sao3.style.color = "black";
    sao4.style.color = "black";
    sao5.style.color = "black";
  };
  sao2.onclick = () => {
    sao1.style.color = "white";
    sao2.style.color = "white";
    sao3.style.color = "black";
    sao4.style.color = "black";
    sao5.style.color = "black";
  };
  sao3.onclick = () => {
    sao1.style.color = "white";
    sao2.style.color = "white";
    sao3.style.color = "white";
    sao4.style.color = "black";
    sao5.style.color = "black";
  };
  sao4.onclick = () => {
    sao1.style.color = "white";
    sao2.style.color = "white";
    sao3.style.color = "white";
    sao4.style.color = "white";
    sao5.style.color = "black";
  };
  sao5.onclick = () => {
    sao1.style.color = "white";
    sao2.style.color = "white";
    sao3.style.color = "white";
    sao4.style.color = "white";
    sao5.style.color = "white";
  };
}
//--------btnLetGo------------\\
let btnLetGo = document.querySelectorAll("#btnDestination");
btnLetGo[0].onclick = () => {
  alert("địa chỉ google map: https://maps.app.goo.gl/aZrdyjqLRKJ1Q4ye8");
};
btnLetGo[1].onclick = () => {
  alert("địa chỉ google map: https://maps.app.goo.gl/AvaD3FKyfsVMNdi17");
};
btnLetGo[2].onclick = () => {
  alert("địa chỉ google map: https://maps.app.goo.gl/x7vuQnjQwJK7QVkw6");
};
btnLetGo[3].onclick = () => {
  alert("địa chỉ google map: https://maps.app.goo.gl/4WjKJ3yDDWtShyAG9");
};
btnLetGo[4].onclick = () => {
  alert("địa chỉ google map: https://maps.app.goo.gl/1YBKbyWYZgVjhd5s6");
};
btnLetGo[5].onclick = () => {
  alert("địa chỉ google map: https://maps.app.goo.gl/xNHnhWMepz5TZSMC7");
};
// --------------------- time -------------------
// Ngày dự định (năm, tháng (0-indexed), ngày, giờ, phút, giây)
const targetDate = new Date("2023-10-27T00:00:00").getTime();

// Cập nhật đồng hồ đếm ngược mỗi giây
const countdownInterval = setInterval(() => {
  const currentDate = new Date().getTime();
  const timeLeft = targetDate - currentDate;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Hiển thị đồng hồ đếm ngược
  document.querySelector(".ngay").textContent = `${days}`;
  document.querySelector(".gio").textContent = `${hours}`;
  document.querySelector(".phut").textContent = `${minutes}`;
  document.querySelector(".giay").textContent = `${seconds}`;

  // Kiểm tra nếu thời gian đã hết
  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    document.querySelector("#TextComback").textContent = "Welcome Back!";
  }
}, 1000);
// ------------------------- Lấy vị trí người dùng --------\\
navigator.geolocation.getCurrentPosition(function (vitri) {
  const viDo = location.coords.latitude;
  const kinhDo = location.coords.longitude;
});

//-------------Audio ----------------\\
let audio = document.getElementById("myAudio");
let playButton = document.getElementById("controls");

playButton.onclick = () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
};
/*----------- Contact --------------*/
const buttonContact1 = document.getElementById("buttonContact1");
const buttonContact2 = document.getElementById("buttonContact2");
const inputName = document.getElementById("inputName");
const inputEmail = document.getElementById("inputEmail");
const inputPhone = document.getElementById("inputPhone");
buttonContact1.addEventListener("click", () => {
  let name = inputName.value;
  let email = inputEmail.value;
  let phone = inputPhone.value;
  // Kiểm tra số điện thoại chỉ chứa số và có tối đa 11 số
  const phoneRegex = /^\d{1,10}$/;
  const isPhoneValid = phoneRegex.test(phone);

  // Kiểm tra định dạng email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email);

  if (isPhoneValid && isEmailValid) {
    alert("Đã gửi thành công!");
    document.getElementById("contact1").style.display = "none";
    document.getElementById("contact2").style.width = "100%";
    document.getElementById(
      "contactText"
    ).textContent = `Thank you for coming ${name}`;
  } else {
    alert(
      "Đăng nhập thất bại. Vui lòng kiểm tra lại số điện thoại và định dạng email."
    );
  }
});
buttonContact2.addEventListener("click", () => {
  inputName.value = "";
  inputEmail.value = "";
  inputPhone.value = "";
});
