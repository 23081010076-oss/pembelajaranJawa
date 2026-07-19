from pathlib import Path
import cv2

input_dir = Path("public/assets/Video Animation")
output_dir = Path("tmp/video-frames")
output_dir.mkdir(parents=True, exist_ok=True)

rows = []
for video_path in sorted(input_dir.glob("*.mp4")):
    cap = cv2.VideoCapture(str(video_path))
    if not cap.isOpened():
        rows.append((video_path.name, "ERROR", "", "", ""))
        continue

    fps = cap.get(cv2.CAP_PROP_FPS) or 0
    frame_count = cap.get(cv2.CAP_PROP_FRAME_COUNT) or 0
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH) or 0)
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT) or 0)
    duration = frame_count / fps if fps else 0
    safe_name = "".join(ch if ch.isalnum() else "-" for ch in video_path.stem).strip("-")

    for second in (1, 5, 9):
        target = min(second, max(duration - 0.25, 0))
        cap.set(cv2.CAP_PROP_POS_MSEC, target * 1000)
        ok, frame = cap.read()
        if ok:
            output_path = output_dir / f"{safe_name}-{second}s.png"
            cv2.imwrite(str(output_path), frame)

    cap.release()
    rows.append((video_path.name, f"{duration:.2f}s", f"{fps:.2f}", f"{width}x{height}", f"{int(frame_count)} frames"))

print("Name\tDuration\tFPS\tResolution\tFrames")
for row in rows:
    print("\t".join(row))
