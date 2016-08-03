import * as assert from 'assert';

suite('test', function () {
    test('test', function () {
        assert.equal(true, true);
    });
});

suite('failing test', function () {
    test('failing test', function () {
        assert.equal(true, false);
    });
});
