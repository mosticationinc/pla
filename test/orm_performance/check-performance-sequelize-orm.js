const TIMES = parseInt(process.env.TIMES || 2)
    , LIMIT = parseInt(process.env.LIMIT || 1000)

var runNodeOrmTest     = require("./node-orm")
  , runSequelizeTest   = require("./sequelize")

var printDurations = function(lib, durations) {
  console.log()

  for(var testName in durations[0]) {
    var sum = 0
      , msg = "{{lib}}#{{testName}} ({{times}} runs): {{duration}}ms"

    durations.forEach(function(res) { sum += res[testName] })

    msg = msg
      .replace('{{lib}}', lib)
      .replace('{{testName}}', testName)
      .replace('{{times}}', durations.length)
      .replace('{{duration}}', sum / durations.length)

    console.log(msg)
  }
}


  runNodeOrmTest(TIMES, LIMIT, function(nodeOrmDurations) {
    runSequelizeTest(TIMES, LIMIT, function(sequelizeDurations) {
        printDurations('node-orm', nodeOrmDurations)
        printDurations('sequelize', sequelizeDurations)
        process.exit()
    })
  })

