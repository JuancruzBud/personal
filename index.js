// Hamburger Menu transition
(function () {
	$('.hamburger-menu').on('click', function() {
		$('.bar').toggleClass('animate');
	})
})();

// Side Menu open & close
(function () {
$('.hamburger-menu').on ('click', function() {
	$('#side-nav').toggleClass('toggleNav');
	if ($('body').css('overflow') == 'visible'){
		$('body').css('overflow','hidden')
	} else {
		($('body').css('overflow','visible'))
	}
})
})();
