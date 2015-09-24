var dharma_1 = require("dharma");
function runDharma(grunt) {
    grunt.registerMultiTask('dharma', 'Runs Dharma', function () {
        var that = this;
        var options = that.options({});
        var dharma = new dharma_1.Dharma(options["configFile"]);
        var done = that.async();
        dharma.run().then(function () {
            done();
        }).catch(function (err) {
            grunt.log.error(err);
            done(false);
        });
    });
}
module.exports = runDharma;
//# sourceMappingURL=dharma.js.map