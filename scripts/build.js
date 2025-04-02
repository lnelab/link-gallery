import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { build_definitions } from './build_definitions.js';
import { getOutputPath } from './utils.js'

function build() {
    try {
        const outputPath = getOutputPath();
        const esmContent = `export default ${JSON.stringify(build_definitions())};`;

        if (!existsSync(outputPath)) {
            mkdirSync(outputPath);
        }

        writeFileSync(`${outputPath}/index.mjs`, esmContent);
    } catch (error) {
        console.log(error)
    }
}

build();