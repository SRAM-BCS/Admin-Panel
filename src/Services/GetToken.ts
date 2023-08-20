export function getToken(): string {
  const token = document.cookie?.split("SRAM-jwt")[1];
  return token;
}
