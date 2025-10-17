export const MORSE_MAPPING = {
	a: ".-",
	b: "-...",
	c: "-.-.",
	d: "-..",
	e: ".",
	f: "..-.",
	g: "--.",
	h: "....",
	i: "..",
	j: ".---",
	k: "-.-",
	l: ".-..",
	m: "--",
	n: "-.",
	o: "---",
	p: ".--.",
	q: "--.-",
	r: ".-.",
	s: "...",
	t: "-",
	u: "..-",
	v: "...-",
	w: ".--",
	x: "-..-",
	y: "-.--",
	z: "--..",
	1: ".----",
	2: "..---",
	3: "...--",
	4: "....-",
	5: ".....",
	6: "-....",
	7: "--...",
	8: "---..",
	9: "----.",
	0: "-----",
	" ": "",
};

export function english2Morse(english) {
	const lcased = english.toLocaleLowerCase();

	const morse_symbols = lcased.split("").map((letter) => MORSE_MAPPING[letter]);

	return morse_symbols.join("/");
}

export function morse2English(morse) {
	const letters = morse.split("/").map((c) => Object.keys(MORSE_MAPPING).find(key => MORSE_MAPPING[key] === c));
	
	return letters.join("");
}
