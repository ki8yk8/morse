import { useContext, useRef } from "react";
import SettingsContext from "../../contexts/settings";

export default function useMorseSound() {
	const audio_context_ref = useRef(null);
	const { settings, set_settings } = useContext(SettingsContext);

	const playBeep = (duration) => {
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

			letters.forEach((letter) => {
				const characters = letter.split("");

				characters.forEach((character) => {
					const duration =
						character === "." ? settings.dih * 1 : settings.dih * 3;

					// play the character
					setTimeout(() => {
						playBeep(duration);
					}, time);

					// play the space after character = 1 unit of silence
					time += duration + settings.character * settings.dih;
				});
				// after each letter 3 units of silence
				time += settings.letter * settings.dih;
			});

			// after each word 7 units of silence
			time += settings.word * settings.dih;
		});
	};

	return playMorse;
}
