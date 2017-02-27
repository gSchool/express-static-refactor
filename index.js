require('express')().use(require('express').static('.')).listen(8008, () => console.log(8008));
