var Block = {
    decor: {
        0 : {
            x : 10,
            y : 0,
            canMove : true,
            hp : 0
        },
        1 : {
            x : 204,
            y : 0,
            canMove : true,
            hp : 0
        },
        2 : {
            x : 398,
            y : 0,
            canMove : true,
            hp : 0
        },
        3 : {
            x : 592,
            y : 0,
            canMove : true,
            hp : 0
        }
    },
    earth : {
        0 : {
            x : 10,
            y : 250,
            canMove : false,
            hp : 2
        },
        1 : {
            x : 204,
            y : 250,
            canMove : true,
            hp : 2
        },
        2 : {
            x : 398,
            y : 250,
            canMove : true,
            hp : 2
        }
    },
    loot : {
        0 : {
            x : 10,
            y : 500,
            canMove : true,
            hp : 0
        },
        1 : {
            x : 204,
            y : 500,
            canMove : true,
            hp : 0
            
        },
        2 : {
            x : 398,
            y : 500,
            canMove : true,
            hp : 0
        },
        3 : {
            x : 592,
            y : 500,
            canMove : true,
            hp : 0
        },
        4 : {
            x : 786,
            y : 500,
            canMove : true,
            hp : 0
        },
        5 : {
            x : 980,
            y : 500,
            canMove : true,
            hp : 0
        },
        6 : {
            x : 1174,
            y : 500,
            canMove : true,
            hp : 0
        },
        7 : {
            x : 1368,
            y : 500,
            canMove : true,
            hp : 0
        },
        8 : {
            x : 1562,
            y : 500,
            canMove : true,
            hp : 0
        }
    },
    mountain : {
        0 : {
            x : 10,
            y : 750,
            canMove : false,
            hp : 5
        },
        1 : {
            x : 204,
            y : 750,
            canMove : true,
            hp : 5
        },
        2 : {
            x : 398,
            y : 750,
            canMove : true,
            hp : 5
        },
        3 : {
            x : 592,
            y : 750,
            canMove : false,
            hp : 5
        },
        4 : {
            x : 786,
            y : 750,
            canMove : false,
            hp : 5
        },
        5 : {
            x : 980,
            y : 750,
            canMove : false,
            hp : 5
        }
    },
    sand : {
        0 : {
            x : 10,
            y : 1000,
            canMove : true,
            hp : 0
        },
        1 : {
            x : 204,
            y : 1000,
            canMove : true,
            hp : 0
        }
    },
    tower : {
        0 : {
            x : 10,
            y : 1250,
            canMove : true,
            colour : 1,
            hp : 0
        },
        1 : {
            x : 204,
            y : 1250,
            canMove : true,
            colour : 2,
            hp : 0
        },
        2 : {
            x : 10,
            y : 1250,
            canMove : true,
            colour : 3,
            hp : 0
        },
        3 : {
            x : 204,
            y : 1250,
            canMove : true,
            colour : 4,
            hp : 0
        }
    },
    castle : {
        0 : {
            x : 10,
            y : 1500,
            canMove : true,
            hp : 0 
        }      
    }
}

var Item = {   
    attack : {
        sword : {
            1: {
                X : 230,
                Y : 10,
                name : "Серебряный меч",
                description : "Наносит 1 единицу урона на расстоянии 1 клетки, а также имеет прочность 3",
                damage : 1,
                hp : 3
            },
            2: {
                X : 120,
                Y : 10,
                name : "Золотой меч",
                description : "Наносит 1 единицу урона на расстоянии 1 клетки, а также имеет прочность 5",
                damage : 1,
                hp : 5
            },         
            3: {
                X : 10,
                Y : 10,
                name : "Алмазный меч",
                description : "Наносит 2 единицы урона на расстоянии 1 клетки, а также имеет прочность 10",
                damage : 2,
                hp : 10
            }
        }
    },
    world : {
        shovel : {
            0: {
                X : 10,
                Y : 130,
                name : "Серебряная лопата",
                description :" Уменьшает уровень клетки (Земля) на 1 единицу на расстоянии 1 клетки, а также имеет прочность 3",
                damage : 1,
                hp : 3
            },
            2: {
                X : 120,
                Y : 130,
                name : "Золотая лопата",
                description : "Уменьшает уровень клетки (Земля) на 1 единицу на расстоянии 1 клетки, а также имеет прочность 5",
                damage : 1,
                hp : 5
            },         
            3: {
                X : 230,
                Y : 130,
                name : "Алмазная лопата",
                description : "Уменьшает уровень клетки (Земля) на 2 единицы на расстоянии 1 клетки, а также имеет прочность 10",
                damage : 2,
                hp : 10
            }
        },
        pick : {
            1: {
                X : 10,
                Y : 250,
                name : "Серебряная кирка",
                description : "Уменьшает уровень клетки (Гора) на 1 единицу на расстоянии 1 клетки, а также имеет прочность 3",
                damage : 1,
                hp : 3
            },
            2: {
                X : 120,
                Y : 250,
                name : "Золотая кирка",
                description : "Уменьшает уровень клетки (Гора) на 1 единицу на расстоянии 1 клетки, а также имеет прочность 5",
                damage : 1,
                hp : 5
            },         
            3: {
                X : 230,
                Y : 250,
                name : "Алмазная кирка",
                description : "Уменьшает уровень клетки (Гора) на 2 единицы на расстоянии 1 клетки, а также имеет прочность 10",
                damage : 2,
                hp : 10
            }
        },
    }
}