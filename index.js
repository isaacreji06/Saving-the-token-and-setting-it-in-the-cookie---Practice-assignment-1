const {encrypt,decrypt}=require('./script.js');
const testPayload={
    userId:123,
    role:"Admin"
}
const encryptedToken=encrypt(testPayload)
console.log({"encryptedToken":encryptedToken})
try{
    const decryptedPayload = decrypt(encryptedToken);
  console.log({"Decrypted Payload": decryptedPayload});
} catch (error) {
  console.error(error.message);
}