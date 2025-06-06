// dangerfile.js
const bad = danger.git.modified_files.concat(danger.git.created_files).filter(f => f.endsWith('.bak') || f.startsWith('backup/'));
if (bad.length) fail(`Backup artefacts detected: ${bad.join(', ')}`); 