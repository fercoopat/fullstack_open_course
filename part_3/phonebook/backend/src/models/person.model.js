import { model, Schema } from 'mongoose';

export const VALID_PHONE_REGEX = /^\d{2,3}-\d{6,}$/;

const personSchema = new Schema({
  name: {
    type: String,
    minLength: 3,
    required: true,
    unique: true,
  },
  number: {
    type: String,
    minLength: 8,
    required: true,
    validate: {
      validator: function (value) {
        return VALID_PHONE_REGEX.test(value);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
});

export const Person = model('Person', personSchema);
