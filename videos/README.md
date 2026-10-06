# 🎬 Karachi Street Racer — Snatcher & Police Video Cutscenes

Place your custom `.mp4` or `.webm` cutscene videos inside this `public/videos/` directory. The game automatically detects and plays them when your car is forced to a stop (`0 KM/H`)!

## 📁 Drop-In Video File Paths

| Cutscene Trigger | Exact File Path | Recommended Aspect Ratio |
| :--- | :--- | :--- |
| **🏍️ 70cc Snatcher Stop** | `public/videos/snatcher_snatch.mp4` | `16:9` or `2:1` (720p/1080p MP4 H.264) |
| **🚓 Sindh Police Vigo / Naka Stop** | `public/videos/police_stop.mp4` | `16:9` or `2:1` (720p/1080p MP4 H.264) |

## ⚡ Instant In-Browser Video Loader (No Rebuild Required!)
You can also load any `.mp4` file directly while playing:
1. **Inside Settings (`⚙️`)**: Click **📂 Load Snatcher .MP4** or **📂 Load Police .MP4**.
2. **Inside the Cutscene Modal**: Click **📂 Load Your Custom .MP4 Video** in the top-right corner of the video viewport to immediately swap in your video clip!

## 🎥 Built-In Fallback
If `snatcher_snatch.mp4` or `police_stop.mp4` is not yet placed in this folder, the game automatically renders a **60 FPS Karachi Dashcam Animated Cutscene** complete with Roman-Urdu voiceover subtitles, sirens, and interactive escape choices.
