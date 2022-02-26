# mime-types-for-humans

Returns a human readable string describing the application used to open a file or file extension.

## Installation

`npm install mime-types-for-humans`

or

`yarn add mime-types-for-humans`

## Usage

```js
const mime = require("mime-types");
mime.lookup("foo.docx"); //Microsoft Office - Word Document
mime.lookup("docx"); //Microsoft Office - Word Document
mime.lookup("foo.bar"); //false
```
