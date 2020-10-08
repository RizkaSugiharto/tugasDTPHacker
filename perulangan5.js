<html>
<body>
<script>
  var baris = 5;
var polaBintang = "*";
var polaSamaDgn = "=";
var hasil = "";

for (let indexx = 1; indexx < 10; indexx++) {
	if ((indexx %2)==0) {
	hasil = hasil.concat(polaSamaDgn);
	} else { 
	hasil = hasil.concat(polaBintang);
	}
}
console.log(""+hasil);

hasil="";
for (let indexx = 1; indexx < 8; indexx++) {
	if ((indexx %2)==0) {
	hasil = hasil.concat(polaSamaDgn);
	} else { 
	hasil = hasil.concat(polaBintang);
	}
}
console.log(" "+hasil);

hasil="";
for (let indexx = 1; indexx < 6; indexx++) {
	if ((indexx %2)==0) {
	hasil = hasil.concat(polaSamaDgn);
	} else { 
	hasil = hasil.concat(polaBintang);
	}
}
console.log(" "+hasil);
hasil="";
for (let indexx = 1; indexx < 4; indexx++) {
	if ((indexx %2)==0) {
	hasil = hasil.concat(polaSamaDgn);
	} else { 
	hasil = hasil.concat(polaBintang);
	}
}
console.log(" " +hasil);
console.log("  " +polaBintang);
</script>
</body>
</html>