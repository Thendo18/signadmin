const express = require('express');
const app = express();

app.use(express.static('./dist/bootstrap4Dylut'));
app.get('/*', function(req,res) {
    res.sendFile('index.html', {root: 'dist/bootstrap4Dylut'})
})

app.listen(process.env.PORT || 8080)