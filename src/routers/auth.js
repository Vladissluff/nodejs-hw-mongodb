import { Router } from 'express';
import {
  loginUserController,
  logoutUserController,
  refreshUserController,
  registerUserController,
<<<<<<< HEAD
  resetAuthPasswordController,
  sendResetEmailController,
} from '../controllers/auth.js';
import {
  loginUserBodyCheck,
  registerUserBodyCheck,
  requestResetPwdBodyCheck,
  resetAuthPasswordBodyCheck,
} from '../middlewares/validationBody.js';
=======
} from '../controllers/auth.js';
import { loginUserBodyCheck, registerUserBodyCheck } from '../middlewares/validationBody.js';
>>>>>>> hw5-auth

const authEndpoints = Router();

authEndpoints.post('/register', registerUserBodyCheck, registerUserController);
authEndpoints.post('/login', loginUserBodyCheck, loginUserController);
authEndpoints.post('/refresh', refreshUserController);
authEndpoints.post('/logout', logoutUserController);

<<<<<<< HEAD
authEndpoints.post('/send-reset-email', requestResetPwdBodyCheck, sendResetEmailController);
authEndpoints.post('/reset-pwd', resetAuthPasswordBodyCheck, resetAuthPasswordController);

=======
>>>>>>> hw5-auth
export default authEndpoints;