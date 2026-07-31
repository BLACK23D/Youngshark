# YoungShark Technologies — Release QA Handoff

Date: 27 July 2026  
Status: Conditional pass

## Release blockers

1. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS production domain.
2. Set `NEXT_PUBLIC_LINKEDIN_URL` to the verified YoungShark Technologies company page. Public search did not establish an authoritative page, so the current value opens LinkedIn company search.

## Verified

- Responsive layouts reviewed at 1440 × 1000 and 390 × 844.
- Mobile navigation opens, closes, and exposes every primary destination.
- `home`, `services`, `work`, `about`, and `contact` anchors resolve.
- The Kenyan phone number is displayed as `+254 706 103 000` and links to `tel:+254706103000`.
- No horizontal overflow was detected at the tested desktop or mobile viewport.
- All rendered images loaded, and no browser console warnings or errors were observed.
- Homepage, manifest, icon, and Open Graph image returned HTTP 200 locally.
- TypeScript, ESLint, and the optimized Next.js production build passed.

## Product-manager confirmation

- Confirm that Roycss, Ferrumengine, and Youngsend descriptions accurately represent released or approved work.
- Supply canonical project URLs or approved case-study content when available.
- Decide whether phone and LinkedIn are sufficient for lead capture or whether a business email/form is required.
- Approve analytics, cookie consent, privacy policy, and monitoring requirements before adding them.

## Performance and asset notes

- The desktop hero video was reduced from 4.34 MB to 2.35 MB and retains its original 16.68-second duration.
- The mobile hero video was reduced from 1.17 MB to 1.00 MB.
- Both optimized videos are H.264, silent, web-streamable MP4 files with fast-start metadata.
- Original videos are preserved in `archive/original-videos`.
- Legacy fragrance images were removed from the public website surface and preserved in `archive/legacy-images`.

## Principal engineer release sequence

1. Configure the two required environment variables.
2. Rebuild and deploy to the final hosting environment.
3. Verify canonical tags, JSON-LD, Open Graph output, and LinkedIn destination on the production URL.
4. Run Lighthouse and a real-device smoke test against production.
5. Enable uptime/error monitoring and confirm rollback procedures.
