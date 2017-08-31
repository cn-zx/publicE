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
	var reg31 = /444/;
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
	var reg17 = /^((?!176).)*$/;
	var timeinter = setInterval(function(){
		array1 = [];
		$arefresh.click();
		list();
		$(array1).each(function(index, el) {
			if (reg1.test(el) || reg2.test(el) || reg3.test(el) || reg4.test(el) || reg5.test(el) || reg6.test(el) || reg7.test(el) || reg8.test(el) || reg9.test(el) || reg10.test(el) || reg11.test(el) || reg12.test(el) || reg13.test(el) || reg14.test(el) || reg15.test(el) || reg16.test(el) || reg18.test(el) || reg19.test(el) || reg20.test(el) || reg21.test(el) || reg22.test(el) || reg23.test(el) || reg24.test(el) || reg25.test(el) || reg26.test(el) || reg27.test(el) || reg28.test(el) || reg29.test(el) || reg30.test(el) || reg31.test(el) || reg32.test(el) || reg33.test(el) || reg34.test(el) || reg35.test(el) || reg36.test(el) || reg37.test(el) || reg38.test(el) || reg39.test(el) || reg40.test(el) || reg41.test(el) || reg42.test(el)) {
				if (reg17.test(el)) {
					console.log(el);
				}
			}
		});

	},200);


	
})


























