import * as dbUtil from '../../util/Database';

export const getAllVehicleDAL = async () => {
    const sql = 'select * from vehicle';
    const result = await dbUtil.query(sql);
    return result;
}

export const getByQrCodeDAL = async (qrcode) => {
    const sql = 'select * from vehicle where qr_code = ? limit 1';
    const result = await dbUtil.query(sql, [qrcode]);
    return result;
}
