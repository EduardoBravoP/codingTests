class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const depthFirstValues = (root) => {
  if (!root) {
    return []
  }

  const leftValues = depthFirstValues(root.left)
  const rightValues = depthFirstValues(root.right)

  return [root.val, ...leftValues, ...rightValues]
}

const breadthFirstValues = (root) => {
  if (root === null) {
    return []
  }

  const queue = [root]
  const result = []

  while (queue.length > 0) {
    const current = queue.shift()
    result.push(current.val)

    if (current.left !== null) {
      queue.push(current.left)
    }

    if (current.right !== null) {
      queue.push(current.right)
    }
  }

  return result
}

const treeIncludes = (root, target) => {
  if (root === null) {
    return false
  }

  const queue = [root]

  while (queue.length > 0) {
    const current = queue.shift()
    if (current.val === target) {
      return true
    }

    if (current.left !== null) {
      queue.push(current.left)
    }

    if (current.right !== null) {
      queue.push(current.right)
    }
  }

  return false
}

const treeIncludesDepthRecursion = (root, target) => {
  if (root === null) {
    return false
  }

  if (root.val === target) {
    return true
  }

  return treeIncludesDepthRecursion(root.left, target) || treeIncludesDepthRecursion(root.right, target)
}

const treeSum = (root) => {
  if (root === null) {
    return 0
  }
  
  return root.val + treeSum(root.left) + treeSum(root.right)
}

const minValueTree = (root) => {
  if (root === null) {
    return Infinity
  }

  return Math.min(minValueTree(root.left), minValueTree(root.right), root.val)
}

const minValueTreeIterative = (root) => {
  if (root === null) {
    return Infinity
  }

  const queue = [root]
  let minValue = root.val

  while (queue.length > 0) {
    const current = queue.shift()
    if (current.val < minValue) {
      minValue = current.val
    }

    if (current.left) {
      queue.push(current.left)
    }

    if (current.right) {
      queue.push(current.right)
    }
  }

  return minValue
}

const maxPathSum = (root) => {
  if (root === null) {
    return -Infinity
  }

  if (root.left === null && root.right === null) {
    return root.val
  }

  const rightPath = maxPathSum(root.right)
  const leftPath = maxPathSum(root.left)

  return root.val + Math.max(rightPath, leftPath)
}

const treeHeight = (root) => {
  if (root === null) {
    return 0
  }

  const leftHeight = treeHeight(root.left)
  const rightHeight = treeHeight(root.right)

  return Math.max(leftHeight, rightHeight) + 1
}

const a = new Node(5);
const b = new Node(11);
const c = new Node(13);
const d = new Node(4);
const e = new Node(2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//         a
//        / \
//       b   c
//      / \   \
//     d   e   f

console.log(depthFirstValues(a)); 
console.log(breadthFirstValues(a)); 
console.log(treeIncludes(a, 'e')); 
console.log(treeIncludesDepthRecursion(a, 'f')); 
console.log(treeSum(a)); 
console.log(minValueTree(a)); 
console.log(minValueTreeIterative(a)); 
console.log(maxPathSum(a)); 
console.log(treeHeight(a))