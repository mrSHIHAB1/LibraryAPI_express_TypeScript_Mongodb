import mongoose, { Model, Schema, model } from 'mongoose';
import { IBook} from '../interfaces/book.interface';


const bookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: {
      type: String,
      required: true,
      enum: ['FICTION', 'NON_FICTION', 'SCIENCE', 'HISTORY', 'BIOGRAPHY', 'FANTASY'],
    },
    isbn: { type: String, required: true, unique: true },
    description: String,
    copies: { type: Number, required: true, min: 0 },
    available: { type: Boolean, default: true },
  },
  { timestamps: true,
    toJSON: {
      transform(doc, ret) {
        delete ret.__v;
        return ret;
      }
    }
   },
  
);

bookSchema.post('save', function (doc) {
  console.log(`New Book Created: Title: ${doc.title},  ISBN: ${doc.isbn}`);
});

bookSchema.pre('find', function (next) {
  console.log('Book find operation ');
  next();
});



bookSchema.pre('findOneAndUpdate', function (next) {
  console.log('Book updating');
  next();
});


bookSchema.post('findOneAndUpdate', function (doc) {
  console.log(`Book updated: "${doc?.title}"`);
});


bookSchema.pre('findOneAndDelete', function (next) {
  console.log('Book deleting');
  next();
});


bookSchema.post('findOneAndDelete', function (doc) {
  console.log(`Deleted book: "${doc?.title}"`);
});

export const Book = model<IBook>('Book', bookSchema);
