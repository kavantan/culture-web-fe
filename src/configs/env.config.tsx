const backendUri = process.env.VITE_BACKEND_URI;

if (!backendUri) {
  process.exit(1);
}

const BACKEND_URI = backendUri;

export const {EMAIL_API_KEY} = process.env;

export default BACKEND_URI;
