import * as dbUtil from '../../util/Database';

export const checkQRExist = async (qrsecret) => {
    const sql = 'select count(*) as count from qr_code where code = ?';
    const result = await dbUtil.query(sql, [qrsecret]);
    if (result[0].count == 0) {
        return false
    }
    return true;
}
