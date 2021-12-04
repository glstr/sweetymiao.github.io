$(document).ready(function () {
    $("button").click(function () {
        console.log("hide me")
        $("p").hide();
    });

    $("#debug_button").click(get_video);

    $("#input_id").submit(function(){
        alert($("#input_id").val())
    })

    $("#get_video_list").click(get_video_list)

});

function get_video_list() {
    var url = "/snow/get_video_list"
    $.getJSON(url, function(result) {
        for (var i = 0; i < result.video_id_list.length; i++) {
            var txt = $('<button class=video_button></button>').text(result.video_id_list[i].path)
            $("#video").append(txt)
            //console.log("path:", result.video_id_list[i].path)
        }
        $(".video_button").on('click', play_video)
    })
}

function get_video() {
    var url = "/snow/get_video?video_id=1"
    $.get(url,function(data, status) {
        alert("数据: " + data + "\n状态: " + status);
    }
    )
}

function play_video() {
    console.log("play video")    
}