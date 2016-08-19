import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/stories/block');
}

configure(loadStories, module);
