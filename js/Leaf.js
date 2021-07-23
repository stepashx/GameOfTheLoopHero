const minRoomSize = 10;

class Point {
    constructor(X, Y) {
        this.x = X;
        this.y = Y;
    }
}

class Rectangle {
    constructor(X, Y, Width, Height) {
        this.x = X;
        this.y = Y;
        this.width = Width;
        this.height = Height;
        this.left = X;
        this.right = X + Width;
        this.top = Y;
        this.bottom = Y + Height;
    }
}

class Leaf {
    constructor(X, Y, Width, Height) {
        this.minLeafSize = 20;
        this.leftChild = undefined;
        this.rightChild = undefined;
        this.room = undefined;
        this.halls = [];
        this.x = X;
        this.y = Y;
        this.width = Width;
        this.height = Height;
    }

    // Разрезание листа
    split() {
        // Проверка на наличие детей
        if (this.leftChild !== undefined || this.rightChild !== undefined) {
            return false;
        }

        // определяем направление разрезания
        // если ширина более чем на 25% больше высоты, то разрезаем вертикально
        // если высота более чем на 25% больше ширины, то разрезаем горизонтально
        // иначе выбираем направление разрезания случайным образом
        let verticalOrHorizontal = Math.random() > 0.5;
        if (this.width > this.height && this.width / this.height >= 1.25) {
            verticalOrHorizontal = false;
        } else if (this.height > this.width && this.height / this.width >= 1.25) {
            verticalOrHorizontal = true;
        }

        // Ищем максимално возможный размер разреза
        const max = (verticalOrHorizontal ? this.height : this.width) - this.minLeafSize;
        // В случае, если максимальный возможный размер меньше допустимого,
        // говорим, что разрезание невозможно
        if (max <= this.minLeafSize) {
            return false;
        }

        // Рандомно выбираем размер разреза в промежутке
        const sizeOfSplit = Math.floor(Math.random() * (max - this.minLeafSize) + this.minLeafSize);

        if (verticalOrHorizontal) {
            this.leftChild = new Leaf(this.x, this.y, this.width, sizeOfSplit);
            this.rightChild = new Leaf(this.x, this.y + sizeOfSplit, this.width, this.height - sizeOfSplit);
        } else {
            this.leftChild = new Leaf(this.x, this.y, sizeOfSplit, this.height);
            this.rightChild = new Leaf(this.x + sizeOfSplit, this.y, this.width - sizeOfSplit, this.height);
        }

        return true;
    }

    // Функция генерирует все комнаты и коридоры
    // для этого листа и всех его дочерних листьев.
    createRooms() {
        if (this.leftChild !== undefined || this.rightChild !== undefined) {
            if (this.leftChild !== undefined) {
                this.leftChild.createRooms();
            }
            if (this.rightChild !== undefined) {
                this.rightChild.createRooms();
            }

            // В случае наличия двух детей,
            // можно соеденить две комнаты,
            // относящиеся к этим детям
            if (this.leftChild !== null && this.rightChild !== null) {
                this.createHall(this.leftChild.getRoom(), this.rightChild.getRoom());
            }
        } else {
            // размер комнаты может находиться в промежутке
            // от minRoomSize^2 тайла до размера листа - 2.
            let roomSize = new Point(Math.floor(Math.random() * (this.width - 2 - minRoomSize) + minRoomSize),
                Math.floor(Math.random() * (this.height - 2 - minRoomSize) + minRoomSize));
            // располагаем комнату внутри листа,
            // но не помещаем её прямо рядом со стороной листа
            let roomPos = new Point(Math.floor(Math.random() * (this.width - roomSize.x - 2) + 1),
                Math.floor(Math.random() * (this.height - roomSize.y - 2) + 1));
            this.room = new Rectangle(this.x + roomPos.x, this.y + roomPos.y, roomSize.x, roomSize.y);
        }
    }

    getRoom() {
        if (this.room !== undefined) {
            return this.room;
        } else {
            let lRoom;
            let rRoom;
            if (this.leftChild !== undefined) {
                lRoom = this.leftChild.getRoom();
            }
            if (this.rightChild !== undefined) {
                rRoom = this.rightChild.getRoom();
            }
            if (lRoom === undefined && rRoom === undefined) {
                return undefined;
            } else if (rRoom === undefined) {
                return lRoom;
            } else if (lRoom === undefined) {
                return rRoom;
            } else if (Math.random() > 0.5) {
                return lRoom;
            } else {
                return rRoom;
            }
        }
    }

    createHall(l, r) {

        // Теперь мы соединяем эти две комнаты коридорами.
        // Здесь мы выясняем, где какая точка находится,
        // а затем отрисовываем прямую линию или пару линий,
        // чтобы создать правильный угол для их соединения.
        let point1 = new Point(Math.floor(Math.random() * (l.right - l.left - 3) + l.left + 1),
            Math.floor(Math.random() * (l.bottom - l.top - 3) + l.top + 1));
        let point2 = new Point(Math.floor(Math.random() * (r.right - r.left - 3) + r.left + 1),
            Math.floor(Math.random() * (r.bottom - r.top - 3) + r.top + 1));

        const w = point2.x - point1.x;
        const h = point2.y - point1.y;

        if (w < 0) {
            if (h < 0) {
                if (Math.random() < 0.5) {
                    this.halls.push(new Rectangle(point2.x, point1.y, Math.abs(w), 1));
                    this.halls.push(new Rectangle(point2.x, point2.y, 1, Math.abs(h)));
                } else {
                    this.halls.push(new Rectangle(point2.x, point2.y, Math.abs(w), 1));
                    this.halls.push(new Rectangle(point1.x, point2.y, 1, Math.abs(h)));
                }
            } else if (h > 0) {
                if (Math.random() < 0.5) {
                    this.halls.push(new Rectangle(point2.x, point1.y, Math.abs(w), 1));
                    this.halls.push(new Rectangle(point2.x, point1.y, 1, Math.abs(h)));
                } else {
                    this.halls.push(new Rectangle(point2.x, point2.y, Math.abs(w), 1));
                    this.halls.push(new Rectangle(point1.x, point1.y, 1, Math.abs(h)));
                }
            } else {
                this.halls.push(new Rectangle(point2.x, point2.y, Math.abs(w), 1));
            }
        } else if (w > 0) {
            if (h < 0) {
                if (Math.random() < 0.5) {
                    this.halls.push(new Rectangle(point1.x, point2.y, Math.abs(w), 1));
                    this.halls.push(new Rectangle(point1.x, point2.y, 1, Math.abs(h)));
                } else {
                    this.halls.push(new Rectangle(point1.x, point1.y, Math.abs(w), 1));
                    this.halls.push(new Rectangle(point2.x, point2.y, 1, Math.abs(h)));
                }
            } else if (h > 0) {
                if (Math.random() < 0.5) {
                    this.halls.push(new Rectangle(point1.x, point1.y, Math.abs(w), 1));
                    this.halls.push(new Rectangle(point2.x, point1.y, 1, Math.abs(h)));
                } else {
                    this.halls.push(new Rectangle(point1.x, point2.y, Math.abs(w), 1));
                    this.halls.push(new Rectangle(point1.x, point1.y, 1, Math.abs(h)));
                }
            } else {
                this.halls.push(new Rectangle(point1.x, point1.y, Math.abs(w), 1));
            }
        } else {
            if (h < 0) {
                this.halls.push(new Rectangle(point2.x, point2.y, 1, Math.abs(h)));
            } else if (h > 0) {
                this.halls.push(new Rectangle(point1.x, point1.y, 1, Math.abs(h)));
            }
        }
    }
}

