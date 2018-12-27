function disemvowel(str) {

	var vowelArray = ['A','E','I','O','U','a','e','i','o','u'];

	for(var i = 0; i < vowelArray.length; i++){

//		str = str.replace(vowelArray[i], '')
		str = str.replace(new RegExp(vowelArray[i], 'g'), '');

		console.log(i);
		console.log(str);
	}
	console.log(str);
  return str;
}

//Test.assertEquals(disemvowel("This website is for losers LOL!"),
//  "Ths wbst s fr lsrs LL!")
//Trolls are attacking your comment section!
//
//A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//
//Your task is to write a function that takes a string and return a new string with all vowels removed.
//
//For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//
//Note: for this kata y isn't considered a vowel.
