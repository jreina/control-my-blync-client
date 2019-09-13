const io = require('socket.io-client')('http://localhost:8080');
const { BlyncParty } = require('blync-party');
io.connect();

const party = new BlyncParty();

io.on('color', (body) => {
    const { color } = JSON.parse(body);
    party.setColor(color);
});

io.on('pattern', (body) => {
    const { pattern } = JSON.parse(body);
    try {
        party.runPattern(pattern);
    } catch (ex) {
        console.log(ex);
    }
});
