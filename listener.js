const io = require('socket.io-client')('https://blync-party.herokuapp.com');
const blync = require('blync-party/dist/lib/BlyncStatic');
const commandFactory = require('blync-party/dist/util/commandFactory');
io.connect();

io.on('message', (body) => {
    const { color } = JSON.parse(body);
    const device = blync.BlyncStatic.getDevice(0);
    device.sendCommand(commandFactory.CommandFactory.fromColor(color));
});
