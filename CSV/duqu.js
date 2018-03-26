$.ajax({
  url: 'word_cleaned.csv',
  dataType: 'jsonp',
}).done(function(res){
	console.log(res)
});