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
  headStart: 'Enter 20 contacts (emails or phone numbers) into Snap! Raise before the October 27 meeting and you get a free donut. You can keep adding contacts for the whole campaign, so start now and ask your parents to help pull together relatives, family friends and neighbours.',

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

  whereItGoes: 'Money raised goes to the chapter, competitions, and conference expenses: the registrations, hotels and travel that members would otherwise pay out of pocket.'
};

export default fundraiser;
