import * as dbUtil from '../../util/Database';

export const getAllVehicleDAL = async () => {
    const sql = 'select * from vehicle';
    const result = await dbUtil.query(sql);
    return result;
}
