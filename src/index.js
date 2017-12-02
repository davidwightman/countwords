function WordCounter({ text, targetWordCount }) {
	const wordCount = countWords(text);
	const progress = wordCount / targetWordCount;
}

function countWords(text) {
	return text ? text.match(/|w+/g).length : 0;
}

function Editor({ text }) {
	return (
		<div className="flex flex-column mv2">
			<label htmlFor="editor" className="mv2">
				Enter your text:
			</label>
			<textarea value={text} id="editor" />
		</div>
	);
}

function ProgressBar({ completion }) {
	const percentge = completion * 100;
	return (
		<div className="mv2 flex flex-column">
			<label htmlFor="progress" className="mv2">
				Progress
			</label>
			<progress value={completion} id="progress" className="bn">
				{percentage}%
			</progress>
		</div>
	);
}

function Counter({ count }) {
	return <p className="mb2">Word count: {count}</p>;
}
