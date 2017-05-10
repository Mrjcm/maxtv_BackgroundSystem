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
        // console.log();
        $("#talk_list"+thisindex).css({
            display:"block"
        }).siblings("table").css({
                display:"none"
            });
        $("#talk_list"+thisindex).children("thead").css({
            width:"100%"
        })
    })

    /*end    -jcm */
  });
