/**
 * Snap! Raise fundraiser, fall 2026.
 *
 * SOURCE OF TRUTH: the chapter announcement email sent October 19, 2026 from
 * jchsfbla@gmail.com. Every amount, date, prize and tier below is taken from
 * that email. If you change a number here, change it because the chapter
 * changed it, not because it reads better.
 *
 * Anything NOT in that email is marked with a comment saying so. Keep that
 * habit: a parent reading this page should not be able to find a claim the
 * chapter never made.
 *
 * WHEN THE FUNDRAISER ENDS
 *   Set `active: false`. The join instructions and the home page banner come
 *   down on their own.
 */

const fundraiser = {
  active: true,
  name: 'Snap! Raise',
  goal: '$10,000',
  joinCode: '894-592-939',

  // Home page banner. Spelled out rather than derived from `dates` below,
  // because that list is prose and will get reworded.
  window: 'October 28 to November 25',

  /**
   * Snap documents a browser route for joining with a code
   * (raise.snap.app/join_code/<code>). The route is real: it redirects to a
   * Snap sign-in. What nobody has confirmed is that THIS code attaches to the
   * Johns Creek FBLA campaign through that route, because checking needs a
   * Snap account.
   *
   * So it stays off the page. `joinUrlVerified: false` hides it everywhere.
   * Sign in once, confirm it lands on our campaign, flip this to true.
   *
   * The email's own instructions are the app, and those are what we show.
   */
  joinUrl: 'https://raise.snap.app/join_code/894592939',
  joinUrlVerified: false,

  dates: [
    { label: 'October 27', what: 'Kickoff at the October chapter meeting' },
    { label: 'October 28', what: 'Fundraiser begins' },
    { label: 'November 25', what: 'Fundraiser ends' },
    { label: 'Around December 1', what: 'Final results and prize winners announced' }
  ],

  headStart: 'Enter 20 contacts (emails or phone numbers) into Snap! Raise by the October 27 meeting and get a free donut. You can start adding contacts right now and keep going throughout the fundraiser. Ask your parents to help gather contacts from relatives, family friends, neighbors, and others who may be willing to donate.',

  signupSteps: [
    'Download the Johns Creek Gladiators App.',
    'Open the Snap! Raise fundraising section and create an account.',
    'Enter join code 894-592-939.',
    'Complete your profile and start adding contacts.'
  ],

  /**
   * The four things a conference tier can cover. The order here is the order
   * they unlock in, and the page renders them as a row of chips per tier so
   * you can see coverage accumulate as the amounts climb.
   */
  coverage: [
    { key: 'rlc', label: 'RLC registration' },
    { key: 'slc', label: 'SLC registration' },
    { key: 'hotel', label: 'SLC hotel + transportation' },
    { key: 'nlc', label: 'NLC registration' }
  ],

  membershipTiers: [
    { amount: '$100', who: 'Non-members', reward: 'Your FBLA membership fees are covered.' },
    { amount: '$200', who: 'Current members', reward: "Sponsor someone else's FBLA membership." }
  ],

  conferenceTiers: [
    { amount: '$250', covers: ['rlc'] },
    { amount: '$500', covers: ['rlc', 'slc'] },
    { amount: '$1,000', covers: ['rlc', 'slc', 'hotel'] },
    { amount: '$3,000', covers: ['rlc', 'slc', 'hotel', 'nlc'], top: true }
  ],

  prizes: [
    { place: '1st', prize: 'AirPods 5' },
    { place: '2nd', prize: 'LEGO set of your choice, Snoopy or R2-D2' },
    { place: '3rd', prize: 'JBL speaker' }
  ],

  prizeNote: 'Snap! Raise also offers separate merchandise rewards based on the number of donations received.',

  // Email: "Funds raised will support our chapter, competitions, and
  // conference expenses." Kept to that wording rather than guessing at line
  // items the chapter did not list.
  whereItGoes: 'Funds raised support the chapter, competitions, and conference expenses.',

  /**
   * Written for parents rather than members.
   *
   * Two rules for editing this section:
   *   1. Every factual claim traces to the announcement email or to a source
   *      we link. Where an answer is the chapter's own wording rather than a
   *      quote, it stays general enough to be true.
   *   2. The privacy answer quotes Snap's policy and links to it. Do not
   *      rewrite it into a reassurance the chapter would be making on Snap's
   *      behalf.
   */
  parents: {
    intro: 'Snap! Raise is the platform our chapter is using to fundraise. Members reach out to family, friends and other supporters by email and text, and supporters donate online. Here is what that means for you.',
    privacyUrl: 'https://www.snapraise.com/disclosures/raise-privacy-policy/',
    contactEmail: 'jchsfbla@gmail.com',
    faqs: [
      {
        q: 'Does this cost me anything?',
        a: 'No. Donating is voluntary, for you and for everyone your student contacts. The thing that actually helps is sitting down with them to gather contacts: relatives, family friends, neighbors, and others who may be willing to donate.'
      },
      {
        q: 'Where does the money go?',
        a: 'The chapter announcement says funds raised support our chapter, competitions, and conference expenses.'
      },
      {
        q: 'Can this reduce what I pay?',
        a: 'Yes, and this is the part worth reading twice. A student who raises $100 and is not yet a member has their membership fees covered. $250 covers RLC registration, $500 covers RLC and SLC registration, $1,000 adds SLC hotel and transportation, and $3,000 adds NLC registration on top of all of it.'
      },
      {
        q: 'What happens to the contacts my student enters?',
        a: 'Snap uses them to send the fundraising message by email and text. On selling data, Snap’s own privacy policy says it does not sell or otherwise transfer personally identifiable information to outside parties, and that user information will not be sold or shared with any third-party website. We link their policy below instead of paraphrasing it, so you can read the language yourself.'
      },
      {
        q: 'Who do I ask about this?',
        a: 'Email the chapter at jchsfbla@gmail.com, or ask any officer. The officer team is listed on the site.'
      }
    ]
  }
};

export default fundraiser;
