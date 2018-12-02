# Hydrator

### Reduce bundle size by pruning unnecessary hydration

Get all the benefits of building in React without the processing and bundle size burdens of redundant hydration. In other words, React doesn’t need to control everything.

For example, if you have a component that generates your nav and that nav won’t change based on props or state, then it shouldn’t be JS on the client. It can be JS when rendering on the server and HTML/CSS when shipped.

## How does it work?

Server-side rendering remains unchanged. However, the client-side hydration bundle is limited to specific DOM entry points.

Use `hydrator` to specify hydration areas. Any area that is unspecified will not ship to the client and will not hydrate; it will merely be HTML/CSS.

## What does this mean?

- It means you don’t need a complicated templating approach. You can use React everywhere and not pay the penalty.
- It is an opportunity to think thru interaction points that have the same or nearly the same functionality with an HTML/CSS approach — for example, a CSS drop-down menu or a hidden checkbox that toggles a visual state.
