


		(document).ready(function() {
				var time = 7;
				var $progressBar, $bar, $elem, isPause, tick, percentTime;
				$("#owl-demo").find('.owl-carousel').owlCarousel({
						slideSpeed: 500,
						paginationSpeed: 500,
						singleItem: true,
						navigation: true,
						navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
						afterInit: progressBar,
						afterMove: moved,
						startDragging: pauseOnDragging,
						transitionStyle: "fadeUp"
				});

				function progressBar(elem) {
						$elem = elem;
						buildProgressBar();
						start();
				}

				function buildProgressBar() {
						$progressBar = $("<div>", {
								id: "progressBar"
						});
						$bar = $("<div>", {
								id: "bar"
						});
						$progressBar.append($bar).appendTo($elem);
				}

				function start() {
						percentTime = 0;
						isPause = false;
						tick = setInterval(interval, 10);
				};

				function interval() {
						if (isPause === false) {
								percentTime += 1 / time;
								$bar.css({
										width: percentTime + "%"
								});
								if (percentTime >= 100) {
										$elem.trigger('owl.next')
								}
						}
				}

				function pauseOnDragging() {
						isPause = true;
				}

				function moved() {
						clearTimeout(tick);
						start();
				}
		});
