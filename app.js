let input = $('#inp')
let result = $('#res')
let result1 = $('#res1')
let result2 = $('#res2')
let button = $('#but')
let key = 'a9654f11b8da4a98967183035192201'
let icon = $('#icon')
button.click(function(){
    let city = input.val()
    // console.log(value)
    var info = ''
    $.ajax({
        url: `https://api.apixu.com/v1/current.json?key=${key}&q=${city}`,
        method: 'GET',
        success: function(data){
            info = `Temperature in ${data.location.region} (${data.location.country}) is ${data.current.temp_c} and it will be ${data.current.condition.text} today `
            var prop_temp = `${data.current.temp_c} C`
            result.text(prop_temp)
            result1.text(data.location.region)
            result2.text(data.current.condition.text)
            console.log(info)
            var imgsource = `http://${data.current.condition.icon}`
            icon.attr('src',imgsource)

        },
        error: function(error){
            result.text(error.responseText)
            console.log(error)
        }
        
    })

})