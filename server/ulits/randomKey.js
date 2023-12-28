const  HandleAddKeyindex = (data)=>{
    let key = (Math.random() * 11111111111111).toString()  + new Date().getTime()
    let datas = data.map(value=> {
        value.KeyIndex = key
        return value
      })
      return datas
}

module.exports = HandleAddKeyindex