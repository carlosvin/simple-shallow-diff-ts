Simple implementation in Typescript of shallow diff. 

Add the library to your project
-------------------------------
```
npm i simple-shallow-diff-ts
```

Import and use
--------------

```typescript
import {diff} from 'simple-shallow-diff-ts/diff';

diff(
    { a: 1, b: 2, c: 3 },
    { a: 10,      c: 3, d: 4 },
);
// It will return
{
    added: ['d'], 
    updated: ['a'], 
    deleted: ['b']
}
```

Test
----
```bash
yarn install
yarn test
```
