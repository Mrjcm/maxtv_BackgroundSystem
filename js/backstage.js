 $(function(){
 	autoimg();
    $(".chg").click(function(){
      $("#mymodal").modal("toggle");
    });
    // 导航 循环a的链接，然后与location.href去比对，如果相同，或包含有同样字符串序列，则添加className.
    var url = window.location.href;
    $('#header .nav ul a').each(function () {
        if (returnUrl($(this).attr('href'))== returnUrl(url)){
            $(this).children("li").addClass('active');
        }
    });
    //以下为截取url的方法
    function returnUrl(href){
        var number=href.lastIndexOf("/");
        return href.substring(number+1);
    }
    function returnFileName(href){
        var number1=href.lastIndexOf("/");
        var number2= href.substring(0,number1).lastIndexOf("/");
        return href.substring(number1,number2+1);
    }

    //查看所有有大厅
    $("#leader_more").click(function(){
    $(".leader_content_left_all").slideToggle("slow");
  	});
    //组员
    $(".crew_more").click(function(){
    	$(this).parent().siblings(".crew").slideToggle("normal");
    })
    // 开设组长账号
    $(".account_num").click(function(){
        $("#generate_account").modal("toggle");
        $("#generate_account #ensure").click(function(){
            $("#generate_account").css({
                display:"none"
            })
        })
    })
    //正在运营的账号
	 $(".allot").click(function(){
      $("#allot_hall").modal("toggle");
      $("#allot_hall_body ul li").unbind("click").click(function(){
      	$(this).css({borderBottom:"2px solid #05152e"}).siblings("li").css({borderBottom:"1px solid #e0e0e0",borderTop:"none",borderLeft:"none",borderRight:"none", })
      })
    });
    $("#allot_hall_body .hallNum a").click(function(){
    	$(this).parent(".hallNum").remove();
    });
    //设置
    $(".set").click(function(){
    	$(this).parent("li").siblings(".accountSet").css({
    		display:"block"
    	});
        $(".accountSet .close_win").click(function(){
            $(this).parent("ul").css({
                display:"none"
            })
        })
    });
    // 删除数据
    $(".removedata").click(function(){
        $("#removedata").modal("show");
         $("#removedata #ensure").unbind("click").click(function(){
            $("#removedata").modal("hide");
        })
    })
    //禁止登录
    $(".inhibited").click(function(){
        $("#no-login").modal("show");
        var thisobj=$(this).parent("ul").siblings("li").eq(2).find("span");
         $("#no-login #ensure").unbind("click").click(function(){
            $("#no-login").modal("hide");
            thisobj.html("禁止登录");
        });
    })
    //聊天数据
     $(".record").click(function(){
      	$("#chatdata").modal("toggle");
      	var username=$(this).parent(".accountSet").siblings("li").
      	children(".userName").html();
      	$("#chatdata #modal-title span").html(username);
    });
     // 修改密码
     $(".change_password").click(function(){
        $("#mymodal").modal("toggle");
     })
       //更换使用人员名字 领导
    $(".change").click(function(obj){
       //    	var usersid=document.getElementById("userId").innerText;
    	$("#changeName").modal("show");
    	var thisobj=$(this).siblings(".userName");
      //    	var thisleader=document.getElementById("leader_"+usersid);
    	$("#changeName #ensure").unbind('click').click(function(){
			var usersname=$("#change-val").val();
//			alert(usersname);
			thisobj.html(usersname);
			$("#changeName").modal("hide");
    	});
    });

    //更换使用人员名字  组
    $(".change").click(function(){
    	$("#changeName-group").modal("show");
    	var thisobj=$(this).parent().parent().siblings("td").eq(2);
//
    	$("#changeName-group #ensure").unbind("click").click(function(){
			var newsname=$("#changeName-group #changeName_body input").val();
			thisobj.html(newsname);
			$("#changeName-group").modal("hide");
    	})
    })
    //删除账号
    $("body").on("click",".removethis",function(data){
    	$(this).parent().parent().parent().remove();
    });
    $(".gly span a").click(function(){
    	$(this).parent().remove();
    })
    //冻结账号
    $("body").on("click",".frostli",function(data){
    	var frostd=$(this).parent().parent().siblings("td").eq(3)
    	if (frostd.hasClass("frost")) {
    		frostd.html("正常").removeClass("frost");
    		$(this).html("冻结")
    	} else{
    		frostd.html("冻结").addClass("frost");
    		$(this).html("解除")
    	}
    })

    //聊天切换
    // leader_content_rightl
    $(".leader_content_rightl ul li").click(function(){
        $(this).addClass("active").siblings("li").removeClass("active");
    })
    //聊天发言
    $(".pushtalk").click(function(){
    	//点击发送后让聊天框自己滚到底部
    	$('.chattingRecords').animate({scrollTop:$('.chattingRecords ul').height()+'px'},500);
    	var messages=$(".chatTools textarea").val();
    	var myDate=new Date();
    	var h=myDate.getHours();
		var m=myDate.getMinutes();
		var nowtime=h+":"+m;
		var str="";
		str+='<li>'+
				"<div class='messageShow users'>"+
					'<div>'+
						"<img src='http://ww1.sinaimg.cn/large/44287191gw1excbq6tb3rj21400migrz.jpg'/>"+
					"</div>"+
				"<div>"+
				"<p>"+messages+"</p>"+
				"<p>"+nowtime+"</p>"+
				"</div>"+
				"</div>"+
			"</li>";
		 $('.chattingRecords ul').append(str);
		 $(".chatTools textarea").val("");
    })
    //切换到组长
    $(".leader_content_left_all ul li p").click(function(){
    	$(this).addClass("active").siblings();
    	$(this).parent("li").siblings().find("p").removeClass("active");
    	$(".leader_content_left_head").css({
    		background:'#ffffff url(images/six2.png) no-repeat 11px 14px',
    		color:"#2e415e"
    	})
    })
   $(".leader_content_left_head").click(function(){
   		$(".leader_content_left_head").css({
   			background:'#05152e url(images/six.png) no-repeat 11px 14px',
    		color:"#ffffff"
   		})
        $(".leader_content_left_all ul li p").removeClass("active");
   })
   //组长切换
   	$(".grounp_nav li").click(function(){
   		$(this).addClass("active").siblings("li").removeClass("active");
   		$(".pages").eq($(this).index()).slideDown("slow")
   		.siblings(".pages").slideUp("slow")
   	})
   	//互动大厅开关
   	$(".on_off .halls img").click(function(){
	   if($(".on_off .halls img").attr("src")=="images/Slide Offb.png"){
	    	$(".on_off .halls img").attr("src","images/Slide Onb.png");
	   }else{
	    $(".on_off .halls img").attr("src","images/Slide Offb.png");
	   }
	  });
	//权限开关
	$(".on_off .jurisdiction img").click(function(){
		if ($(this).attr("src")=="images/Slide Off.png") {
			$(this).attr("src","images/Slide On.png");
		} else{
			$(this).attr("src","images/Slide Off.png");
		}
	})
	//大厅状态
	function autoimg(){
		if ($(this).attr("src")=="images/Slide Off.png") {
			$(this).attr("src","images/Slide On.png");
			$(this).parent().siblings("td").eq(1).html("开");
		} else{
			$(this).attr("src","images/Slide Off.png");
			$(this).parent().siblings("td").eq(1).html("关");
		}
	}
	$(".on_off .state img").click(function(){
		if ($(this).attr("src")=="images/Slide Off.png") {
			$(this).attr("src","images/Slide On.png");
			$(this).parent().siblings("td").eq(1).html("开");
		} else{
			$(this).attr("src","images/Slide Off.png");
			$(this).parent().siblings("td").eq(1).html("关");
		}
	})
	//大厅设置
	$(".hall_set").click(function(){
      $("#hallSet").modal("toggle");
    });
    //敏感词录入
    $(".entering").click(function(){
    	$("#entering").modal("show");
    	$("#entering #ensure").click(function(){
    		$("#entering").modal("hide");
    	})
    })
     $(".send").unbind("click").click(function(){
    	$("#send").modal("show");
        console.log("111");
    })
	//发送
	$("#send #ensure").unbind("click").click(function(){
		$("#send").modal("hide");
	});
    // 切换页码
    $('#pagefirst').nextUntil('#pagelast').click(function(){
        $(this).addClass("active").siblings("li").removeClass("active");
    });
    $('#pagefirst').click(function(){
        $(this).siblings("li").removeClass("active");
    })
    $('#pagelast').click(function(){
        $(this).siblings("li").removeClass("active");
    })

    // 聊天数据切换
    // $(".talk_list").eq(0).css({
    //     display:"block"
    // })
    $(".chatdata_bodyl_foot li").click(function(){
        $(this).addClass("active").siblings("li").removeClass("active");
        // console.log($(this).index())
        //获取当前元素下标
        var thisindex=$(this).index();
        $("#talk_list"+thisindex).css({
            display:"block"
        }).siblings("table").css({
                display:"none"
            });
        $("#talk_list"+thisindex).children("thead").css({
            width:"100%"
        })
    })
    /*20170524*/
    // 大厅主题
    $(".Set_topic").click(function(){
        $("#Set_topic").modal("show");
        $("#Set_topic #ensure").click(function(){
            $("#Set_topic").modal("hide");
        })
    })
    // 点击编辑
     $(".hall_compile").unbind("click").click(function(){
        $("#Set_topic").modal("show");
    })
    //确认
    $("#Set_topic #ensure").unbind("click").click(function(){
        $("#Set_topic").modal("hide");
    });

    // 切换
    $("ul.tab .checkboxFour input[value='1']").attr("checked",'checked');
        $(".Set_topic_content div.tablist").eq(0).css("display","block");
        $(".tab .checkboxFour input[name='tab']").unbind("click").click(function(){
            $(".tab .checkboxFour input").not($(this)).attr('checked',false);
            var div_index=$(this).val();
            $(".Set_topic_content div.tablist").eq(div_index-1).css("display","block")
                                .siblings("div.tablist").css("display","none");
    })
    // 选项
    $(".check input[name='pitch']").attr("checked","checked");
    // 上传图片

        $("#updateCoverImg").change(function(){
        $("#updateCoverImgShow").css("display","none");
        $("#updateCoverImgShowSpan").css("display","inner-block");
        var prevDiv1 = document.getElementById('updateCoverImgShowSpan');
        var prevDiv1 = document.getElementById('pshow');
        if (this.files && this.files[0])
        {
            var reader = new FileReader();
            reader.onload = function(evt){
                // prevDiv1.innerHTML = '<img style="width:200px;height:200px" src="' + evt.target.result + '" />';
                // console.log(evt.target.result);
                 prevDiv1.innerHTML='<img style="width:100px;height:100px" src="' + evt.target.result + '" />'
            }
            reader.readAsDataURL(this.files[0]);
        }
        else
        {
            prevDiv1.innerHTML = '<div class="img" style="filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src=\'' + this.value + '\'"></div>';
        }
    });
    // 上传图片合集
        $(".uppic input").click(function(){
            $(this).change(function(evt){
                 var imgurl = URL.createObjectURL(evt.target.files[0]);
                // console.log(imgurl);
                var updateCoverImgShowSpanS=$(this).parent().prev(".showUserP").attr("id");
                var prevDiv1=document.getElementById(updateCoverImgShowSpanS);
                 if (this.files && this.files[0]){
                var reader = new FileReader();
                reader.onload = function(evt){
                    prevDiv1.innerHTML = '<img style="width:86px;height:110px" src="' + evt.target.result + '" />';
                }
                reader.readAsDataURL(this.files[0]);
            }else{
                prevDiv1.innerHTML = '<div class="img" style="filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src=\'' + this.value + '\'"></div>';
            }
        });

         })
          $(".uppic input").change(function(evt){
            var updateCoverImgShowSpanS=$(this).parent().siblings(".showUserP").attr("id");
            var prevDiv1=document.getElementById(updateCoverImgShowSpanS);
            if (this.files && this.files[0])
            {
                var reader = new FileReader();
                reader.onload = function(evt){
                    prevDiv1.innerHTML = '<img style="width:86px;height:110px" src="' + evt.target.result + '" />';
                }
                reader.readAsDataURL(this.files[0]);
            }
            else
            {
                prevDiv1.innerHTML = '<div class="img" style="filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src=\'' + this.value + '\'"></div>';
                console.log(this.value);
            }
        })
//   // 切换金币和记录
     $("#goGoldCoinModal").click(function(){
      $("#userInfoModallist").animate({scrollLeft:1200},"fast");
     })
     $("#goPayModal").click(function(){
      $("#userInfoModallist").animate({scrollLeft:600},"fast");
     })
     $(".goback").click(function(){
      $("#userInfoModallist").animate({scrollLeft:0},"fast");
     })

      /*20170713*/
     // 优惠券页面左边
     $(".yhL li").on('click',function(){
        $(this).addClass('active').siblings('li').removeClass('active');
         var yh_tabList=$(this).index();
         // console.log(yh_tabList);
        if (yh_tabList>5) {
            $(".yhR").animate({scrollLeft:1020*(yh_tabList-1)+"px"},"fast");
        }else{
            $(".yhR").animate({scrollLeft:1020*(yh_tabList)+"px"},"fast");
        }
     }).end();
      $(".changbt[name='ensure']").on('click',function(){
        if ($(this).hasClass("ensure")) {
            $(this).removeClass('ensure')
        }else{
            $(this).addClass('ensure');
        }
      }).end();
       $(".changbt[name='change']").on('click',function(){
        $(this).addClass('ensure').siblings(".changbt[name='change']").removeClass('ensure');
      }).end();
        $(".on-offR img").on('click',function(){
            if ($(this).hasClass('turnOn')) {
                $(this).attr('src','images/Slide Offb.png');
                $(this).removeClass('turnOn');
            }else{
                 $(this).attr('src','images/Slide Onb.png');
                 $(this).addClass('turnOn');
            }
        }).end();
// 2017/10/24
// 错误即提示信息  提示消息封装
    function showMsg(msg, type, time) {
        if (type == 'success') var color = '#3D8C2E';
        if (type == 'warn') var color = '#D43535'
        var html = '<div style="z-index:999999;width: 100%;height:40px;position: fixed;top: 0px;background-color: ' + color + ';text-align: center;padding-top: 10px;">';
        html += '<span style="color: #FFFFFF;">' + msg + '</span></div>';
        $('#tip').append(html);
        setTimeout(function () {
            $('#tip').html('');
        }, time * 1000);
    }

// 表格排序
 var tableObject = $('#tableSort'); //获取id为tableSort的table对象
            var tbHead = tableObject.children('thead'); //获取table对象下的thead
            var tbHeadTh = tbHead.find('tr th'); //获取thead下的tr下的th
            var tbBody = tableObject.children('tbody'); //获取table对象下的tbody
            var tbBodyTr = tbBody.find('tr'); //获取tbody下的tr

            var sortIndex = -1;
            tbHeadTh.each(function () {//遍历thead的tr下的th
                var thisIndex = tbHeadTh.index($(this)); //获取th所在的列号
                //给表态th增加鼠标位于上方时发生的事件
                $(this).mouseover(function () {
                    tbBodyTr.each(function () {//编列tbody下的tr
                        //var tds = $(this).find("td"); //获取列号为参数index的td对象集合
                        //$(tds[thisIndex]).addClass("hover");//给列号为参数index的td对象添加样式
                    });
                }).mouseout(function () {//给表头th增加鼠标离开时的事件
                    tbBodyTr.each(function () {
                        var tds = $(this).find("td");
                        $(tds[thisIndex]).removeClass("hover");//鼠标离开时移除td对象上的样式
                    });
                });
                $(this).on('click',function () {//给当前表头th增加点击事件
                    var dataType = $(this).attr("type");//点击时获取当前th的type属性值
                    checkColumnValue(thisIndex, dataType);
                });
            });
            $("tbody tr").removeClass(); //先移除tbody下tr的所有css类
            //table中tbody中tr鼠标位于上面时添加颜色,离开时移除颜色
            $("tbody tr").mouseover(function () {
                // $(this).addClass("hover");
            }).mouseout(function () {
                // $(this).removeClass("hover");
            });
            //对表格排序
            function checkColumnValue(index, type) {
                var trsValue = new Array();
                tbBodyTr.each(function () {
                    var tds = $(this).find('td');
                    //获取行号为index列的某一行的单元格内容与该单元格所在行的行内容添加到数组trsValue中
                    trsValue.push(type + ".separator" + $(tds[index]).html() + ".separator" + $(this).html());
                    $(this).html("");
                });
                var len = trsValue.length;
                if (index == sortIndex) {
                //如果已经排序了则直接倒序
                    trsValue.reverse();
                } else {
                    for (var i = 0; i < len; i++) {
                        //split() 方法用于把一个字符串分割成字符串数组
                        //获取每行分割后数组的第一个值,即此列的数组类型,定义了字符串\数字\Ip
                        type = trsValue[i].split(".separator")[0];
                        for (var j = i + 1; j < len; j++) {
                            //获取每行分割后数组的第二个值,即文本值
                            value1 = trsValue[i].split(".separator")[1];
                            //获取下一行分割后数组的第二个值,即文本值
                            value2 = trsValue[j].split(".separator")[1];
                            //接下来是数字\字符串等的比较
                            if (type == "number") {
                                value1 = value1 == "" ? 0 : value1;
                                value2 = value2 == "" ? 0 : value2;
                                if (parseFloat(value1) > parseFloat(value2)) {
                                    var temp = trsValue[j];
                                    trsValue[j] = trsValue[i];
                                    trsValue[i] = temp;
                                }
                            }else {
                                if (value1.localeCompare(value2) > 0) {//该方法不兼容谷歌浏览器
                                    var temp = trsValue[j];
                                    trsValue[j] = trsValue[i];
                                    trsValue[i] = temp;
                                }
                            }
                        }
                    }
                }

                for (var i = 0; i < len; i++) {
                    $("tbody tr:eq(" + i + ")").html(trsValue[i].split(".separator")[2]);
                }
                sortIndex = index;
            }
// 修改当前排名
$('#tableSort').on('click',".NewsCompile",function(){
        var nowID= $(this).parent('td').prev('.revisability').attr('id');
         $('#change_toManagement #ensure').attr('nowid',nowID);
});
$('#change_toManagement #ensure').on('click',function(){
    var nowRanking=$('.Ranking').val().match(/^[1-9]{1}[0-9]*$/);
    if (nowRanking == null){
        showMsg('请检查输入要修改的排名是否正确','warn',1.5);
    }else{
         var changeNum=$('.Ranking').val();
         var nowmsg=$(this).attr('nowid');
         console.log($(this));
        // $.ajax({
          //  type:"POST",
          //  url:"/Home/Trend/subscribeTrend",
          //  data:{ "teachers":teacherId,
          //         "time":duration,
          //         "glod":gold
          //       },
          // dataType:"JSON",
         // success:function(data){
         $('#'+nowmsg).html(changeNum);
         $('.Ranking').val('');
         $("#change_toManagement").modal("hide");
         // }
    // })
    }
});

$(".NewsManagementLeft").find("ul").find('li').on('click',function(){
    $(this).addClass('active').siblings("li").removeClass("active");
    $(this).parent("ul.NewsManagementNav").siblings("ul.NewsManagementNav").find("li").removeClass("active");
});

try{
    $("#unreviewed").modal("hide");
    $("#unreviewedChange").modal("hide");
    $(".unreviewed").on('click',function(){
        $("#unreviewed").modal("show");
    });
    $(".NewsCompile").on('click',function(){
        $("#unreviewedChange").modal("show");
    });
}catch(e){}
// $("#unreviewed").hide();
$("#unreviewed").find(".modal-footer").find("#ensure").on("click",function(){
    $("#unreviewed").modal("hide");
    showMsg('通过审核','success',1.5);
});
$("#unreviewedChange").find(".modal-footer").find("#ensure").on("click",function(){
    $("#unreviewedChange").modal("hide");
});
$(".removeNews").on("click",function(){
    $(this).parent("td").parent("tr").remove();
});
    /*end    ------------------jcm */
});
