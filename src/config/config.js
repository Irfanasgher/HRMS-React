// For Dev App Config
var config = {
  //for prod
  BASEURL: "https://hrms-back-org-prod.azurewebsites.net",
  BASEURLATTENDANCE: "https://hrms-back-atd-prod.azurewebsites.net",
  BASEURLEMPLOYEE: "https://hrms-back-emp-prod.azurewebsites.net",
  BASEURLPAYMENT: "https://hrms-back-pay-prod.azurewebsites.net",
  BASEURLRABC: "https://hrms-back-rabc-prod.azurewebsites.net",

  //for test
  // BASEURL: "https://hrms-backend.azurewebsites.net",
  // BASEURLATTENDANCE: "https://hrms-back-atd.azurewebsites.net",
  // BASEURLEMPLOYEE: "https://hrms-back-emp.azurewebsites.net",
  // BASEURLPAYMENT: "https://hrms-back-pay.azurewebsites.net",
  // BASEURLRABC: "https://hrms-back-rabc-prod.azurewebsites.net",

  hd: { headers: { "auth-token": localStorage.getItem("auth-token") } },
};

export default config;

// var config = {
//   BASEURL: "https://hrms-backend.azurewebsites.net",
//   BASEURLATTENDANCE: "https://hrms-back-atd.azurewebsites.net",
//   BASEURLEMPLOYEE: "https://hrms-back-emp.azurewebsites.net",

//   blob_url: "https://kestorageacct001.blob.core.windows.net/media",
//   hd: { headers: { "auth-token": localStorage.getItem("auth-token") } },
// };

// setInterval(() => {
//   config["shopId"] = JSON.parse(localStorage.getItem("shopId")) || 0;
// }, 100);

// export default config;
