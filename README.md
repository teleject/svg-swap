# SVG-Swap
========

A simple jQuery plugin for swapping SVG image with a raster image for older IE versions. ([Example](http://teleject.github.com/svg-swap/))

## Requirements:
========

* Link to jQuery
* Use [HTML5 Boilerplate](http://html5boilerplate.com/), specifically the HTML `head` block

## How to use:
========

Set up an inline SVG `img` element:  

`<img src="example.svg" alt="" />`

Then apply an alternative GIF, JPEG, PNG-8 image via `data-svgswap` attribute:

`<img src="example.svg" data-svgswap="example.png"  alt="" />`

Use HTML5 Boilerplate or at least the conditional comments:

`<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->`
`<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->`
`<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->`
`<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->`

Link to jQuery:

`<script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js"></script>`

Hook up SVG-Swap plugin:

`<script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js"></script>`
**`<script src="svgswap.jquery.js"></script>`**

Tell the browser which image to swap, if older version of IE is detected:

`<script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js"></script>`
`<script src="svgswap.jquery.js"></script>`
`<script>
$(document).ready(function(){
$(".svgswap img").svgswap();
})
</script>`

## Special thanks
========
 <a href="http://twitter.com/1Marc">Marc Grabanski</a>

## I'm mostly not witty on Twitter
========
<a href="http://twitter.com/teleject">Christopher Schmitt</a>
