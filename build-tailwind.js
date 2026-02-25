import { exec } from 'child_process';

exec('npx tailwindcss -i ./src/index.css -o ./dist/output.css', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(`Output: ${stdout}`);
});