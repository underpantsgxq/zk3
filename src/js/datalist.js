var nav = document.querySelectorAll('.nav li')
mui('.nav').on('tap', "li", function() {
    for (var i = 0; i < nav.length; i++) {
        nav[i].className = ""
    }
    this.className = "active"
    var date = this.innerHTML
    mui.ajax('/api/get/train_tickets', {
        data: {
            date: date
        },
        dataType: 'json',
        success: function(data) {
            var str = ""
            data.data.forEach(function(v) {
                str += `
                <li>
                    <span>${v.tanll}</span>
                    <span>到</span>
                    <span>${v.to}</span>
                    <span>${v.date}</span>
                </li>`
            });
            mui('.list')[0].innerHTML = str
        }
    })
})