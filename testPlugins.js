const addext = require('./services/extensions')

const miningCandidate = {
  'id': 'e706b0e6-793b-448f-a1ae-8ef54459eb72',
  'prevhash': '70f5701644897c92b60e98dbbfe72e1cfd7a2728c6fa3a29c4b4f6e986b0ccaa',
  'coinbaseValue': 5000000974,
  'version': 536870912,
  'nBits': '207fffff',
  'time': 1590152467,
  'height': 106,
  'num_tx': 4,
  'sizeWithoutCoinbase': 1052,
  'merkleProof': [
    '9bd12ce6508574b3163aadb14eab7bd862306da85b221eb284fb41d6012db98f',
    '56f04cc78ac493defced65dd58f4437c67bcc697b59778b0cd96c3c64c1b0bbf'
  ]
}

const getInfo = {
  'version': 101000300,
  'protocolversion': 70015,
  'walletversion': 160300,
  'balance': 199.99997068,
  'blocks': 104,
  'timeoffset': 0,
  'connections': 4,
  'proxy': '',
  'difficulty': 4.656542373906925e-10,
  'testnet': false,
  'stn': false,
  'keypoololdest': 1575386196,
  'keypoolsize': 1999,
  'paytxfee': 0.00000000,
  'relayfee': 0.00000250,
  'errors': '',
  'maxblocksize': 9223372036854775807, //
  'maxminedblocksize': 128000000, //
  'maxstackmemoryusagepolicy': 100000000, //
  'maxstackmemoryusageconsensus': 9223372036854775807 //
}

const feeSpec = {
  'defaultFee': [
    {
      'feeType': 'standard',
      'miningFee': {
        'satoshis': 1,
        'bytes': 1
      },
      'relayFee': {
        'satoshis': 1,
        'bytes': 10
      }
    },
    {
      'feeType': 'data',
      'miningFee': {
        'satoshis': 2,
        'bytes': 1000
      },
      'relayFee': {
        'satoshis': 1,
        'bytes': 10000
      }
    }
  ]
}

// const coinbaseTx = '01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff5903cab609162f5669614254432f4d696e656420627920656d63642f2cfabe6d6d61c4ec065912ba577a48032c5ac8b055e5fc7ff27c929bce1ed9014e2421e5f410000000000000001082d7100e214f74ed563cd37047000200ffffffff0228884425000000001976a914f1c075a01882ae0972f95d3a4177c86c852b7d9188ac00000000000000002b6a2952534b424c4f434b3af66a5416ddf9054eeaa935f9437ecdd4bafcc5786d6bde4986474424002473a600000000'
// // 01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff
// // 59
// // 03
// // cab609
// // 16
// // 2f5669614254432f4d696e656420627920656d63642f
// // 2c
// // fabe6d6d61c4ec065912ba577a48032c5ac8b055e5fc7ff27c929bce1ed9014e2421e5f41000000000000000
// // 10
// // 82d7100e214f74ed563cd37047000200
// // ffffffff0228884425000000001976a914f1c075a01882ae0972f95d3a4177c86c852b7d9188ac00000000000000002b6a2952534b424c4f434b3af66a5416ddf9054eeaa935f9437ecdd4bafcc5786d6bde4986474424002473a600000000'

const coinbaseTx = '01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff4103cdb6092f7461616c2e636f6d2f506c656173652070617920302e3520736174732f627974652c20696e666f407461616c2e636f6dc376bf9d5aa3a1ee99120200ffffffff028a855c25000000001976a9148e9170be3f733a9773c907517fb9b786f1c884c688ac0000000000000000fda702006a04ac1eed884d55027b2276657273696f6e223a22302e31222c22686569676874223a22363336363231222c22707265764d696e65724964223a22303365393264336535633366376264393435646662663438653761393933393362316266623366313166333830616533306432383665376666326165633561323730222c22707265764d696e65724964536967223a2233303435303232313030643736333630653464323133333163613836663031386330343665353763393338663139373735303734373333333533363062653337303438636165316166333032323030626536363034353430323162663934363465393966356139353831613938633963663439353430373539386335396234373334623266646234383262663937222c226d696e65724964223a22303365393264336535633366376264393435646662663438653761393933393362316266623366313166333830616533306432383665376666326165633561323730222c2276637478223a7b2274784964223a2235373962343335393235613930656533396133376265336230306239303631653734633330633832343133663664306132303938653162656137613235313566222c22766f7574223a307d2c226d696e6572436f6e74616374223a7b22656d61696c223a22696e666f407461616c2e636f6d222c226e616d65223a225441414c20446973747269627574656420496e666f726d6174696f6e20546563686e6f6c6f67696573222c226d65726368616e74415049456e64506f696e74223a2268747470733a2f2f6d65726368616e746170692e7461616c2e636f6d2f227d7d473045022100a41fd62d4c536cca6491072f88604f178e399e57dbb3158855bce7dae635f1c202205694291cda2a03fab03ff2232b2e90810634e7066775eebffd7a5fef81b94d1500000000'
// 01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff
// 4103cdb6092f7461616c2e636f6d2f506c656173652070617920302e3520736174732f627974652c20696e666f407461616c2e636f6dc376bf9d5aa3a1ee99120200
// ffffffff028a855c25000000001976a9148e9170be3f733a9773c907517fb9b786f1c884c688ac0000000000000000fda702006a04ac1eed884d55027b2276657273696f6e223a22302e31222c22686569676874223a22363336363231222c22707265764d696e65724964223a22303365393264336535633366376264393435646662663438653761393933393362316266623366313166333830616533306432383665376666326165633561323730222c22707265764d696e65724964536967223a2233303435303232313030643736333630653464323133333163613836663031386330343665353763393338663139373735303734373333333533363062653337303438636165316166333032323030626536363034353430323162663934363465393966356139353831613938633963663439353430373539386335396234373334623266646234383262663937222c226d696e65724964223a22303365393264336535633366376264393435646662663438653761393933393362316266623366313166333830616533306432383665376666326165633561323730222c2276637478223a7b2274784964223a2235373962343335393235613930656533396133376265336230306239303631653734633330633832343133663664306132303938653162656137613235313566222c22766f7574223a307d2c226d696e6572436f6e74616374223a7b22656d61696c223a22696e666f407461616c2e636f6d222c226e616d65223a225441414c20446973747269627574656420496e666f726d6174696f6e20546563686e6f6c6f67696573222c226d65726368616e74415049456e64506f696e74223a2268747470733a2f2f6d65726368616e746170692e7461616c2e636f6d2f227d7d473045022100a41fd62d4c536cca6491072f88604f178e399e57dbb3158855bce7dae635f1c202205694291cda2a03fab03ff2232b2e90810634e7066775eebffd7a5fef81b94d1500000000

const coinbase1 = coinbaseTx.substr(0, 100)

let jobData = {}
jobData.miningCandidate = miningCandidate
jobData.feeSpec = feeSpec
jobData.getInfo = getInfo

const extensions = addext(jobData)
console.log(extensions)
