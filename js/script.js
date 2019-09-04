document.addEventListener('DOMContentLoaded', function() {

	let btn = document.getElementById('search-button');
	let inp = document.getElementById('search-input');

	btn.addEventListener('click', enableSearch);

	function enableSearch() {
		inp.style.cssText = 'width: 200px; transition: width 1s, padding .2s; border-radius: 5px; border: 1px solid lightgrey; padding: 5px';
		btn.removeEventListener('click', enableSearch);
		btn.addEventListener('click', disableSearch);
	}

	function disableSearch() {
		inp.style.cssText = 'width: 0; transition: all 2s; border: 1px solid white'
		btn.addEventListener('click', enableSearch);
	}















});