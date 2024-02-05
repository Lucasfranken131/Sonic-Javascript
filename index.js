document.addEventListener("DOMContentLoaded", function() {

    let sonicContainer = document.getElementById("sonic_div");
    sonicContainer.setAttribute("tabindex", "0");

    sonicContainer.addEventListener("keydown", function(event) {
        let sonic = document.getElementById("sonic");
        switch(event.key) {
            case "w":
                console.log("cima")
                break;
            case "a":
                sonic.src="sonic_running_left.gif";
                break;
            case "s":
                console.log("baixo")
                break;
            case "d":
                sonic.src="sonic_running_right.gif";
                break;
            default:
                return;
        }
    })

    sonicContainer.addEventListener("keyup", function(event) {
        let sonic = document.getElementById("sonic");
        sonic.src = "sonic_still.png"
    });
});