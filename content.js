window.addEventListener('load', () => {
  const scripts = [...document.querySelectorAll('script')];
  const hasAEMScript = scripts.some(script => script.src.endsWith('/scripts/aem.js'));

  chrome.runtime.sendMessage({
    action: 'updateIcon',
    hasScript: hasAEMScript
  });
});
