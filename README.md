# sata-dictionary

Just a dictionary with items that you can override.


# Example

```js
var Dictionary = require('./dist/main');

var dic = new Dictionary({
	'word1': 'default word1',
	'word2': 'default word2'
});
dic.merge({'word1': 'new word1'});

dic.get('word1'); // -> new word1
dic.get('word2'); // -> default word2
```


# Usage

I use this component with React components.

Just pass in context user specified dictionary for overriding labels, classes, etc.