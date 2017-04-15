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
                    method=I2C1.setup({sda:options.method.sda,scl:options.method.scl});
                }
                else if(options.method.method=="I2C2"&&options.method.sda&&options.method.scl){
                    console.log("gottohere");
                    method=I2C2.setup({sda:options.method.sda,scl:options.method.scl});
                }
                else{
                    throw cb(err,"MPU-BMP connect method not properly defined");
                }
                mpu=mpu.connect(method,function(err,res){
                    if(err) throw err;
                    bmp=bmp.connect(method,function(err,res){
                         if(err) throw err;
                         cb(err,"MPU-BMP Enabled");
                    });
                });
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
