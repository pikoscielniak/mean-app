var crypto = require('crypto');

function createSalt() {
    return crypto.randomBytes(128).toString('base64');
}

function hashPwd(salt, pwd) {
    var hmac = crypto.createHmac('sha1', salt);
    return hmac.update(pwd).digest('hex');
}

exports.createSalt = createSalt;
exports.hashPwd = hashPwd;