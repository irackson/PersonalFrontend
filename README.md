# Ian Rackson Personal Website Frontend [![wakatime](https://wakatime.com/badge/github/irackson/PersonalFrontend.svg)](https://wakatime.com/badge/github/irackson/PersonalFrontend)[![Netlify Status](https://api.netlify.com/api/v1/badges/de157e9e-6259-4033-8d07-f03a2f592f0f/deploy-status)](https://app.netlify.com/sites/epic-stonebraker-4f69d2/deploys)

## [Live Link](https://ianrackson.com/)

### TODO

### icebucket

-   radius of nav icons on mobile
-   max-page width 100vw important
-   nav bar collape on mobile, expand on desktop
-   theme selector always collapes, with current theme displayed

### bugs

-   Map.js: "27[Violation] Added non-passive event listener to a scroll-blocking <some> event. Consider marking event handler as 'passive' to make the page more responsive. See [URL](https://www.chromestatus.com/feature/5745543795965952)"
-   MapLoader.js after flipping card a few times: "Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
    at MapLoader (<http://localhost:3000/static/js/main.chunk.js:2715:81>)
    at div
    at Back"
