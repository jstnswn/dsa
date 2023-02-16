function countStudents(height) {
    const sortedHeights = [...height].sort((a, b) => a - b);
    let count = 0;

    for (let i = 0; i < height.length; i++) {
        if (sortedHeights[i] !== height[i]) count++;
    }

    return count;
}
