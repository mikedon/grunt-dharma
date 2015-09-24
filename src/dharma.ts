import {Dharma} from "dharma";

function runDharma(grunt: IGrunt){
	grunt.registerMultiTask('dharma', 'Runs Dharma', function(){	
		let that: grunt.task.IMultiTask<{src: string;}> = this;		
		let options = that.options({});
		let dharma = new Dharma(options["configFile"]);
		let done = that.async();
		
		//TODO this is async
		dharma.run().then(()=>{
			done();
		}).catch((err)=>{
			grunt.log.error(err);
			done(false);
		});
	});
}

export = runDharma;