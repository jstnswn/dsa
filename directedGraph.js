const canFinish = (numCourses, prerequisites) => {
    // if (numCourses < prerequisites.length) return false;

    const adjList = createAdjList(prerequisites);
    console.log(adjList)

    for (let preq of prerequisites) {
        if (hasLoop(preq[preq.length - 1], adjList)) return false;
    }

    return true;
};

const hasLoop = (start, adjList) => {
    const stack = [start];
    const visited = new Set();
    const neighborsVisited = new Set();

    while (stack.length) {
        const node = stack.pop();
        const neighbors = adjList[node];

        if (!neighbors) continue;

        for (let neighbor of neighbors) {

            if (visited.has(neighbor)) return true;
            else {
                if (!neighborsVisited.has(neighbor)) {
                    stack.push(neighbor);
                    neighborsVisited.add(neighbor);

                }
                visited.add(node);
            }
        }

    }

    return false;
}

const createAdjList = (prerequisites) => {
    const adjList = {};

    for (let preq of prerequisites) {
        for (let i = preq.length - 1; i > 0; i--) {
            const prereqClass = preq[i];
            const nextClass = preq[i - 1];

            if (!adjList[prereqClass]) adjList[prereqClass] = [nextClass];
            else adjList[prereqClass].push(nextClass);
        }
    }

    return adjList;
}

