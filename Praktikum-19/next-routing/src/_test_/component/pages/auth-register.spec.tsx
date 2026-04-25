import { render, screen } from "@testing-library/react"

// Mock the register view component
jest.mock("@/views/auth/register", () => {
  return function MockRegister() {
    return <div data-testid="register-view">Register View</div>
  }
})

// Import after mocking
import HalamanRegister from "@/pages/auth/register"

describe("Auth Register Page", () => {
  it("renders register page correctly", () => {
    const page = render(<HalamanRegister />)
    expect(screen.getByTestId("register-view")).toBeInTheDocument()
    expect(page).toMatchSnapshot()
  })

  it("should display register view component", () => {
    render(<HalamanRegister />)
    expect(screen.getByText("Register View")).toBeInTheDocument()
  })
})
