import { Router } from 'express';
import { jwtFilter, requireQrSecret } from '../../middleware/Authenticate';
import { controllerHandler } from '../../middleware/ErrorHandler';
import { getAllVehicle, getByQrCode } from './VehicleController';

const path = '/vehicle';
const router = Router();

router.get('/', requireQrSecret, controllerHandler(getAllVehicle));

router.get('/get-by-qrcode', controllerHandler(getByQrCode));

export default { path, router };
