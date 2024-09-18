const backendUri = process.env.VITE_BACKEND_URI;

if (!backendUri) {
  process.exit(1);
}

const BACKEND_URI = backendUri;

export const EMAIL_API_KEY = process.env.VITE_EMAIL_API_KEY;

export default BACKEND_URI;
