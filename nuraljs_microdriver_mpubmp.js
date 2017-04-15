module.exports.init=init;

var mpu;
var bmp;
var err=null;
var method;

function init(options,cb){
    if(options){
        if(options.mpu&&options.bmp){
            mpu=options.mpu;
            bmp=options.bmp;
            if(options.method){
                if(options.method.method=="I2C1"&&options.method.sda&&options.method.scl){
                    I2C1.setup({sda:options.method.sda,scl:options.method.scl});
                    method=I2C1;
                }
                else if(options.method.method=="I2C2"&&options.method.sda&&options.method.scl){
                    I2C2.setup({sda:options.method.sda,scl:options.method.scl});
                    method=I2C2;
                }
                else{
                    throw cb(err,"MPU-BMP connect method not properly defined");
                }
                mpu=mpu.connect(I2C2);
                bmp=bmp.connect(I2C2);
                cb(err,"MPU-BMP Enabled");
            }
            else {
                throw cb(err,"MPU-BMP connect method not properly defined");
            }
        }
        else{
            throw cb(err,"MPU-BMP connect method not properly defined");
        }
    }
    else{
        throw cb(err,"MPU-BMP options not properly defined");
    }
}