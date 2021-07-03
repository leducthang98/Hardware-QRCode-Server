import { Router } from 'express';
import { jwtFilter, requireQrSecret } from '../../middleware/Authenticate';
import { controllerHandler } from '../../middleware/ErrorHandler';
import { getAllVehicle } from './VehicleController';

const path = '/vehicle';
const router = Router();

router.get('/', requireQrSecret, controllerHandler(getAllVehicle));

export default { path, router };
