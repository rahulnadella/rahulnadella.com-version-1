
var X_MAX = 840 - 30;
var Y_MAX = 295 - 30;

var NODE_SIZE = 14;
var INNER_NODE_SIZE = 7;
var CUR_NODE_SIZE = 9;
var LINE_WIDTH = 14;
//var NAME_OFFSET = new Point( 12, -14);
var FONT_SIZE = 16;
var TEXT_FONT = "Computer Modern";
var CHARACTER_STYLE = {
		fillColor: 'black',
		fontSize: FONT_SIZE,
        font: TEXT_FONT,
        
		};
 
 function toHTMLname( name ){
    var htmlname = name.replace(/\s/g, '' );
    htmlname = htmlname.replace(/[.'-@]/, '');
    return htmlname
    }
    
// function LegendItem( start, end, subwayLine ){
    
     // this.line = new Line(subwayLine.color, subwayLine.name);
     // this.line.path.add( start, end)
     // title = new PointText( end + new Point( 7,5) );
     // title.content = subwayLine.name;
     // title.characterStyle = {
		// fillColor: 'black',
		// fontSize: 14,
        // font: TEXT_FONT
		// }; 
        
// }
        
       
function Line( color, name){
    // the Line object creates a subway line. 
    //   color: must be a paper.js RgbColor or a keyword color, eg: 'black', 'green'.

    this.color = color;
    
    this.path = new Path();
    this.path.strokeWidth = LINE_WIDTH;
    this.path.strokeColor = this.color;
    this.path.strokeJoin = 'round';
    this.name = name;
	
}
	
function DashLine( color, point1, point2){
	this.color = color;
	this.path = new Path();
	this.path.style = { 
		strokeWidth: LINE_WIDTH,
		strokeColor: this.color,
		};
	this.path.dashArray = [7,4];
	
	this.path.add(point1, point2);
	}
		
	
		
function SingleNode( line, position, neighbours, name, name_offset, name_angle){
    // the Node object is a non transitionay subway stop
    //      line: the line the node lies on.
    //      position: the coordinates on the canvas as Point class object.
    //      neighbours: the neighbours of the node.  It 
    //          must be the syntax {'E':Neighbour1, 'W':Neighbour2, etc.}. Note: this way we can also do things like:
    //          {'W': Neighbour1, 'S': Neighbour1, 'E': Neighbour2}. Note all the directions need to be defined.
    //      name: the station name to be displayed.
    //      url: the url to go to if the SpaceBar is pressed. Leave as '' if not wanted.
    //      name_offset: the amount to move the display named away from the center of the station. It must be a paper.js Point
    //                   object. ie. new Point( 10, 10) will position the top left corner of the text 10 pixels right and 
    //                  10 pixels below the center of the station.
    //      name_angle: the angle the name to be at. Enter it in counterclockwise radians.
    
    this['line'] = line;
    this['position'] = position;
    this['init_position'] = position;
    this['neighbours'] = neighbours;
	this['name'] = name;
    this['name_angle'] = name_angle;
    this['neighbours'] = neighbours;
    this['htmlname'] = toHTMLname( this['name']);
    this["singlenode"] = true;
    this["nameOffset"] = name_offset;

	nodes.push(this)
    
    //Methods
    this.onkeydownNode = onkeydownNode;
    this.emptyNode = function(){
            //this method fires when the user enters the node.
            this.inner_circle.fillColor = 'white';
            this['inner_circle'].scale(1/1.2)
            removeText(this['htmlname']);

        };
    this.fillNode = function(){
            //this method fires when the user enters the node.
            this.inner_circle.fillColor = 'black';
            this['inner_circle'].scale(1.2)
            fillNode(this);
            addText( this['htmlname'] );
            };
    
    // generate the visual shapes.
    this.outer_circle = new Path.Circle( this['position'], NODE_SIZE);
    this.outer_circle.fillColor = this['line']['color'];
    
    this.inner_circle = new Path.Circle( this['position'], INNER_NODE_SIZE);
    this.inner_circle.fillColor = 'white';
	
	
	this['text'] = new PointText( this.position +  this.nameOffset) 
	this['text'].content = this['name'];
    this['text'].characterStyle = CHARACTER_STYLE;
    this['text'].rotate( -this['name_angle'], this['position'] );
    this["text"].point =  this['position'] + this["nameOffset"];

	
    // add it to the line.
    this["index"] = this["line"]["path"].segments.length
    this['line']['path'].add( this['position'] );    
    }
    
    
function TransitionNode( line, line2, angle, position, neighbours, name, name_offset, name_angle){
    // the Node object is a non transitionay subway stop
    //      line: the primary line the node lies on.
    //      line2: the secondary line the node lies on.
    //      angle: the angle of the above and underneath node. Equal to the angle of the two lines.
    //      position: the coordinates on the canvas as Point class object.
    //      neighbours: the neighbours of the node.  It 
    //          must be the syntax {'E':Neighbour1, 'W':Neighbour2, etc.}. Note: this way we can also do things like:
    //          {'W': Neighbour1, 'S': Neighbour1, 'E': Neighbour2}. Note all the directions need to be defined.
    //      name: the station name to be displayed.
    //      url: the url to go to if the SpaceBar is pressed. Leave as '' if not wanted.
    //      name_offset: the amount to move the display named away from the center of the station. It must be a paper.js Point
    //                   object. ie. new Point( 10, 10) will position the top left corner of the text 10 pixels right and 
    //                  10 pixels below the center of the station.
    //      name_angle: the angle the name to be at. Enter it in counterclockwise radians.

    
	var STROKE_WIDTH = 2; //this two control the offset and appearance of the 'underneath node'
	var CIRCLE_DIST = 16;
	
	
	//This Node is the class for line transition stations.
	this['line'] = line;
	this['line2'] = line2;
	this['position'] = position; //This is the position of either of the circles. The angle determines the position of the other one.
	this['init_position'] = position; 
	this['neighbours'] = neighbours;
	this['angle'] = angle; //This is the angle between the two circles.
	this['offset'] = new Point( CIRCLE_DIST*Math.cos( angle), CIRCLE_DIST*Math.sin( angle)  );
	this['positionAlt'] = new Point( this.position ) + this["offset"]
	this['name'] = name;
    this['htmlname'] = toHTMLname( this['name']);
    this["nameOffset"] = name_offset;
    this["singlenode"] = false;
	nodes.push(this);
	
	//Methods;
	this.onkeydownNode = onkeydownNode;
	this.emptyNode = function(){
			this.c1_inner.fillColor = this['line']['color'];
            removeText( this['htmlname']);
	}
	this.fillNode = function(){
			this.c1_inner.fillColor = 'black';
            fillNode(this);
            addText( this['htmlname'] );

	} 
	
    // Title to display.
	this['text'] = new PointText( this['position'] + name_offset );
	this['text'].content = this['name'];
    this['text'].characterStyle = CHARACTER_STYLE;
    //this['text'].rotate( -name_angle, this.position);
	
	//generate visual shapes
	//generate visual shapes
	this["c2_outer"] = new Path.Circle( this.positionAlt , NODE_SIZE);
	this["c2_outer"].strokeWidth = STROKE_WIDTH;
	this["c2_outer"].strokeColor = 'black';
	this["c2_outer"].fillColor = 'white';
	this["c2_inner"] = new Path.Circle( this.positionAlt, CUR_NODE_SIZE+1);
	this["c2_inner"].fillColor = this.line2.color;
	
	this["outer_circle"] = new Path.Circle( this.position, NODE_SIZE);
	this["outer_circle"].strokeWidth = STROKE_WIDTH;
	this["outer_circle"].fillColor = 'white';
	this["outer_circle"].strokeColor = 'black';
	this["c1_inner"] = new Path.Circle( this.position, CUR_NODE_SIZE);
	this["c1_inner"].fillColor = this.line.color;
    

	//add it the the lines.
    this["index1"] = this["line"]["path"].segments.length;
    this["index2"] = this["line2"]["path"].segments.length;


	this['line'].path.add( this['position']);
	this['line2'].path.add(this['positionAlt']);
	
	
	}
 
function onkeydownNode( keydown ){
    keyPressedFlag= 1;
    $('#keypressed').hide();

    for ( key in this.neighbours ){
        if (key == keydown){
            current_position.emptyNode();
			
            current_position = this.neighbours[key];
            //console.log( this.neighbours );
            current_position.fillNode();
            }
    }
    return 0;

}

function fillNode(node){
    //this method fires when the user enters the node.
	window.scrollTo(0,0);
	if (node.name == "All Blogs") {
		window.location.href = "/blogs";
	}

}
    
function addText(name){
    $('#'+ name).toggle()

    }
	
function removeText(name){
	//document.getElementById(data).style.display = 'none';
    $('#'+ name).toggle()
}

function emptyNode(){
    //this function fires when the user leaves the node;
    var c = new Path.Circle( this.position, NODE_SIZE);
    c.fillColor = this.line.color;
    var ic = new Path.Circle( this.position, INNER_NODE_SIZE);
    ic.fillColor = 'white';
	removeText(this.name);

    } 
	
function trim( point ){
	point["x"] = Math.max( Math.min( point["x"], X_MAX), 30 )
	point["y"] = Math.max( Math.min( point["y"], Y_MAX), 30 )
	return point
}


function update_position_single_node(node, point){
    node.position = point;
    node.line.path.segments[ node.index ].point = point;
    node.inner_circle.position = point;
    node.outer_circle.position = point;
    node["text"].point =  node['position'] + node["nameOffset"];

}

function update_position_multi_node(node, point){

    node.position = point;
    node.altPosition = new Point( point ) + node.offset;
    node.line.path.segments[ node.index1 ].point = point;
    node.line2.path.segments[ node.index2 ].point = node.altPosition;
    node.c2_outer.position = node.altPosition
    node.c2_inner.position = node.altPosition
    node.c1_inner.position = point;
    node.outer_circle.position = point;
    node["text"].point = node['position']  + node["nameOffset"];

}	

function onKeyDown(event){
    var key = event.key;
    if ((key=="up" && shiftDown) || (key=="w" ) ){
        current_position.onkeydownNode('N');}
    else if ((key=="left" && shiftDown) || (key=="a" ) ){
        current_position.onkeydownNode('W');}
    else if ((key=="right" && shiftDown) || (key=="d" ) ){
        current_position.onkeydownNode('E');}
    else if ((key=="down" && shiftDown) || (key=="s" ) ){
        current_position.onkeydownNode('S');}
    else if (key=="shift"){
        shiftDown=1;}
}

function onKeyUp(event){
    if (event.key == "shift"){
        shiftDown=0;
        }
}


function onMouseDown(event){
	var N = nodes.length;
	for( var i=0; i<N; i++){
		var node_position = nodes[i].position;
		if (Path.Circle( node_position, NODE_SIZE ).bounds.contains(event.point) ){

			current_position.emptyNode();
			current_position = nodes[i];
			current_position.fillNode();
			current_position.outer_circle.scale(1.6)
			dragging = true; 
			break;
		}
	}
}



function onMouseUp(event){
	if (dragging){
		current_position.outer_circle.scale( 1/1.6 );
	}
    dragging = false;

}



function onMouseDrag(event){
    point = event.point
	//&& ( point.x < X_MAX ) && (point.y < Y_MAX) ){
    if  (dragging == true){
	
		if (distance(point, current_position.init_position) > 30) { 
		
				if (current_position["singlenode"]){
					update_position_single_node( current_position, trim(point) );
				}
				else{
					update_position_multi_node( current_position, trim(point) );

					}
			}
	
		else{
				if (current_position["singlenode"]){
					update_position_single_node( current_position, current_position.init_position );
				}
				else{
					update_position_multi_node( current_position, current_position.init_position );

					}
		}
	}
}



function distance( p1, p2 ){
	return Math.sqrt( Math.pow( p1.x - p2.x ,2) + Math.pow( p1.y - p2.y,2) )
}


function onMouseMove(event){
    // This function fires whenever the mouse moves. Creates hover pointer
	var N = nodes.length;
	for( var i=0; i<N; i++){
		if (Path.Circle( nodes[i].position, NODE_SIZE ).bounds.contains(event.point) ){
            document.body.style.cursor = 'pointer';
			return;
		}
	}
    document.body.style.cursor = 'default';

}


function onFrame(event){
	//halo.remove();
	halo.strokeColor = current_position.line.color;
    halo.scale( Math.pow( 1.04, Math.sin(event.count/6 )));
    halo.position = current_position.position ;

}

	   
function oc(a)
{
  var o = {};
  for(var i=0;i<a.length;i++)
  {
    o[a[i]]='';
  }
  return o;
}
	
/////////////////////////

var title = new PointText( new Point(35,185) );
title.content = "Metro";
title.characterStyle = {
		fillColor: 'black',
		fontSize: 30,
        font: TEXT_FONT
		}; 

var title = new PointText( new Point(35,155) );
title.content = "rahulnadella.com";
title.characterStyle = {
		fillColor: 'black',
		fontSize: 20,
        font: TEXT_FONT
		}; 
		
//create flag for pressing keys
var keyPressedFlag = 0;
var alpha = 0;
 
///////////// MINISUBWAY ///////////////

var MainLine = new Line( '#af1b8b', 'Main');
var BlogLine = new Line( '#b3d529', 'Blogs');
var ProjectsLine = new Line('#ababab', 'Projects');
var TwitterLine = new Line('#9AE4E8', 'Twitter');

var nodes = [];

var Main_height = 100;
var Twitter_height = 205;
var diff = 1/2*(Twitter_height - Main_height);
var p = 182+2*diff;

var homeNode = new SingleNode( MainLine, new Point(50, Main_height), null, 'Home',new Point( -10, -20), 0 );

//var bmhNode = new SingleNode( ProjectsLine, new Point( 182 + 1*diff, Main_height-diff), null, 'Bayesian Methods for Hackers',  new Point(19, 0), 0);
var bmhNode = new SingleNode(ProjectsLine,  new Point( 182-diff, Main_height-diff), null, 'Reviews',new Point( 15, -16), 0);

    var projectsNode = new TransitionNode( MainLine, ProjectsLine, 0.79, new Point( 182, Main_height), null, 'Projects',  new Point( 12, -14),0 );
    var organTransplantNode = new SingleNode( ProjectsLine, new Point( 182+diff, Main_height+diff), null, 'Organ Transplantation', new Point( 19, 0),0);
    
       var pythoraNode = new TransitionNode( ProjectsLine, TwitterLine, 0, new Point( p ,Twitter_height ), null, 'Pythora', new Point( 15, -20),0);
       var instareaderNode = new SingleNode( TwitterLine, new Point( p + 152, Twitter_height), null, 'Instareader',  new Point( -30, -20),0 );
       var sunriseNode = new SingleNode( TwitterLine, new Point( p + 152*2-10, Twitter_height), null, 'Sunrise Alarm Clock', new Point( -70, -20), 0 );
        
    var hobbiesNode = new SingleNode( ProjectsLine, new Point(182+3*diff, Twitter_height + diff ), null, 'Hobbies', new Point( -50,28),0);

var researchNode = new SingleNode( MainLine, new Point( 334, Main_height), null, 'Research', new Point( 12, -14),0);

    var blogNode = new TransitionNode( MainLine, BlogLine, -0.79, new Point( 486, Main_height), null, 'Blogs',  new Point( 18, 26),0 ) ;
    var codingNode = new SingleNode( BlogLine, new Point( 486 + 70, 45), null, 'Coding',  new Point( 13, -14),0);
    var additionalLinksNode = new SingleNode( BlogLine, new Point( 690, 45), null,'Additional Links', new Point( 13, -14),0);

var resumeNode = new SingleNode( MainLine, new Point(640, Main_height), null, 'Resume',new Point( 12, -14),0);
var twNode = new TransitionNode( MainLine, TwitterLine, -3.14, new Point( 640+2*diff, Twitter_height), null, '@rahulnadella',new Point( 12,-14),0 );

//populuate neighbours.'S':projectsNode
homeNode.neighbours = {'E':projectsNode};
projectsNode.neighbours = {'W':homeNode, 'N':bmhNode, 'E':researchNode, 'S': organTransplantNode};
researchNode.neighbours = {'E':blogNode, 'W':projectsNode};
blogNode.neighbours = {'W': researchNode, 'E':resumeNode, 'N':codingNode };
//bmhNode.neighbours = {'W':gitNode};
bmhNode.neighbours = {'S': projectsNode};
resumeNode.neighbours = {'W':blogNode, 'E':twNode, 'S':twNode };
codingNode.neighbours = {'S': blogNode, 'E': additionalLinksNode};
additionalLinksNode.neighbours = {'S': codingNode, 'W':codingNode };
organTransplantNode.neighbours = {'N':projectsNode, 'S': pythoraNode, 'E': pythoraNode,'W':projectsNode };
hobbiesNode.neighbours = {'W': pythoraNode, 'N':pythoraNode,};
pythoraNode.neighbours = {'W': organTransplantNode, 'N':organTransplantNode, 'E':instareaderNode, 'S':hobbiesNode };
instareaderNode.neighbours = {'W': pythoraNode, 'E':sunriseNode };
sunriseNode.neighbours = {'W': instareaderNode, 'E':twNode };
//moreProjectsNode.neighbours = {'W':hobbiesNode};
twNode.neighbours = {'N': resumeNode, 'W': sunriseNode }; 


//construct the dashed paths.
var blogconstructionpath = new DashLine( BlogLine.color, additionalLinksNode.position + new Point(14,0), additionalLinksNode.position + new Point(100, 0) );
//var projectsconstructionpath = new DashLine( ProjectsLine.color, moreProjectsNode.position + new Point(14,0), moreProjectsNode.position + new Point(110, 0) );

//create the legend
/* var p = new Point(20, 140)
var lgnt = new Point(60,0);
var btw = new Point(0,25);

var key = new LegendItem( p, p + lgnt, MainLine );
var key = new LegendItem( p + btw, p + btw + lgnt, BlogLine );
var key = new LegendItem( p + btw+btw, p + btw+btw + lgnt, ProjectsLine );
var key = new LegendItem( p + btw+btw+btw, p + btw+btw+btw + lgnt, TwitterLine ); */


// initialize myself.
var current_position = homeNode;
current_position.fillNode();

//create the legend
var legend = new Raster("legend");
legend.position = new Point( 105, 210 );
legend.scale( 0.9);



// form the halo
var halo = new Path.Circle( current_position.position, NODE_SIZE  );
halo.strokeColor = current_position.line.color;
halo.strokeWidth = 3;

var shiftDown = 0;
var dragging = false;
