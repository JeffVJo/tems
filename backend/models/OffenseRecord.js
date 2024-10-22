const mongoose = require('mongoose');

// Sub-schema for individual offenses
const offenseSchema = new mongoose.Schema({
  code: { type: String, required: true },
  fine: { type: Number, required: true },
});

// Main schema for offense records
const offenseRecordSchema = new mongoose.Schema({
  driver: { type: String, required: true },       // Changed from driverName to driver
  officerName: { type: String, required: true },
  officerID: { type: String, required: true },     // Changed from officerId to officerID
  ticketNo: { type: String, required: true, unique: true },
  status: { type: String, required: true },
  dateViolated: { type: Date, default: Date.now }, // Changed from date to dateViolated
  offenses: [offenseSchema],                       // Array of offenses remains the same
  totalFine: { type: Number },                     // Added totalFine field
  remarks: { type: String },
});

const OffenseRecord = mongoose.model('OffenseRecord', offenseRecordSchema);

module.exports = OffenseRecord;
