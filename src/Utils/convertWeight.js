export function convertWeight(from, to, value) {
  const conversionRates = {
    Kilogram: {
      Gram: 1000,
      Pound: 2.20462,
      Miligram: 1000000,
    },
    Gram: {
      Kilogram: 0.001,
      Pound: 0.00220462,
      Miligram: 1000,
    },
    Pound: {
      Kilogram: 0.453592,
      Gram: 453.592,
      Miligram: 453592,
    },
    Miligram: {
      Kilogram: 0.000001,
      Gram: 0.001,
      Pound: 0.00000220462,
    },
  };

  if (from === to) {
    return value;
  } else if (conversionRates[from] && conversionRates[from][to]) {
    return value * conversionRates[from][to];
  }
}
