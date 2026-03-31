const app = require("./app.js");

const PORT = process.env.PORT || 4001;

// This conditional is here for testing purposes:
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}
