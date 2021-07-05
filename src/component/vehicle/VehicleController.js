import { commonResponse } from '../../util/ResponseForm';
import { getAllVehicleDAL, getByQrCodeDAL } from './VehicleDAL';

export const getAllVehicle = async (req, res) => {
    const vehicles = await getAllVehicleDAL()
    res.send(commonResponse(vehicles))
}

export const getByQrCode = async (req, res, next) => {
    const response = await getByQrCodeDAL(req?.query?.qrcode)
    if (response.length == 0) {
        next('Error')
    } else {
        res.send(commonResponse(response))
    }
}