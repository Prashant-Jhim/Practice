var busyStudent = function(startTime, endTime, queryTime) {
    var Count = 0
    for (let i = 0 ; i < startTime.length ; i++){
      var Index = []
      for (let j = startTime[i] ; j < endTime[i] + 1; j++){
        Index.push(j)
      }
      if (Index.indexOf(queryTime) != -1){
          Count++
      }
    }
    console.log(Count)
      
  };
busyStudent([4],[4],5)