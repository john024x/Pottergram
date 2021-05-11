// esto al principio
import json from '@rollup/plugin-json'

// y añades es dentro del array de plugins:
import json from "@rollup/plugin-json";

export default {
  // ... other configs
  plugins: [
    // ... other rollup plugins
    json()
  ]
};