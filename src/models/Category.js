'use strict';
const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

const CategoryModel = mongoose.model('Category', CategoryModel);

module.exports = CategoryModel;
