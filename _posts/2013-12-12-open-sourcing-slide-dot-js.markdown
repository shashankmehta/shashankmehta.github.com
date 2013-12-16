---
layout: slick
title: "Open Sourcing Slide.js"
date: 2013-12-12 03:58
comments: true
categories: 
published: false
---
<link rel="stylesheet" href="css/style.css">
<script src="js/jquery-1.7.2.min.js"></script>
<script src="../src/screenfull.js"></script>
<script src="../src/slick.js"></script>

<div class="slick">

	<div class="slick-content">
	</div>
	
	<div class="overlay-controls">
		<a href="#" class='overlay-prev'></a>
		<a href="#" class='overlay-next'></a>
	</div>
	
	<div class="slick-bottom">
		<div class="length"></div>

		<div class="slick-no">
			<div>
				<input type="text" class="current-no skip">/<span class="total"></span>
			</div>
			<div>
				<img src="/assets/slick/img/fullscreen.png" alt="" class="fullscr">
			</div>
		</div>
		<div class="slick-controls">
			<a href="#" class="prev"><img src="/assets/slick/img/backward.png" alt=""></a>
			<a href="#" class="next"><img src="/assets/slick/img/forward.png" alt=""></a>
		</div>
	</div>
</div>

<script>
	config = {
		source: 'slide/slick-*.jpg',
		start: 0,
		end: 5,
	};

	slick = new Slick('.slick', config);

	$('.overlay-next').click(function(){
		Slick.next(slick);
	})
	$('.overlay-prev').click(function(){
		Slick.prev(slick);
	})
	
	$('.fullscr').click(function () {
		if (screenfull.enabled) {
			screenfull.toggle($('.slick')[0]);
			if(!$('.slick.fullscreen').exists()){
				// Needed because of a Chrome quirk. 
				setTimeout(function(){
					$('.slick').addClass('fullscreen');
					$('.slick .slick-bottom').width($('.slick-content img.current').width()).css('margin', 'auto');
				}, 100);
			}
		}
	});
	screenfull.onchange = function(){
		if(!screenfull.isFullscreen){
			$('.slick .slick-bottom').width('inherit').css('margin', 'auto');
			$('.slick').removeClass('fullscreen');
		};		
	}
</script>


Slick was developed for Study Portal, an application for IIT Roorkee intranet made by SDSLabs. We needed to embed presentations but could not utilize SpeakerDeck/SlideShare embedding thanks to 2AM-5AM Mon-Fri Internet blackout in the campus. We were not going to show empty divs during the blackout, right?

##Working

We followed the SpeakerDeck format. User uploads presentations in PDF format which is converted to images in the backend. The images are in serial order with a common suffix. Slick expects the image URL with a `*` in place of the number, the starting number and the ending one.

To create the presentation, include jQuery and slick.js

```javascript
var s = new Slick('.slick', options); // .slick is class/id of div to be used as container for Slick.
```

The options available are:

```javascript
// Minimum options needed with default theme
options = {
	source: 'slide/slick-*.jpg',
	start: 0,
	end: 5,
};

// All options available with default values shown as set
allOptions = {
	source: undefined, // eg '/slide/slick-*.jpg'
	start: undefined, // eg 0
	end: undefined, // eg 5
	keyControl: true, // In case of multiple presentations, set true for keyboard control on this one
	theme: {
	    content: '.slick-content', // class/id for div where images will be loaded
	    currentNo: '.current-no', // class/id for showing current slide no
	    totalNo: '.total', // class/id for showing total number of slides
	    next: '.next', // class/id for the 'next' button
	    prev: '.prev', // class/id for the 'prev' button
	}
}
```

Programmatic access available:

```javascript	
// s is an instance of Slick
Slick.next(s);
Slick.prev(s);
Slick.skip(s, 6); // 6 is slide number
```

##Features

1. There can be multiple presentations on one page.
2. Slick prefetches the next slide.
3. Quick Skipping: If the user quickly clicks on next, say, 5 times, the intermediate slides are not loaded.
4. The slide is not changed until it loads completely. _(This is not a gallery plugin)_
5. The slides are not deleted but kept hidden in DOM. _(unlike SpeakerDeck)_
6. Slick supports theming of presentation player.

The default options are set for the theme used in the repository. The CSS is in `examples/css/style.css` and HTML in `examples/index.html`.

Fullscreen option is available in default theme. However it is not part of slick.js due to browser quirks in styling fullscreen elements. Take a look at source of default theme in case you want to add it to your theme. We are using @sindresorhus' [screenfull.js](https://github.com/sindresorhus/screenfull.js) to manage cross browser compatibility. 

##To Do

1. Add sample PDF to image conversion scripts as well as instructions for PowerPoint and KeyNote
2. Add support for serial no indicator be set to anything, not just *