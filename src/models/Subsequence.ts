import mongoose, { Schema, type Document } from 'mongoose';

interface ISubsequence extends Document {
  subsequences: [[number]]
  createdAt: Date
}

const SubsequenceSchema = new Schema<ISubsequence>({
  subsequences: { type: [[Number]], required: true },
  createdAt: { type: Date, default: Date.now }
});

const Subsequence = mongoose.model<ISubsequence>(
  'Subsequence',
  SubsequenceSchema
);

export default Subsequence;
