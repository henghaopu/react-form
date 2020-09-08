import React from 'react'
import useForm from '../hooks/useForm'

function NameForm() {
  // get these back from useForm
  const { handleSubmit, handleChange, ...state } = useForm()

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ margin: '1rem' }}>
        <label style={{ marginRight: '1rem' }} htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={state.value}
          onChange={handleChange}
        />
      </div>
      <div style={{ margin: '1rem' }}>
        <label style={{ marginRight: '1rem' }} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="text"
          value={state.value}
          onChange={handleChange}
        />
      </div>
      <div style={{ margin: '1rem' }}>
        <input type="submit" value="Submit" />
      </div>
    </form>
  )
}

export default NameForm
