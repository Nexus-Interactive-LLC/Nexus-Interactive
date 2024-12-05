const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://aadem01:se8YsR7UEiW0EjmD@nexus-interactive.ssgy4.mongodb.net/nexus_interactive?retryWrites=true&w=majority&appName=nexus-interactive', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Connected to MongoDB Atlas - Nexus Database");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB Atlas:", error);
    });
