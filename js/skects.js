$(function () {
	var $iphonenumber = $('#number').find('.p-select');
	var $location = $('#location').find('.p-select');
	// $location.text('广东 深圳');
	$iphonenumber.click();

	var array1 = [];
	function list(){
		$('.number-list').find('a').each(function(index, el) {
			array1.push($(el).text());
			console.log('1');
		});
	}
	
	var $arefresh = $('#refresh');

	var reg1 = /8899/;
	var reg2 = /8989/;
	var reg3 = /6969/;
	var reg4 = /6699/;
	var reg5 = /6688/;
	var reg6 = /6868/;
	var reg7 = /666/;
	var reg8 = /888/;
	var reg9 = /000/;
	var reg10 = /1001/;
	var reg11 = /001/;
	var reg12 = /0101/;
	var reg12 = /0808/;
	var reg13 = /0755/;
	var reg14 = /0606/;
	var reg15 = /0909/;
	var reg16 = /3838/;
	var reg18 = /999/;
	var reg19 = /6600/;
	var reg20 = /1122/;
	var reg21 = /2233/;
	var reg22 = /5566/;
	var reg23 = /6677/;
	var reg24 = /7788/;
	var reg25 = /1212/;
	var reg26 = /1314/;
	var reg27 = /5220/;
	var reg28 = /111/;
	var reg29 = /222/;
	var reg30 = /333/;
	var reg32 = /555/;
	var reg33 = /777/;
	var reg34 = /1001/;
	var reg35 = /8808/;
	var reg36 = /9909/;
	var reg37 = /3388/;
	var reg38 = /3838/;
	var reg39 = /0010/;
	var reg40 = /0001/;
	var reg41 = /1000/;
	var reg42 = /8080/;
	var reg43 = /1234/;
	var reg44 = /2345/;
	var reg45 = /3456/;
	var reg46 = /4567/;
	var reg47 = /5678/;
	var reg48 = /6789/;
	var reg49 = /9988/;
	var reg50 = /1111/;
	var reg51 = /2222/;
	var reg52 = /3333/;
	var reg53 = /4444/;
	var reg54 = /5555/;
	var reg55 = /6666/;
	var reg56 = /7777/;
	var reg57 = /8888/;
	var reg58 = /9999/;
	var reg59 = /0000/;
	var reg60 = /12530/;
	var reg61 = /999/;
	var reg64 = /00000/;
	var reg65 = /9909/;
	var reg66 = /9908/;
	var reg67 = /9906/;
	var reg68 = /8809/;
	var reg69 = /8866/;
	var reg70 = /9199/;
	var reg71 = /911/;
	var reg72 = /0066/;
	var reg73 = /0018/;
	var reg17 = /^((?!176).)*$/;
	var reg74 = /^((?!175).)*$/;
	var timeinter = setInterval(function(){
		array1 = [];
		$arefresh.click();
		list();
		$(array1).each(function(index, el) {
			if (reg1.test(el) || reg2.test(el) || reg3.test(el) || reg4.test(el) || reg5.test(el) || reg6.test(el) || reg7.test(el) || reg8.test(el) || reg9.test(el) || reg10.test(el) || reg11.test(el) || reg12.test(el) || reg13.test(el) || reg14.test(el) || reg15.test(el) || reg16.test(el) || reg18.test(el) || reg19.test(el) || reg20.test(el) || reg21.test(el) || reg22.test(el) || reg23.test(el) || reg24.test(el) || reg25.test(el) || reg26.test(el) || reg27.test(el) || reg28.test(el) || reg29.test(el) || reg30.test(el) || reg32.test(el) || reg33.test(el) || reg34.test(el) || reg35.test(el) || reg36.test(el) || reg37.test(el) || reg38.test(el) || reg39.test(el) || reg40.test(el) || reg41.test(el) || reg42.test(el) || reg43.test(el) || reg44.test(el) || reg45.test(el) || reg46.test(el) || reg47.test(el) || reg48.test(el) || reg49.test(el) || reg50.test(el) || reg51.test(el) || reg52.test(el) || reg53.test(el) || reg54.test(el) || reg55.test(el) || reg56.test(el) || reg57.test(el) || reg58.test(el) || reg59.test(el) || reg60.test(el) || reg61.test(el) || reg64.test(el) || reg65.test(el) || reg66.test(el) || reg67.test(el) || reg68.test(el) || reg69.test(el) || reg70.test(el) || reg71.test(el) || reg72.test(el) || reg73.test(el)) {
				if (reg17.test(el) && reg74.test(el)) {
					console.log(el);
				}
			}
		});

	},200);
})