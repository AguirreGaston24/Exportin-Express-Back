export const googleServiceAccount = {
  type: "service_account",
  project_id: "exportingexpress",
  private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
  private_key: process.env.GOOGLE_PRIVATE_KEY, // Reemplaza \n por saltos de línea reales
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  client_id: "117581281647616428225",
auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/exportingexpress%40exportingexpress.iam.gserviceaccount.com",
 };
