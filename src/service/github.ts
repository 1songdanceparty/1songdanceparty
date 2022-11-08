/* eslint-disable camelcase */
import sodium from 'libsodium-wrappers';
import { Octokit } from 'octokit';
import env from '../env';

const REPO_OWNER = '1songdanceparty';
const REPO = '1songdanceparty';

export async function updateSecret(secretName: string, secretValue: string) {
  const octokit = new Octokit({ auth: env.GH_TOKEN });

  const { key_id, key } = await octokit.request('GET /repos/{owner}/{repo}/actions/secrets/public-key', {
    owner: REPO_OWNER,
    repo: REPO,
  }).then((res) => res.data);

  const encryptedValue = await encryptSecretValue(secretValue, key);

  // https://docs.github.com/en/rest/actions/secrets#create-or-update-a-repository-secret
  await octokit.request('PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}', {
    key_id,
    owner: REPO_OWNER,
    repo: REPO,
    secret_name: secretName,
    encrypted_value: encryptedValue,
  });
}

async function encryptSecretValue(secretValue: string, publicKey: string) {
  // Check if libsodium is ready and then proceed.
  await sodium.ready;

  // Convert Secret & Base64 key to Uint8Array.
  const binkey = sodium.from_base64(publicKey, sodium.base64_variants.ORIGINAL);
  const binsec = sodium.from_string(secretValue);

  // Encrypt the secret using LibSodium
  const encBytes = sodium.crypto_box_seal(binsec, binkey);

  // Convert encrypted Uint8Array to Base64
  const output = sodium.to_base64(encBytes, sodium.base64_variants.ORIGINAL);

  return output;
}
