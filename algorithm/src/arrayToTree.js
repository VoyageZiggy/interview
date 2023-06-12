const list = [
  {id: 1, name: '部门1', pid: 0},
  {id: 2, name: '部门2', pid: 1},
  {id: 3, name: '部门3', pid: 1},
  {id: 4, name: '部门4', pid: 3},
  {id: 5, name: '部门5', pid: 4},
  { id: 6, name: '部门1', pid: null },
  { id: 7, name: '部门2', pid: 6 },
]


function buildForest (list) {
  const result = []
  const map = new Map()

  for (const item of list) {
    map.set(item.id, {...item, children: []})
  }

  for (const node of list ) {
    const parent = map.get(node.pid)
    if (parent) {
      parent.children.push(map.get(node.id))
    } else {
      result.push(map.get(node.id))
    }
  }
  return result
}

console.log(JSON.stringify( buildForest(list)))

// 递归生成树
// function buildForest(data) {
//   const nodeMap = new Map();

//   // 构建节点映射
//   for (const item of data) {
//     nodeMap.set(item.id, { ...item, children: [] });
//   }

//   function buildTree(id) {
//     const node = nodeMap.get(id)
//     for (const item of data) {
//       if (item.pid === id) {
//         const child = buildTree(item.id)
//         if (child) {
//           node.children.push(child)
//         }
//       }
//     }
//     return node
//   }

//   let forest = []
//   for( const item of data) {
//     const parent = nodeMap.get(item.pid)
//     if (!parent) {
//       const tree = buildTree(item.id)
//       if (tree) {
//         forest.push(tree)
//       }
//     }
//   }

//   return forest;
// }


// // 生成森林
// const forest = buildForest(arr);

// console.log(JSON.stringify(forest));
