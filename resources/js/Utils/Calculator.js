// Recalculate rates
export async function recalculateToReceive ({ rate, inputs, exchange }) {
  if (rate !== undefined) {
    const rateResult = setRateTemp({ rateGeneral: rate.general_rate, ammountSend: inputs.ammountSend, inputRate: inputs.inputRate, ammountPreference: exchange.amount_preferential, ratePreference: rate.preference_rate })
    let ammountReceive = parseFloat(inputs.ammountSend) * rateResult
    ammountReceive = (isNaN(ammountReceive) || ammountReceive < 0) ? 0 : ammountReceive
    const rateDollar = parseFloat(ammountReceive / rate.rate_dolar).toFixed(1)
    console.log({ ammountSend: inputs.ammountSend, ammountReceive, rate: rateResult, rateDollar })
    return { ammountSend: inputs.ammountSend, ammountReceive, rate: rateResult, rateDollar }
  }
}

// Recalculate rates
export async function recalculateToSend ({ rate, inputs, exchange }) {
  if (rate !== undefined) {
    const rateResult = setRateTemp({ rateGeneral: rate.general_rate, ammountSend: inputs.ammountSend, inputRate: inputs.inputRate, ammountPreference: exchange.amount_preferential, ratePreference: rate.preference_rate })

    let ammountSend = parseFloat(inputs.ammountReceive) / rateResult
    ammountSend = (isNaN(ammountSend) || ammountSend < 0) ? 0 : ammountSend
    const rateDollar = parseFloat(inputs.ammountReceive / rate.rate_dolar).toFixed(1)

    return { ammountSend, ammountReceive: inputs.ammountReceive, rate: rateResult, rateDollar }
  }
}

// Recalculate rates
export async function recalculateToDollar ({ rate, inputs, exchange }) {
  console.log({ rate, inputs, exchange })
  if (rate !== undefined) {
    const rateResult = setRateTemp({ rateGeneral: rate.general_rate, ammountSend: inputs.ammountSend, inputRate: inputs.inputRate, ammountPreference: exchange.amount_preferential, ratePreference: rate.preference_rate })

    const ammountReceive = parseFloat(rate.rate_dolar) * parseFloat(inputs.inputDollar)

    let ammountSend = parseFloat(ammountReceive) / rateResult
    ammountSend = (isNaN(ammountSend) || ammountSend < 0) ? 0 : ammountSend
    const rateDollar = parseFloat(ammountReceive / rate.rate_dolar).toFixed(1)
    console.log({ ammountSend, ammountReceive, rate: rateResult, rateDollar })
    return { ammountSend, ammountReceive, rate: rateResult, rateDollar }
  }
}

export function setRateTemp ({ rateGeneral, ammountSend, inputRate, ammountPreference, ratePreference }) {
  ammountSend = parseFloat(ammountSend)
  rateGeneral = parseFloat(rateGeneral)
  ratePreference = parseFloat(ratePreference)
  ammountPreference = parseFloat(ammountPreference)

  if (ammountSend < ammountPreference && inputRate === rateGeneral) {
    return rateGeneral
  } else if (ammountSend >= ammountPreference && inputRate === rateGeneral) {
    return ratePreference
  } else if (ammountSend < ammountPreference && inputRate !== rateGeneral && inputRate !== ratePreference) {
    return inputRate
  } else if (ammountSend >= ammountPreference && inputRate !== rateGeneral) {
    return inputRate
  } else {
    return rateGeneral
  }
}