import { h } from 'preact'; /** @jsx h */

import chai, { expect } from 'chai';
import assertJsx from 'preact-jsx-chai';

chai.use(assertJsx);

///Tests
import NonMapHeader from '../src/components/Header/NonMapHeader';

describe('NonMapHeader', () => {
    it('passes', () => {
        expect(<NonMapHeader />, 'Why not work?').to.contain(<h1>There and Back Again!</h1>);
    });
});

import MapHeader from '../src/components/Header/MapHeader';

describe('MapHeader', () => {
    it('passes', () => {
        expect(<MapHeader />, 'Search should be present').to.contain("Search:");
    });
});

import GoogleMap from '../src/components/GoogleMap';

describe('GoogleMap', () => {
    it('passes', () => {
        expect(<GoogleMap />, 'Placeholder for map should be present').to.contain(<div>Placeholder for map</div>);
    });
});

