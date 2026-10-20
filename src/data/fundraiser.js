/**
 * Snap! Raise fundraiser, fall 2026.
 *
 * Every number here comes from the chapter announcement email sent
 * October 19, 2026. If a tier, prize, or date changes, change it here and the
 * /fundraiser page follows.
 *
 * WHEN THE FUNDRAISER ENDS
 *   Set `active: false`. The page then reads in the past tense and the join
 *   buttons disappear instead of pointing at a closed campaign.
 */

const fundraiser = {
  active: true,
  name: 'Snap! Raise',
  goal: '$10,000',
  joinCode: '894-592-939',

  // Shown on the home page banner. Spelled out rather than derived from the
  // dates list below, because that list is prose and will get reworded.
  window: 'October 28 to November 25',

  // Snap's browser route for joining with a code. It lands on a Snap login
  // first, which is expected: you need an account to be a participant. The
  // code is pre-filled after sign-in.
  joinUrl: 'https://raise.snap.app/join_code/894592939',

  dates: [
    { label: 'October 27', what: 'Kickoff at the October chapter meeting' },
    { label: 'October 28', what: 'Fundraiser opens' },
    { label: 'November 25', what: 'Fundraiser closes' },
    { label: 'Around December 1', what: 'Final results and prize winners announced' }
  ],

  // The one thing to do before the kickoff meeting.
  headStart: 'Enter 20 contacts (emails or phone numbers) into Snap! Raise before the October 27 meeting and you get a free donut. You can keep adding contacts for the whole campaign, so start now and ask your parents to help pull together relatives, family friends and neighbors.',

  signupSteps: [
    'Download the Johns Creek Gladiators App.',
    'Open the Snap! Raise fundraising section and create an account.',
    'Enter join code 894-592-939.',
    'Complete your profile, then start adding contacts.'
  ],

  tierGroups: [
    {
      title: 'Membership',
      blurb: 'Raise enough and your dues are covered.',
      tiers: [
        { amount: '$100', who: 'non-members', reward: 'Your FBLA membership fees are covered.' },
        { amount: '$200', who: 'current members', reward: "Sponsor someone else's FBLA membership." }
      ]
    },
    {
      title: 'Conferences',
      blurb: 'If you are planning on SLC or Nationals, this is where the real savings are.',
      tiers: [
        { amount: '$250', reward: 'RLC registration covered.' },
        { amount: '$500', reward: 'RLC and SLC registration covered.' },
        { amount: '$1,000', reward: 'RLC and SLC registration, plus SLC hotel and transportation.' },
        { amount: '$3,000', reward: 'All of the above, plus NLC registration.' }
      ]
    }
  ],

  prizes: [
    { place: '1st', prize: 'AirPods 5' },
    { place: '2nd', prize: 'LEGO set of your choice, Snoopy or R2-D2' },
    { place: '3rd', prize: 'JBL speaker' }
  ],

  prizeNote: 'Snap! Raise runs its own separate merchandise rewards based on how many donations you bring in, on top of the chapter prizes above.',

  whereItGoes: 'Money raised goes to the chapter, competitions, and conference expenses: the registrations, hotels and travel that members would otherwise pay out of pocket.',

  /**
   * Written for parents, not members. A parent landing here has four questions
   * and they are always the same four: what is this, what does it cost me,
   * where does the money go, and what happens to the phone numbers my kid
   * just typed in.
   *
   * The privacy answer quotes Snap's own policy and links to it rather than
   * making a promise on the chapter's behalf. Do not reword it into a
   * reassurance the chapter cannot stand behind.
   */
  parents: {
    intro: 'Snap! Raise is the platform our chapter uses to fundraise. Your student adds contacts, Snap sends the ask by email and text, and supporters donate online directly to the chapter. Here is what that means for you.',
    privacyUrl: 'https://www.snapraise.com/disclosures/raise-privacy-policy/',
    faqs: [
      {
        q: 'Does this cost me anything?',
        a: 'No. You are not required to donate and neither is anyone you know. The actual ask is ten minutes helping your student think of relatives, family friends and neighbors who might want to support them.'
      },
      {
        q: 'Where does the money go?',
        a: 'To the chapter: competition materials and conference costs. Registration, hotels and travel for Region, State and Nationals are the big ones, and those are costs families normally pay out of pocket.'
      },
      {
        q: 'Can this reduce what I pay?',
        a: 'Directly, yes, and this is the part worth reading twice. A student who raises $100 has their membership dues covered. $500 covers Region and State registration. $1,000 adds the State hotel and transportation. $3,000 covers all of that plus Nationals registration.'
      },
      {
        q: 'What happens to the contacts my student enters?',
        a: 'Snap uses them to send the fundraising message. Snap’s privacy policy states that it does not sell or otherwise transfer personally identifiable information to outside parties, and that user information will not be sold or shared with any third-party website. We are linking their policy below rather than paraphrasing it, so you can read the language yourself.'
      },
      {
        q: 'Who do I ask about this?',
        a: 'Any chapter officer, or Commander Schenk at Johns Creek High School. The officer team is listed on the site.'
      }
    ]
  }
};

export default fundraiser;
