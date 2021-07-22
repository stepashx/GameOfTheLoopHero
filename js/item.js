// интерфейс
class Interface {
    direction = "NE";
}

// вещи 
class Item {
    damage;
    hp;
    distance;
    link;
}

// серебряные вещи
class ItemSilver extends Item {
    damage = 1;
    hp = 3;
}

class ItemSilverSword extends ItemSilver {
    distance = 1;
    link = "../png/Item/sword_silver.png"
}

class ItemSilverHoe extends ItemSilver {
    distance = 1;
    link = "../png/Item/hoe_silver.png"
}

class ItemSilverPick extends ItemSilver {
    distance = 1;
    link = "../png/Item/pick_silver.png"
}

class ItemSilverShovel extends ItemSilver {
    distance = 1;
    link = "../png/Item/shovel_silver.png"
}

class ItemSilverFlail extends ItemSilver {
    distance = 2;
    link = "../png/Item/flail_silver.png"
}

class ItemSilverBowArrow extends ItemSilver {
    distance = 3;
    link = "../png/Item/bowArrow.png"
}

// щит
// сапоги

// золотые вещи
class ItemGold extends Item {
    damage = 1;
    hp = 5;
}

class ItemGoldSword extends ItemGold {
    distance = 1;
    link = "../png/Item/sword_gold.png"
}

class ItemGoldHoe extends ItemGold {
    distance = 1;
    link = "../png/Item/hoe_gold.png"
}

class ItemGoldPick extends ItemGold {
    distance = 1;
    link = "../png/Item/pick_gold.png"
}

class ItemGoldShovel extends ItemGold {
    distance = 1;
    link = "../png/Item/shovel_gold.png"
}

class ItemGoldFlail extends ItemGold {
    distance = 2;
    link = "../png/Item/flail_gold.png"
}

class Interface {
    direction = "NE";
}

// алмазные вещи
class ItemDiamond extends Item {
    damage = 2;
    hp = 10;
}

class ItemDiamondSword extends ItemDiamond {
    distance = 1;
    link = "../png/Item/sword_diamond.png"
}

class ItemDiamondHoe extends ItemDiamond {
    distance = 1;
    link = "../png/Item/hoe_diamond.png"
}

class ItemDiamondPick extends ItemDiamond {
    distance = 1;
    link = "../png/Item/pick_diamond.png"
}

class ItemDiamondShovel extends ItemDiamond {
    distance = 1;
    link = "../png/Item/shovel_diamond.png"
}

class ItemDiamondFlail extends ItemDiamond {
    distance = 2;
    link = "../png/Item/flail_diamond.png"
}

//Прочие вещи
class ItemOthers extends Item {
    damage = -1;
    hp = -1;
}

class ItemSilverArrow extends ItemOthers {
    distance = 2;
    link = "../png/Item/arrow.png"
}

class ItemSilverBoat extends ItemOthers {
    distance = -1;
    link = "../png/Item/boat.png"
}

class ItemSilverBow extends ItemOthers {
    distance = -1;
    link = "../png/Item/bow.png"
}