import { Router } from 'express';
import { controllerHandler } from '../../middleware/ErrorHandler';
import { getLog, writeLog } from './SystemController';

const path = '/system';
const router = Router();

router.post('/log', controllerHandler(writeLog));

router.get('/log/all', controllerHandler(getLog));

export default { path, router };
