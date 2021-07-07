import moment from 'moment';
import * as dbUtil from '../../util/Database';

export const writeLogDAL = async (data) => {
    const sql = 'insert into system_log (timestamp,user,command) values (?,?,?)';
    const result = await dbUtil.query(sql, [moment(moment.now()).format('YYYY-MM-DD hh:mm:ss'), data.user, data.command]);
    return result;
}

export const getLogDAL = async () => {
    const sql = 'select * from system_log order by timestamp desc limit 20';
    const result = await dbUtil.query(sql);
    return result;
}
