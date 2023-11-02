// a clouser is a combination of a function bundled together with references to its surrounding state.in other words closers give you access to an outer function's scope from an inner function . In javascript , closers are created every time a function a created , at function creation time.


function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    // name ="kk";   // print this because override
    displayName();
  }
  init();

  
  //init() creates a local variable called name and a function called displayName(). The displayName() function is an inner function that is defined inside init() and is available only within the body of the init() function. Note that the displayName() function has no local variables of its own. However, since inner functions have access to the variables of outer functions, displayName() can access the variable name declared in the parent function, init().

// above from this website => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures