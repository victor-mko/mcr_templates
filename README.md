My Click Rewards Front-End Templates
====================================

## Requirements 

* Node.js v7.5.0
* npm v4.1.2

If you don't have either of these, [nvm](https://github.com/creationix/nvm)
is recommended. The [curl install
script](https://github.com/creationix/nvm#install-script) is the easiest method
on MacOS or Linux.

* [editorconfig](http://editorconfig.org/) setup for your editor

## Setup

1. Clone this repo
2. make sure nodejs and npm are installed
3. `npm install`

## Running

`npm start`
runs a server on `localhost:7777`

`npm start -- --port=8888`
runs a server on port 8888

`npm test`
runs the stylelint validation

* Note that you do not need to install grunt-cli globally. The npm scripts
    handle the grunt work.

## Guidelines
* templates and css live in `src/`
* all property-specific styles should live in `src/main.css`
* templates should not be modified to include additional libraries or requirements without prior agreement
* the dev server root is `tmp/`, and is ignored by git
* make sure `npm run test` runs without error before submitting a PR
* omit vendor-specific css
* alphabetize css properties
* use one property: selector pair per line
* see `stylelint.config.js` for the basic stling rules we've included

## CSS Tooling

[PostCSS](http://postcss.org/) with [CSS Next](http://cssnext.io/) and the [simple-vars](https://github.com/postcss/postcss-simple-vars) plugin
are included.

[livereload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en-US)
will refresh the browser when 
### Nesting

Nexting is handled by CSSNext:
```css
.foo {
  & .bar {
    color: blue;
  }
}
```

becomes:

```css
.foo {}
.foo .bar {
  color: blue;
}
```

### Simple Variables

CSS variables are too verbose. The simple-vars plugin allows SCSS-style `$`
variables:

```css
$black: #000;
.foo {
  color: $black;
}
```

becomes:

```css
.foo {
  color: #000;
}
```
