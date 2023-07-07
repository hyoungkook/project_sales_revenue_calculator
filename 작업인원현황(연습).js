// 1. 전체 인원을 테이블로 나타낸다. (인원별 테이블에 근무중 표시를 나타내는 란을 만든다.)
// 2. 전체인원과 근무중인 인원만 나타나도록 하는 버튼을 각각 만든다.
// 3. 전체 인원과 근무중인원을 버튼을 눌러서 각기 표시한다.


var workers=["김호범","김형국","김진아","송주용"];
var belong=["직영","직영","직영","직영"]
var job =["지사장","관리직","관리직","관리직"]
var position=["본사","야적장","사무실","사무실"];

var workers2=["마윤수","심원","김기동","이정호","김준일","신현수","김치훈","정동기","김성민","우성민","우연하","손인후"];
var belong2=["직영","직영","직영","직영","직영","직영","직영","직영","직영","직영","직영","직영"];
var job2=["하바운전원","하바운전원","정비사","정비사","정비사","본선감독","본선감독","육상감독","육상감독","육상감독","전표박스","전표박스"];
var position2=["정상출근","정상출근","정상출근","정상출근","휴무","정상출근","정상출근","정상출근","휴무","정상출근","오전근무","오후근무"];

var workers3=["허경범","여종철","김태경","최동은","이용호","박종구","하재석","송창훈","김재윤","조희승","박양호","교일권","최민기","유열상","정동필","박주영","최종명","이정열","노희석","신정철","김연호","송수인","김대성","김용진","이경훈","정구일","김충열","송경석","김정겸","심현광","이광규","정운신","김상철","정구재","이창식"];
var belong3=["항운노조","1반","1반","1반","1반","1반","1반","1반","1반","1반","1반","1반","1반","1반","1반","1반","1반","1반","2반","2반","2반","2반","2반","2반","2반","2반","2반","2반","2반","2반","2반","2반","2반","2반","2반"];
var job3=["소장","반장","하바","하바","하바","신호수","신호수","신호수","신호수","신호수","신호수","신호수","홀드","홀드","홀드","홀드","홀드","홀드","반장","하바","하바","신호수","신호수","신호수","신호수","신호수","신호수","신호수","홀드","홀드","홀드","홀드","홀드","홀드","홀드"];
var position3=["출근","출근","출근","휴무","휴무","휴무","휴무","휴무","휴무","휴무","휴무","휴무","휴무","휴무","휴무","휴무","휴무","휴무","휴무","휴무","휴무","휴무","휴무","휴무","휴무","휴무","휴무","휴무","휴무","휴무","휴무","휴무","휴무","휴무","휴무","휴무"];

function officer() {

    var text=document.getElementById('text');
    var table='<table align="center"><thead><tr><th>이름</th><th>소속</th><th>직무</th><th>작업배치</tr></thead></tbody>';

    for(var i=0; i<workers.length; i++){
        table +='<tr><td>'+workers[i]+'</td><td>'+belong[i]+'</td><td>'+job[i]+'</td><td>'+position[i]+'</tr>';
    }
    table +='</tbody></table>';
    text.innerHTML=table;
};

function technical() {

    var text=document.getElementById('text');
    var table='<table align="center"><thead><tr><th>이름</th><th>소속</th><th>직무</th><th>작업배치</tr></thead></tbody>';

    for(var i=0; i<workers2.length; i++){
        table +='<tr><td>'+workers2[i]+'</td><td>'+belong2[i]+'</td><td>'+job2[i]+'</td><td>'+position2[i]+'</tr>';
    }
    table += '<tbody></table>';
    text.innerHTML=table;
};

function labor() {
    var text=document.getElementById('text');
    var table='<table align="center"><thead><tr><th>이름</th><th>소속</th><th>직무</th><th>작업배치</tr></thead></tbody>';

    for(var i=0; i<workers3.length; i++){
        table +='<tr><td>'+workers3[i]+'</td><td>'+belong3[i]+'</td><td>'+job3[i]+'</td><td>'+position3[i]+'</tr>';
    }
    table += '<tbody></table>';
    text.innerHTML=table;
};