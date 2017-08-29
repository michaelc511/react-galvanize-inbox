import { configure } from '@storybook/react';
function loadStories() {
  require('../src/index.css');
  // Require your stories here...

  // 1 MessageComponent
  require('../src/components/MessageComponent.story');

  // 2 MessagesComponent
  require('../src/components/MessagesComponent.story');

  // 3 ToolbarComponent
  require('../src/components/ToolbarComponent.story');

  // 4 ComposeFormComponent
  require('../src/components/ComposeFormComponent.story');

  // 5 InboxPageLayout
  require('../src/components/InboxPageLayout.story');

  // 5 InboxPage
  require('../src/components/InboxPage.story');
}
configure(loadStories, module);
