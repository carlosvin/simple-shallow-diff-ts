import {diff} from '../diff';

test('Diff deleted', () => {
    const result = diff({a: 'a', b: 'b', c: 'c'}, {a: 'a', b: 'b'});
    expect(result).toStrictEqual({
        deleted: ['c'],
        added: [],
        updated: []
    });
});

test('Diff updated', () => {
    const result = diff({a: 'a', b: 'b', c: 'c'}, {a: 'a', b: 'b', c: 'cc'});
    expect(result).toStrictEqual({
        updated: ['c'],
        added: [],
        deleted: [],
    });
});

test('Diff added', () => {
    const result = diff({a: 'a', b: 'b'}, {a: 'a', b: 'b', c: 'c'});
    expect(result).toStrictEqual({
        updated: [],
        added: ['c'],
        deleted: [],
    });
});
