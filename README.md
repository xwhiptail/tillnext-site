# TillNext public site

Static marketing, help, privacy, and support pages for TillNext: Paycheck Planner.

- Site: https://tillnext.app/
- Help: https://tillnext.app/help/
- Pricing: https://tillnext.app/pricing/
- Support: https://tillnext.app/support/
- Changelog: https://tillnext.app/changelog/
- Privacy: https://tillnext.app/privacy-policy/
- Terms: https://tillnext.app/terms-of-use/
- Email: support@tillnext.app
- Public issues: https://github.com/xwhiptail/tillnext-site/issues

## Preview locally

Run `python3 -m http.server 8080`, then open http://localhost:8080/.
There is no build step, JavaScript dependency, analytics, or external font dependency.

## Version 2.0 release preparation

The v2 pages intentionally say the App Store release is in preparation. Update that status only after the release is available. The App Store link continues to point to the existing app listing.

The planner pages use `planner.css`. The separate Tilly's Quest pages retain `styles.css` and their existing game assets.

Replace these screenshot pairs with real, seeded, nonpersonal v2 captures before publishing:

- `assets/help-home.png` and `assets/help-home-dark.png`
- `assets/help-recurring.png` and `assets/help-recurring-dark.png`
- `assets/help-month.png` and `assets/help-month-dark.png`
- `assets/help-settings.png` and `assets/help-settings-dark.png`

Homepage and Help use the same screenshot files, selected with the system light/dark preference. Keep the full screenshot visible; no crop or illustrative replacement. Screenshot markup includes `data-screenshot-slot` for each tab.

App icons come from the app's LightAppIcon and AppIcon asset catalogs. The social preview uses the dark icon. Legacy widget and game promotional assets are retained but are not presented as v2 screenshots.

TillNext app source code is intentionally not included in this public repository.
