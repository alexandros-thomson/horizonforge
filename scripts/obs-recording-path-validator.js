#!/usr/bin/env node
/**
 * OBS Recording Path Validator
 * Checks OBS WebSocket connection and confirms the recording folder matches your --file path.
 * 
 * Priority for parameters:
 *   CLI arg > Environment variable > Default
 * 
 * Env vars:
 *   OBS_RECORDING_FILE  (default: ./recordings/demo.mp4)
 *   OBS_HOST            (default: localhost:4455)
 *   OBS_PASSWORD        (default: undefined)
 */

const OBSWebSocket = require('obs-websocket-js').default;
const path = require('path');
const yargs = require('yargs');

const argv = yargs
  .option('file', {
    type: 'string',
    describe: 'Expected full path to recording file',
    default: process.env.OBS_RECORDING_FILE || './recordings/demo.mp4'
  })
  .option('obs-host', {
    type: 'string',
    describe: 'OBS WebSocket host:port',
    default: process.env.OBS_HOST || 'localhost:4455'
  })
  .option('obs-pass', {
    type: 'string',
    describe: 'OBS WebSocket password',
    default: process.env.OBS_PASSWORD
  })
  .help()
  .argv;

(async () => {
  const obs = new OBSWebSocket();
  const [host, port] = argv['obs-host'].split(':');
  const password = argv['obs-pass'];

  console.log(`Using parameters:\n  OBS Host: ${argv['obs-host']}\n  OBS Password: ${password ? '[set]' : '[not set]'}\n  File: ${argv.file}`);

  try {
    console.log(`🔌 Connecting to OBS at ${host}:${port}...`);
    await obs.connect(`ws://${host}:${port}`, password ? { password } : {});
    console.log('✅ Connected to OBS WebSocket');

    // Try OBS 28+ API first
    let recordDir;
    try {
      const { outputPath } = await obs.call('GetRecordDirectory');
      recordDir = outputPath;
    } catch {
      // Fallback for older plugin API
      const { recordDirectory } = await obs.call('GetRecordingFolder');
      recordDir = recordDirectory;
    }

    console.log(`📂 OBS is set to save recordings in: ${recordDir}`);

    const expectedDir = path.dirname(path.resolve(argv.file));
    if (path.resolve(recordDir) !== expectedDir) {
      console.error(`⚠️ Mismatch: OBS folder != expected folder\n      OBS:      ${recordDir}\n      Expected: ${expectedDir}\n      `);
      process.exitCode = 1;
    } else {
      console.log('✅ Recording folder matches expected path');
    }

    await obs.disconnect();
  } catch (err) {
    console.error('❌ Could not connect to OBS or retrieve recording folder:', err.message);
    process.exitCode = 1;
  }
})();
