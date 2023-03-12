import calculate from './calculate.js';
import copyToClipboard from './copy-to-clipboard.js';
import themeSwitcher from './theme.js';
import { hadleButtonPress, handleClearButton, handleTyping } from './key-handlers.js';

document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener('click', hadleButtonPress);
});
document.getElementById('clear').addEventListener('click', handleClearButton);
document.getElementById('input').addEventListener('keydown', handleTyping);
document.getElementById('equal').addEventListener('click', calculate);
document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard);
document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher);
