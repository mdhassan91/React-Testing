//Real api are only use for end to end test not ofr unit test 
//for one we dont have ensure the server is up and running to test whether the component renders as intended 
// two since these test are run quite often it is not feasible to include real apis which may even charge u based on number of requests 
// what we have to do is mock the https request
//here we mock the response to the  with a list of users or an error 
//Here we will use Mocking Service worker

import { render, screen } from '@testing-library/react'
import { Users } from './Users'
// This shows error if we didnt sertup server in setupTest
import { rest } from 'msw'
import { server } from '../../mocks/server'


describe('Users', () => {
  test('renders correctly', () => {
    render(<Users />)
    const textElement = screen.getByText('Users')
    expect(textElement).toBeInTheDocument()
  })

  test('renders a list of users', async () => {
    render(<Users />)
    const users = await screen.findAllByRole('listitem')
   //Where does this comes from it comes from handler.ts
    expect(users).toHaveLength(3)
  })

  test('renders error', async () => {
    // This is the synstax we use for error handling 
    //Afer it handles it resets becs of setup.ts file 
    // THis is the server we are using for from mocks directory
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/users',
        (req, res, ctx) => {
          return res(ctx.status(500))
        }
      )
    )
    render(<Users />)
    const error = await screen.findByText('Error fetching users')
    expect(error).toBeInTheDocument()
  })
})
