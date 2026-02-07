# Specification

## Summary
**Goal:** Replace the “About Our Practice” section placeholder image with the user-uploaded photo while preserving the current square layout and styling.

**Planned changes:**
- Add the user-uploaded photo as a static asset under `frontend/public/assets/generated` (cropped to a square).
- Update only the referenced “About Our Practice” `<img>` element to point to the new asset path, keeping existing `aspect-square`, `object-cover`, rounded corners, border, and shadow styling unchanged.

**User-visible outcome:** The “About Our Practice” section displays the uploaded photo instead of the placeholder image, with the same square, rounded, bordered, shadowed presentation.
