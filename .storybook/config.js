import { configure } from '@kadira/storybook';
import '../src/index.css'

function loadStories() {
  require('../src/stories/block');
  require('../src/stories/shape');
  require('../src/stories/grid');
}

configure(loadStories, module);
