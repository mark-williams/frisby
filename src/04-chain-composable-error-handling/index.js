import fs from 'fs';

const getVersion = fileName => {
  try {
    const str = fs.readFileSync(fileName);
    const pkg = JSON.parse(str);
    return pkg.version;
  } catch (err) {
    return 'ERROR';
  }
};

export default getVersion;
