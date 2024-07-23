// 現在の日付を取得して「〇〇年〇〇月〇〇日」の形式で出力するアロー関数
const printCurrentDate = () => {
    const currentDate = new Date(); // 現在の日付を取得
    
    const year = currentDate.getFullYear(); // 年を取得
    const month = currentDate.getMonth() + 1; // 月を取得（0から始まるので+1）
    const day = currentDate.getDate(); // 日を取得
    
    // 日付を「〇〇年〇〇月〇〇日」の形式で出力
    const formattedDate = `${year}年${month}月${day}日`;
    console.log(formattedDate);
}

// 関数を呼び出す
printCurrentDate();

