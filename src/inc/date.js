const HijriDate = new Intl.DateTimeFormat('ru-TN-u-ca-islamic',
{day: 'numeric', month: 'long',year : 'numeric'})
.format(Date.now())

const JulianDate = new Intl.DateTimeFormat("ru", {
  year: "numeric",
   month: "long",
   day: "numeric"
 }).format(Date.now());


 export { HijriDate, JulianDate }