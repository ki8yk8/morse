import { useRef } from "react";

export default function useMorseSound(speed = 1000) {
	const audio_context_ref = useRef(null);

	const playBeep = (duration = 100) => {
		if (!audio_context_ref.current) {
			audio_context_ref.current = new (window.AudioContext ||
				window.webkitAudioContext)();
		}

		const audio_context = audio_context_ref.current;
		const oscillator = audio_context.createOscillator();
		const gain_node = audio_context.createGain();

		oscillator.frequency.setValueAtTime(600, audio_context.currentTime);
		gain_node.gain.setValueAtTime(1, audio_context.currentTime);

		oscillator.connect(gain_node);
		gain_node.connect(audio_context.destination);

		oscillator.start();
		setTimeout(() => oscillator.stop(), duration);
	};

	const playMorse = (sentence) => {
		const words = sentence.split("//");
		let time = 0; // records the time such that beep and silence can be handled

		// for each words play the character, then play space than another word
		words.forEach((word) => {
			const letters = word.split("/");
			console.log(letters);

			letters.forEach((letter) => {
				const characters = letter.split("");

				characters.forEach((character) => {
					const duration = character === "." ? speed * 1 : speed * 3;

					// play the character
					setTimeout(() => {
						playBeep(duration);
					}, time);

					// play the space after character = 1 unit of silence
					time += duration + 1 * speed;
				});
				// after each letter 3 units of silence
				time += 3 * speed;
			});

			// after each word 7 units of silence
			time += 7 * speed;
		});
	};

	return playMorse;
}
