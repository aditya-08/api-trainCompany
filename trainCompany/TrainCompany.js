var mongoose = require('mongoose');
  
var TrainCompanySchema = new mongoose.Schema({  
  tocCode: String,
  tocName: String,
  delayedBy: String,
  claimBy: String,
  TwitterAccount: String,
  claimUrl: String,
  iconImage: String
});
mongoose.model('TrainCompany', TrainCompanySchema);

module.exports = mongoose.model('TrainCompany');
