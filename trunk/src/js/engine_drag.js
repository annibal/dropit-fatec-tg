// dragging be made throught jQuery UI

var shapes = {
    'circle' : {
        'count' : 4
    },
    'triangle' : {
        'count' : 6
    },
	'pilhaUp' : {
		'count' : 1
	},
	'pilhaDown' : {
		'count' : 1
	}
}

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

$(function() {

    $('#shapeHolders').children('.graph').each(function(i,v) {
		var graphClass = $(this).attr('class').replace(' ui-draggable','').replace(new RegExp(' ','g'),'.').substr('.graph'.length);
		$(this).css({'background-image' : 'url("../img/graphics/'+graphClass+'.png")'});
	});

    var shapeModels = [];
    $('#shapeHolders').children('.shape').each(function(i,v) {
        shapeModels.push($(v).attr('class'))
    });
    var baseShapes = deployBaseModels(shapeModels);

    $(baseShapes).each(function(i,value) {
        // gets "shape circle", converts to "shape.circle.whatever" and removes "shape."
        var shapeName = value.replace(' ui-draggable','').replace(new RegExp(' ','g'),'.').substr('.shape'.length);
        
        // chooses random number among range of shapes set by "count"
        var index = Math.round(Math.random() * shapes[shapeName]['count']);
        if (index < 0) index = 0;
        if (index > shapes[shapeName]['count'] -1) index = shapes[shapeName]['count'] -1;
        var selectedColor = index + 1;

        // same "shape circle whatever" to "shape.circle.whatever" replacement
        var val = value;
        while(val.indexOf(' ') != -1) {
            val = val.replace(' ','.');
        }

        // sets the chosen image for each shape on shape board
        $('#shapeContainer .'+val).each(function() {
            $(this).css({'background-image':'url("../img/shapes/'+shapeName+' ('+selectedColor+').png")'});
        });
        
        // sets the chosen image for each shape on stage
        $('#shapeHolders .'+val).each(function() {
            $(this).css({'background-image':'url("../img/holders/'+shapeName+'_placeholder.png")'});
            //console.log('url("../img/holders/'+shapeName+'_placeholder.png")');
        });
    });

    $('#shapeContainer').children('.shape').each(function() {
        var className = '.'+$(this).attr('class').replace(' ui-draggable','').replace(new RegExp(' ','g'),'.');
        if ($(this).attr('class').indexOf('shape') != -1) {
            $(this).draggable({
                revert: "invalid",
                helper: "clone",
                start:function() {

                },
                stop:function() {

                }
            }); // for each of the shapeHolders (containers) with same class as the shapeModel, make them droppable and accept only this shapeModel
            $('#shapeHolders').children(className).each(function() {
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
                        $(e.target).css({'background-image':'url("../img/holders/'+shapeName+'_highlight_hover.png")'});
                    },
                    activate:function(e,ui) {
                        var shapeName = className.substr('.shape.'.length);
                        $(e.target).css({'background-image':'url("../img/holders/'+shapeName+'_highlight_grab.png")'});
                    },
                    out:function(e,ui) {
                        var shapeName = className.substr('.shape.'.length);
                        $(e.target).css({'background-image':'url("../img/holders/'+shapeName+'_placeholder.png")'});
                    },
                    deactivate:function(e,ui) {
                        var shapeName = className.substr('.shape.'.length);
                        $(e.target).css({'background-image':'url("../img/holders/'+shapeName+'_placeholder.png")'});
                    }
                });
            });
        }
    })
});