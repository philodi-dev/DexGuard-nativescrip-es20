import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'za.co.conor.vodacom.drc.uat',
  appPath: 'src',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
  }
} as NativeScriptConfig;