export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatPkr(amount: number) {
  return `PKR ${amount.toLocaleString("en-PK")}`;
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-PK", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(iso));
}
