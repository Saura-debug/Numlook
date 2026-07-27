export function normalizePhoneNumber(phone: string): string {
  return phone.replace(/[^\d+]/g, "");
}

export function isValidPhoneNumber(phone: string): boolean {
  // Simple E.164 validation
  const regex = /^\+?[1-9]\d{7,14}$/;

  return regex.test(phone);
}