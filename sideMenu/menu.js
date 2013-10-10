
function Menu( controller ,  menu ){

  this.controller = controller;

  console.log( menu );
  console.log( this.controller );

  this.width = this.controller.params.width;


  this.title    = menu.title;
  this.options  = menu.options;

  // Index for which menu we are on
  this.currentOption = 0;

  console.log( this.options );

  this.createDOMElements();

}


Menu.prototype = {

  createDOMElements:function(  ){

    this.holder = document.createElement( 'div' );
    this.holder.classList.add( 'menuHolder' );

    this.holder.style.width     = this.controller.params.width + 'px';


    this.controller.holder.insertBefore( this.holder , this.controller.holder.firstChild );
    this.controller.holder.appendChild( this.holder );


    for( var i = 0; i < this.options.length; i ++ ){

      var height  = window.innerHeight / this.options.length;
      var top     = height * i ;

      var holder = document.createElement( 'div' );
      holder.classList.add( 'menuOption' );

      holder.style.width     = this.width + 'px';
      holder.style.height    = height + 'px';

      this.holder.appendChild( holder );

      var text        = document.createElement( 'p' ); 
      text.innerHTML  = this.options[i].title;
      
      holder.appendChild( text );

      // Creating easier access
      this.options[i].dom     = holder;

      // Getting us position for checking which option is selected
      this.options[i].top     = top;
      this.options[i].bottom  = top + height;

    }

  },

  initDOM: function(){

    for( var i = 0; i < this.options.length; i++ ){

      this.createDOMElements( i );

    }

  },

  createSubMenu: function( whichSubMenu ){

    this.subMenu = new Menu( this.controller , this.options[ whichSubMenu ] );

  },


  // Figures out which option is being hovered over
  checkWhichOption: function( p ){

    for( var i = 0;  i < this.options.length; i++ ){
      if( p[1] >= this.options[i].top && p[1] < this.options[i].bottom ){
        this.currentOption = i;
      }
    }

  },

  updateDOM: function(){

    for( var i = 0;  i < this.options.length; i++ ){

      if( i == this.currentOption )
        this.options[i].dom.classList.add( 'hovered' );
      else
        this.options[i].dom.classList.remove( 'hovered' );
      
    }

  }



}





