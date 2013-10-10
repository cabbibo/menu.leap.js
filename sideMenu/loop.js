
  

  var controller;

  var cursor;

  function initLeap(){

    controller = new Leap.Controller({enableGestures:true});

    cursor = document.createElement( 'div' );
    cursor.classList.add( 'leapCursor' );

    document.body.appendChild( cursor );

    controller.cursor = cursor;

    controller.menuBorder   = window.innerWidth - menuController.params.width;
    controller.screenBorder = window.innerWidth; 

    console.log( controller.menuBorder );

    controller.loopFunction = function( frame ){

      if( frame.fingers.length >= 1 ){
      
        // convert to scene ( in this case DOM ) space
        this.cursorPosition = this.leapToScene( frame.fingers[0].tipPosition );
    
        // Make sure we get a oCursor the first time we get a cursorPos
        if( !this.oCursorPosition ){
          this.oCursorPosition = this.cursorPosition;
        }
        
        // Move our cursor to the properSpot
        this.cursor.style.left     = this.cursorPosition[0] + 'px';
        this.cursor.style.top      = this.cursorPosition[1] + 'px';

       
        // Sees if we are entering or exiting the Menu Active area
        this.checkPositions();

        // If we are in the menu area, select stuff
        if( this.selecting ){
          MC.menus[ MC.currentMenu ].checkWhichOption( this.cursorPosition );
        }

        // Updates the DOM So hovered class gets added and removed
        MC.menus[ MC.currentMenu ].updateDOM();

        // assign oCursor for next frame 
        this.oCursorPosition = this.cursorPosition;

      }

    }

    controller.leapToScene = function( pos ){

      var frame   = this.frame();
      var iBox    = frame.interactionBox;

      var left = iBox.center[0] - iBox.size[0]/2;
      var top = iBox.center[1] + iBox.size[1]/2;

      var x = pos[0] - left;
      var y = pos[1] - top;

      x /= iBox.size[0];
      y /= iBox.size[1];

      x *= window.innerWidth;
      y *= window.innerHeight;

      return [ x , -y  ];

    }

    controller.checkPositions = function(){
     
      var p   = this.cursorPosition;
      var oP  = this.oCursorPosition;

      if( p[0] >= this.menuBorder && oP[0] < this.menuBorder ){

        this.onMenuEnter();

      }

      if( p[0] <= this.menuBorder && oP[0] > this.menuBorder ){

        this.onMenuExit();

      }

      if( p[0] >= this.screenBorder && oP[0] < this.screenBorder){

        this.onScreenExit();

      }

      if( p[0] <= this.screenBorder && oP[0] > this.screenBorder ){

        this.onScreenEnter();

      }

    }

    controller.onMenuEnter = function(){

      this.selecting = true;
      console.log('Menu Entered');

    }

    controller.onMenuExit = function(){

      this.selecting = false;
      console.log( 'Menu Exit' );
      MC.menus[ MC.currentMenu ].currentOption = undefined;

    }

    controller.onScreenExit = function(){

      var menu = MC.menus[ MC.currentMenu ]
      var curOption = menu.options[ menu.currentOption ];

      if( curOption.options ){
        console.log('sss');
        MC.createMenu( curOption );
      }else{
        console.log('tree end reached');
      }

    }

    controller.onScreenEnter = function(){


    }

    controller.on( 'frame' , function(d){
    
      controller.loopFunction( d );

    });


    controller.connect();





  }

  function leapToScene(pos){

  

  }




