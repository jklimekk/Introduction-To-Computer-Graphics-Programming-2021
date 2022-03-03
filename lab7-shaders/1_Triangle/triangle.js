var gl;
var points;
window.onload = function init()
{
    var canvas = document.getElementById( "gl-canvas" );
    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" );
 }
var vertices = new Float32Array([-1, -1, 0, 1, 1, -1,
                                 -1, 0, -0.5, 1, 0, 0,
                                 0.5, 0.5, 0.75, 1, 1, 0.5]);
 //  Configure WebGL
gl.viewport( 0, 0, canvas.width, canvas.height );
gl.clearColor( 0.0, 0.0, 1.0, 0.5 );
//  load shaders 
   var program = initShaders( gl, "vertex-shader", "fragment-shader" );
   	gl.useProgram( program );
 
   // Initiate buffer and load data to GPU
   var bufferId = gl.createBuffer();
   gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
   gl.bufferData( gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW );
// Associate shader variables with buffer data and draw  
 var vP = gl.getAttribLocation( program, "vPosition" );
 gl.vertexAttribPointer( vP, 2, gl.FLOAT, false, 0, 0 );
 gl.enableVertexAttribArray( vP ); 
 render();
};
function render() 
{
    gl.clear( gl.COLOR_BUFFER_BIT );

    // pierwsza część zadania:
    // gl.drawArrays( gl.TRIANGLES, 0, 9 );


    // druga część zadania:
    gl.drawArrays( gl.TRIANGLE_STRIP, 0, 7 );
}
