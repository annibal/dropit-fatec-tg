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
            "variations" : 4
        },
        "triangle_with_texture" : {
            "variations" : 2
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
            "test_phase" : {
                "name" : "T0",
                "shapeDistance" : 30,
                "shapes" : {
                    0 : {
                        "name" : "triangle_with_texture",
                        "style" : {
                            "left" : "150px",
                            "top" : "100px"
                        }
                    },
                    1 : {
                        "name" : "triangle",
                        "style" : {
                            "left" : "150px",
                            "top" : "200px"
                        }
                    },
                    2 : {
                        "name" : "triangle",
                        "style" : {
                            "left" : "100px",
                            "top" : "150px"
                        }
                    },
                    3 : {
                        "name" : "triangle",
                        "style" : {
                            "left" : "200px",
                            "top" : "150px"
                        }
                    },
                    4 : {
                        "name" : "circle",
                        "style" : {
                            "left" : "150px",
                            "top" : "150px"
                        }
                    },
                },
                "graphs" : {
                    
                }
            },
            "test_phase_2" : {
                "name" : "T1",
                "shapeDistance" : 32,
                "shapes" : {
                    0 : {"name" : "circle","style" : {
                            "left" : "100px", "top" : "100px",}},
                    1 : {"name" : "circle","style" : {
                            "left" : "125px", "top" : "150px"}},
                    2 : {"name" : "circle","style" : {
                            "left" : "150px", "top" : "100px"}},
                    3 : {"name" : "circle","style" : {
                            "left" : "175px", "top" : "150px"}},
                    8 : {"name" : "circle","style" : {
                            "left" : "200px", "top" : "100px",}},
                    9 : {"name" : "circle","style" : {
                            "left" : "225px", "top" : "150px"}},
                    10 : {"name" : "circle","style" : {
                            "left" : "250px", "top" : "100px"}},
                    11 : {"name" : "circle","style" : {
                            "left" : "275px", "top" : "150px"}},
                    4 : {"name" : "circle","style" : {
                            "left" : "100px", "top" : "200px"}},
                    5 : {"name" : "circle","style" : {
                            "left" : "125px", "top" : "250px"}},
                    6 : {"name" : "circle","style" : {
                            "left" : "150px", "top" : "200px"}},
                    7 : {"name" : "circle","style" : {
                            "left" : "175px", "top" : "250px"}},
                    12 : {"name" : "circle","style" : {
                            "left" : "200px", "top" : "200px"}},
                    13 : {"name" : "circle","style" : {
                            "left" : "225px", "top" : "250px"}},
                    14 : {"name" : "circle","style" : {
                            "left" : "250px", "top" : "200px"}},
                    15 : {"name" : "circle","style" : {
                            "left" : "275px", "top" : "250px"}},
                    
                    16 : {"name" : "circle","style" : {
                            "left" : "100px", "top" : "300px",}},
                    17 : {"name" : "circle","style" : {
                            "left" : "125px", "top" : "350px"}},
                    18 : {"name" : "circle","style" : {
                            "left" : "150px", "top" : "300px"}},
                    19 : {"name" : "circle","style" : {
                            "left" : "175px", "top" : "350px"}},
                    20 : {"name" : "circle","style" : {
                            "left" : "200px", "top" : "300px",}},
                    21 : {"name" : "circle","style" : {
                            "left" : "225px", "top" : "350px"}},
                    22 : {"name" : "circle","style" : {
                            "left" : "250px", "top" : "300px"}},
                    23 : {"name" : "circle","style" : {
                            "left" : "275px", "top" : "350px"}},
                    24 : {"name" : "circle","style" : {
                            "left" : "100px", "top" : "400px"}},
                    25 : {"name" : "circle","style" : {
                            "left" : "125px", "top" : "450px"}},
                    26 : {"name" : "circle","style" : {
                            "left" : "150px", "top" : "400px"}},
                    27 : {"name" : "circle","style" : {
                            "left" : "175px", "top" : "450px"}},
                    28 : {"name" : "circle","style" : {
                            "left" : "200px", "top" : "400px"}},
                    29 : {"name" : "circle","style" : {
                            "left" : "225px", "top" : "450px"}},
                    30 : {"name" : "circle","style" : {
                            "left" : "250px", "top" : "400px"}},
                    31 : {"name" : "circle","style" : {
                            "left" : "275px", "top" : "450px"}}
                },
                "graphs" : {
                    
                }
            },
            "phase_1_bola" : {
                "name" : "1",
                "shapeDistance" : 30,
                "shapeRoom" : {
                    "width" : 400,
                    "height" : 500
                },
                "shapes" : {
                    0 : {
                        "name" : "circle",
                        "style" : {
                            "left" : "150px",
                            "top" : "100px",
							"width" : "190px",
							"height" : "190px"
                        }
                    }
                },
                "graphs" : {
                    
                }
            }
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
				"shapeDistance" : 100,
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