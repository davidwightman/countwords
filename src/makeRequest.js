function makeRequest() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (Math.random() > 0.5) {
				resolve('Cool!');
			} else {
				reject('LAME!');
			}
		}, 500);
	});
}

export default makeRequest;
