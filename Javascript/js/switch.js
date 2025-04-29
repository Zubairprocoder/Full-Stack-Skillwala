const prompt = require("prompt-sync")();
let job_Role = "Engineer";
switch (job_Role) {
  case "Doctor":
    console.log("You are a Doctor");
    break;
  case "Engineer":
    console.log("You are an Engineer");
    break;
  case "Teacher":
    console.log("You are a Teacher");
    break;
  default:
    console.log("Invalid job role");
}
