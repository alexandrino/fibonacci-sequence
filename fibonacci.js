function fibonacci(n) {
  if (n === 0) {
    return [0];
  }

  const sequence = [0, 1];

  for (let i = 2; i <= n; i++) {
    const a = sequence[i - 1];
    const b = sequence[i - 2];

    sequence.push(a + b);
  }

  return sequence;
}

module.exports = fibonacci;
