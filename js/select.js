var datatype = [{
	id: 0,
	text: '北京市'
}, {
	id: 1,
	text: '上海市'
}, {
	id: 2,
	text: '天津市'
}, {
	id: 3,
	text: '广东省'
}, {
	id: 4,
	text: '河南省 '
}, {
	id: 5,
	text: '河北省 '
}, {
	id: 6,
	text: '浙江省 '
}, {
	id: 7,
	text: '南京 '
}];
$("#city-name").select2({
	placeholder: '地区',
	data: datatype,
	minimumResultsForSearch: Infinity,
	allowClear: true
});