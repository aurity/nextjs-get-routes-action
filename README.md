# Next.js routes list action

This action gets all routes of next.js app

## Inputs
### `base-url`

Base URL you want to append routes to, usefull for passing already complete links. For more see `links` output

## Outputs

### `routes`

List of available routes

### `links`

List of all avaiable complete links, only when `base-url` was passed to inputs

## Example usage
```
- name: get next.js routes step
 id: get-nextjs-routes
 uses: aurity/nextjs-get-routes-action@v1
 with:
  base-url: https://markdown-website-git-test-get-pages-action3.aurity.vercel.app
```
