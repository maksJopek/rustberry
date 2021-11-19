import { Ruster } from './ruster/index';
// eslint-disable-next-line import/no-relative-packages
import * as wasm from './wasm/pkg/rustberry_wasm';

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $ruster: typeof Ruster;
    $wasm: typeof wasm;
  }
}
