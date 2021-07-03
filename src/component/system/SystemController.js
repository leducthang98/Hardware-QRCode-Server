import { ERRORS } from '../../constant/Errors';
import { commonResponse } from '../../util/ResponseForm';
import { getLogDAL, writeLogDAL } from './SystemDAL';

export const writeLog = async (req, res, next) => {
    if (req.body.user && req.body.command) {
        const result = await writeLogDAL(req.body)
        res.send(commonResponse(result))
    } else {
        next(ERRORS.INVALID_INPUT_PARAMS)
    }

}

export const getLog = async (req, res, next) => {
    const data = await getLogDAL();
    res.send(commonResponse(data))

}