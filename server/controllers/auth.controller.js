import User from "../models/user.model.js";

// Sign up logic
export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body; //  Extract username, email, and password from request body
    const hashedPassword = bcryptjs.hashSync(password, 10); // Hash the password
    const user = new User({ username, email, password: hashedPassword }); // Create a new user instance
    await user.save(); // Save the user to the database
    res.status(201).json({ message: "User registered successfully" }); // Send a success message
  } catch (error) {
    res.status(400).json({ message: "Error registering user", error }); // Send an error message
  }
};
