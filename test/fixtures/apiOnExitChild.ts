
import * as pmx from '../../src'

pmx.onExit(function () {
  if (process && process.send) process.send('callback')
})
