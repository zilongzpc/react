/**
 * Created by zhaopenghodoman on 15/5/27.
 */
var _ = require('lodash');
module.exports = function (source, target) {
    return _.merge(target,source,joinArrays);
    function joinArrays(a,b){
        if(_.isArray(a)&& _.isArray(b)){
            return a. concat(b);
        }
        if(_.isPlainObject(a)&& _.isPlainObject(b)){
            return _.merge(a,b,joinArrays);
        }
        return a;
    }
}