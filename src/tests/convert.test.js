import { test, expect } from "vitest";
import { morse2English, english2Morse } from "../utils/convert";

const [english, morse] = [
	"hello world",
	"...././.-../.-../---//.--/---/.-./.-../-..",
];

test("English2Morse should work", () => {
	const got_morse = english2Morse(english);

	expect(got_morse).toBe(morse);
});

test("Morse2English should work", () => {
	expect(morse2English(morse)).toBe(english);
});
