function makeMap(width, height) {
    const maxLeafSize = 30;

    let leaves = [];

    let root = new Leaf(0, 0, width, height);
    leaves.push(root);

    let did_split = true;

    while (did_split) {
        did_split = false;
        leaves.forEach(tmpLeaf => {
            if (tmpLeaf.leftChild == null && tmpLeaf.rightChild == null) {
                if (tmpLeaf.width > maxLeafSize || tmpLeaf.height > maxLeafSize || Math.random() > 0.25) {
                    if (tmpLeaf.split()) {
                        leaves.push(tmpLeaf.leftChild);
                        leaves.push(tmpLeaf.rightChild);
                        did_split = true;
                    }
                }
            }
        })
    }

    root.createRooms();

    return leaves;
}