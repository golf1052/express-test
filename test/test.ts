import * as assert from 'assert';
import * as advanced_math from '../src/advanced_math';

suite('Advanced math tests', function () {
    test('1 + 1', function () {
        assert.equal(advanced_math.add(1), 2);
    });

    test('2 + 1', function() {
        assert.equal(advanced_math.add(2), 3);
    });

    test('😺 + 1', function() {
        assert.equal(advanced_math.add('😺'), "The 'number' given was not a number");
    });
});
