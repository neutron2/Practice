$(document).ready(function(){

    //  우리가 보고있는 슬라이드의 번호 : cur
    //  최초의 순간 우리는 0번 째 슬라이드를 보고있다 라고 가정한다.
    //  우리가 가진 슬라이드의 개수 : len
    var cur = 0;
    var len = $(".item").length;

    //  sliding이라는 작업에 대하여(이때 dir이라는 재료가 필요하다)
        //  cur를 dir만큼 증가시킨다.(만약 dir이 음수라면 감소시키는 꼴임)
        //  그런데 만약 그렇게 증가시킨 cur가 혹시 len보다 크거나 같다면???
        //  (볼수 없는 번호 이후의 슬라이드를 보겠다고 난리를 치는 상황이라면)
            //  다시 처음 슬라이드를 보도록 cur를 0으로 바꿔치기.
        //  그게 아니라면 만약 그렇게 감소시킨 cur가 혹시 0보다 작다면
        //  (볼수 없는 번호 이전의 슬라이드를 보겠다고 난리를 치는 상황이라면)
            //  다시 마지막 슬라이드를 보도록 cur를 len-1로 바꿔치기.
        //  기존에 있던 슬라이드를 화면 바깥으로 던져서 퇴장하게 만들기.
        // 슬라이드 중에서 cur번째를 슬라이드 화면 안쪽으로 끌어들여서 등장하게 만들기.
    function sliding(dir){
        cur = cur + dir;
        if(cur >= len){
            cur = 0;
        }else if(cur < 0){
            cur = len-1;
        }
        $(".item").css({
            transform: "rotateY(180deg)",
            zIndex: 1
        });
        $(".item").eq(cur).css({
            transform: "rotateY(0deg)",
            zIndex: 2
        });
    }

    //  .prev라는 버튼이 클릭되었을 때 sliding작업을 집행한다.(이때 재료(dir)는 -1)
    //  .next라는 버튼이 클릭되었을 때 sliding작업을 집행한다.(이때 재료(dir)는 1)
    $(".prev").click(function(){sliding(-1);});
    $(".next").click(function(){sliding(1);});
});