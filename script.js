const jwt=require("jsonwebtoken");
require("dotenv").config();
const CryptoJS = require("crypto-js");

const encrypt = (payload) => {
  // encrypt the payload and return token
  const token=jwt.sign(payload,process.env.jwtSecret,{expiresIn:'1h'});
  const encryptedToken=CryptoJS.AES.encrypt(token,process.env.encryptionSecret).toString();
  return encryptedToken;
}

const decrypt = (token) => {
  // return decoded payload
  try{
    const bytes=CryptoJS.AES.decrypt(token,process.env.encryptionSecret);
    const decryptedToken=bytes.toString(CryptoJS.enc.Utf8)
    const decodedPayload=jwt.verify(decryptedToken,process.env.jwtSecret);
    return decodedPayload;
  }
  catch(err){
    console.log("Invalid token or decryption failed")
  }
}

module.exports = {
  encrypt,
  decrypt
}
