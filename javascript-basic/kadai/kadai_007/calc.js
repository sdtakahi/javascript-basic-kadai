// 変数numに1~30までのランダムな整数を代入する
let num = Math.floor(Math.random() * 30) + 1;

// 変数numを出力する（確認用）
console.log(num);

// 変数numの値が3と5の倍数の時、「3と5の倍数です」と出力
if (num % 3 === 0 && num % 5 === 0) {
    console.log('3と5の倍数です');
}
// 変数numの値が5の倍数の時、「5の倍数です」と出力
else if (num % 5 === 0) {
    console.log('5の倍数です');
}
// 変数numの値が3の倍数の時、「3の倍数です」と出力
else if (num % 3 === 0) {
    console.log('3の倍数です');
}
// それ以外の場合、変数(num)を出力する
else {
    console.log(num);
}