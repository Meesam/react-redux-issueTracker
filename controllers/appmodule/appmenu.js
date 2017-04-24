import globalobj from  '../../core/global';
import util from  'util';
import appconfig from  '../../appconfig';
import mongoose from  'mongoose';
let Modules = mongoose.model('Modules');

// Add Module

export function addModules(modules,callback) {
	if(modules != null){
		let md=new Modules({
			MenuName:modules.MenuName,
			MenuRoute:modules.RoutName
		});
		md.save(function(err){
			if(err)
				callback(null,err);
			else{
				let obj={
					status:'success',
					count:data.length,
					data:data
				}
				callback(globalobj.globalObject(obj));
			}
		});
	}
}

export function getAllModules(callback) {
	Modules.find(function(err,data){
		if(err)
			callback(null,err);
		else{
			let obj={
				status:'success',
				count:data.length,
				data:data
			}
			callback(globalobj.globalObject(obj));
		}
	});
}



