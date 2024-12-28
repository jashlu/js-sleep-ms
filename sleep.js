/**
 * Prints "Hello!" to the console a given number of times
 * @param ms intended number of milliseconds to sleep for
 */

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }