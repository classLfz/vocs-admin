export const formatTime = (date, format = 'YYYY-MM-DD hh:mm:ss') => {
	if (!date) return ''
	const dateFormat = new Date(date)
	if (!dateFormat) return ''
	let out = format
	const year = dateFormat.getFullYear()
	const month = dateFormat.getMonth() + 1
	const day = dateFormat.getDate()
	const hour = dateFormat.getHours()
	const minute = dateFormat.getMinutes()
	const second = dateFormat.getSeconds()

	out = out.replace(/YYYY/g, `${year}`)
	  .replace(/YY/g, year.toString().substring(year.toString().length - 2))
	  .replace(/MM/g, formatNumber(`${month}`))
	  .replace(/M/g, `${month}`)
	  .replace(/DD/g, formatNumber(`${day}`))
	  .replace(/D/g, `${day}`)
	  .replace(/hh/g, formatNumber(`${hour}`))
	  .replace(/h/g, `${hour}`)
	  .replace(/mm/g, formatNumber(`${minute}`))
	  .replace(/m/g, `${minute}`)
	  .replace(/ss/g, formatNumber(`${second}`))
	  .replace(/s/g, `${second}`)

	return out
}

const formatNumber = n => {
	n = n.toString()
	return n[1] ? n : '0' + n
}
