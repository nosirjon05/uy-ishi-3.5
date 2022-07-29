var first_name = prompt("ismingiz nma?")
var last_name = prompt("familyangiz nma?")
var young = prompt("yoshingiz nechida?")
var minyoung = 16

if (young >= minyoung) {
  alert("Marhamat kiring");
}else {
  alert("Katta bolganingizda keling")
}

console.log(
  `"siz haqingizdagi ma'lumotlar"
  ${first_name}
  ${last_name}
  ${young}`
);