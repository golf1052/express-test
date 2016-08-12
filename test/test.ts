import * as assert from 'assert';
import * as advanced_math from '../src/advanced_math';

describe('Advanced math tests', function() {
    it('1 + 1', function() {
        assert.equal(advanced_math.add(1), 2);
    });

    it('2 + 1', function() {
        assert.equal(advanced_math.add(2), 3);
    });

    it('😺 + 1', function() {
        assert.equal(advanced_math.add('😺'), "The 'number' given was not a number");
    })
})