console.log(canFinish(2, [[695, 229], [199, 149], [443, 397], [258, 247], [781, 667], [350, 160], [678, 629], [467, 166], [500, 450], [477, 107], [483, 151], [792, 785], [752, 368], [659, 623], [316, 224], [487, 268], [743, 206], [552, 211], [314, 20], [720, 196], [421, 103], [493, 288], [762, 24], [528, 318], [472, 32], [684, 502], [641, 354], [586, 480], [629, 54], [611, 412], [719, 680], [733, 42], [549, 519], [697, 316], [791, 634], [546, 70], [676, 587], [460, 58], [605, 530], [617, 579], [484, 89], [571, 482], [767, 200], [555, 547], [771, 695], [624, 542], [708, 551], [432, 266], [656, 468], [724, 317], [423, 248], [621, 593], [781, 399], [535, 528], [578, 12], [770, 549], [576, 295], [318, 247], [400, 372], [465, 363], [786, 482], [441, 398], [577, 411], [524, 30], [741, 540], [459, 59], [758, 96], [550, 89], [402, 295], [476, 336], [645, 346], [750, 116], [551, 207], [343, 226], [568, 498], [530, 228], [525, 84], [507, 128], [526, 210], [535, 381], [635, 330], [654, 535], [710, 275], [397, 213], [412, 44], [131, 70], [508, 49], [679, 223], [519, 11], [626, 286], [242, 160], [778, 199], [606, 281], [226, 16], [340, 46], [578, 127], [212, 208], [674, 343], [778, 108], [749, 451], [735, 105], [544, 131], [600, 229], [691, 314], [608, 74], [613, 491], [754, 500], [722, 449], [486, 11], [786, 70], [212, 23], [717, 11], [692, 410], [503, 157], [783, 177], [220, 215], [419, 363], [182, 17], [321, 54], [711, 78], [312, 106], [560, 101], [501, 178], [583, 403], [577, 9], [595, 227], [601, 386], [792, 619], [550, 167], [589, 431], [793, 243], [395, 76], [197, 3], [357, 6], [763, 7], [599, 48], [178, 92], [325, 307], [620, 10], [334, 117], [556, 296], [454, 394], [485, 236], [140, 80], [404, 301], [651, 58], [504, 455], [101, 93], [712, 42], [559, 421], [594, 230], [505, 98], [719, 654], [672, 283], [109, 73], [556, 183], [617, 94], [133, 100], [771, 515], [613, 587], [285, 50], [579, 432], [282, 244], [669, 527], [783, 494], [628, 560], [716, 661], [177, 127], [430, 166], [383, 159], [746, 19], [653, 284], [495, 243], [376, 57], [560, 143], [679, 198], [751, 355], [339, 157], [409, 140], [729, 389], [518, 315], [623, 352], [651, 133], [761, 269], [442, 44], [379, 245], [313, 180], [773, 583], [291, 221], [271, 54], [799, 44], [200, 102], [568, 67], [695, 167], [327, 36], [431, 73], [782, 167], [611, 129], [630, 122], [563, 497], [697, 93], [596, 436], [611, 131], [627, 256], [658, 559], [591, 419], [193, 156], [302, 52], [409, 33], [405, 249], [384, 151], [214, 142], [558, 164], [565, 557], [492, 445], [681, 271], [797, 396], [251, 195], [784, 266], [607, 179], [671, 30], [752, 179], [787, 390], [749, 532], [618, 220], [659, 298], [567, 134], [229, 208], [298, 147], [787, 459], [572, 359], [794, 351], [53, 14], [646, 422], [234, 66], [274, 255], [744, 626], [730, 462], [498, 428], [573, 288], [688, 355], [603, 25], [191, 16], [793, 544], [750, 682], [415, 156], [460, 209], [749, 85], [269, 186], [441, 338], [319, 278], [505, 18], [672, 260], [420, 233], [493, 134], [493, 19], [308, 302], [582, 282], [755, 60], [641, 626], [669, 69], [772, 29], [132, 111], [666, 120], [605, 58], [534, 252], [636, 491], [777, 3], [602, 368], [533, 287], [401, 147], [782, 669], [517, 161], [686, 49], [789, 639], [776, 379], [376, 65], [696, 545], [423, 81], [448, 336], [631, 605], [501, 387], [413, 94], [777, 563], [661, 332], [756, 359], [646, 36], [650, 283], [656, 347], [522, 7], [383, 382], [438, 102], [762, 305], [650, 15], [249, 180], [784, 467], [763, 122], [163, 115], [775, 734], [166, 132], [634, 2], [668, 584], [767, 274], [595, 552], [11, 7], [693, 407], [789, 751], [613, 556], [715, 402], [751, 516], [646, 199], [625, 52], [572, 106], [724, 332], [617, 409], [573, 526], [760, 18], [382, 202], [207, 139], [416, 392], [672, 358], [233, 212], [668, 22], [765, 452], [294, 76], [259, 47], [593, 271], [510, 450], [592, 132], [770, 558], [296, 43], [419, 86], [752, 347], [615, 605], [635, 554], [794, 635], [613, 316], [563, 61], [770, 715], [771, 251], [646, 582], [423, 79], [576, 249], [604, 97], [767, 348], [736, 239], [775, 56], [619, 601], [790, 546], [531, 384], [507, 84], [564, 337], [432, 310], [600, 543], [747, 341], [556, 392], [661, 113], [449, 282], [575, 288], [637, 7], [635, 325], [735, 574], [574, 387], [705, 603], [704, 15], [684, 588], [495, 132], [718, 223], [517, 206], [272, 34], [677, 416], [788, 167], [649, 525], [619, 427], [541, 277], [489, 405], [608, 259], [603, 264], [435, 317], [623, 26], [544, 511], [72, 69], [623, 17], [600, 544], [551, 367], [404, 52], [324, 272], [706, 205], [778, 446], [341, 155], [581, 173], [666, 192], [588, 529], [554, 506], [250, 39], [772, 116], [569, 77], [526, 132], [563, 221], [655, 597], [649, 224], [57, 4], [679, 199], [265, 157], [380, 335], [558, 35], [726, 388], [763, 567], [437, 426], [643, 103], [773, 181], [726, 68], [164, 50], [717, 427], [681, 618], [477, 172], [697, 423], [525, 383], [794, 132], [149, 70], [704, 414], [581, 139], [678, 204], [107, 46], [352, 68], [645, 178], [758, 156], [627, 365], [331, 144], [547, 340], [788, 36], [633, 259], [588, 66], [321, 102], [528, 322], [212, 36], [288, 179], [434, 189], [749, 490], [753, 508], [784, 341], [550, 159], [741, 206], [758, 688], [766, 758], [586, 70], [657, 654], [701, 104], [548, 184], [613, 162], [620, 320], [506, 430], [517, 65], [571, 291], [771, 517], [796, 756], [735, 459], [625, 367], [759, 345], [582, 468], [469, 73], [790, 352], [493, 284], [664, 567], [342, 207], [669, 108], [611, 182], [764, 485], [214, 102], [544, 202], [713, 447], [793, 378], [147, 129], [407, 198], [608, 271], [695, 667], [680, 277], [222, 163], [744, 527], [280, 116], [430, 367], [281, 228], [688, 488], [733, 92], [529, 190], [750, 718], [793, 99], [626, 169], [486, 329], [620, 0], [782, 460], [329, 16], [753, 142], [338, 172], [518, 361], [688, 168], [497, 490], [484, 365], [365, 325], [107, 98], [622, 407], [527, 277], [659, 74], [552, 538], [493, 469], [638, 147], [304, 3], [573, 201], [411, 169], [719, 309], [287, 160], [742, 175], [573, 299], [562, 473], [705, 328], [261, 98], [580, 203], [740, 26], [418, 296], [764, 170], [656, 89], [724, 536], [730, 91], [796, 290], [735, 270], [512, 20], [402, 246], [46, 30], [426, 290], [296, 57], [725, 222], [324, 317], [547, 0], [661, 136], [636, 271], [261, 56], [750, 668], [647, 402], [773, 390], [677, 62], [249, 53], [574, 4], [393, 304], [701, 44], [109, 66], [275, 109], [679, 509], [725, 21], [409, 311], [368, 156], [605, 514], [538, 42], [690, 602], [411, 343], [424, 240], [78, 40], [750, 273], [367, 230], [167, 58], [738, 200], [634, 341], [409, 170], [644, 373], [741, 296], [702, 342], [746, 233], [411, 67], [526, 436], [796, 438], [647, 312], [717, 347], [548, 54], [725, 50], [549, 92], [610, 294], [668, 350], [578, 445], [446, 93], [727, 246], [526, 355], [344, 246], [145, 54], [355, 256], [751, 46], [454, 271], [587, 49], [728, 79], [627, 49], [522, 260], [270, 250], [491, 113], [337, 258], [609, 470], [387, 147], [656, 237], [366, 357], [160, 98], [761, 692], [753, 627], [718, 5], [335, 22], [640, 78], [687, 317], [315, 295], [471, 93], [481, 147], [724, 580], [687, 177], [409, 41], [355, 276], [393, 366], [770, 85], [697, 358], [187, 115], [671, 318], [716, 530], [767, 140], [566, 543], [318, 238], [341, 336], [648, 204], [496, 202], [505, 191], [360, 32], [408, 138], [537, 489], [668, 102], [400, 9], [472, 3], [727, 469], [713, 5], [530, 292], [465, 381], [551, 262], [514, 227], [394, 315], [551, 121], [655, 402], [755, 83], [153, 144], [303, 60], [766, 578], [668, 527], [796, 391], [692, 571], [617, 616], [229, 154], [798, 690], [706, 504], [610, 569], [655, 624], [408, 108], [569, 463], [461, 151], [507, 13], [781, 314], [780, 469], [506, 171], [552, 312], [189, 164], [336, 171], [571, 432], [688, 224], [160, 119], [470, 311], [663, 114], [665, 420], [556, 492], [709, 358], [202, 99], [170, 149], [340, 154], [666, 385], [617, 383], [502, 132], [220, 42], [778, 393], [444, 68], [526, 357], [217, 7], [597, 76], [586, 406], [481, 44], [486, 240], [513, 217], [790, 447], [275, 245], [396, 1], [369, 224], [485, 159], [680, 151], [387, 312], [721, 70], [733, 25], [457, 216], [798, 297], [329, 169], [766, 212], [286, 160], [703, 164], [765, 77], [620, 142], [510, 35], [475, 400], [784, 8], [768, 189], [668, 328], [697, 2], [389, 169], [550, 223], [514, 268], [579, 285], [419, 53], [318, 96], [335, 117], [729, 27], [694, 281], [349, 137], [545, 221], [679, 100], [382, 116], [707, 140], [62, 48], [664, 312], [499, 369], [547, 350], [509, 279], [778, 76], [186, 17], [741, 683], [635, 531], [441, 391], [493, 385], [354, 218], [304, 128], [651, 271], [693, 360], [613, 112], [798, 393], [743, 190], [115, 62], [725, 592], [525, 233], [621, 517], [327, 70], [501, 358], [504, 346], [787, 321], [94, 74], [729, 339], [50, 13], [603, 265], [163, 29], [781, 373], [586, 459], [797, 741], [624, 364], [411, 277], [360, 161], [690, 686], [746, 639], [553, 325], [631, 328], [388, 330], [619, 210], [573, 43], [559, 100], [210, 152], [378, 5], [776, 447], [615, 181], [365, 299], [708, 310], [718, 690], [268, 225], [639, 90], [318, 5], [196, 89], [361, 184], [762, 690], [772, 465], [729, 721], [541, 331], [567, 350], [269, 58], [656, 78], [579, 163], [711, 223], [282, 268], [760, 533], [404, 280], [473, 384], [94, 48], [340, 12], [727, 364], [264, 221], [591, 487], [514, 466], [305, 168], [372, 248], [639, 499], [560, 435], [541, 142], [462, 83], [594, 353], [618, 485], [95, 33], [602, 595], [605, 289], [715, 207], [448, 293], [752, 170], [641, 203], [532, 198], [608, 13], [707, 114], [744, 211], [110, 3], [298, 228], [622, 496], [286, 26], [683, 178], [706, 192], [751, 358], [486, 461], [561, 251], [466, 193], [342, 62], [221, 37], [731, 325], [205, 132], [518, 173], [502, 261], [640, 49], [541, 522], [747, 110], [756, 591], [124, 76], [639, 603], [765, 482], [388, 5], [34, 12], [514, 344], [495, 254], [770, 751], [730, 597], [708, 105], [683, 586], [528, 288], [386, 225], [287, 26], [649, 262], [753, 670], [789, 85], [632, 439], [570, 176], [672, 652], [445, 399], [400, 226], [655, 522], [469, 249], [557, 500], [275, 6], [397, 296], [725, 43], [605, 533], [425, 220], [637, 118], [628, 215], [654, 431], [697, 421], [512, 121], [237, 36], [151, 85], [574, 217], [320, 233], [492, 272], [552, 220], [739, 81], [712, 219], [612, 590], [410, 66], [548, 40], [320, 211], [381, 95], [633, 482], [742, 535], [704, 131], [682, 435], [508, 48], [435, 337], [534, 96], [663, 653], [283, 205], [715, 74], [484, 376], [585, 366], [635, 479], [753, 719], [793, 548], [396, 171], [156, 112], [575, 380], [717, 464], [612, 576], [569, 319], [736, 259], [406, 227], [711, 709], [793, 132], [528, 295], [592, 48], [731, 217], [408, 299], [373, 137], [786, 327], [791, 166], [712, 285], [772, 603], [723, 338], [531, 121], [572, 548], [786, 167], [670, 401], [724, 440], [280, 229], [497, 453], [265, 70], [733, 144], [689, 434], [504, 384], [93, 64], [563, 397], [550, 106], [224, 198], [372, 177], [249, 31], [667, 372], [263, 78], [783, 446], [791, 59], [438, 64], [630, 270], [216, 160], [704, 261], [674, 506], [704, 23], [378, 4], [784, 437], [196, 118], [681, 314], [698, 663], [397, 274], [499, 440], [737, 265], [697, 625], [139, 84], [440, 231], [453, 150], [266, 55], [377, 11], [728, 60], [431, 202], [268, 47], [763, 123], [347, 339], [470, 117], [466, 298], [344, 142], [584, 55], [417, 175], [439, 392], [548, 55], [714, 701], [643, 71], [357, 69], [649, 459], [789, 541], [626, 5], [752, 619], [711, 267], [639, 12], [750, 364], [620, 249], [769, 721], [636, 97], [233, 15], [171, 72], [488, 421], [251, 139], [750, 98], [199, 64], [768, 344], [759, 537], [435, 154], [425, 185], [336, 221], [418, 395], [390, 136], [618, 603]]))
