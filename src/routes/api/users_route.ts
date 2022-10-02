import { Router } from 'express'
import * as controller from '../../controllers/users_controllers'
// import validateToken from "../../middleware/authenticate";

const route = Router()

route.route('/').post(controller.create)
const routes = Router()

// routes.route('/').get(validateToken, controller.index).post(controller.create);
routes.route('/').get(controller.index).post(controller.create)
routes.route('/:id').get(controller.show).delete(controller.delete_user)

routes.post('/authenticate', controller.authenticate);

export default routes