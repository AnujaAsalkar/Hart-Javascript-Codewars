function maximum(arr)
{
  var rows = arr.length;
  var columns =arr[0].length;
  var path = new Array(rows);
  var cache= new Array(rows);
  
  for(var i=0; i<rows; i++){
    path[i] = new Array(columns);
    cache[i] = new Array(columns);
  }
  
  for(var i=0; i < rows; i++)
    for(var j=0; j < columns; j++)
    {
      cache[i][j] = -1;
      path[i][j] = 'z';
    }

  cache[0][0]=arr[0][0];
  
  
  for (var i = 1; i < rows; i++){
    cache[i][0] = cache[i-1][0] + arr[i][0];
  }

  for (j = 1; j < columns; j++){
     cache[0][j] = cache[0][j-1] + arr[0][j];
  }

  for (i = 1; i < rows; i++)
    for (j = 1; j < columns; j++)
      cache[i][j] = max(cache[i-1][j], cache[i][j-1], i, j, path) + arr[i][j];

    findPath(arr,path,rows,columns);
    return cache[rows-1][columns-1];
}

function max(left, up, r, c, path){
  if(left < up){
    path[r][c]= 'l';
    return up;
  }
  else{
    path[r][c]= 'u';
    return left;
  }
  
}

function findPath(arr,path, rows, columns){
  var final_path = new Array(rows+1);
    var count = 0, r= rows, c = columns;
    
    for(count = 0; count < rows ; count ++){
      if(path[r-1][c-1] == 'l'){
        final_path[count] = 'r';
        c = c - 1;
      }
      else{
        final_path[count] = 'd';
        r = r - 1;
      }
    }
    if(arr[0][1] > arr[1][0])
        final_path[count] = 'r';
      else{
        final_path[count] = 'd';
    }
    console.log(final_path.reverse());
}

console.log(maximum([[12,4,38],[2,10,4],[10,48,10]]));
console.log(maximum([[1,2,3],[4,5,6],[7,8,9]]));
console.log(maximum([[1,2,3],[4,5,6],[7,8,9],[10,11,12]]));
