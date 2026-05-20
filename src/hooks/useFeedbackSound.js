import { playAudioFile } from './useAudioFile.js';
import { getSoundEffectVolume } from './useSoundEffectVolume.js';

const FEEDBACK_AUDIO = {
  correct: '/assets/sounds/feedback-benar.mp3',
  wrong: '/assets/sounds/feedback-salah.mp3',
};

function speakFeedback(text) {
  try {
    const volume = getSoundEffectVolume();
    if (volume <= 0) return;

    if (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) {
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const javaneseVoice = voices.find((voice) => voice.lang?.toLowerCase().startsWith('jv'));
    const indonesianVoice = voices.find((voice) => voice.lang?.toLowerCase().startsWith('id'));
    const selectedVoice = javaneseVoice || indonesianVoice;

    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    utterance.lang = selectedVoice?.lang || 'id-ID';
    utterance.rate = 0.95;
    utterance.pitch = text === 'Bener' ? 1.08 : 0.9;
    utterance.volume = volume;

    window.speechSynthesis.speak(utterance);
  } catch {
    // Ignore unsupported speech synthesis.
  }
}

export function useFeedbackSound() {
  const playCorrect = () => {
    playAudioFile(FEEDBACK_AUDIO.correct, {
      volume: getSoundEffectVolume(),
      onError: () => speakFeedback('Bener'),
    });
  };

  const playWrong = () => {
    playAudioFile(FEEDBACK_AUDIO.wrong, {
      volume: getSoundEffectVolume(),
      onError: () => speakFeedback('Salah'),
    });
  };

  return { playCorrect, playWrong };
}
