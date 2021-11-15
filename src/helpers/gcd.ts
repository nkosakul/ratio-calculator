const gcd = (val: number, lim: number): string => {
  let lower = [0, 1];
  let upper = [1, 0];

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const mediant = [lower[0] + upper[0], lower[1] + upper[1]];

    if (val * mediant[1] > mediant[0]) {
      if (lim < mediant[1]) {
        return `${upper[0]}:${upper[1]}`;
      }
      lower = mediant;
    } else if (val * mediant[1] === mediant[0]) {
      if (lim >= mediant[1]) {
        return `${mediant[0]}:${mediant[1]}`;
      }
      if (lower[1] < upper[1]) {
        return `${lower[0]}:${lower[1]}`;
      }
      return `${upper[0]}:${upper[1]}`;
    } else {
      if (lim < mediant[1]) {
        return `${lower[0]}:${lower[1]}`;
      }
      upper = mediant;
    }
  }
};

export default gcd;
