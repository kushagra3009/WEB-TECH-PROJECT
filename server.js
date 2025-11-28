const express = require("express");
const path = require("path");
const fs = require("fs").promises;

const app = express();
const PORT = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(__dirname));

// API route to get quiz questions by category
app.get("/api/quiz/:category", (req, res) => {
  const category = req.params.category.toLowerCase();

  // Check if category exists
  if (!quizDataStore[category]) {
    return res.status(404).json({
      success: false,
      message: "Category not found. Available categories: jee, cuet, neet",
    });
  }

  // Return quiz questions for the category
  res.json({
    success: true,
    category: category,
    questions: quizDataStore[category],
  });
});

// API route to get all available categories
app.get("/api/categories", (req, res) => {
  const categories = Object.keys(quizDataStore).map((key) => ({
    id: key,
    name: getCategoryName(key),
  }));

  res.json({
    success: true,
    categories: categories,
  });
});

// Helper function to get full category name
function getCategoryName(category) {
  const names = {
    jee: "JEE (Joint Entrance Exam)",
    cuet: "CUET (Common University Entrance Test)",
    neet: "NEET (Medical Entrance)",
  };
  return names[category] || category;
}

// Serve the main HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Quiz App Server is running on http://localhost:${PORT}`);
  console.log(`📚 Available categories: JEE, CUET, NEET`);
  console.log(`\nAPI Endpoints:`);
  console.log(`  GET /api/quiz/:category - Get quiz questions for a category`);
  console.log(`  GET /api/categories - Get all available categories`);
});

module.exports = app;
