function playlist(songs) {
    const table = {
        20: 2
    };
    let count = 0;


    for (let song of songs) {
        const flatSong = song % 60;
        const diff = 60 - flatSong;

        if (flatSong === 0) {
            if (table[0]) {
                count += table[0]
            }
        }

        if (table[diff]) {
            count += table[diff];
        }

        if (table[flatSong]) {
            table[flatSong]++
        } else {
            table[flatSong] = 1;
        }
    }

}

const songs = [20, 20, 40, 60, 60, 140];


console.log(playlist(songs));
