export const MESSAGE_FOR_CONVERTERS = `
Most of your followers aren’t seeing any messages from Labour on Twitter right now.
Your tweets might be the main way they see that Labour gets through to them in the election - 
so you can make the difference in persuading them to vote Labour!
`

export const MESSAGE_FOR_MOBILISERS = `
A high number of your followers already see tweets directly from Labour sources.
You can help at the next election and get out the vote by getting your followers
excited about Labour activism and encouraging them to go out and campaign!
`

export const TWEET_ACTION_FOR_CONVERTERS = `
Get started right now by tweeting a message that will spread the message of why your followers should vote Labour:
`

export const TWEET_ACTION_FOR_MOBILISERS = `
Get started right now by tweeting a message that will get your followers involved in the Labour campaign:
`

export const TWEET_FOR_CONVERTERS = `
Labour is asking big businesses and the top 5% to pay a little more tax for our public services but is freezing income tax, VAT & NI for the 95%. 
Find out if you're one of the majority of working people who will face no increase under Labour! 👇
`

export const TWEET_URL_FOR_CONVERTERS = 'https://action.labour.org.uk/page/content/fair-tax-calculator'

export const TWEET_FOR_MOBILISERS = `
If we work together, we can get a Labour Government that puts people before privilege.
Join me and thousands of others campaigning across the country for a Labour victory. Find your nearest event here!
`

export const TWEET_URL_FOR_MOBILISERS = 'https://events.labour.org.uk/'

export const EMOJI_FOR_MOBILISERS = 'https://events.labour.org.uk/'

const getCopyObject = (userType) => {
  if (userType === 'Mobiliser') {
    return {
      message: MESSAGE_FOR_MOBILISERS,
      tweetAction: TWEET_ACTION_FOR_MOBILISERS,
      tweetText: TWEET_FOR_MOBILISERS,
      tweetUrl: TWEET_URL_FOR_MOBILISERS,
      emoji: '💪🌹✋'
    }
  }
  return {
    message: MESSAGE_FOR_CONVERTERS,
    tweetAction: TWEET_ACTION_FOR_CONVERTERS,
    tweetText: TWEET_FOR_CONVERTERS,
    tweetUrl: TWEET_URL_FOR_CONVERTERS,
    emoji: '🤝🌹'
  }
}

const removeLineBreaks = (text = '') => {
  return text.trim().split(/\r?\n/).join(' ').trim()
}

/**
 * Remove all unintentional line breaks from the copy
 */
const getCopy = (userType) => {
  const copyObject = getCopyObject(userType)
  for (const key of Object.keys(copyObject)) {
    copyObject[key] = removeLineBreaks(copyObject[key])
  }
  return copyObject
}

export default getCopy
