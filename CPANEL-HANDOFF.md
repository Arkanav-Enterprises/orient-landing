# tphorient.com — PHP site handover (cPanel)

This note covers the legacy PHP site only. The new Next.js site lives in a separate repo on Vercel and is not covered here.

---

## 1. Hosting

| Item | Value |
|------|-------|
| Host | CSG Tech (shared cPanel) |
| Server | `blue.csgtech.in` |
| cPanel login | `https://blue.csgtech.in:2083` |
| Account owner | CSG Tech support — `<support contact TBD>` |
| Domain | `tphorient.com` |
| Document root | `public_html/` |

Credentials (cPanel username, password, FTP) are held by CSG Tech. Request them directly — we no longer hold a copy.

---

## 2. How to edit files

Two options, pick whichever suits the change:

**In-browser (quick fixes)**
- cPanel → File Manager → navigate to `public_html/`
- Right-click → Edit. Saves are live immediately.

**SFTP (anything non-trivial)**
- cPanel → FTP Accounts → create or reuse an account
- Host: `blue.csgtech.in`, port 22 (SFTP) or 21 (FTP)
- Any SFTP client works: Transmit, Cyberduck, FileZilla, VS Code SFTP extension.

There is no staging environment, no git, and no CI. Every save is production. Before making changes, we strongly recommend snapshotting `public_html/` to a local git repo so there is a rollback path.

---

## 3. Database

- MySQL, managed via cPanel → **phpMyAdmin**
- DB name, user, and password are stored in a PHP config file at the root of `public_html/` (typically `config.php` or similar — grep for `mysqli_connect` or `PDO` to locate).
- Backups: cPanel → Backup Wizard. Take one before any schema change.

---

## 4. Email / contact forms — important gotcha

The host transparently hijacks **all outbound SMTP** on ports 25, 465, and 587 and forces mail through the local Exim MTA. This is a shared-hosting anti-spam measure, not a bug.

**What this means in practice:**
- Direct SMTP connections to Office365, Gmail, SendGrid SMTP, etc. will fail silently.
- Use PHP's built-in `mail()` function — Exim will queue and relay it.
- The envelope-from flag is required for SPF alignment:
  ```php
  mail($to, $subject, $body, $headers, '-f' . $envelopeFrom);
  ```
- PHPMailer / SwiftMailer / any SMTP library configured with external credentials **will not work** on this host.

If you need reliable delivery (e.g. to Gmail inboxes without spam-folder issues), move to an HTTP-based transactional email API such as Resend, Postmark, or SendGrid. HTTPS is not hijacked.

---

## 5. What is NOT on this host

The following are managed separately and are not part of this handover:

- The new Next.js site (repo + Vercel account)
- DNS for `tphorient.com` — will eventually cut over to Vercel
- The `/api/chat` AI assistant and any `/api/*` endpoints
- Self-hosted PDFs on the new site

Once DNS cuts over to Vercel, the cPanel site stops being the authoritative site. Until then, both run in parallel and the cPanel copy is live.

---

## 6. Redirects

When the DNS switch happens, ~35 legacy `.php` URLs on this domain will be 301-redirected to the new Next.js routes by the Vercel side. No action needed on cPanel.

---

## 7. First steps we recommend

1. Request cPanel + SFTP credentials from CSG Tech.
2. Take a full backup via Backup Wizard.
3. Pull `public_html/` down via SFTP and commit it to a private git repo.
4. Document the DB config file location and credentials location in your internal wiki.
5. Before touching any contact form, read section 4 above.

---

## 8. Contact

For anything related to the legacy PHP site, contact CSG Tech support directly. We have handed off operational ownership and are not available for debugging, deploys, or account changes on this host.
