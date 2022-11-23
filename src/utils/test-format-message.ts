import { formatMessage } from '../tasks/post-on-twitter';

(async function main() {
  console.log(formatMessage({
    artistSocial: 'artvsscience',
    note: 'This is fun!',
    requestedBy: 'Jonathan_Dupre',
    url: 'https://www.youtube.com/watch?v=vbhJ9c-pFoI',
  }));
}());
