export function getToken(): string {
  const token = document.cookie.split("=")[1].split("SRAM-jwt")[1];
  return token;
}
