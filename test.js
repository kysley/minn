import test from 'ava';
import m from '.';

test('it gets the lowest value', t => {
	t.is(m([1, 2, 3]), 1);
});

test('it throws on invalid', t => {
	t.throws(() => {
		m(1, 2, 0);
	});

	t.throws(() => {
		m(['f', 'o', 'o']);
	});

	t.throws(() => {
		m('bar');
	});

	t.throws(() => {
		m(NaN);
	});

	t.throws(() => {
		m(Infinity);
	});
});

test('it works with length of 1 number', t => {
	t.is(m([1]), 1);
});

test('it works with negative values', t => {
	t.is(m(['-1', '-3', '1', '-2', '-40']), '-40');
});

test('it works with mixed negative values', t => {
	t.is(m(['-1', '-3', -50, '-2', '-40']), -50);
});

test('it works with 1 number and random letters', t => {
	t.is(m(['t', 1, 'm', 'a']), 1);
});

test('it doesn\'t die with letters', t => {
	t.is(m(['f', 1, 2, 3, 't', 'a']), 1);
});
