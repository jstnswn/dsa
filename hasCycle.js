const hasCycle = (graph) => {
    const visited = new Set();
    for (let node in graph) {
        const visiting = new Set();
        const hasCy = checkCycle(graph, node, visiting, visited);
        // console.log('node', node, 'hasCy', hasCy)
        if (hasCy) return true;
    }
    return false;
};

function checkCycle(graph, node, visiting, visited) {
    if (visited.has(node)) return false;
    if (visiting.has(node)) return true;
    visiting.add(node);


    for (let neighbor of graph[node]) {
        // if (visiting.has(neighbor)) return true;
        if (checkCycle(graph, neighbor, visiting, visited)) return true;
    }

    visiting.delete(node);
    visited.add(node);
    return false;
}




hasCycle({
    a: ["b", "c"],
    b: ["c"],
    c: ["d"],
    d: [],
}); // -> false



