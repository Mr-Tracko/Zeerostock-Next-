// import { type ClassValue, clsx } from "clsx"
// import { twMerge } from "tailwind-merge"

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }

// // Additional utility functions you might need

// /**
//  * Format currency values
//  */
// export function formatCurrency(
//   amount: number,
//   currency: string = "INR",
//   locale: string = "en-IN"
// ): string {
//   return new Intl.NumberFormat(locale, {
//     style: "currency",
//     currency: currency,
//   }).format(amount)
// }

// /**
//  * Format date strings
//  */
// export function formatDate(
//   date: Date | string,
//   options?: Intl.DateTimeFormatOptions
// ): string {
//   const defaultOptions: Intl.DateTimeFormatOptions = {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   }
  
//   return new Date(date).toLocaleDateString("en-US", options || defaultOptions)
// }

// /**
//  * Generate random ID
//  */
// export function generateId(length: number = 8): string {
//   return Math.random()
//     .toString(36)
//     .substring(2, length + 2)
// }

// /**
//  * Truncate text with ellipsis
//  */
// export function truncateText(text: string, length: number): string {
//   if (text.length <= length) return text
//   return text.substring(0, length) + "..."
// }

// /**
//  * Sleep utility for async operations
//  */
// export function sleep(ms: number): Promise<void> {
//   return new Promise((resolve) => setTimeout(resolve, ms))
// }

// /**
//  * Debounce function
//  */
// export function debounce<T extends (...args: any[]) => any>(
//   func: T,
//   wait: number
// ): (...args: Parameters<T>) => void {
//   let timeout: NodeJS.Timeout
//   return (...args: Parameters<T>) => {
//     clearTimeout(timeout)
//     timeout = setTimeout(() => func(...args), wait)
//   }
// }

// /**
//  * Check if value is empty (null, undefined, empty string, empty array, empty object)
//  */
// export function isEmpty(value: any): boolean {
//   if (value == null) return true
//   if (typeof value === "string") return value.trim().length === 0
//   if (Array.isArray(value)) return value.length === 0
//   if (typeof value === "object") return Object.keys(value).length === 0
//   return false
// }

// /**
//  * Capitalize first letter of string
//  */
// export function capitalize(str: string): string {
//   return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
// }

// /**
//  * Convert bytes to human readable format
//  */
// export function formatBytes(bytes: number, decimals: number = 2): string {
//   if (bytes === 0) return "0 Bytes"
  
//   const k = 1024
//   const dm = decimals < 0 ? 0 : decimals
//   const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
  
//   const i = Math.floor(Math.log(bytes) / Math.log(k))
  
//   return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
// }
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
