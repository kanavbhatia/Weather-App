let input = $('#inp')
let result = $('#res')
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
            result.text(info)
            console.log(info)
            var imgsource = `http://${data.current.condition.icon}`
            icon.attr('src',imgsource)

        }
    })

})