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
        },
        
        "boatLeft": {
            "variations" : 16
        },
        "boatRight": {
            "variations" : 16
        },
        "boatBody": {
            "variations" : 20
        },
        "boatFlag": {
            "variations" : 4
        },
        "treeLeaves_small": {
            "variations" : 7
        },
        "treeLeaves_medium": {
            "variations" : 7
        },
        "treeLeaves_big": {
            "variations" : 7
        },
        "wood_log": {
            "variations" : 4
        },
        "roof": {
            "variations" : 12
        },
        "truckCargo": {
            "variations" : 6
        },
        "truckHeadWindow": {
            "variations" : 1
        },
        "ice_cream": {
            "variations" : 3
        }
    },
    
    //1 bola  
    //1 carro
    //1 sorvete
    //2 arvore
    //2 barco
    //2 foguete
    //3 caminhao
    //3 casa
    //3 predio
    "phases":
    {
        "easy" : {
            "phase_1_bola" : {
                "name" : "F1",
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
            },
            "phase_sorvete" : {
                "name" : "F2",
                "shapeDistance" : 150,
                "shapes" : {
                    0 : {
                        "name" : "circle",
                        "style" : {
                            "left" : "150px",
                            "top" : "17px",
                            "width": "100px",
                            "height": "100px"
                        }
                    },
                    1 : {
                        "name" : "circle",
                        "style" : {
                            "left" : "95px",
                            "top" : "100px",
                            "width": "100px",
                            "height": "100px"
                        }
                    },
                    2: {
                        "name" : "circle",
                        "style" : {
                            "left" : "205px",
                            "top" : "100px",
                            "width": "100px",
                            "height": "100px"
                        }
                    },
                    3: {
                        "name" : "ice_cream",
                        "style" : {
                            "left" : "100px",
                            "top" : "200px",
                            "width": "200px",
                            "height": "300px"
                        }
                    }
                },
                "graphs" : {
                    
                }
            },
            "phase_car" : {
                "name" : "F3",
                "shapeDistance" : 30,
                "shapeRoom" : {
                    "width" : 250, "height" : 500
                },
                "shapes" : {
                    0 : {
                        "name" : "circle",
                        "style" : {
                            "left" : "232px",
                            "top" : "220px",
                            "width": "80px",
                            "height": "80px"
                        }
                    },
                    1 : {
                        "name" : "circle",
                        "style" : {
                            "left" : "72px",
                            "top" : "220px",
                            "width": "80px",
                            "height": "80px"
                        }
                    },
                    2: {
                        "name" : "boatBody",
                        "style" : {
                            "left" : "56px",
                            "top" : "143px",
                            "width": "272px",
                            "height": "80px"
                        }
                    },
                    3: {
                        "name" : "boatBody",
                        "style" : {
                            "left" : "112px",
                            "top" : "80px",
                            "width": "160px",
                            "height": "64px"
                        }
                    }
                },
                "graphs" : {
                    
                }
            }
        },
        "medium" : {
            "phase_tree" : {
                "name" : "M1",
                "shapeDistance" : 30,
                "shapeRoom" : {
                    "width" : 250, "height" : 500
                },
                "shapes" : {
                    0 : {
                        "name" : "treeLeaves_small",
                        "style" : {
                            "left" : "100px",
                            "top" : "50px",
                            "width": "125px",
                            "height": "75px"
                        }
                    },
                    1 : {
                        "name" : "treeLeaves_medium",
                        "style" : {
                            "left" : "88px",
                            "top" : "125px",
                            "width": "150px",
                            "height": "75px"
                        }
                    },
                    2: {
                        "name" : "treeLeaves_big",
                        "style" : {
                            "left" : "76px",
                            "top" : "200px",
                            "width": "175px",
                            "height": "75px"
                        }
                    },
                    3: {
                        "name" : "wood_log",
                        "style" : {
                            "left" : "140px",
                            "top" : "275px",
                            "width": "50px",
                            "height": "120px"
                        }
                    }
                },
                "graphs" : {
                    
                }
            },
            "phase_boat" : {
                "name" : "M2",
                "shapeDistance" : 60,
                "shapeRoom" : {
                    "width" : 400, "height" : 500
                },
                "shapes" : {
                    0 : {
                        "name" : "boatBody",
                        "style" : {
                            "left" : "110px",
                            "top" : "200px",
                            "width": "175px",
                            "height": "75px"
                        }
                    },
                    1 : {
                        "name" : "boatFlag",
                        "style" : {
                            "left" : "188px",
                            "top" : "52px",
                            "width": "150px",
                            "height": "150px"
                        }
                    },
                    2: {
                        "name" : "boatLeft",
                        "style" : {
                            "left" : "16px",
                            "top" : "200px",
                            "width": "95px",
                            "height": "75px"
                        }
                    },
                    3: {
                        "name" : "boatRight",
                        "style" : {
                            "left" : "284px",
                            "top" : "200px",
                            "width": "95px",
                            "height": "75px"
                        }
                    }
                },
                "graphs" : {
                    
                }
            },
            "phase_rocket" : {
                "name" : "M3",
                "shapeDistance" : 60,
                "shapeRoom" : {
                    "width" : 250, "height" : 450
                },
                "shapes" : {
                    0 : {
                        "name" : "circle",
                        "style" : {
                            "left" : "180px",
                            "top" : "170px",
                            "width": "100px",
                            "height": "100px",
                            "z-Index": "3"
                        }
                    },
                    1 : {
                        "name" : "wood_log",
                        "style" : {
                            "left" : "152px",
                            "top" : "100px",
                            "width": "150px",
                            "height": "350px",
                            "z-Index": "2"
                        }
                    },
                    2: {
                        "name" : "triangle",
                        "style" : {
                            "left" : "100px",
                            "top" : "4px",
                            "width": "250px",
                            "height": "100px",
                            "z-Index": "2"
                        }
                    },
                    3: {
                        "name" : "roof",
                        "style" : {
                            "left" : "80px",
                            "top" : "300px",
                            "width": "150px",
                            "height": "150px",
                            "z-Index": "1"
                        }
                    },
                    4: {
                        "name" : "roof",
                        "style" : {
                            "left" : "225px",
                            "top" : "300px",
                            "width": "150px",
                            "height": "150px",
                            "z-Index": "1"
                        }
                    }
                },
                "graphs" : {
                    
                }
            }
        },
        "hard" : {
//            "P" : {
//                "name" : "P",
//                "shapeDistance" : 100,
//                "shapes" : {
//                    0 : {
//                        "name" : "pilhaUp",
//                        "style" : {
//                            "left" : "210px",
//                            "top" : "150px",
//                            "width" : "128px",
//                            "height" : "128px",
//                            "z-index" : "1"
//                        }
//                    },
//                    1 : {
//                        "name" : "pilhaDown",
//                        "style" : {
//                            "left" : "284px",
//                            "top" : "150px",
//                            "width" : "128px",
//                            "height" : "128px",
//                            "z-index" : "1"
//                        }
//                    }
//                },
//                "graphs" : {
//                    0: {
//                        "name" : "controller",
//                        "style" : {
//                            "left" : "129px",
//                            "top" : "60px",
//                            "width" : "356px",
//                            "height" : "356px"
//                        }
//                    }
//                }
//            }
            "phase_truck" : {
                "name" : "D1",
                "shapeDistance" : 90,
                "shapeRoom" : {
                    "width" : 250, "height" : 400, "offsetX" : 0, "offsetY" : 0
                },
                "shapes" : {
                    0 : {
                        "name" : "boatBody",
                        "style" : {
                            "left" : "20px",
                            "top" : "100px",
                            "width": "230px",
                            "height": "130px"
                        }
                    },
                    1 : {
                        "name" : "boatBody",
                        "style" : {
                            "left" : "255px",
                            "top" : "130px",
                            "width": "100px",
                            "height": "100px"
                        }
                    },
                    2: {
                        "name" : "circle",
                        "style" : {
                            "left" : "15px",
                            "top" : "230px",
                            "width": "60px",
                            "height": "60px"
                        }
                    },
                    3: {
                        "name" : "circle",
                        "style" : {
                            "left" : "95px",
                            "top" : "230px",
                            "width": "60px",
                            "height": "60px"
                        }
                    },
                    4: {
                        "name" : "circle",
                        "style" : {
                            "left" : "250px",
                            "top" : "230px",
                            "width": "60px",
                            "height": "60px"
                        }
                    },
                    5: {
                        "name" : "truckHeadWindow",
                        "style" : {
                            "left" : "300px",
                            "top" : "135px",
                            "width": "50px",
                            "height": "50px",
                            "z-Index": "2"
                        }
                    }
                },
                "graphs" : {
                    
                }
            },
            "phase_house" : {
                "name" : "D2",
                "shapeDistance" : 90,
                "shapeRoom" : {
                    "width" : 250, "height" : 400, "offsetX" : 25, "offsetY" : 25
                },
                "shapes" : {
                    0 : {
                        "name" : "boatBody",
                        "style" : {
                            "left" : "70px",
                            "top" : "200px",
                            "width": "250px",
                            "height": "250px"
                        }
                    },
                    1 : {
                        "name" : "roof",
                        "style" : {
                            "left" : "70px",
                            "top" : "30px",
                            "width": "250px",
                            "height": "170px"
                        }
                    },
                    2: {
                        "name" : "truckHeadWindow",
                        "style" : {
                            "left" : "165px",
                            "top" : "330px",
                            "width": "60px",
                            "height": "120px",
                            "z-Index": "2"
                        }
                    },
                    3: {
                        "name" : "truckHeadWindow",
                        "style" : {
                            "left" : "240px",
                            "top" : "230px",
                            "width": "60px",
                            "height": "60px",
                            "z-Index": "2"
                        }
                    },
                    4: {
                        "name" : "truckHeadWindow",
                        "style" : {
                            "left" : "90px",
                            "top" : "230px",
                            "width": "60px",
                            "height": "60px",
                            "z-Index": "2"
                        }
                    }
                },
                "graphs" : {
                    
                }
            },
            "phase_building" : {
                "name" : "D3",
                "shapeDistance" : 90,
                "shapeRoom" : {
                    "width" : 250, "height" : 400, "offsetX" : 25, "offsetY" : 25
                },
                "shapes" : {
                    0 : {
                        "name" : "boatBody",
                        "style" : {
                            "left" : "70px",
                            "top" : "50px",
                            "width": "200px",
                            "height": "450px"
                        }
                    },
                    1 : {
                        "name" : "circle",
                        "style" : {
                            "left" : "90px",
                            "top" : "80px",
                            "width": "50px",
                            "height": "50px",
                            "z-Index": "2"
                        }
                    },
                    2 : {
                        "name" : "circle",
                        "style" : {
                            "left" : "90px",
                            "top" : "150px",
                            "width": "50px",
                            "height": "50px",
                            "z-Index": "2"
                        }
                    },
                    3 : {
                        "name" : "circle",
                        "style" : {
                            "left" : "90px",
                            "top" : "220px",
                            "width": "50px",
                            "height": "50px",
                            "z-Index": "2"
                        }
                    },
                    4 : {
                        "name" : "circle",
                        "style" : {
                            "left" : "90px",
                            "top" : "290px",
                            "width": "50px",
                            "height": "50px",
                            "z-Index": "2"
                        }
                    },
                    5 : {
                        "name" : "circle",
                        "style" : {
                            "left" : "200px",
                            "top" : "80px",
                            "width": "50px",
                            "height": "50px",
                            "z-Index": "2"
                        }
                    },
                    6 : {
                        "name" : "circle",
                        "style" : {
                            "left" : "200px",
                            "top" : "150px",
                            "width": "50px",
                            "height": "50px",
                            "z-Index": "2"
                        }
                    },
                    7 : {
                        "name" : "circle",
                        "style" : {
                            "left" : "200px",
                            "top" : "220px",
                            "width": "50px",
                            "height": "50px",
                            "z-Index": "2"
                        }
                    },
                    8 : {
                        "name" : "circle",
                        "style" : {
                            "left" : "200px",
                            "top" : "290px",
                            "width": "50px",
                            "height": "50px",
                            "z-Index": "2"
                        }
                    },
                    9: {
                        "name" : "truckHeadWindow",
                        "style" : {
                            "left" : "140px",
                            "top" : "380px",
                            "width": "60px",
                            "height": "120px",
                            "z-Index": "3"
                        }
                    }
                },
                "graphs" : {
                    
                }
            }
        }
        
    }// end of phases
}