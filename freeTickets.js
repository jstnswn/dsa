

function freeTickets1(friends) {
    return Math.floor((friends.length - 1) / 3);
}

function freeTickets2(friends) {
    const ticketMap = {};

    let freeCount = 0;
    let friend = friends[0];
    for (let i = 1; i < friends.length; i++) {
        const currFriend = friends[i];
        if (!(friend in ticketMap)) ticketMap[friend] = [];
        ticketMap[friend].push(currFriend);

        if (ticketMap[friend].length === 3) {
            freeCount++;
            friend = friends[i];
        }
    }
    
    return ticketMap;
}


const friends = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
console.log(freeTickets2(friends));
