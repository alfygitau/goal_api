const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

// @desc get all goals
// @method GET /api/goals
// @access Public
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.json(goals);
});

// @desc create a goal
// @method POST /api/goals
// @access private
const createGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.create({
    text: req.body.text,
  });
  res.json(goal);
});

// @desc update a goal
// @method PUT /api/goals/:id
// @access private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  } else {
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedGoal);
  }
});

// @desc delete a goal
// @method DELETE /api/goals/:id
// @access private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  } else {
    await goal.remove();
    res.json({ message: `deleted goal ${req.params.id}` });
  }
});

module.exports = { getGoals, createGoal, updateGoal, deleteGoal };
