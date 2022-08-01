# Note for learning Bootstrap

## 1. Intro

To enable Bootstrap, You need: `HTML5 doctype` and `Responsive meta tag`. Include Bootstrap’s CSS and JS.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, world!</h1>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
  </body>
</html>
```

See a lists of components that [requiring JavaScript](https://getbootstrap.com/docs/5.2/getting-started/introduction/#js-components)

## 2. Layout

### Breakpoints

> Breakpoints are customizable widths that determine how your responsive layout behaves across device or viewport sizes in Bootstrap

Each breakpoint was chosen to comfortably hold containers whose widths are multiples of 12. 

See the [Available breakpoints](https://getbootstrap.com/docs/5.2/layout/breakpoints/#available-breakpoints)

Since Bootstrap is developed to be mobile first, we use a handful of [Media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) to create sensible breakpoints for our layouts and interfaces. These breakpoints are mostly based on minimum viewport widths and allow us to scale up elements as the viewport changes.