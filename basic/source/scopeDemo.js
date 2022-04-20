var window = globalThis()
window.screen = {
    "width": 1440,
    "height": 900
}
navigator = {
    "userAgent": "",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
}
let obj = {
    "name": "cxa",
    "add": function (a, b) {
        let c = 3
        return a + b + 100
    }, "mul": function (a, b) {
        return a * b
    }, "retval": () => {
        function demo() {
            return navigator.userAgent
        }

        return demo()
    }
}