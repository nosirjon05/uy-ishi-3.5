alert("xush kelibsiz")
var first_name = prompt("ismingiz nma?").trim();
var last_name = prompt("familyangiz nma?").trim();
var young = prompt("yoshingiz nechida?").trim();
var minyoung = 16
alert("malumotlar uchun rahmat")

if (young >= minyoung) {
  alert(first_name + " Marhamat kiring");
}else {
  alert(first_name + " Katta bolganingizda keling")
}

console.log(
  `"siz haqingizdagi ma'lumotlar"
  ${first_name}
  ${last_name}
  ${young}`
);