const { Schema, model, Types } = require('mongoose');



const reactionSchema = new Schema(
  {
    reactionId: {
          type: Schema.Types.ObjectId,
          required: true,
          default: () => new Types.ObjectId(),     
    },
        reactionBody: {
        type: String,
        required: true,
        maxlength: 280
      },
    createdAt: {
      type: Date,
      default: Date.now,
      getters: true
    },
    username: {
      type: String,
      required: true
    },

  },
  {
    toJSON: {
      getters: true
    }
  }
);



module.exports = reactionSchema;