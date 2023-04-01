<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var param1 = urlParams.get('b');

if (param1 == 1) {
let k = "";
for (let i = 1; i <= 10; i++) {
  //text += "<br>The number is " + i;
 k += i + ", ";

}
   document.getElementById("demo").innerHTML = "اختار الاصحاح,"+k;
}

</script>

</body>
</html>
