#!/usr/bin/env node
/**
 * OBS Recording Path Validator
 * Checks OBS WebSocket connection and confirms the recording folder matches your --file path.
 */

const OBSWebSocket = require('obs-websocket-js').default;
const path = require('path');

const argv = require('yargs')
  .option('obs-host', { type: 'string', default: 'localhost:4455', describe: 'OBS WebSocket host:port' })
  .option('obs-pass', { type: 'string', describe: 'OBS WebSocket password (or set OBS_PASSWORD env var)' })
  .option('file', { type: 'string', demandOption: true, describe: 'Expected full path to recording file' })
  .help()
  .argv;

(async () => {
  const obs = new OBSWebSocket();
  const [host, port] = argv['obs-host'].split(':');
  const password = argv['obs-pass'] || process.env.OBS_PASSWORD;

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
