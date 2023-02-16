function playlist(songs) {
    const songMap = {};
    let pairCount = 0;
    for (let song of songs) {
        const roundedSong = song % 60;
        let diff = 60 - roundedSong;
        if (diff === 60) diff = 0;
        if (diff in songMap) {
            pairCount += songMap[diff];
        }
        songMap[roundedSong] = roundedSong in songMap ? songMap[roundedSong] + 1 : 1;
    }

    return pairCount;
}
