alert("xush kelibsiz")
var first_name = prompt("ismingiz nma?");
var last_name = prompt("familyangiz nma?");
var young = prompt("yoshingiz nechida?");
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