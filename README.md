# Example of usage:

```typescript

import { jdownloader } from '@chasidic/jdownloader';

(async function () {
    const files = [
        'http://example.com/1.mp3',
        'http://example.com/2.mp3'
    ];

    await jdownloader({ files, package: 'myFiles'});
})();

```