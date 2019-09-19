export function increment(count) {
    return {
      type: 'INCREMENT',
      count
    }
}

export function decrement(count) {
    return {
      type: 'DECREMENT',
      count
    }
}

export function increment2(count) {
    return {
      type: 'INCREMENT2',
      count
    }
}

export function decrement2(count) {
    return {
      type: 'DECREMENT2',
      count
    }
}

export function reset() {
    return {
      type: 'RESET'
    }
}

export function reset2() {
    return {
      type: 'RESET2'
    }
}