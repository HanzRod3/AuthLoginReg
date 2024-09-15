// This controller sends a test message as JSON
export const test = (req, res) => {
  res.json({ message: "Hello from server!" });
};

export const getUserProfile = (req, res) => {
  res.send("User profile fetched successfully");
};
