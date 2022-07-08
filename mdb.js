// ====================== Create an empty modbus client ===========
let ModbusRTU = require("modbus-serial");
let client = new ModbusRTU();

// ================================================================

// ====================== Communications Parameters ===============

//let Addr = '169.254.162.1' // IP Address of device modbus
let timeRefresh = 1000; // miliseconds
let iD = 247; // Id Unitrol 1020 (default)
let Addr = '127.0.0.1'

// ================================================================

// =============== Open connection to a tcp line ===================

client.connectTCP(Addr, { port: 502 });
client.setID(iD);

// =================================================================

// =============== read/write values of Unitrol 1020 =================
setInterval(function () {

    // ======================== Read Control Register =================== 
    /*If digital or analog inputs are selected for any physical input, 
    the control register is ignored.
    40001 ----> Control Word 1
    40002 ----> Control Word 2
    40003 ----> Control Word 3 */
    client.readHoldingRegisters(0, 3, function (err1, data1) {
        console.log('Control_Register');
        console.log(data1);
    });

    // =============================================================

    // ================== Write Setpoint Absolute ===================
    /*It is only possible to use either the absolute or the relative setpoint. 
    The unused setpoint must be written as zero, otherwise both are ignored.
    40005 ----> Auto Setpoint Absolute
    40006 ----> Manual Setpoint Absolute
    40007 ----> PF Setpoint Absolute
    40008 ----> Var Setpoint Absolute*/

    // client.readHoldingRegisters(4, 4, function (err2, data2) {
    //     console.log('Setpoints_Register_Absolute');
    //     console.log(data2);
    // });

    // =============================================================

    // ================== Write Setpoint Relative ==================
    /*It is only possible to use either the absolute or the relative setpoint. 
    The unused setpoint must be written as zero, otherwise both are ignored.
    40010 ----> Auto Setpoint Relative
    40011 ----> Manual Setpoint Relative
    40012 ----> Var Setpoint Relative
    40013 ----> Open Loop Setpoint*/

    // client.readHoldingRegisters(9, 4, function (err3, data3) {
    //     console.log('Setpoints_Register_Relative');
    //     console.log(data3);
    // });

    // =============================================================

    // ================== Read Analog Inputs ==================

    // ========================================================

    // ======================== Status Register =================== 
    /*
    40101 ----> Control Word 1
    40102 ----> Control Word 2*/

    client.readHoldingRegisters(100, 2, function (err5, data5) {
        console.log('Status_Register');
        console.log(data5);
    });

    // =============================================================

    // ===================== Limiter Status ======================== 
    /*
    40105 ----> Limiter Status Word
    */

    client.readHoldingRegisters(104, 1, function (err6, data6) {
        console.log('Limiter_Status');
        console.log(data6);
    });

    // =============================================================

    // ================= Alarm/Protection Status =================== 
    /*
    40106 ----> Alarm/Protection Status Word
    */

    client.readHoldingRegisters(105, 1, function (err7, data7) {
        console.log('Alarm_Protection_Status');
        console.log(data7);
    });

    // ===========================================================

    // ================= Digital Output Status =================== 
    /*
    40107 ----> DO Status Word
    */

    client.readHoldingRegisters(106, 1, function (err8, data8) {
        console.log('DO_Status');
        console.log(data8);
    });

    // =============================================================

    // ================= Digital Input Status =================== 
    /*
    40108 ----> DI Status Word
    */

    client.readHoldingRegisters(107, 1, function (err9, data9) {
        console.log('DI_Status');
        console.log(data9);
    });

    // =============================================================

    // =========== Analog input used as digital inputs) ============ 
    /*
    40109 ----> Virutal DI Status Word
    */

    client.readHoldingRegisters(108, 1, function (err10, data10) {
        console.log('Virtual_DI_Status');
        console.log(data10);
    });

    // =============================================================


    // 2.3.7 Read Setpoint (aqui quede)





    // Status Words 1 and 2 (40101 & 40102)
    //client.readHoldingRegisters(100, 2, function (err2, data) {
    // console.log(data.data);
    // let statusWord1 = data.data[0].toString(2);
    // console.log(statusWord1);
    //});


    //client.writeRegister(20, 99);

}, timeRefresh);


// setInterval(function(){
// client.writeCoil(14, 0, function(err, data){
//     console.log('Dato escrito')
//     console.log(data);
//     //console.log(err);
// })
// }, 1000);

