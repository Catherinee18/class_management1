const express = require('express');

const app=express();
const PORT = 3000;

app.get('/',(req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Class Management</title>
</head>
<body>
        <h1> Class management </h1>

</body>
</html>`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

});
