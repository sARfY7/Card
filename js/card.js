function card_name() {
  $( "#Cardholder" ).keyup(function() {
  document.getElementById('cardholder-name').innerHTML = this.value;
});
}

function card_number() {
  $( "#Cardnumber" ).keyup(function() {
    if (this.value.length == 4) {
      this.value += " ";
    }
    else if (this.value.length == 9) {
      this.value += " ";
    }
    else if (this.value.length == 14) {
      this.value += " ";
    }
  document.getElementById('card-number').innerHTML = this.value;
});
}

function exp_date() {
  $( "#Expdate" ).keyup(function() {
    if (this.value.length == 2) {
      this.value += "/";
    }
  document.getElementById('card-expiry').innerHTML = this.value;
});
}
