// Google検索結果リンク(前、次含む)
const links = Array.from(document.querySelectorAll('.rc > .r > a:first-child'));
const prev = document.querySelectorAll('#navcnt td:first-child .pn')[0];
const next = document.querySelectorAll('#navcnt td:last-child .pn')[0];
if (prev) links.push(prev);
if (next) links.push(next);

// 1件目の結果にフォーカス
let i = 0;
links[i].focus();

let inputFocused = false;
document.getElementById('lst-ib').addEventListener('focus', () => inputFocused = true);
document.getElementById('lst-ib').addEventListener('blur', () => inputFocused = false);
document.addEventListener('keydown', (e) => {
    // 入力ボックスフォーカス中は何もしない。
    if (inputFocused === true) return;
    if (e.key === 'j' && i < links.length - 1) {
        i++;
        links[i].focus();
    } else if (e.key === 'k' && i > 0) {
        i--;
        links[i].focus();
    }
});