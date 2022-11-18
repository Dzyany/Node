/*
 * @Author: dengzy
 * @Date: 2022-11-16 13:07:03
 * @LastEditTime: 2022-11-16 13:41:39
 * @FilePath: \Node\test.js
 */

var fs = require('fs');
let tsArr = []
var a =  {
    "salesOrderDetail":{
        "clientCode":"KUNCHI",
        "facilityCode":"*",
        "companyCode":"KUNCHI",
        "storeCode":"丝蕴官方旗舰店",
        "skuCode":"020202100000012",
        "sourceLineNum":"10",
        "originalDetailId":0,
        "requestQty":1,
        "shipQty":0,
        "returnQty":0,
        "shortQty":0,
        "allocatedQty":0,
        "quantityUM":"EA",
        "listPrice":0,
        "netPrice":0,
        "msrPrice":0,
        "itemTotalAmount":0,
        "totalPayAmount":81.2,
        "payPrice":0,
        "discountAmount":0,
        "inventorySts":"AVAILABLE",
        "totalWeight":0,
        "totalVolume":0,
        "totalVolumeWeight":0,
        "weightUM":"G",
        "volumeUM":"CM3",
        "bonusPoints":0,
        "isGift":0,
        "bomType":0,
        "bomQty":0,
        "isDeliverySync":0,
        "isMappingSku":0,
        "inventoryId":0,
        "version":0,
        "userDef6":"正常品",
        "userDef7":"1",
        "lot":"100103",
        "attribute3":"15",
        "attributeMode":1,
        "promotionPolicyGiveawayId":0,
        "origUntaxPrice":0,
        "origUntaxAmount":0,
        "origInclueTaxPrice":0,
        "origInclueTaxAmount":0,
        "origTaxAmount":0,
        "localUntaxPrice":0,
        "localUntaxAmount":0,
        "localInclueTaxPrice":0,
        "localInclueTaxAmount":0,
        "localTaxAmount":0,
        "taxAmount":0,
        "businessUnitName":"个护家清事业部",
        "damageType":"无",
        "damageSource":"非不良品",
        "channelCode":"A002002021"
    }
}
var num = 0
while (num < 3) {
    tsArr.push(a)
    num++;
    // console.log(num);
    
}
var readstrem = fs.createReadStream('./file/json.txt');
// 设置编码为 utf8。
readstrem.setEncoding('utf-8');
var writerStream = fs.createWriteStream('./file/json.txt');
writerStream.write(tsArr,'utf-8');
writerStream.on('finish',function(){
    console.log('finish');
})