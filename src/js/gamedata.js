// shapes are the possible existent shapes in the game.
//  default values are allowed. css defaults width and height to 50px
//  all "default_style" are loosely translated to css
// phases contain the tree configuration of them.
//  divided into easy, medium and hard, each with the shapes and their properties.
//  also all loosely translated to css
var gamedata = {
    "shapes":
    {
        "circle" : {
            "variations" : 4
        },
        "triangle" : {
            "variations" : 6
        },
        "pilhaUp" : {
            "variations" : 1
        },
        "pilhaDown" : {
            "variations" : 1
        }
    },
    
    "phases":
    {
        "easy" : {
            
        },
        "medium" : {
            
        },
        "hard" : {
            "test_phase" : {
                "name" : "1",
                "shapes" : {
                    0 : {
                        "name" : "circle",
                        "style" : {
                            "left" : "10px",
                            "top" : "10px"
                        }
                    },
                    1 : {
                        "name" : "circle",
                        "style" : {
                            "left" : "540px",
                            "top" : "340px"
                        }
                    },
                    2 : {
                        "name" : "circle",
                        "style" : {
                            "left" : "280px",
                            "top" : "20px"
                        }
                    },
                    3 : {
                        "name" : "triangle",
                        "style" : {
                            "left" : "380px",
                            "top" : "20px"
                        }
                    }
                },
                "graphs" : {
                    
                }
            },
            "P" : {
                "name" : "P",
                "shapes" : {
                    0 : {
                        "name" : "pilhaUp",
                        "style" : {
                            "left" : "210px",
                            "top" : "150px",
                            "width" : "128px",
                            "height" : "128px",
                            "z-index" : "1"
                        }
                    },
                    1 : {
                        "name" : "pilhaDown",
                        "style" : {
                            "left" : "284px",
                            "top" : "150px",
                            "width" : "128px",
                            "height" : "128px",
                            "z-index" : "1"
                        }
                    }
                },
                "graphs" : {
                    0: {
                        "name" : "controller",
                        "style" : {
                            "left" : "129px",
                            "top" : "60px",
                            "width" : "356px",
                            "height" : "356px"
                        }
                    }
                }
            }
        }
    }
}