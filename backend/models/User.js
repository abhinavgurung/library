const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'User',
    },
  },
  { timestamps: true }, // gives createdAt and updatedAt
);

const User = mongoose.model('User', UserSchema);
module.exports = User;
