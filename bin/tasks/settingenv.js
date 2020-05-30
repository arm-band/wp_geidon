const _             = require('../plugin');
const sampleEnvFile = './sample.env';

const isExistFile = (file) => {
    try {
        _.fs.statSync(file);
        return true;
    } catch(err) {
        if(err.code === 'ENOENT') {
            return false;
        }
    }
}

if(isExistFile(sampleEnvFile)) {
    _.fs.writeFileSync('./.env', _.fs.readFileSync(sampleEnvFile, 'utf8'), (err) => {
        if(err) {
            console.log(err);
        }
    });
}
