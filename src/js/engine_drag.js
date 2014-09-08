// dragging be made throught jQuery UI
// called by phases - generates the draggable shapes, images of the shapeHolders and the minimap.

shapes = gamedata["shapes"];
var ratio = new Object();

/**
 * Deploys Models removind duplicates. <br/>
 * Also returns array with the deployed.
 */
function deployBaseModels(models) {
    // TODO: shuffle order of appending
    var deployed = []
    var okDeploy;
    $(models).each(function(i,v)
    {
        okDeploy = true;
        $(deployed).each(function(j,v2) { // for each of the deployed shapes
            if (v == v2) { // is any of them equal this shape ?
                okDeploy = false; // then fuck
            }
        });
        if (okDeploy) { // if none of the deployed matches this shape (no fucks)
            deployed.push(v); // add it to the deployeds
            $('<div/>').attr('class',((v.indexOf('shape') == -1)?'shape ':'')+v).appendTo($('#shapeContainer')); // "deploy" it (adds 'shape' class if hasn't)
        }
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

/**
 * Converts string with "px" on end to integer. specific to "px" values, but works with any 2 char length modifier
 * @param string css "NNNpx"
 * @returns int NNN
 */
function getCssPosInt(css) {
    return parseInt(css.substr(0,css.length - "px".length))
}

/**
 * using position, size and background-image, adds SHAPE in ratio into model
 * @param DOMobject shape
 * @param string shapeName
 * @param int selectedColor
 * @global object ratio
 */
function addShapeModelItem(shape, shapeName, selectedColor) {
    var modelItem = $('<div/>');
    modelItem.attr('class', 'container');
    var modelItemChild = $('<div/>');
    modelItem.append(modelItemChild);
    modelItemChild.attr('class', 'model-shape');
    modelItemChild.css({
        'width'     : shape.width() * ratio.x,
        'height'    : shape.height() * ratio.y,
        'left'      : getCssPosInt(shape.css('left')) * ratio.x,
        'top'       : getCssPosInt(shape.css('top')) * ratio.y,
        'background-image':'url("img/shapes/'+shapeName+' ('+selectedColor+').png")'
    });
    $('#model').append(modelItem);
}
/**
 * using position, size and background-image, adds GRAPH in ratio into model
 * @param DOMobject graph
 * @param graphClass string
 * @global object ratio
 */
function addGraphModelItem(graph, graphClass) {
    var modelItem = $('<div/>');
    modelItem.attr('class', 'container');
    var modelItemChild = $('<div/>');
    modelItem.append(modelItemChild);
    modelItemChild.attr('class', 'model-shape');
    modelItemChild.css({
        'width'     : graph.width() * ratio.x,
        'height'    : graph.height() * ratio.y,
        'left'      : getCssPosInt(graph.css('left')) * ratio.x,
        'top'       : getCssPosInt(graph.css('top')) * ratio.y,
        'background-image' : 'url("img/graphics/'+graphClass+'.png")'
    })
    $('#model').append(modelItem);
}

function initialize() {
    // ratio between room and model preview
    ratio.x = parseFloat( (($('#model').width() / $('#shapeHolders').width()) + "").substr(0,5) ) ;
    ratio.y = parseFloat( (($('#model').height() / $('#shapeHolders').height()) + "").substr(0,5) ) ;
    
    $('#shapeHolders').find('.graph').each(function(i,v) {
        var graphClass = $(this).attr('class').replace(' ui-draggable','').replace(new RegExp(' ','g'),'.').substr('.graph'.length);
        $(this).css({'background-image' : 'url("img/graphics/'+graphClass+'.png")'});
        addGraphModelItem($(this), graphClass);
    });

    var shapeModels = [];
    $('#shapeHolders').find('.shape').each(function(i,v) {
        shapeModels.push($(v).attr('class'));
    });
    var baseShapes = deployBaseModels(shapeModels);

    $(baseShapes).each(function(i,value) {
        // gets "shape circle", converts to "shape.circle.whatever" and removes "shape."
        var shapeName = value.replace(' ui-draggable','').replace(new RegExp(' ','g'),'.').substr('.shape'.length);
        
        // chooses random number among range of shapes set by "variations"
        var index = Math.round(Math.random() * shapes[shapeName]['variations']);
        if (index < 0) index = 0;
        if (index > shapes[shapeName]['variations'] -1) index = shapes[shapeName]['variations'] -1;
        var selectedColor = index + 1;

        // same "shape circle whatever" to "shape.circle.whatever" replacement
        var val = value;
        while(val.indexOf(' ') != -1) {
            val = val.replace(' ','.');
        }

        // sets the chosen image for each shape on shape board
        $('#shapeContainer .'+val).each(function() {
            $(this).css({'background-image':'url("img/shapes/'+shapeName+' ('+selectedColor+').png")'});
        });
        
        // sets the chosen image for each shape on stage
        $('#shapeHolders .'+val).each(function() {
            $(this).css({'background-image':'url("img/holders/'+shapeName+'_placeholder.png")'});
            //console.log('url("img/holders/'+shapeName+'_placeholder.png")');
        });
        
        // duplicate containers and them shapes into preview
        $('#shapeHolders .'+val).each(function() {
            addShapeModelItem($(this), shapeName, selectedColor);
        })
    });

    $('#shapeContainer').find('.shape').each(function() {
        var className = '.'+$(this).attr('class').replace(' ui-draggable','').replace(new RegExp(' ','g'),'.');
        if ($(this).attr('class').indexOf('shape') != -1) {
            $(this).draggable({
                revert: "invalid",
                helper: "clone"
            }); // for each of the shapeHolders (containers) with same class as the shapeModel, make them droppable and accept only this shapeModel
            $('#shapeHolders').find(className).each(function() {
                $(this).droppable({
                    greedy: true,
                    accept:className,
                    activeClass: "highlight-grab",
                    hoverClass: "highlight-hover",
                    tolerance: "intersect",
                    drop:function(e,ui) {
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