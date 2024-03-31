const backendUri = process.env.VITE_BACKEND_URI;

if (!backendUri) {
  console.error('Missing VITE_BACKEND_URI in .env file');
  process.exit(1);
}

const BACKEND_URI = backendUri;

export default BACKEND_URI;
