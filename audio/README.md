Audio asset hooks for Need 4 Speed Lahore
=========================================

The V2 build ships with procedural fallback SFX enabled and file-audio hooks disabled, so missing audio files do not create Android WebView asset errors.

To use owned or royalty-free audio files, add them at the paths below and set `ENABLE_FILE_AUDIO = true` in `src/main.js`.

Music:
- public/audio/music/lahore-night-drive.mp3
- public/audio/music/ring-road-chase.mp3
- public/audio/music/old-city-pursuit.mp3

Sound effects:
- public/audio/sfx/crash.mp3
- public/audio/sfx/horn.mp3
- public/audio/sfx/nitro-burst.mp3
- public/audio/sfx/police-siren.mp3
- public/audio/sfx/tire-drift.mp3

Keep mobile files short and compressed:
- Music: 96-128 kbps MP3 or OGG, loop-friendly, under 3 MB each when possible.
- SFX: mono MP3/OGG/WAV, under 200 KB each when possible.

Do not use copyrighted songs unless you own the rights for app-store distribution.
