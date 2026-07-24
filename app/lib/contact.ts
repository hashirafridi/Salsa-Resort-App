export const PHONE_NUMBERS = ["03001499133", "03449149321"] as const;
export const WHATSAPP_NUMBERS = ["03339181540", "03449149321"] as const;

/** Primary numbers used on homepage CTAs and the floating button */
export const PRIMARY_PHONE = PHONE_NUMBERS[0];
export const PRIMARY_WHATSAPP = WHATSAPP_NUMBERS[0];

export function toWhatsAppLink(localNumber: string, text?: string) {
  const digits = localNumber.replace(/\D/g, "");
  const international = digits.startsWith("0") ? `92${digits.slice(1)}` : digits;
  const base = `https://wa.me/${international}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function toTelLink(localNumber: string) {
  const digits = localNumber.replace(/\D/g, "");
  const international = digits.startsWith("0") ? `+92${digits.slice(1)}` : `+${digits}`;
  return `tel:${international}`;
}

export function formatDisplayNumber(localNumber: string) {
  const digits = localNumber.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("0")) {
    return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
  }
  return localNumber;
}
