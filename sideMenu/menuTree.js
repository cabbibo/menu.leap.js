

var d3 = {

  title:" Down 3 ",

}

var d2 = {

  title:" Down 2 ",

}
var d1 = {

  title:" Down 1 ",

}



var r3 = {

  title:" Right 3 ",

}

var r2 = {

  title:" Right 2 ",

}
var r1 = {

  title:" Right 1 ",

}


var l3 = {

  title:" Left 3 ",

}

var l2 = {

  title:" Left 2 ",

}
var l1 = {

  title:" Left 1 ",

}

var down ={
  
  title: 'DOWN' ,
  options: [ d1 , d2 , d3 ,d1 , d2 , d3 ]

}

var right ={
  
  title: 'RIGHT' ,
  options: [ r1 , r2 , r3 , d3 ]

}



var left ={
  
  title: 'LEFT' ,
  options: [ l1 , l2 , l3 , d1 , d2 , d3 ,d1 , d2 , d3 ]

}


var menuTree = {

  title: " Menu ",
  options: [ left , right , down ]

}
