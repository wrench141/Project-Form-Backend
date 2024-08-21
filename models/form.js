const mongoose = require("mongoose");

const formSchema = mongoose.Schema(
  {
    refId: {type:String, required: true},
    data: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

const FormModel = mongoose.model("FormData", formSchema);
module.exports = FormModel;