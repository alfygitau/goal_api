const asyncHandler = require("express-async-handler");
// @desc get all goals
// @method GET /api/goals
// @access Public
const getGoals =  asyncHandler(async (req, res) => {
  res.json({ message: "get goals" });
});

// @desc create a goal
// @method POST /api/goals
// @access private
const createGoal = asyncHandler(async (req, res) => {
  res.json({ message: "set goal" });
});

// @desc update a goal
// @method PUT /api/goals/:id
// @access private
const updateGoal = asyncHandler(async (req, res) => {
  res.json({ message: `update goal ${req.params.id}` });
});

// @desc delete a goal
// @method DELETE /api/goals/:id
// @access private
const deleteGoal = asyncHandler(async (req, res) => {
  res.json({ message: `delete goal ${req.params.id}` });
});

module.exports = { getGoals, createGoal, updateGoal, deleteGoal };
