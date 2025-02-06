// eslint-disable-next-line @typescript-eslint/no-var-requires
const syncPost = require('./github/syncPost');
// const syncCategories = require('./github/syncCategories');
const syncRules = require('./github/syncRules');


// syncCategories();
syncRules();
syncPost();