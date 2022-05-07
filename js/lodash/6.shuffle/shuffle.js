function shuffle(list, n) {
    n = n || list.length;
    return list.sort(() => Math.random() - 0.5).slice(0, n);
}