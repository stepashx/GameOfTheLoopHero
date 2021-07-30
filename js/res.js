let Block = {
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

let Item = {   
    attack : {
        flail : {
            1: {
                name : "Серебряный моргенштерн",
                description :" Наносит 1 единицу урона на расстоянии 2 клеток, а также имеет прочность 3",
                distance : 2,
                damage : 1,
                hp : 3
            },
            2: {
                name : "Золотой моргенштерн",
                description : "Наносит 1 единицу урона на расстоянии 2 клеток, а также имеет прочность 5",
                distance : 2,
                damage : 1,
                hp : 5
            },      
            3: {
                name : "Алмазный моргенштерн",
                description : "Наносит 2 единицы урона на расстоянии 2 клеток, а также имеет прочность 10",
                distance : 2,
                damage : 2,
                hp : 10
            }
        },
        sword : {
            1: {
                name : "Серебряный меч",
                description : "Наносит 1 единицу урона на расстоянии 1 клетки, а также имеет прочность 3",
                distance : 1,
                damage : 1,
                hp : 3
            },
            2: {
                name : "Золотой меч",
                description : "Наносит 1 единицу урона на расстоянии 1 клетки, а также имеет прочность 5",
                distance : 1,
                damage : 1,
                hp : 5
            },         
            3: {
                name : "Алмазный меч",
                description : "Наносит 2 единицы урона на расстоянии 1 клетки, а также имеет прочность 10",
                distance : 1,
                damage : 2,
                hp : 10
            }
        },
        bowArrow : {
            name : "Лук",
            description : "Наносит 1 единицу урона на расстоянии от 2 до 3 клеток, а также имеет в запасе 3 стрелы",
            distance : [2, 3],
            damage : 1,
            arrow : 3
        }
    },
    world : {
        shovel : {
            1: {
                name : "Серебряная лопата",
                description :" Уменьшает уровень клетки (Земля) на 1 единицу на расстоянии 1 клетки, а также имеет прочность 3",
                distance : 1,
                damage : 1,
                hp : 3
            },
            2: {
                name : "Золотая лопата",
                description : "Уменьшает уровень клетки (Земля) на 1 единицу на расстоянии 1 клетки, а также имеет прочность 5",
                distance : 1,
                damage : 1,
                hp : 5
            },         
            3: {
                name : "Алмазная лопата",
                description : "Уменьшает уровень клетки (Земля) на 2 единицы на расстоянии 1 клетки, а также имеет прочность 10",
                distance : 1,
                damage : 2,
                hp : 10
            }
        },
        pick : {
            1: {
                name : "Серебряная кирка",
                description : "Уменьшает уровень клетки (Гора) на 1 единицу на расстоянии 1 клетки, а также имеет прочность 3",
                distance : 1,
                damage : 1,
                hp : 3
            },
            2: {
                name : "Золотая кирка",
                description : "Уменьшает уровень клетки (Гора) на 1 единицу на расстоянии 1 клетки, а также имеет прочность 5",
                distance : 1,
                damage : 1,
                hp : 5
            },         
            3: {
                name : "Алмазная кирка",
                description : "Уменьшает уровень клетки (Гора) на 2 единицы на расстоянии 1 клетки, а также имеет прочность 10",
                distance : 1,
                damage : 2,
                hp : 10
            }
        },
    },
    armor : {
        shield : {

        }
    }
}