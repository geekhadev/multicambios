// Recalculate rates
export async function recalculateToReceive ({ rate, inputs, exchange }) {
  if (rate !== undefined) {
    const rateResult = setRateTemp({ rateGeneral: rate.general_rate, ammountSend: inputs.ammountSend, inputRate: inputs.inputRate, ammountPreference: exchange.amount_preferential, ratePreference: rate.preference_rate })
    let ammountReceive = calculateByOperator({ a: inputs.ammountSend, b: rateResult, operator: exchange.operator })

    ammountReceive = (isNaN(ammountReceive) || ammountReceive < 0) ? 0 : ammountReceive
    ammountReceive = parseFloat(ammountReceive).toFixed(2)
    const rateDollar = parseFloat(ammountReceive / rate.rate_dollar).toFixed(1)
    return { ammountSend: inputs.ammountSend, ammountReceive, rate: rateResult, rateDollar }
  }
}

// Recalculate rates
export async function recalculateToSend ({ rate, inputs, exchange }) {
  if (rate !== undefined) {
    const rateResult = setRateTemp({ rateGeneral: rate.general_rate, ammountSend: inputs.ammountSend, inputRate: inputs.inputRate, ammountPreference: exchange.amount_preferential, ratePreference: rate.preference_rate })
    let ammountSend = calculateByOperator({ a: inputs.ammountReceive, b: rateResult, operator: exchange.operator, inverter: true })
    ammountSend = (isNaN(ammountSend) || ammountSend < 0) ? 0 : ammountSend
    ammountSend = parseInt(ammountSend)
    const rateDollar = parseFloat(inputs.ammountReceive / rate.rate_dollar).toFixed(1)

    return { ammountSend, ammountReceive: inputs.ammountReceive, rate: rateResult, rateDollar }
  }
}

// Recalculate rates
export async function recalculateToDollar ({ rate, inputs, exchange }) {
  if (rate !== undefined) {
    const rateResult = setRateTemp({ rateGeneral: rate.general_rate, ammountSend: inputs.ammountSend, inputRate: inputs.inputRate, ammountPreference: exchange.amount_preferential, ratePreference: rate.preference_rate })

    const ammountReceive = calculateByOperator({ a: rate.rate_dollar, b: inputs.inputDollar, operator: '*' })

    let ammountSend = calculateByOperator({ a: ammountReceive, b: rate.general_rate, operator: exchange.operator, inverter: true })
    ammountSend = (isNaN(ammountSend) || ammountSend < 0) ? 0 : ammountSend
    ammountSend = parseInt(ammountSend)
    return { ammountSend, ammountReceive, rate: rateResult }
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
    return ratePreference
  } else {
    return rateGeneral
  }
}

export function calculateProfitPercent (rate, profit) {
  if (!rate || !profit) return 0
  return ((profit / rate) * 100).toFixed(5)
}

function calculateByOperator ({ a, b, operator, inverter = false }) {
  let result = 0
  if (inverter) operator = operator === '*' ? '/' : '*'

  switch (operator) {
    case '*':
      result = parseFloat(a) * b
      break
    case '/':
      result = parseFloat(a) / b
      break
    default:
      result = 0
  }
  return result
}

export function roundDecimals (num, decimals = false) {
  if (decimals) {
    return parseFloat(num).toFixed(decimals)
  }
  return Math.round(num)
}

export function separatorThousands (num) {
  // separador de miles con punto y decimales con coma
  if (isNaN(num)) {
    return num
  }
  const broken_number = num.toString().split('.')
  if (broken_number.length > 1) {
    return parseInt(broken_number[0]).toLocaleString('de-DE') + ',' + broken_number[1]
  }
  return parseInt(broken_number[0]).toLocaleString('de-DE')
}
