document.addEventListener('DOMContentLoaded', function () {
  const copyButton = document.querySelector('.copy-button button');
  const copySpan = document.querySelector('.copy-button span');
  const table = document.getElementById('tableName');

  const clipboard = new ClipboardJS(copyButton, {
    text: function () {
      const range = document.createRange();
      range.selectNode(table);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      const textToCopy = table.innerText;
      selection.removeAllRanges();
      return textToCopy;
    },
  });

  clipboard.on('success', function (e) {
    copyButton.classList.add('copied');
    copySpan.classList.add('show');
    setTimeout(function () {
      copyButton.classList.remove('copied');
      copySpan.classList.remove('show');
    }, 5000);
    console.log('The table are copied');
  });

  clipboard.on('error', function (e) {
    console.error('Failed to copy the table');
  });
});
