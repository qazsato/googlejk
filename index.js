let i = 0;
const links = Array.from(document.querySelectorAll('.rc .r a:first-child, #navcnt .navend a')); // Google検索結果リンク(前、次含む)
document.addEventListener('keydown', (e) => {
    if (e.path[0].tagName === 'INPUT' || e.path[0].tagName === 'TEXTAREA') return; // 入力ボックスフォーカス中は何もしない
    if (e.key === 'j') {
        if (i < links.length) i++;
        links[i - 1].focus();
    } else if (e.key === 'k') {
        if (i > 1) i--;
        links[i - 1].focus();
    }
});