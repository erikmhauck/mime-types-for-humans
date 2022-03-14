# mime-types-for-humans

[![GitHub issues](https://img.shields.io/github/issues/erikmhauck/mime-types-for-humans)](https://github.com/erikmhauck/mime-types-for-humans/issues)
[![GitHub license](https://img.shields.io/github/license/erikmhauck/mime-types-for-humans)](https://github.com/erikmhauck/mime-types-for-humans/blob/main/LICENSE)

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
