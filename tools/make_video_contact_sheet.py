from pathlib import Path
import cv2
import numpy as np

frame_dir = Path("tmp/video-frames")
output_path = Path("tmp/video-contact-sheet.jpg")

groups = {}
for frame_path in sorted(frame_dir.glob("*.png")):
    stem = frame_path.stem
    if stem.endswith("-1s"):
        key = stem[:-3]
    elif stem.endswith("-5s"):
        key = stem[:-3]
    elif stem.endswith("-9s"):
        key = stem[:-3]
    else:
        key = stem
    groups.setdefault(key, []).append(frame_path)

thumb_w, thumb_h = 320, 180
label_h = 38
gap = 10
rows = []
font = cv2.FONT_HERSHEY_SIMPLEX

for key, paths in groups.items():
    paths = sorted(paths, key=lambda p: p.name)
    cells = []
    for path in paths:
        img = cv2.imread(str(path))
        if img is None:
            img = np.zeros((thumb_h, thumb_w, 3), dtype=np.uint8)
        img = cv2.resize(img, (thumb_w, thumb_h), interpolation=cv2.INTER_AREA)
        label = path.stem.split("-")[-1]
        cv2.rectangle(img, (0, 0), (72, 26), (255, 255, 255), -1)
        cv2.putText(img, label, (8, 18), font, 0.55, (20, 20, 20), 2, cv2.LINE_AA)
        cells.append(img)

    while len(cells) < 3:
        cells.append(np.zeros((thumb_h, thumb_w, 3), dtype=np.uint8))

    row_img = np.hstack(cells)
    label_img = np.full((label_h, thumb_w * 3, 3), 245, dtype=np.uint8)
    cv2.putText(label_img, key[:80], (8, 26), font, 0.62, (35, 35, 35), 2, cv2.LINE_AA)
    rows.append(np.vstack([label_img, row_img]))

separator = np.full((gap, thumb_w * 3, 3), 255, dtype=np.uint8)
sheet_parts = []
for row in rows:
    if sheet_parts:
        sheet_parts.append(separator)
    sheet_parts.append(row)

sheet = np.vstack(sheet_parts)
cv2.imwrite(str(output_path), sheet)
print(output_path)
