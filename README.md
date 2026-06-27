# webready# WebReady

> Businesses without websites — found, demoed, and converted, automatically.

WebReady is an AI-agent-driven pipeline that finds small and medium businesses in Uganda that don't have a website, automatically builds them a sample site using their own public business data, and reaches out to offer it as a working demo — turning a cold pitch into "we already built this for you."

## The problem

Thousands of SMEs in Uganda — restaurants, salons, clinics, schools, contractors, shops — have no website. Most only have a Facebook page or a Google Maps listing. Cold-pitching "we can build you a website" rarely lands, because the business owner can't picture the value. Showing them a finished, branded product built specifically for them removes that imagination gap.

## How it works

1. **Discovery agent** — Finds Ugandan SMEs with no website listed, via Google Maps / Google Business / Facebook, filtered by sector and location.
2. **Data-gathering agent** — Pulls whatever public info exists: name, logo/photos, location, hours, services/menu, reviews, contact details.
3. **Build agent** — Auto-generates a one-page sample website from that data: hero image, services, location, contact button, matched branding.
4. **Outreach agent** — Sends a personalized email with a live preview link and a short, low-pressure pitch.
5. **Negotiation** — Human-led. Discuss pricing, scope, hosting, domain, ongoing maintenance.
6. **Close & deliver** — Polish the sample into the real site, hand over with hosting + domain, upsell maintenance/SEO/WhatsApp ordering.

```
Discovery → Data-gathering → Build → Outreach → Negotiation → Close & deliver
   (auto)        (auto)        (auto)    (auto)      (human)        (human)
```

## Tech stack (planned)

| Layer | Tool |
|---|---|
| Discovery | Google Places API, Facebook Graph API |
| Data extraction | Custom scraping / API pulls |
| Site generation | LLM-driven template fill (Next.js or static HTML/Tailwind) |
| Outreach | Resend / SendGrid / Gmail API |
| Hosting | Vercel / Netlify / lightweight VPS |
| Tracking | Simple CRM or spreadsheet (outreach → reply → close rate) |

## Monetization

- One-time build fee per business
- Monthly hosting/maintenance retainer
- Upsells: SEO, Google Business optimization, WhatsApp ordering, basic e-commerce

## Roadmap

- [ ] MVP: manual pipeline for 10–20 businesses in one sector/city to validate reply and close rates
- [ ] Automate discovery + data-gathering agents
- [ ] Automate sample site generation from scraped data
- [ ] Automate outreach with personalization and deliverability safeguards
- [ ] Build simple dashboard to track pipeline status per lead
- [ ] Scale to multiple sectors and cities

## Repo structure (suggested)

```
webready/
├── discovery/        # scripts/agents for finding businesses
├── data/             # scraped business data per lead
├── site-builder/     # template + generation logic
├── outreach/         # email templates + sending logic
├── templates/         # base website templates
└── README.md
```

## Risks / notes

- Cold-emailing scraped contacts can get flagged as spam — keep volume low per domain, personalize every message, and follow Uganda's data protection rules.
- Set expectations that the sample is a draft, not the final deliverable, so clients don't feel shortchanged.

## Status

Early concept / pre-MVP. Currently validating manually before automating each pipeline stage.
