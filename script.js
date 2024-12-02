//your JS code here. If required.
document.querySelector('input[type="button"]').addEventListener('click', () => {
  const selectElement = document.getElementById('colorSelect');
  const selectedIndex = selectElement.selectedIndex;
  selectElement.options.remove(selectedIndex);
});