import { tweet } from '../service/twitter';

const arg = process.argv[2];

if (!arg) throw new Error('missing arg');

tweet(arg);
