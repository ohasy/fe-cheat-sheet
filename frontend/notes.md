## How to optimize web initial load

1. Inline the critical css in style tag, so no extra request for css file and waiting for cascading effect css dom in render tree.
2. Defer all the non critical script tags
   > Scripts with defer never block the page.
   > Scripts with defer always execute when the DOM is ready (but before DOMContentLoaded event).
3. Code splitting
4. Using CDNs
5. media queries for ligther assets for mobile devices or use that srcset picture tag
6. css to the top ,scripts later

Tools:
To Identify critical css we can make use chrome dev tools audit tools which can tell us what are the css which is not being used for the current page.

## How to optimize consitent rendering on events (scrolling, click events etc)

Your javascript code should not take too much time, Ideally it should be less than 16 ms for matching the vsync interval (paint event interval)

1. Split long running functions
2. Aggregate events defer (handle scroll events )
3. Remove repeatative work
4. Use Memoization
5. Dont use recursive logic
