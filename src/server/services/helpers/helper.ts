export const convertPriceToPrintedValue = (num: number) => {
    return Math.abs(num) > 99999 ?
        Math.sign(num) * (+(Math.abs(num) / 1000).toFixed(1)) + 'k'
        :
        Math.abs(num) > 999 && Math.abs(num) < 100000 ?
            numberWithCommas(num)
            :
            Math.sign(num) * Math.abs(num)
}

export const numberWithCommas = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
