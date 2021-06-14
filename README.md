# UTILS Collect

Welcome to the list of breaker features that saved my life and still save many times.
> Remembering, the functions shown here are usually of FrontEnd utility, but nothing prevents them from being used in BackEnd if appropriate.

## masker
- The masker.js is a function that as its name says, it generates a mask for the string normally used in the application's inputs to format the text while the user types, it can also be used when, for example, you receive a value from BackEnd a CPF for example but it is not formatted and you need to show the CPF to the user now what? Using masker.js is easy.
> Usage example in Reactjs 

![](./images/masker.png)

```javascript
import React, { useState } from 'react';
import Masker from '../path/to/masker.js';

const App = () => {
  const [text, setText] = useState('');

  return (
    <input
      placeholder='Digite seu CPF'
      value={text}
      onChange={e => setText(Masker(e.target.value, ['###.###.###-##']))}
    />
  )
}
```