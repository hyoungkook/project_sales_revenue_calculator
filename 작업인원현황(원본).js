// 1. 전체 인원을 테이블로 나타낸다. (인원별 테이블에 근무중 표시를 나타내는 란을 만든다.)
// 2. 전체인원과 근무중인 인원만 나타나도록 하는 버튼을 각각 만든다.
// 3. 전체 인원과 근무중인원을 버튼을 눌러서 각기 표시한다.

var workers=["김호범","김형국","김진아","송주용"];
var belong=["직영","직영","직영","직영"]
var entering=["2001-05-21","2015-06-08","2008-11-10","2019-06-03"];
var job =["지사장","관리직","관리직","관리직"]
var position=["본사","야적장","사무실","사무실"];

var text=document.getElementById('text');
var table='<table align="center"><thead><tr><th>이름</th><th>소속</th><th>입사일</th><th>직무</th><th>작업배치</tr></thead></tbody>';

for(var i=0; i<workers.length; i++){
table +='<tr><td>'+workers[i]+'</td><td>'+belong[i]+'</td><td>'+entering[i]+'</td><td>'+job[i]+'</td><td>'+position[i]+'</tr>';
}
table +='</tbody></table>';
text.innerHTML=table;






