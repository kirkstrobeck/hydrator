import { renderToString } from 'react-dom/server';
import fs from 'fs';
import React from 'react';

import page from '../pages/home';

fs.writeFileSync(
  './static/home.html',
  `
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    ${renderToString(page.server)}
    <script src="bundle.js"></script>
  </body>
</html>
    `,
  'utf8'
);
