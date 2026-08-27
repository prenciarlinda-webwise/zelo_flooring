// Field option lists for the Installer & Subcontractor Application (/careers).
// Kept separate from the form component so the option lists are easy to find and edit.

export const FLOORING_SKILLS = [
  'Carpet',
  'Carpet Tile',
  'LVP Floating',
  'LVP Glue-Down',
  'Laminate',
  'Engineered Hardwood',
  'Hardwood Glue-Down',
  'Tile',
  'VCT',
  'Rubber Flooring',
  'Cork',
  'Baseboards / Cove Base',
  'Stairs',
  'Floor Prep / Leveling',
  'Demo / Grinding',
] as const;

export const EXPERIENCE_RANGES = [
  'Less than 1 year',
  '1-2 years',
  '3-5 years',
  '6-10 years',
  '10+ years',
] as const;

export const APPLICANT_TYPES = [
  'Solo Installer / Subcontractor',
  'Crew Lead / Foreman',
  'Crew or Company (multiple installers)',
  'Helper / Apprentice',
] as const;
