<html>
<body>
<script>
var baris=3
var polaBintang="*";
var polaSamaDgn="=";
var polaDolar="$";
var spasi="";
for (let indexx=baris; indexx>0; indexx--){
    var hasil="";
    
    var jmlhCell=(indexx*2)-1;
    //console.log(jmlhCell);
for (let indexx2=jmlhCell; indexx2>0; indexx2 --){
    if((indexx2 %2)==0){
        hasil=hasil.concat(polaSamaDgn);
    }
    else if((indexx2 %9)==1){
        hasil=hasil.concat(polaDolar);
    }
    else if((indexx2 )==jmlhCell){
    hasil=hasil.concat(polaDolar);
    }
    else {
        hasil=hasil.concat(polaBintang);
    }
}
    spasi +=" ";
    console.log(spasi+hasil);
}
</script>
</body>
</html>