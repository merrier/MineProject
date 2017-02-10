/* +--------------------------------------------------------------------------
 // | Author: Merrier <953075999@qq.com> <http://> <Date:2017/2/10 下午19:38>
 // +-------------------------------------------------------------------------*/

/* 方法说明：基数排序
 参数：arr-排序数组
 maxDigit-最大位数
 说明：基数排序适用于：
 （1）数据范围较小，建议小于1000
 （2）每个数值都要大于等于0*/
function radixSort(arr, maxDigit) {
    var mod = 10,
        dev = 1,
        counter = [];
    console.time('基数排序耗时');
    for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
        for (var j = 0; j < arr.length; j++) {
            var bucket = parseInt((arr[j] % mod) / dev);
            if (counter[bucket] == null) {
                counter[bucket] = [];
            }
            counter[bucket].push(arr[j]);
        }
    }
    var pos = 0;
    for (var k = 0; k < counter.length; k++) {
        var value = null;
        if (counter[k] != null) {
            while ((value = counter[k].shift()) != null) {
                arr[pos++] = value;
            }
        }
    }
    console.timeEnd('基数排序耗时');
    return arr;
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(radixSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]