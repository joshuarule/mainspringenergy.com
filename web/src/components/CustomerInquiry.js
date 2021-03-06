import React, { useState } from 'react'

import Select from '../components/Select'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const FORM_INIT = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  company: '',
  message: '',
  peakDemand: '',
  annualEnergy: '',
  title: '',
}

export default ({ onSuccess }) => {
  const [formData, setFormData] = useState(FORM_INIT)
  const [formResult, setFormResult] = useState(false)
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = event => {
    event.preventDefault()
    const body = {
      'form-name': event.target.getAttribute('name'),
      ...formData,
    }
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': event.target.getAttribute('name'),
        ...body,
      }),
    })
      .then(() => {
        setFormResult({ result: 'success' })
        onSuccess()
        setFormData(FORM_INIT)
      })
      .catch(error => {
        console.error(error)
        setFormResult({ result: 'error' })
      })
  }

  return (
    <form
      name="customerInquiry"
      method="post"
      onSubmit={handleSubmit}
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="lg:grid lg:grid-cols-3 mb-g relative"
    >
      <div hidden aria-hidden="true">
        <label>
          Don’t fill this out if you're human:
          <input
            name="bot-field"
            onChange={handleChange}
            value={formData['bot-field']}
          />
        </label>
      </div>
      <input type="hidden" name="customer-inquiry" value="customerInquiry" />

      <div
        className={`
          ${formResult.result === 'success' ? 'opacity-0' : ''}
          col-start-2 col-span-2 lg:grid lg:grid-cols-2
        `}
      >
        <div>
          <label htmlFor="firstName" className="block mb-a font-bold">
            First Name
          </label>
          <input
            placeholder="Jane"
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
            placeholder="Doe"
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
            placeholder="youremail@emaildomain.com"
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
        <div className="mb-d">
          <span className="block mb-a font-bold">
            Facility Peak Demand (kW)
          </span>
          <Select
            items={[
              { value: 'null', label: '---------' },
              { value: '0', label: '< 200' },
              { value: '5', label: '200 - 500' },
              { value: '10', label: '> 500' },
            ]}
            value={formData['peakDemand']}
            name="peakDemand"
            onChange={handleChange}
          />
        </div>
        <div className="mb-d">
          <span className="block mb-a font-bold">
            Facility Annual Energy (kWh)
          </span>
          <Select
            items={[
              { value: 'null', label: '---------' },
              { value: '0', label: '< 1,000,000' },
              { value: '5', label: '1,000,000 - 2,000,000' },
              { value: '10', label: '> 2,000,000' },
            ]}
            name="annualEnergy"
            value={formData['annualEnergy']}
            onChange={handleChange}
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
        <div className="flex col-span-2 items-center">
          <button
            style={{ color: '#fff', paddingTop: '13px' }}
            className="bg-seaGreen f-b1 pb-c px-f rounded-md flex items-center hover:bg-seaGreenDark"
            type="submit"
          >
            Send
          </button>
          {formResult && formResult.result === 'error' && (
            <p className="text-brand f-b1 ml-d">
              Oops! Something went wrong while submitting the form
            </p>
          )}
        </div>
      </div>
      {formResult.result === 'success' && (
        <div className="absolute top-0 bottom-0 w-full flex items-center">
          <p className="f-b0 text-steel">
            Thank you. Your submission has been received.
          </p>
        </div>
      )}
    </form>
  )
}
