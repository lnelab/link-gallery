import { readFileSync } from 'fs';
import { globSync } from 'glob';
import { mergeVidpid } from './utils.js';

const DEFINITIONS_GLOB = 'definitions/**/*.json';

export function build_definitions() {
    const definitions = {};

    const filePaths = globSync(DEFINITIONS_GLOB);

    for (const filePath of filePaths) {
        try {
            const raw = readFileSync(filePath, 'utf-8');
            const definition = JSON.parse(raw);

            const vidpid = mergeVidpid(
                Number(definition.vendorId),
                Number(definition.productId)
            );

            definitions[vidpid] = definition;
        } catch (error) {
            console.error(`Error processing ${filePath}:`, error);
        }
    }

    return definitions;
}