

var l1 = {

  title:" Left 1 ",

}

var down ={
  
  title: 'DOWN' ,
  options: [ l1 , l2 , l3 ]

}

var right ={
  
  title: 'RIGHT' ,
  options: [ l1 , l2 , l3 ]

}



var left ={
  
  title: 'LEFT' ,
  options: [ l1 , l2 , l3 ]

}


var menu = [

  title: " Menu ",
  options: [ left , right , down ]

]


function onFinish(){

  console.log( this );

}


function Menu( params ){

  this.params = _.defaults( params || {} , {

    menuTree: menu,
    onFinish: 




  });

  this.options = [];
  

}



