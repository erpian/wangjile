var sourceDatas = null;
$(function () {
    $.ajax({
        type: "get",//请求方式  
        url: "http://oudhv6jgn.bkt.clouddn.com/searchvaluesv3.json",//请求路径  
        dataType: "json",//数据格式  
        success: function (resultData) {//成功处理函数        
            sourceDatas = resultData;
        }
    });

    $("#but_search").click(function () {
        try {
            var value = $("#txt_searchValue").val();
            if (value == null || value == "" || value == undefined || value.length == 0) {
                alert("请输入搜索内容");
                return;
            }

            if (sourceDatas == null || sourceDatas.length == 0) {
                return;
            }

            $("#box_searchavalues").html("");

            var searchCount = 0;
            for (var i = 0; i < sourceDatas.length; i++) {
                var par = sourceDatas[i];
                if (par.k.indexOf(value) >= 0) {
                    //$("#box_searchavalues").html("");
                    searchCount += 1;
                    var html = '<div class="card" style="width: 53rem;">';
                    html += '<div class="card-body">';
                    html += '<h4 class="card-title">' + par.k + '</h4>';
                    html += '<p class="card-text">' + par.c + '</p>'
                    html += '</div></div>';
                    $("#box_searchavalues").append(html);
                }
            }
            if (searchCount ==0) {
                var html = '<div class="alert alert-danger" role="alert">';
                html += '<h4 class="alert-heading">抱歉，没有搜索结果!</h4>';
                html += ' <p></p><hr>';
                html += ' <p class="mb-0">你也可以把相关词汇反馈给清华大学家族校长-托尼，加以收录</p>'
                html += '</div>';
                $("#box_searchavalues").append(html);
            }
            $("#box_searchavalues").append('<div class="clearfix"></div>');
        } catch (e) {

        }
    });




});

function EnterPress(e) { //传入 event 
    var e = e || window.event;
    if (e.keyCode == 13) {
        $("#but_search").trigger("click");
    }
}

function tab_search(value){    $("#txt_searchValue").val(value);    $("#but_search").trigger("click");}
