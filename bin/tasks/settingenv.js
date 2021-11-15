const fs            = require('fs');
const sampleEnvFile = './sample.env';

const isExistFile = (file) => {
    try {
        fs.statSync(file);
        return true;
    } catch(err) {
        if(err.code === 'ENOENT') {
            return false;
        }
    }
}

if(isExistFile(sampleEnvFile)) {
    fs.writeFileSync('./.env', fs.readFileSync(sampleEnvFile, 'utf8'), (err) => {
        if(err) {
            console.log(err);
        }
    });
}
