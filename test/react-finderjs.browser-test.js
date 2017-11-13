require('./setup.js');
import jsdomGlobal from 'jsdom-global';
import React from 'react';
import { configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import test from 'tape';

import ReactFinder from '../src/react-finder';

jsdomGlobal();
configure({ adapter: new Adapter() });

test('<ReactFinder> when no data is present', (t) => {

    const document = mount(
        <ReactFinder
            data={[]}
        />,
    );

    t.ok(document, 'dom document is created');
    const finder = document.find('.c-finder');
    t.equal(finder.length, 1, 'the finder container dom element has been created');
    t.equal(finder.children().length, 0, 'no children are created in the finder element');

    t.end();
});

// test('<ReactFinder> when single level data is present', (t) => {
    
//         document.write(mount(
//             <ReactFinder
//                 data={[
//                     {
//                         label: 'Test Child 1'
//                     },
//                     {
//                         label: 'Test Child 2'
//                     }
//                 ]}
//             />,
//         ));
    
//         t.ok(document, 'dom document is created');
//         const finder = document.find('.c-finder');
//         t.equal(finder.length, 1, 'the finder container dom element has been created');
//         t.equal(finder.children().length, 1, 'one column created in the finder element');
    
//         t.end();
//     });

// test('<ReactJWPlayer> when jwplayer script is present', (t) => {
//   const testPlayerId = 'playerOne';
//   const testPlayerIdTwo = 'playerTwo';
//   const testPlayerIdThree = 'playerThree';
//   const testArrayPlaylist = [{
//     file: 'file',
//   }];
//   const initializeCalls = [];

//   function stubbedInitialize() {
//     initializeCalls.push(this.props.playerId);
//   }

//   ReactJWPlayer.prototype._initialize = stubbedInitialize;

//   mount(
//     <ReactJWPlayer
//       playerId={testPlayerId}
//       playerScript='script'
//       playlist='playlist'
//     />,
//   );

//   mount(
//     <ReactJWPlayer
//       playerId={testPlayerIdTwo}
//       playerScript='script'
//       playlist='playlist'
//     />,
//   );

//   mount(
//     <ReactJWPlayer
//       playerId={testPlayerIdThree}
//       playerScript='script'
//       playlist={testArrayPlaylist}
//     />,
//   );

//   const script = document.querySelector('#jw-player-script');
//   t.equal(typeof script.onload, 'function', 'it sets script.onload to a function');

//   script.onload();
//   t.deepEqual(
//     initializeCalls, [testPlayerId, testPlayerIdTwo, testPlayerIdThree],
//     'script onload calls initialize on all mounted component',
//   );

//   t.end();
// });

// test('<ReactJWPlayer> componentDidUpdate()', (t) => {
//   let initializeDidRun;

//   const componentDidUpdate = new ReactJWPlayer().componentDidUpdate.bind({
//     props: {
//       playerId: 'foobar',
//     },
//     _initialize: () => { initializeDidRun = true; },
//   });

//   if (window.jwplayer) {
//     delete window.jwplayer;
//   }

//   t.doesNotThrow(
//     () => componentDidUpdate(),
//     'it runs without error when jwplayer has not initialized',
//   );

//   t.notOk(
//     initializeDidRun,
//     'it does not call this._initialize() when jwplayer has not initialized yet',
//   );

//   global.window.jwplayer = () => 'jwplayer';

//   t.doesNotThrow(
//     () => componentDidUpdate(),
//     'it runs without error when jwplayer has initialized',
//   );

//   t.ok(
//     initializeDidRun,
//     'it does call this._initialize() when jwplayer has not initialized yet',
//   );

//   t.end();
// });