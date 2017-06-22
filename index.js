// Hamburger Menu open & close
(function () {
	$('.hamburger-menu').on('click', function() {
		$('.bar').toggleClass('animate');
	})
})();

/* Set the width of the side navigation to 300px */
function openNav() {
    document.getElementById("mySidenav").style.transform = "translateX(0px)";
		document.getElementById("logo").style.marginLeft = "300px";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.transform = "translateX(-300px)";
		document.getElementById("logo").style.marginLeft = "0px";
}
