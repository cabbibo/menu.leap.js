

  function MenuController( params ){

    this.params = _.defaults( params || {} , {

      speed: 1,
      onFinish: function(){ console.log( this.selected ); },
      width: 100,
      //height: 200   //TODO:Will compress all options into this height, so we ar

    });

    // Array to hold all of the selected options
    this.selected  = [];

    this.menus = [];

    //Index for which menu we are on
    this.currentMenu = 0;

    this.holder = document.createElement( 'div' );
    this.holder.classList.add( 'fullHolder' );
    
    //this.holder.style.width     = this.params.width  + "px";
    this.holder.style.height    = this.params.height + "px";


    document.body.appendChild( this.holder );


  }

  MenuController.prototype = {

    createMenu: function( menuArray ){

      var menu = new Menu( this , menuArray );

      this.menus.push( menu );

    },

    destroyMenu: function( whichMenu ){

      whichMenu.destroy();
      var i = this.menus.indexOf( whichMenu );
      this.menus.splice( i , 1 );

    }

  }
