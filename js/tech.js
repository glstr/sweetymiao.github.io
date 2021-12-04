$(document).ready(function () {
    $("#button_submit").click(function(){
        alert("hello world")
    });

    $("#button_filelist").click(get_file_list)
});

function get_file_list() {
    var url = "/snow/get_video_list"
    $.getJSON(url, function(result) {
        for (var i = 0; i < result.video_id_list.length; i++) {
        }
        $(".video_button").on('click', play_video)
    })
}