const path = require('path');

module.exports = app => {
    app.get("/api", (req, res) => {
        res.json({ message: '๐ รจ ancora tutto fango ma ben presto... Apiarios!' });
    });

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
    });
};