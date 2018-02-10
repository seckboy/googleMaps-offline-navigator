import { h } from 'preact'; /** @jsx h */

import chai, { expect } from 'chai';
import assertJsx from 'preact-jsx-chai';

chai.use(assertJsx);


///Tests
import NonMapHeader from '../src/components/Header/NonMapHeader/index';

describe('NonMapHeader', () => {
	it('passes', () => {
		const test_string = '<h1>There and Back Again!</h1>';
		// const test_string = 'There and Back Again!';
		expect(<NonMapHeader />, `Should contain "${test_string}"`).to.contain(<h1>There and Back Again!</h1>);
	});
});

import MapHeader from '../src/components/Header/MapHeader/index';

describe('MapHeader', () => {
	it('passes', () => {
		const test_string = '<h1>MapHeader</h1>';
		// const test_string = 'MapHeader';
		expect(<MapHeader />, `Should contain "${test_string}"`).to.contain(<h1>MapHeader</h1>);
	});
});

