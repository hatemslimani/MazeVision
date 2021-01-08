imgInp.onchange = evt => {
    $(".marker").remove();
    $("#responde").attr("src", './static/');
    const [file] = imgInp.files
    i = 0;
    pstion = [];
    if (file) {
        imgDisp.src = URL.createObjectURL(file)
    }
}
var pstion = [];
var i = 0;
$(document).ready(function() {
    $("#dd").hide();
    $("#imgDisp").click(function(ev) {
        if (i < 2) {
            pstion.push([ev.offsetX, ev.offsetY])
            $("body").append(
                $('<div class="marker rounded"></div>').css({ // include a class
                    position: 'absolute',
                    top: ev.pageY + 'px',
                    left: ev.pageX + 'px',
                    width: '5px',
                    height: '5px',
                    background: '#4c45ad'
                })
            );
            i = i + 1;
        }
    });
    $("#btnn").click(function() {
        $("#dd").show();
        if (i >= 2) {
            formdata = new FormData();
            formdata.append("position", pstion);
            formdata.append("img", $("#imgInp")[0].files[0]);
            $.ajax({
                url: "/upload/",
                type: "POST",
                data: formdata,
                processData: false,
                contentType: false,
                success: function(res) {
                    $("#responde").attr("src", './static/' + res);
                    $("#dd").hide();
                }
            });
        }
        return false;
    });
});