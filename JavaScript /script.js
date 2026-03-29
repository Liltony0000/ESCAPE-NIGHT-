function togglePayment() {
  const type = document.getElementById("guestType").value;
  const paymentArea = document.getElementById("paymentArea");

  if (type === "male") {
    paymentArea.style.display = "block";
  } else {
    paymentArea.style.display = "none";
  }
}

function copyAccountNumber() {
  const accountNumber = "7025948808";

  navigator.clipboard.writeText(accountNumber);

  document.getElementById("popupText").innerText =
    "Account number " + accountNumber + " copied! Go to your OPay app to pay.";

  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}