$(document).ready(function() {
    $("#container").hide();
    $.ajax({
        url: "/generateMaze/",
        type: "GET",
        success: function(res) {
            $("#intialImg").attr("src", '../static/animations/' + 'maze.png');
            $("#bfsVd").attr("src", '../static/animations/' + 'bfs.mp4');
            $("#bfs video")[0].load();
            $("#SchVd").attr("src", '../static/animations/' + 'weighted_search.mp4');
            $("#sch video")[0].load();
            $("#btVd").attr("src", '../static/animations/' + 'backtrack_iterative.mp4');
            $("#bt video")[0].load();
            $("#container").show();
            $("#dd").hide();
        }
    });
});