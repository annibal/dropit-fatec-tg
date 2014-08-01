// dragging be made throught jQuery UI
            
            // palette: be sure there are colors >= to the shape possibilities (12 to 10 now)
            var colors = ['EE2222','22EE22','44D344','44CC77','0055FF','2288EE','2070FF','E6E66E','E233E2','22EFFE','273747','928355'];
            
            /**
             * Deploys Models removind duplicates. <br/>Also returns array with the deployed.<br/>
            * Pick Between (exact name):<br /><br />
            * regular square<br />
            * horizontal square<br />
            * vertical square<br />
            * regular circle<br />
            * horizontal circle<br />
            * vertical circle<br />
            * triangle isosceles<br />
            * triangle equilatero<br />
            * triangle reto-left<br />
            * triangle reto-right<br />
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
                    if (okDeploy) { // if none of the deployed matches this shape
                        deployed.push(v); // add it to the deployeds
                        $('<div/>').attr('class',((v.indexOf('shape') == -1)?'shape ':'')+v).appendTo($('#shapeContainer')); // "deploy" it (adds 'shape' class if hasn't)
                    }
                });
                return deployed;
            }
            
            $(function() {
                
                var shapeModels = [];
                $('#shapeHolders').children().each(function(i,v) {
                    shapeModels.push($(v).attr('class'))
                });
                var baseShapes = deployBaseModels(shapeModels);
                
//                var baseShapes = deployBaseModels([ // example of how this ignores duplicates
//                    'square vertical', 'circle regular', 'triangle isosceles', 'square regular', 'square regular'
//                    , 'circle regular', 'square regular', 'triangle isosceles', 'circle regular', 'circle regular'
//                    , 'triangle equilatero', 'triangle reto-left', 'triangle reto-right'
//                ]);
                
                // set the colors
                $(baseShapes).each(function(i,value) {
                    var index = Math.round(Math.random() * colors.length);
                    if (index < 0) index = 0;
                    if (index > colors.length -1) index = colors.length -1;
                    var selectedColor = colors.splice(index,1);
                    
                    val = value;
                    while(val.indexOf(' ') != -1) {
                        val = val.replace(' ','.');
                    }
                    
                    // sets the bg color of everybody: the shapeModels and shapeHolders
                    $('.'+val).each(function() {
                        $(this).css({'background-color':'#'+selectedColor});
                        console.log($(this).attr('class'));
                    });
                });
                
                $('#shapeContainer').children().each(function() {
                    var className = '.'+$(this).attr('class').replace(' ui-draggable','').replace(new RegExp(' ','g'),'.');
                    if ($(this).attr('class').indexOf('shape') != -1) {
                        $(this).draggable({
                            revert: "invalid",
                            helper:"clone",
                            start:function() {
                                
                            },
                            stop:function() {
                                
                            }
                        }); // for each of the shapeHolders (containers) with same class as the shapeModel, make them droppable and accept only this shapeModel
                        $('#shapeHolders').children(className).each(function() {
                            $(this).droppable({
                                greedy: true,
                                accept:className,
                                activeClass: "activeFeedbackClass",
                                hoverClass: "hoverFeedbackClass",
                                drop:function(e,ui) {
                                    var me = $(e.target);
                                    me.attr('class', me.attr('class') + ' cheese');
                                    console.log(className);
                                }
                            });
                        });
                    }
                })
            });