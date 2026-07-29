type Props = {
  title?: string;
  subtitle?: string;
};

const SENDAJOB_EMBED_SRC =
  'https://st.sendajob.com/MY/servicerequest/22f23e0f2434c35922fc6755b6bab6ea00b37747_f.html';

// SendAJob's hosted service-request form, iframed in. This replaced the site's own
// Formspree-backed quote forms (hero, popup modal, contact page, final CTA) so leads
// flow into SendAJob instead. The coupon-claim modal (CouponsBlock) still uses the old
// Formspree form on purpose, it needs a hidden "which offer" field SendAJob's generic
// request form has no place for.
export default function SendAJobEmbed({ title, subtitle }: Props) {
  return (
    <>
      {title && <p className="lead-hero-form-title">{title}</p>}
      {subtitle && <p className="lead-hero-form-sub">{subtitle}</p>}
      <iframe
        src={SENDAJOB_EMBED_SRC}
        title="Request a free flooring estimate"
        width="100%"
        height={751}
        scrolling="no"
        style={{ border: 'none', display: 'block', maxWidth: '100%' }}
      />
    </>
  );
}
