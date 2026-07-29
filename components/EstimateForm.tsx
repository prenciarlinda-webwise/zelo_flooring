import SendAJobEmbed from './SendAJobEmbed';

type Props = {
  // Kept for backward compatibility with existing callers (LeadFormHero, EstimateModal);
  // unused now that SendAJob's hosted form owns field/submission logic.
  formId?: string;
  defaultProjectType?: string;
  title?: string;
  subtitle?: string;
  // When rendered inside a container that already provides the card look (e.g. the modal),
  // skip the form's own background/shadow/border so it doesn't double-box.
  plain?: boolean;
};

// The quote-request embed: SendAJob's hosted service-request form, iframed in.
// Shared by LeadFormHero and EstimateModal (the popup triggered from "Request a free
// in-home estimate" links everywhere else) so the embed lives in one place.
export default function EstimateForm({ title, subtitle, plain }: Props) {
  return (
    <div className={plain ? 'estimate-form-plain' : 'lead-hero-form'}>
      <SendAJobEmbed
        title={title !== '' ? title || 'Get a Free Quote' : undefined}
        subtitle={subtitle !== '' ? subtitle || 'Free in-home estimate. We respond within 1 business day.' : undefined}
      />
    </div>
  );
}
