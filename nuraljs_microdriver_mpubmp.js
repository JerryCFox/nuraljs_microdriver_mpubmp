module.exports.init=init;

var err=null;
var method;

function init(options,cb){
    if(options){
        if(options.mpu&&options.bmp){
            mpu=options.mpu;
            bmp=options.bmp;
            if(options.method){
                method=options.method;
                mpu=mpu.connect(method,function(err,res){
                    if(err) throw err;
                    //bmp=bmp.connect(method,function(err,res){
                    //     if(err) throw err;
                         cb(err,"MPU-BMP Enabled");
                    //});
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
