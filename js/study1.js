$(document).ready(function(){
  //artwork01를 클릭 ->left:0;
  //artwork06를 클릭 ->left:-1000px;
  //artwork11를 클릭 ->left:-2000px;
  //artwork16를 클릭 ->left:-3000px;
  //내가 클릭한 메뉴리스트의 순번에 맞춰서 train 클래스가 이동하는 기능
  $(".sliderTitle > li").click(function(){
    let number = $(this).index();
    $(".train").css("left",(-1000*number)+"px");
    count = number*5;
  });
  //station클래스에 마우스를 올려놓은 상태에서
  //휠을 내리면 다음 슬라이드가 보일 수 있도록
  //휠을 올리면 이전 슬라이드가 보일 수 있도록 하는 기능 넣기
  let count = 0;
  $(".station").on("mousewheel DOMMouseScroll",function(event){
    let E = event.originalEvent;
    let delta = 0;
    if(E.detail == true){
      delta = E.detail*-40;
    }else{
      delta = E.wheelDelta;
    }
    if(delta > 0){
      count--;
      if(count < 0){count=0;}
      $(".train").css("left",(-200*count)+"px");
    }else{
      count++;
      if(count > 15){count=15;}
      $(".train").css("left",(-200*count)+"px");
    }
  });
  //아트워크11번을 클릭한 뒤 마우스휠을 한칸 내렸을 때 12번으로 이동하지 않고 2번으로 이동하는 버그가 발견됌 해결하라.
  //count를 위에 count = number*5;를 만들어서 해결됌

  //train클래스 안의 리스트들을 클릭했을 때 활성화 될 수 있도록하는 기능을 추가해보세요(on클래스 추가)
  $(".train li").click(function(){
    $(".train li").removeClass("on");
    $(this).addClass("on");
    //큰 이미지를 보이게 하는 기능
    let imgsrc = $(this).find("a").attr("href");
    $(this).children(".bigPic").children("img").attr("src",imgsrc);

    //클릭할때마다 오른쪽으로 이동하게 하는 기능
    count = $(this).index();
    $(".train").css("left",(-200*count)+"px")
    if(count > 15){count = 15;}
    $(".train").css("left",(-200*count)+"px");
  });
  $(".bntClosed").click(function(){
    $(this).parent().removeClass("on");
    return false; //상위요소(태그)로 이벤트가 전달되지 못하게 억제함
    //or e.preventDefault();->해당태그가 갖고 있는 기본 기능을 억제
    //부모태그로 전달되는걸 막아주는 코드이다. -> return false;
    //->왜 여기서 필요하냐면 btnClosed를 누르면 li도 누르는걸로 전달되기에 효과가 보이지 않는다.그래서 부모태그로 전달되는걸 막아줘야한다.
  });






});
