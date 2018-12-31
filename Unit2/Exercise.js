var a = 121;
if (a % 12 == 0) {
    for (; a > -1; a -= 12) {
        console.log(a);
    }
}
else {
    for (; a > -1; a--) {
        console.log(a);
    }
}
