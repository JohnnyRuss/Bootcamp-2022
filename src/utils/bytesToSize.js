/**
 * calculates image size
 * @param {Number} bytes image size in bytes
 * @returns image size as string
 */
function bytesToSize(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return 'n/a';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
  if (i === 0) return `${bytes} ${sizes[i]})`;
  if (bytes) return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
}

export default bytesToSize;
