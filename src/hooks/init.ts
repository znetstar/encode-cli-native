import {Hook} from '@oclif/config'

export const hook: Hook<'init'> = async function (options) {
  (global as any).EncodeTools = require('@etomon/encode-tools/lib/EncodeToolsNative').EncodeToolsNative;
}

export default hook;
