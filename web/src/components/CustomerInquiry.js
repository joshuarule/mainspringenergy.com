import React, { useState } from 'react'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default () => {
  const [formData, setFormData] = useState({
    firstName: 'Josh',
    lastName: 'Dobson',
    email: 'joshua@joshuarule.com',
    company: 'JoshuaRule',
  })
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    const body = {
      'form-name': event.target.getAttribute('name'),
      ...formData,
    }
    console.log(body)
    fetch('/.netlify/functions/processInquiry', {
      method: 'POST',
      // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })
      .then(() => alert('success'))
      .catch(error => alert(error))
  }

  return (
    <form
      name="customerInquiry"
      method="post"
      onSubmit={handleSubmit}
      data-netlify="true"
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
          </label>
          <input
            value={formData.firstName}
            onChange={handleChange}
            type="text"
            name="firstName"
            className="input mb-d"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block mb-a font-bold">
            Last Name
          </label>
          <input
            value={formData.lastName}
            onChange={handleChange}
            type="text"
            name="lastName"
            className="input mb-d"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-a font-bold">
            Email
          </label>
          <input
            value={formData.email}
            onChange={handleChange}
            type="email"
            name="email"
            className="input mb-d"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-a font-bold">
            Phone
          </label>
          <input
            onChange={handleChange}
            type="tel"
            name="phone"
            className="input mb-d"
          />
        </div>
        <div>
          <label htmlFor="company" className="block mb-a font-bold">
            Company
          </label>
          <input
            value={formData.company}
            onChange={handleChange}
            type="text"
            name="company"
            className="input mb-d"
            required
          />
        </div>
        <div>
          <label htmlFor="jobTitle" className="block mb-a font-bold">
            Title
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="jobTitle"
            className="input mb-d"
          />
        </div>
        <div>
          <label htmlFor="peakDemand" className="block mb-a font-bold">
            Facility Peak Demand (kW)
          </label>
          <input
            onChange={handleChange}
            name="peakDemand"
            type="text"
            className="input mb-d"
          />
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
          <input
            onChange={handleChange}
            name="annualEnergy"
            type="text"
            className="input mb-d"
          />
        </div>
        <div className="lg:col-span-2 mb-d">
          <label htmlFor="message" className="block mb-a font-bold">
            Message
          </label>
          <textarea
            onChange={handleChange}
            name="message"
            style={{ resize: 'none' }}
            rows="5"
            className="input"
          ></textarea>
        </div>
        <div>
          <button
            style={{ color: '#fff', paddingTop: '13px' }}
            className="bg-seaGreen f-b1 pb-c px-f rounded-md flex items-center hover:bg-seaGreenDark"
            type="submit"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  )
}
