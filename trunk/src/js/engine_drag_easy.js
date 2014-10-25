// dragging be made throught jQuery UI
// called by phases - generates the draggable shapes, images of the shapeHolders and the minimap.
// general engine - easy, medium and hard.

// verbose control
function clog(text) {
    //window.console.log(text);
}

// draws the spawn area
var debugShapeRoom = false;

var shapes = gamedata["shapes"];
var defaultShapeRoom = new Object();
defaultShapeRoom.width = 310;
defaultShapeRoom.height = 510; // 10 less from an decent width/height to improve performance
defaultShapeRoom.offsetX = 5;
defaultShapeRoom.offsetY = -10;
defaultShapeRoom.shapeDistance = 50;
defaultShapeRoom.maxAttempts = 550;
var overflower = 20; // used to precisely define maximum width when finding ideal position

/**
 * Returns random from min (inclusive) and max (exclusive)
 * @param int min
 * @param int max
 * @returns {Number} random
 */
function randRange(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

function getDistance(x1,y1,x2,y2) {
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}
/**
 * Generates a block at x y with size w h. --> in objSize Object.
 * Default id is "generatedBlockAt234567890" (timestamp)
 * Default class is "genBlock"
 * with no bg ("none") and a "1px solid #000" border
 */
function makeBlock(x,y,w,h) {
    var genBlock = document.createElement("div");
    genBlock.setAttribute("style","display:block; position:absolute; " + 
        "left:"+x+"px; "+
        "top: "+y+"px; "+
        "width: "+w+"px; "+
        "height: "+h+"px; "+
        "border: "+( "1px solid #000;") + 
        "background: "+ ( "rgba(100,100,255,0.1);") );
    genBlock.setAttribute("id", "genBlock");
    document.body.appendChild(genBlock);
    return genBlock;
}
/**
 * Converts string with "px" on end to integer. specific to "px" values, but works with any 2 char length modifier
 * @param string css "NNNpx"
 * @returns int NNN
 */
function getCssPosInt(css) {
    if (css != undefined) {
        return parseInt(css.substr(0,css.length - "px".length))
    } else {
        clog('error: css to be read is undefined');
        return -1;
    }
}
function decayPosXToBlockOverflow(posX,obj, father) {
    var min_x = father.offset().left;
    var max_x = min_x + father.width() - overflower;
    var myW = posX + obj.width();
    clog("min_x: " + min_x + ", max_x: "+max_x+", posX: "+posX+", myW: "+myW);
    if(myW > max_x) {clog("Obj extrapolating RIGHT.");} else {clog("Obj is within RIGHT boundary, OK");}
    if(min_x > posX) {clog("Obj hidden before LEFT.");} else {clog("Obj is within LEFT boundary, OK");}
    while(myW > max_x) {
        clog(min_x + " < " + posX + ", " + (posX + obj.width()) + " < " + max_x);
        posX--;
        myW = (posX + obj.width());
    }
    return posX;
}
function decayPosYToBlockOverflow(posY,obj, father) {
    var min_y = father.offset().left;
    var max_y = min_y + father.height() - overflower;
    var myW = posY + obj.height();
    clog("min_y: " + min_y + ", max_y: "+max_y+", posY: "+posY+", myW: "+myW);
    if(myW > max_y) {clog("Obj extrapolating RIGHT.");} else {clog("Obj is within RIGHT boundary, OK");}
    if(min_y > posY) {clog("Obj hidden before LEFT.");} else {clog("Obj is within LEFT boundary, OK");}
    while(myW > max_y) {
        clog(min_y + " < " + posY + ", " + (posY + obj.height()) + " < " + max_y);
        posY--;
        myW = (posY + obj.height());
    }
    return posY;
}

 // --------------------- specific functions
 
/**
 * Deploys Models removind duplicates. <br/>
 * Also returns array with the deployed.
 */
function deployBaseModels(models) {
    var deployed = []
    var okDeploy;
    $(models).each(function(i,shape)
    {
        deployed.push(shape); // add it to the deployeds
        
    });
    return deployed;
}
/**
 * Checks via jQuery UI's "ui-droppable" class if there is any open hole and claims victory.
 * @returns boolean if win
 */
function checkVictory() {
    return ($('.ui-droppable').length == 0)
}


function initialize() {
    
    var shapeRoom = new Object();
    shapeRoom.shapeDistance = gamedata["phases"][window.dif][_GET.n]["shapeDistance"] || defaultShapeRoom.shapeDistance;
    if (gamedata["phases"][window.dif][_GET.n]["shapeRoom"] != undefined) {
        shapeRoom.width = gamedata["phases"][window.dif][_GET.n]["shapeRoom"]["width"] || defaultShapeRoom.width;
        shapeRoom.height = gamedata["phases"][window.dif][_GET.n]["shapeRoom"]["height"] || defaultShapeRoom.height;
        shapeRoom.offsetX = gamedata["phases"][window.dif][_GET.n]["shapeRoom"]["offsetX"] || defaultShapeRoom.offsetX;
        shapeRoom.offsetY = gamedata["phases"][window.dif][_GET.n]["shapeRoom"]["offsetY"] || defaultShapeRoom.offsetY;
    } else {
        shapeRoom = defaultShapeRoom;
    }
    if (debugShapeRoom) {
        var s = $("#shapes");
        makeBlock(s.offset().left + shapeRoom.offsetX, s.offset().top + shapeRoom.offsetY, shapeRoom.width, shapeRoom.height);
        window.sr = shapeRoom;
    }
	
    $('#shapeHolders').find('.graph').each(function(i,v) {
        var graphClass = $(this).attr('class').replace(' ui-draggable','').replace(new RegExp(' ','g'),'.').substr('.graph'.length);
        $(this).css({'background-image' : 'url("img/graphics/'+graphClass+'.png")'});
    });
    
    $('#shapes').find('.shape').each(function(i,shape) {
        // gets "shape circle", converts to "shape.circle.whatever" and removes "shape."
        var shapeName = $(shape).attr("class").replace(' ui-draggable','').replace(new RegExp(' ','g'),'.').substr('.shape'.length);
        
        // chooses random number among range of shapes set by "variations"
        var index = Math.round(Math.random() * shapes[shapeName]['variations']);
        if (index < 0) index = 0;
        if (index > shapes[shapeName]['variations'] -1) index = shapes[shapeName]['variations'] -1;
        var selectedColor = index + 1;  

        // same "shape circle whatever" to "shape.circle.whatever" replacement
        var val = $(shape).attr("class");
        while(val.indexOf(' ') != -1) {
            val = val.replace(' ','.');
        }
        var shapeObj = $('#shapes');
        val = "." + val;
        clog("This: " + $(this)+ " - " + val);
        clog("X:"+$(this).offset().left+", Y:"+$(this).offset().top+", W:"+$(this).width()+", H:"+$(this).height());
        var posX = randRange(shapeRoom.offsetX, shapeRoom.width);
        var posY = randRange(shapeRoom.offsetY, shapeRoom.height);
        
        // first time
        posX = decayPosXToBlockOverflow(posX,$(this),shapeObj);
        posY = decayPosYToBlockOverflow(posY,$(this),shapeObj);
        
        var goodPos = false;
        var others = $("#shapes").find('.shape[data-positioned="true"]');
        clog(others.length);
        var i = 0;
        var maxAttempts = defaultShapeRoom.maxAttempts || 150 ;
        while(!goodPos && others.length > 0 && i++ < maxAttempts) {
            posX = randRange(shapeRoom.offsetX, shapeRoom.width);
            posY = randRange(shapeRoom.offsetY, shapeRoom.height);
            
            posX = decayPosXToBlockOverflow(posX,$(this),shapeObj);
            posY = decayPosYToBlockOverflow(posY,$(this),shapeObj);
            
            clog("Random Pos (" + posX + ", " + posY + ")");
            goodPos = true;
            others.each(function() {
                var otherShape = $(this);
                var d = getDistance(getCssPosInt(otherShape.css("left")), getCssPosInt(otherShape.css("top")), posX, posY);
                clog("Other : (" + otherShape.css("left") + ", " + otherShape.css("top") + "). Distance: " + d );
                if (d < shapeRoom.shapeDistance ) {
                    goodPos = false;
                    clog("Bad Pos! Try Again.");
                    return;
                }
            });
            if (i > maxAttempts-1)
            clog("Max attempt limit reached.");
        }
        clog("Set that pos.");
        
        // sets the chosen image for each shape on shape board
        $(this).css({
                'background-image':'url("img/shapes/'+shapeName+' ('+selectedColor+').png")',
                "left" : posX,
                "top" : posY
            });
        $(this).attr("data-positioned","true");
        
        // sets the chosen image for each shape on stage
        $("#shapeHolders " + val).each(function() {
            $(this).css({'background-image':'url("img/holders/'+shapeName+'_placeholder.png")'});
            clog('url("img/holders/'+shapeName+'_placeholder.png")');
        });
    });

    $('#shapes').find('.shape').each(function() {
        var className = '.'+$(this).attr('class').replace(' ui-draggable','').replace(new RegExp(' ','g'),'.');
        if ($(this).attr('class').indexOf('shape') != -1) {
            $(this).draggable({
                revert: "invalid",
                zIndex : 150
            }); // for each of the shapeHolders (containers) with same class as the shapeModel, make them droppable and accept only this shapeModel
            $('#shapeHolders').find(className).each(function() {
                $(this).droppable({
                    greedy: true,
                    accept:className,
                    activeClass: "highlight-grab",
                    hoverClass: "highlight-hover",
                    tolerance: "intersect",
                    drop:function(e,ui) {
                        ui.draggable.css("display","none");
                        var shapeName = $(ui.helper).css('background-image');
                        $(e.target).css({'background-image':shapeName});
                        window.setTimeout(function(droppableObject, backgroundImage) {
                            droppableObject.css({'background-image':backgroundImage});
                        }, 50, $(e.target), shapeName);
                        $(e.target).droppable("destroy");
                        
                        window.setTimeout(function() {
                            if (checkVictory()) alert("Ganhou!");
                        }, 100);
                    },
                    over:function(e,ui) {
                        var shapeName = className.substr('.shape.'.length);
                        $(e.target).css({'background-image':'url("img/holders/'+shapeName+'_highlight_hover.png")'});
                    },
                    activate:function(e,ui) {
                        var shapeName = className.substr('.shape.'.length);
                        $(e.target).css({'background-image':'url("img/holders/'+shapeName+'_highlight_grab.png")'});
                    },
                    out:function(e,ui) {
                        var shapeName = className.substr('.shape.'.length);
                        $(e.target).css({'background-image':'url("img/holders/'+shapeName+'_placeholder.png")'});
                    },
                    deactivate:function(e,ui) {
                        var shapeName = className.substr('.shape.'.length);
                        $(e.target).css({'background-image':'url("img/holders/'+shapeName+'_placeholder.png")'});
                    }
                });
            });
        }
    })
}

$(function() {
    window.setTimeout(initialize, 100)
});