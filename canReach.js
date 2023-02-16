function canReach(x1, y1, x2, y2) {
    if (explore([x1, y1], [x2, y2])) return 'Yes';
    return 'No';
}

function explore(start, end) {
    const [startRow, startCol] = start;
    const [endRow, endCol] = end;
    if (startRow > endRow || startCol > endCol) return false;
    if (startRow === endRow && startCol === endCol) return true;

    if (explore([startRow + startCol, startCol], end)) return true;
    if (explore([startRow, startRow + startCol], end)) return true;

    return false;
}
