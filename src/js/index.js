mui('.btn')[0].addEventListener('tap', function() {
    var date = mui('.date b')[0].innerHTML
    location.href = "/page/datalist.html?date=" + date
})