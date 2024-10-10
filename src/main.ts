const original = 'the quick brown fox jumps over the lazy dog';
const encoded = 'sgd pthbj aqnvm enw itlor nudq sgd kzyx cnf';

const dict: Record<string, string> = {};

for (let i = 0; i < original.length; i++) {
  const originalKey = original[i];
  const encodedKey = encoded[i];

  dict[encodedKey] = originalKey;
}

console.log(dict);

const myText = 'xnt gzud lzjhmf fqdzs oqnfqdrr hm kdzqmhmf izuzrbqhos. bnmfqzsr!';
let result = '';

for (const letter of myText) {
  const encoded = dict[letter];

  if (encoded) {
    result += encoded;
  } else {
    result += letter;
  }
}

console.log(result);
