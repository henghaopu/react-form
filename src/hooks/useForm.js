function reducer(state, actions) {
  return state
}

function useForm(props) {
  const [state, dispatch] = React.useReducer(reducer, {
    values: props.initialValues,
    errors: {},
    touched: {}
  })
  // handleChange(event) {
  //   this.setState({ [event.target.id]: event.target.value })
  // }

  // handleSubmit(event) {
  //   alert(
  //     `A name and email set was submitted: ${this.state.name} ${this.state.email}`
  //   )
  //   event.preventDefault()
  // }

  return {}
}

export default useForm
