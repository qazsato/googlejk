// Google検索結果リンク(前、次含む)
const links = document.querySelectorAll('#search a[data-ved][ping], #pnprev, #pnnext');
let i = 0;
document.addEventListener('keydown', (e) => {
  const key = e.key;
  const tagName = e.path[0].tagName.toLowerCase();
  // 入力キーがJK以外と入力ボックスフォーカス中は何もしない
  if (key !== 'j' && key !== 'k' || tagName === 'input' || tagName === 'textarea') {
    return;
  }
  if (key === 'j' && i < links.length) {
    i++;
  } else if (key === 'k' && i > 1) {
    i--;
  }
  if (i > 0) {
    links[i - 1].focus();
  }
});
