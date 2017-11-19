function isGoogle() {
    return (location.host === 'www.google.com' || location.host === 'www.google.co.jp');
}
if (isGoogle()) {
    let i = 0;
    const links = document.querySelectorAll('.rc .r a:first-child, #navcnt .navend a'); // Google検索結果リンク(前、次含む)
    document.addEventListener('keydown', (e) => {
        if (e.key !== 'j' && e.key !== 'k' ||
            e.path[0].tagName === 'INPUT' ||
            e.path[0].tagName === 'TEXTAREA')  {
                return; // 入力ボックスフォーカス中は何もしない
        }
        if (e.key === 'j' && i < links.length) i++;
        if (e.key === 'k' && i > 1) i--;
        if (i > 0) links[i - 1].focus();
    });
} else {
    const SCROLL_STEP_SIZE = 40;
    document.addEventListener('keydown', (e) => {
        if (e.path[0].tagName === 'INPUT' || e.path[0].tagName === 'TEXTAREA') return; // 入力ボックスフォーカス中は何もしない
        if (e.key === 'j') scrollBy(0, SCROLL_STEP_SIZE);
        if (e.key === 'k') scrollBy(0, -1 * SCROLL_STEP_SIZE);
    });
}