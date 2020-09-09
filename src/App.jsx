import React from 'react';
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Section from './components/Section';
import { chalkboard } from './settings/chalkboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';

function Slides(props) {
  console.log(props);
  return (
    <div className="slides">
      <Section>
        <Section>
          <h1>Hello world</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            explicabo, accusantium alias inventore dignissimos ipsa minima
            suscipit saepe voluptatum, voluptas temporibus. Eius, ea! Error
            facere mollitia enim saepe repellat eius!
          </p>
        </Section>

        <Section>
          <h1>Vertical</h1>
        </Section>
      </Section>
      <Section>Hello world</Section>
      <Section data-background-color="aquamarine">Hello world</Section>
      <Section>Hello world</Section>
      <Section>Hello world</Section>
      <Section>Hello world</Section>
    </div>
  );
}
function App() {
  const history = useHistory();

  React.useEffect(() => {
    let deck = new Reveal({
      plugins: [Markdown, window.RevealChalkboard],
      chalkboard,
    });

    deck.initialize();
    deck.on('slidechanged', (evt) => {
      console.log('slide');
      // console.log(evt);
    });
  }, []);

  return (
    <div className="slides">
      <Router>
        <Switch>
          <Route path="/:indexh/:indexv" component={Slides} />
          <Route path="*" component={Slides} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
