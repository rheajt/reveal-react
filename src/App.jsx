import React from 'react';
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Section from './components/Section';

function App() {
  React.useEffect(() => {
    let deck = new Reveal({
      plugins: [Markdown, window.RevealChalkboard],
      chalkboard: {
        boardmarkerWidth: 3,
        chalkWidth: 7,
        chalkEffect: 1.0,
        src: null,
        readOnly: undefined,
        toggleChalkboardButton: {
          left: '30px',
          bottom: '30px',
          top: 'auto',
          right: 'auto',
        },
        toggleNotesButton: {
          left: '30px',
          bottom: '30px',
          top: 'auto',
          right: 'auto',
        },
        transition: 800,
        theme: 'chalkboard',
        background: [
          'rgba(127,127,127,.9)',
          process.env.PUBLIC_URL + '/plugins/chalkboard/img/blackboard.png',
        ],
        grid: { color: 'rgb(50,50,10,0.5)', distance: 80, width: 2 },
        eraser: {
          src: process.env.PUBLIC_URL + '/plugins/chalkboard/img/sponge.png',
          radius: 20,
        },
        boardmarkers: [
          {
            color: 'rgba(100,100,100,1)',
            cursor:
              'url(' +
              process.env.PUBLIC_URL +
              '/plugins/chalkboard/img/boardmarker-black.png), auto',
          },
          {
            color: 'rgba(30,144,255, 1)',
            cursor:
              'url(' +
              process.env.PUBLIC_URL +
              '/plugins/chalkboard/img/boardmarker-blue.png), auto',
          },
          {
            color: 'rgba(220,20,60,1)',
            cursor:
              'url(' +
              process.env.PUBLIC_URL +
              '/plugins/chalkboard/img/boardmarker-red.png), auto',
          },
          {
            color: 'rgba(50,205,50,1)',
            cursor:
              'url(' +
              process.env.PUBLIC_URL +
              '/plugins/chalkboard/img/boardmarker-green.png), auto',
          },
          {
            color: 'rgba(255,140,0,1)',
            cursor:
              'url(' +
              process.env.PUBLIC_URL +
              '/plugins/chalkboard/img/boardmarker-orange.png), auto',
          },
          {
            color: 'rgba(150,0,20150,1)',
            cursor:
              'url(' +
              process.env.PUBLIC_URL +
              '/plugins/chalkboard/img/boardmarker-purple.png), auto',
          },
          {
            color: 'rgba(255,220,0,1)',
            cursor:
              'url(' +
              process.env.PUBLIC_URL +
              '/plugins/chalkboard/img/boardmarker-yellow.png), auto',
          },
        ],
        chalks: [
          {
            color: 'rgba(255,255,255,0.5)',
            cursor:
              'url(' +
              process.env.PUBLIC_URL +
              '/plugins/chalkboard/img/chalk-white.png), auto',
          },
          {
            color: 'rgba(96, 154, 244, 0.5)',
            cursor:
              'url(' +
              process.env.PUBLIC_URL +
              '/plugins/chalkboard/img/chalk-blue.png), auto',
          },
          {
            color: 'rgba(237, 20, 28, 0.5)',
            cursor:
              'url(' +
              process.env.PUBLIC_URL +
              '/plugins/chalkboard/img/chalk-red.png), auto',
          },
          {
            color: 'rgba(20, 237, 28, 0.5)',
            cursor:
              'url(' +
              process.env.PUBLIC_URL +
              '/plugins/chalkboard/img/chalk-green.png), auto',
          },
          {
            color: 'rgba(220, 133, 41, 0.5)',
            cursor:
              'url(' +
              process.env.PUBLIC_URL +
              '/plugins/chalkboard/img/chalk-orange.png), auto',
          },
          {
            color: 'rgba(220,0,220,0.5)',
            cursor:
              'url(' +
              process.env.PUBLIC_URL +
              '/plugins/chalkboard/img/chalk-purple.png), auto',
          },
          {
            color: 'rgba(255,220,0,0.5)',
            cursor:
              'url(' +
              process.env.PUBLIC_URL +
              '/plugins/chalkboard/img/chalk-yellow.png), auto',
          },
        ],
      },
    });

    deck.initialize();
  }, []);

  return (
    <div className="slides">
      <Section>Hello world</Section>
      <Section>Hello world</Section>
      <Section data-background-color="aquamarine">Hello world</Section>
      <Section>Hello world</Section>
      <Section>Hello world</Section>
      <Section>Hello world</Section>
    </div>
  );
}

export default App;
