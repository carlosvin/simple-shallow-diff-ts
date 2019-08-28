Simple implementation in Typescript of shallow diff. 

Example
-------

```typescript
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
