$(function() {
	$(".open-btn").on('click', function() {
		var $this = $(this).parents(".wrapper");

		if ($this.hasClass("open")) {
			$this.removeClass("open");
		} else {
			$this.addClass('open');
		}
	});
	$(".close-btn").on('click', function() {
		$(this).parents(".wrapper").removeClass('open');
	});
});

$(function() {
	$(".open-btn2").on('click', function() {
		var $this = $(this).parents(".wrapper");

		if ($this.hasClass("open2")) {
			$this.removeClass("open2");
		} else {
			$this.addClass('open2');
		}
	});
	$(".close-btn").on('click', function() {
		$(this).parents(".wrapper").removeClass('open2');
	});
});

$(function() {
	$(".open-btn3").on('click', function() {
		var $this = $(this).parents(".wrapper");

		if ($this.hasClass("open3")) {
			$this.removeClass("open3");
		} else {
			$this.addClass('open3');
		}
	});
	$(".close-btn").on('click', function() {
		$(this).parents(".wrapper").removeClass('open3');
	});
});

$(function() {
	$(".open-btn4").on('click', function() {
		var $this = $(this).parents(".wrapper");

		if ($this.hasClass("open4")) {
			$this.removeClass("open4");
		} else {
			$this.addClass('open4');
		}
	});
	$(".close-btn").on('click', function() {
		$(this).parents(".wrapper").removeClass('open4');
	});
});

$(function() {
	$(".open-btn5").on('click', function() {
		var $this = $(this).parents(".wrapper");

		if ($this.hasClass("open5")) {
			$this.removeClass("open5");
		} else {
			$this.addClass('open5');
		}
	});
	$(".close-btn").on('click', function() {
		$(this).parents(".wrapper").removeClass('open5');
	});
});

$(function() {
	$(".open-btn6").on('click', function() {
		var $this = $(this).parents(".wrapper");

		if ($this.hasClass("open6")) {
			$this.removeClass("open6");
		} else {
			$this.addClass('open6');
		}
	});
	$(".close-btn").on('click', function() {
		$(this).parents(".wrapper").removeClass('open6');
	});
});

$(function() {
	$(".open-btn7").on('click', function() {
		var $this = $(this).parents(".wrapper");

		if ($this.hasClass("open7")) {
			$this.removeClass("open7");
		} else {
			$this.addClass('open7');
		}
	});
	$(".close-btn").on('click', function() {
		$(this).parents(".wrapper").removeClass('open7');
	});
});

$(function() {
	$(".open-btn8").on('click', function() {
		var $this = $(this).parents(".wrapper");

		if ($this.hasClass("open8")) {
			$this.removeClass("open8");
		} else {
			$this.addClass('open8');
		}
	});
	$(".close-btn").on('click', function() {
		$(this).parents(".wrapper").removeClass('open8');
	});
});

$(function() {
	$(".open-btn9").on('click', function() {
		var $this = $(this).parents(".wrapper");

		if ($this.hasClass("open9")) {
			$this.removeClass("open9");
		} else {
			$this.addClass('open9');
		}
	});
	$(".close-btn").on('click', function() {
		$(this).parents(".wrapper").removeClass('open9');
	});
});

(function($) {

	var linkItem = $('.right-col .list a');
	var imgBox = $('.right-col img');

	linkItem.on('click', function(e) {
		e.preventDefault();
		$(linkItem).removeClass('active');
		$(this).addClass('active');
		var src = $(this).attr('data-img');
		$(imgBox).attr('src', src);
	});

})(jQuery);