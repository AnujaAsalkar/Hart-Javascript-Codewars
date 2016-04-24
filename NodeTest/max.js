function maximum(arr)
{

      
  var rows=arr.length;
 // console.log(arr[0][0]);
//  console.log(rows);
  var column=arr[0].length;
 // console.log(column);
  
   
  var path = new Array(rows);
  var cache= new Array(rows);
  
  for(var i=0; i<rows; i++){
    path[i] = new Array(column);
    cache[i] = new Array(column);
  }
  
  
  
  for(var m=0; i < rows; i++)
    for(var n=0; j < column; j++)
    {
      cache[m][n] = -1;
      path[m][n] = 'z';
    }

  cache[0][0]=arr[0][0];
  
  for (var i = 1; i < rows; i++)
   cache[i][0] = cache[i-1][0] + arr[i][0];

  for (j = 1; j < column; j++)
     cache[0][j] = cache[0][j-1] + arr[0][j];

  for (i = 1; i < rows; i++)
    for (j = 1; j < column; j++)
      cache[i][j] = max(cache[i-1][j], cache[i][j-1], i, j, path) + arr[i][j];

     for(var p=0; p< rows; p++){
        for(var q=0; q< column; q++){
          console.log(path[p][q]);
        }
        
     }
     return cache[rows-1][column-1];
}
function max(left, up, r, c, path){
  if(left < up){
    path[r][c]= 'd';
    return up;
  }
  else{
    path[r][c]= 'r';
    return left;
  }
  
}



console.log("sum:"+maximum([[12,4,38],[2,10,4],[10,48,10]]));