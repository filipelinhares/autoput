# Autoput
### Filling all spaces
[DEMO](http://filipelinhares.github.io/autoput)

> A simple inplementatio to help you a fill all inputs in your forms.

## How use

Download the `autoput.js` [here]() and add on bottom of your page.

```
    <script src="autoput.js"></script>
<body>

```

When the page loads, Autoput automatically adds a button on top of the page to you use hin.

## Customization

If you don't like so much the default values of Autoput, don't worry, you can change this with the custom options.

After load the `autoput.js` you can defined an value with each option.

```
<script src="autoput.js"></script>
<script>
    Autoput.custom({
        text: 'Other value to input text',
        tel: '(222) 123-1234'
    });
    Autoput.on();
</script>
```

## Custom options

```
Autoput.custom({
  text: string
  email: string
  date: string
  datetime: string
  week: string
  month: string
  tel: string
  baseNumber: integer
  url: string
  search: string
  radio: bol
  checkbox: bol
  range: float
});
```

#### Atenction

The values of `date`, `week` and others like this, you will need follow the pattern:

- date = YYYY-MM-DD
- datetime: YYYYMM-DDT00:00Z
- week: YYYY-W00
- month: YYYY-MM

## Contribute

You'll need:
[Node](http://nodejs.org/) - [NPM](https://www.npmjs.org/) - [Gulp](http://gulpjs.com/) - [Dalekjs](http://dalekjs.com/)

`git clone git@github.com:filipelinhares/autoput.git`  
`npm install`

#### Gulp commands

`gulp watch`  
It's create a server in `localhost:8081`.

`gulp`  
Minify, Jshint and put the result on `dist/`.

#### Tests
All tests resulst are in `report`.

## License
MIT
