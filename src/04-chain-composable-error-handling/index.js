import fs from 'fs';

const getVersion = () => {
  const str = fs.readFileSync('package.json');
  const pkg = JSON.parse(str);
  return pkg.version;
};

export default getVersion;
