// lib/classNames.ts
export function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}
