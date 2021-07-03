import { commonResponse } from '../../util/ResponseForm';
import { getAllVehicleDAL } from './VehicleDAL';

export const getAllVehicle = async (req, res) => {
    const vehicles = await getAllVehicleDAL()
    res.send(commonResponse(vehicles))
}