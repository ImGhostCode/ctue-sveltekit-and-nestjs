import { subscribe } from "svelte/internal";
import { writable } from "svelte/store";

export const isLoading = writable(false)
export const isLoadingForm = writable(false)

export const audioSettings = writable({
    voice: { voiceURI: 'Google US English', name: 'Google US English', lang: 'en-US', localService: false, default: false },
    speed: 1,
    volume: 100,
});

let voice: SpeechSynthesisVoice
let volume: number
let speed: number

audioSettings.subscribe((v) => {
    voice = v.voice
    volume = v.volume
    speed = v.speed
})

export const HandlerSpeaker = {
    onTextToSpeech: (text = '') => {
        let speech = new SpeechSynthesisUtterance();
        window.speechSynthesis.cancel();
        speech.lang = 'en';
        speech.text = text;
        speech.volume = volume;
        speech.voice = voice || null;
        speech.rate = speed;

        window.speechSynthesis.speak(speech);
    },

    onPlayAudio: (audioSrc: string) => {
        const audio = new Audio(audioSrc);
        audio.play();
    }
}