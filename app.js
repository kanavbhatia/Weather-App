// HTTPS: https://api.apixu.com/v1/current.json?key=a9654f11b8da4a98967183035192201&q=Paris
let input = $('#inp')
let result = $('#res')
let button = $('#but')
let key = 'a9654f11b8da4a98967183035192201'
button.click(function(){
    let city = input.val()
    // console.log(value)
    var info = ''
    $.ajax({
        url: `https://api.apixu.com/v1/current.json?key=${key}&q=${city}`,
        method: 'GET',
        success: function(data){
            info = `Temperature in ${data.location.region} (${data.location.country}) is ${data.current.temp_c} and it will be ${data.current.condition.text} today `
            result.text(info)
            console.log(info)
        }
    })

})