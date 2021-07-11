export default {}

const nativePaths = (global as any).nativePaths = [
  'bson-ext',
  'lzma-native',
  'xxhash-addon',
  'sharp'
].map(l => require.resolve(l));
