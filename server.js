import express from 'express';
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
    try {
        return res.status(200).send({ message: "pong" });
    } catch (error) {
        return res.status(500).send({ message: "Something went wrong" });
    }
});

app.post("/signup", (req, res) => {
    try {
        const { Username, Email, Password, Dateofbirth } = req.body;

        // Validation checks
        if (!Username) {
            return res.status(400).send({ message: "Username cannot be empty" });
        }
        if (!Email) {
            return res.status(400).send({ message: "Email cannot be empty" });
        }
        if (Password.length < 8 || Password.length > 16) {
            return res.status(400).send({ message: "The password length should be greater than or equal to 8 and less than or equal to 16" });
        }

        // Mock user creation (replace with actual database logic)
        const newUser = {
            Username,
            Email,
            Password,
            Dateofbirth
        };

        // Simulate saving user (normally you'd use a database)
        return res.status(201).send({ message: "User created successfully", user: newUser });
    } catch (error) {
        return res.status(500).send({ message: "Something went wrong" });
    }
});

app.listen(8080, () => {
    console.log("The server connected successfully");
});
