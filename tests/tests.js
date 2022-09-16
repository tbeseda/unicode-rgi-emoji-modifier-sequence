import test from "node:test";
import assert from "node:assert";

import emojiModifierBase from '../index.js'

test('basic functionality', function() {
		assert.equal(emojiModifierBase.has(0x261D), true);
		assert.equal(emojiModifierBase.has(0x26F9), true);
		assert.equal(emojiModifierBase.has(0x1F465), false);
		assert.equal(emojiModifierBase.has(0x1F466), true);
		assert.equal(emojiModifierBase.has(0x1F468), true);
		assert.equal(emojiModifierBase.has(0x1F469), true);
		assert.equal(emojiModifierBase.has(0x1F46A), false);
		assert.equal(emojiModifierBase.has(0x1F93E), true);
});
