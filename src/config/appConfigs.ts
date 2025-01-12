import { Outfit} from 'next/font/google';

export const SITE_TITLE_DEFAULT = 'EventEase | A Smart Solutions for event management';
export const SITE_TITLE_TEMPLATE_DEFAULT = `%s - EventEase`;
export const SITE_DESCRIPTION_DEFAULT = 'EventEase Description';
export const SITE_VERIFICATION_GOOGLE_DEFAULT =
    'google-site-verification=adwdawdaw';

export const FONT_DEFAULT = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit-sans'
});