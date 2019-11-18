import './Mailchimp.scss'

import React from 'react'

export default class Mailchimp extends React.Component {
  componentDidMount () {
    const checkboxId = this.props.userType === 'Mobiliser' ? 'mce-group[2443]-2443-1' : 'mce-group[2443]-2443-0'
    document.getElementById(checkboxId).click()
    document.getElementById('mce-EMAILTYPE-0').click()
    if (!window.kyfMailchimpReady) {
      Mailchimp.initialiseMailchimp()
    }
  }

  static initialiseMailchimp () {
    const script = document.createElement('script')
    script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'
    document.body.appendChild(script)
    window.fnames = ['EMAIL', 'FNAME', 'MMERGE2']
    window.ftypes = ['email', 'text', 'text']
  }

  render () {
    return (
      <div id='mc_embed_signup'>
        <form
          action='https://london.us19.list-manage.com/subscribe/post?u=881cc0bc14a69e38a2937813d&amp;id=32acb084d6'
          method='post' id='mc-embedded-subscribe-form' name='mc-embedded-subscribe-form' className='validate'
          target='_blank' noValidate
        >
          <div id='mc_embed_signup_scroll'>
            <p>
              Over the next month <em>KnowYourFollowers</em> will be getting more functions
              to help you do more to help Labour win the General Election. Subscribe to <em>CampaignLab</em> for
              updates and tailored content that is best suited for your followers.
            </p>
            <div className='mc-field-group'>
              <label htmlFor='mce-EMAIL'>Email Address <span className='asterisk'>*</span>
              </label>
              <input type='email' name='EMAIL' className='required email' id='mce-EMAIL' />
            </div>
            <div className='mc-field-group'>
              <label htmlFor='mce-FNAME'>First Name </label>
              <input type='text' name='FNAME' className='' id='mce-FNAME' />
            </div>
            <div className='mc-field-group'>
              <label htmlFor='mce-MMERGE2'>Surname </label>
              <input type='text' name='MMERGE2' className='' id='mce-MMERGE2' />
            </div>
            <div className='mc-field-group input-group' style={{ display: 'none' }}>
              <strong>Twitter tool</strong>
              <ul>
                <li>
                  <input type='checkbox' defaultValue='1' name='group[2443][1]' id='mce-group[2443]-2443-0' />
                  <label htmlFor='mce-group[2443]-2443-0'>Converter</label>
                </li>
                <li>
                  <input type='checkbox' defaultValue='2' name='group[2443][2]' id='mce-group[2443]-2443-1' />
                  <label htmlFor='mce-group[2443]-2443-1'>Mobiliser</label>
                </li>
              </ul>
            </div>
            <div className='mc-field-group input-group' style={{ display: 'none' }}>
              <strong>Email Format </strong>
              <ul>
                <li>
                  <input type='radio' defaultValue='html' name='EMAILTYPE' id='mce-EMAILTYPE-0' />
                  <label htmlFor='mce-EMAILTYPE-0'>html</label>
                </li>
                <li>
                  <input type='radio' defaultValue='text' name='EMAILTYPE' id='mce-EMAILTYPE-1' />
                  <label htmlFor='mce-EMAILTYPE-1'>text</label>
                </li>
              </ul>
            </div>
            <div id='mce-responses' className='clear'>
              <div className='response' id='mce-error-response' style={{ display: 'none' }} />
              <div className='response' id='mce-success-response' style={{ display: 'none' }} />
            </div>
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden='true'>
              <input
                type='text'
                name='b_881cc0bc14a69e38a2937813d_32acb084d6'
                tabIndex='-1' defaultValue=''
              />
            </div>
            <div className='clear'>
              <input
                type='submit' defaultValue='Subscribe' name='subscribe' id='mc-embedded-subscribe'
                className='button'
              />
            </div>
          </div>
        </form>
      </div>
    )
  }
}
