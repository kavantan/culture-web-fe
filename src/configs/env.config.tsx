const backendUri = process.env.VITE_BACKEND_URI;

if (!backendUri) {
  process.exit(1);
}

const BACKEND_URI = backendUri;

export default BACKEND_URI;
