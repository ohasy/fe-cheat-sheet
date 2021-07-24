Core web vitals : Loading connectivity Visual stability
Largest content paint 2.4 sec good - 4.0 sec - need imporvment
First input delay - 100ms good -300 ms - needs improv
Cumalative Layout shift good 0.1 - 0.25
Time to interact
Total blocking time

https://web.dev/vitals/

What is LCP? #
The Largest Contentful Paint (LCP) metric reports the render time of the largest image or text block visible within the viewport, relative to when the page first started loading.

What is FID? #
FID measures the time from when a user first interacts with a page (i.e. when they click a link, tap on a button, or use a custom, JavaScript-powered control) to the time when the browser is actually able to begin processing event handlers in response to that interaction.

What is CLS? #
CLS is a measure of the largest burst of layout shift scores for every unexpected layout shift that occurs during the entire lifespan of a page.

A layout shift occurs any time a visible element changes its position from one rendered frame to the next. (See below for details on how individual layout shift scores are calculated.)

A burst of layout shifts, known as a session window, is when one or more individual layout shifts occur in rapid succession with less than 1-second in between each shift and a maximum of 5 seconds for the total window duration.

The largest burst is the session window with the maximum cumulative score of all layout shifts within that window.
