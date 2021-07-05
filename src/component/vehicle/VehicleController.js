import { commonResponse } from '../../util/ResponseForm';
import { getAllVehicleDAL, getByQrCodeDAL } from './VehicleDAL';

export const getAllVehicle = async (req, res) => {
    const vehicles = await getAllVehicleDAL()
    res.send(commonResponse(vehicles))
}

export const getByQrCode = async (req, res) => {
    const response = await getByQrCodeDAL(req?.query?.qrcode)
    res.send(commonResponse(response))

}