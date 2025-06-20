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
  { timestamps: true }
);

// bookSchema.method("getquantity",function(copies:number){
// //complete it
// })


export const Book = model<IBook>('Book', bookSchema);
