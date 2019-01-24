let input = $('#inp')
let result = $('#res')
let result1 = $('#res1')
let result2 = $('#res2')
let button = $('#but')
let key = 'a9654f11b8da4a98967183035192201'
let icon = $('#icon')
let spinner = $('#spinner')
let spinner1 = $('#spinner1')
let spinner2 = $('#spinner2')
button.click(function(){
    $.fn.disable()
    let city = input.val()
    // console.log(value)
    var info = ''
    input.val('')
    $.ajax({
        url: `https://api.apixu.com/v1/current.json?key=${key}&q=${city}`,
        method: 'GET',
        success: function(data){
            $.fn.enable()
            info = `Temperature in ${data.location.region} (${data.location.country}) is ${data.current.temp_c} and it will be ${data.current.condition.text} today `
            var prop_temp = `${data.current.temp_c}°C`
            result.text(prop_temp)
            result1.text(data.location.region)
            result2.text(data.current.condition.text)
            console.log(info)
            var imgsource = `http://${data.current.condition.icon}`
            icon.attr('src',imgsource)

        },
        error: function(error){
            $.fn.enable()
            icon.css({"display": "block"});
            result.text("Error")
            result1.text("Error")
            result2.text("Error")
            console.log(error)
        }
        
    })

})
$.fn.enable = function(){
    spinner.css({"display": "none"});
    spinner1.css({"display": "none"});
    spinner2.css({"display": "none"});
    result.css({"display": "block"});
    result1.css({"display": "block"});
    result2.css({"display": "block"});
    icon.css({"display": "block"});
}
$.fn.disable = function(){
    result.css({"display": "none"});
    result1.css({"display": "none"});
    result2.css({"display": "none"});
    icon.css({"display": "none"});
    spinner.css({"display": "block"});
    spinner1.css({"display": "block"});
    spinner2.css({"display": "block"});
}