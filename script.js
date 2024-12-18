var x = setInterval(function(){
    var now = new Date();
    
    // var currentTime = now.toLocaleTimeString();
   
    //var options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
   // var currentTime = now.toLocaleTimeString([], options);
  
  // var currentDate = now.toLocaleDateString().split('/').reverse().join('-');
  // document.getElementById('date').innerHTML = currentDate.slice(0,5)+currentDate.slice(8)+currentDate.slice(4,7);
    
    var day = now.getDate();
    var month = now.getMonth()+1;
    var year = now.getFullYear();
    var currentDate = year+'-'+month+'-'+day;
    
    var second = now.getSeconds();
    var minute = now.getMinutes();
    var hour = now.getHours();
    var currentTime = hour+':'+minute+':'+second;
    
    document.getElementById('date').innerHTML = currentDate;
    document.getElementById('time').innerHTML = currentTime;
    
  } )