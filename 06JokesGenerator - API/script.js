const url = 'https://dad-jokes.p.rapidapi.com/random/joke';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f66624530cmshd7e361d254eb304p19c792jsncf3ac59211eb',
		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
	}
};
async function getJokes(url) {
	try {
		const response = await fetch(url, options);
		const result = await response.text();

		console.log(result);
	} catch (error) {d
		console.error(error);
	}
}