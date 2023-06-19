import uniqueEmail from "./uniqueEmail.middleware"
import verifyUserIdParams from "./verifyUserIdParams.middleware"
import verifyDevInfoExists from "./verifyDevInfoExists.middleware"
import verifyUserIdBody from "./verifyUserId.middleware"

export default { uniqueEmail, verifyUserIdParams, verifyDevInfoExists, verifyUserIdBody }
