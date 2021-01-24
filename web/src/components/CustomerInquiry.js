import React from 'react'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const handleSubmit = event => {
  event.preventDefault()
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({
      'form-name': event.target.getAttribute('name'),
    }),
  })
    .then(() => alert('success'))
    .catch(error => alert(error))
}

export default () => {
  return (
    <form
      data-netlify="true"
      name="customerInquiry"
      method="post"
      onSubmit={handleSubmit}
      netlify-honeypot="bot-field"
      className="lg:grid lg:grid-cols-3 mb-g"
    >
      <div hidden aria-hidden="true">
        <label>
          Don’t fill this out if you're human:
          <input name="bot-field" />
        </label>
      </div>
      <input type="hidden" name="customer-inquiry" value="customerInquiry" />
      <div className="col-start-2 col-span-2 lg:grid lg:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block mb-a font-bold">
            First Name
            <input type="text" className="input mb-d" />
          </label>
        </div>
        <div>
          <label htmlFor="lastName" className="block mb-a font-bold">
            Last Name
          </label>
          <input type="text" className="input mb-d" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-a font-bold">
            Email
          </label>
          <input type="email" className="input mb-d" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-a font-bold">
            Phone
          </label>
          <input type="tel" className="input mb-d" />
        </div>
        <div>
          <label htmlFor="company" className="block mb-a font-bold">
            Company
          </label>
          <input type="text" className="input mb-d" />
        </div>
        <div>
          <label htmlFor="jobTitle" className="block mb-a font-bold">
            Title
          </label>
          <input type="text" className="input mb-d" />
        </div>
        <div>
          <label htmlFor="peakDemand" className="block mb-a font-bold">
            Facility Peak Demand (kW)
          </label>
          <input type="text" className="input mb-d" />
          {/* <select name="peakDemand" id="peakDemand">
                <option value="200">200</option>
                <option value="200">300</option>
                <option value="200">400</option>
              </select> */}
        </div>
        <div>
          <label htmlFor="annualEnergy" className="block mb-a font-bold">
            Facility Annual Energy (kWh)
          </label>
          <input type="text" className="input mb-d" />
        </div>
        <div className="lg:col-span-2 mb-d">
          <label htmlFor="message" className="block mb-a font-bold">
            Message
          </label>
          <textarea
            style={{ resize: 'none' }}
            rows="5"
            className="input"
          ></textarea>
        </div>
        <div>
          <button
            style={{ color: '#fff', paddingTop: '13px' }}
            className="bg-seaGreen f-b1 pb-c px-f rounded-md flex items-center hover:bg-seaGreenDark"
            onCLick={e => {
              e.preventDefault()
              alert('send form')
            }}
          >
            Send
          </button>
        </div>
      </div>
    </form>
  )
}
