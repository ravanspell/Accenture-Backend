import { config } from 'dotenv';
import path, { join } from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

config({ path: join(dirname, '../../.env') });
