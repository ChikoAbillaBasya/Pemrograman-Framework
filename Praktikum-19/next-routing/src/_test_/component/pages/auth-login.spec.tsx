import { render, screen } from "@testing-library/react"
import HalamanLogin from "@/pages/auth/login"

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/auth/login",
      pathname: "/auth/login",
      query: {},
      asPath: "/auth/login",
      push: jest.fn(),
      event: {
        on: jest.fn(),
        off: jest.fn(),
      },
      isReady: true,
    }
  },
}))

jest.mock("@/views/auth/login", () => {
  return function MockLogin() {
    return <div data-testid="login-view">Login View</div>
  }
})

describe("Auth Login Page", () => {
  it("renders login page correctly", () => {
    const page = render(<HalamanLogin />)
    expect(screen.getByTestId("login-view")).toBeInTheDocument()
    expect(page).toMatchSnapshot()
  })

  it("should display login view component", () => {
    render(<HalamanLogin />)
    expect(screen.getByText("Login View")).toBeInTheDocument()
  })

  it("should render without crashing", () => {
    const { container } = render(<HalamanLogin />)
    expect(container).toBeInTheDocument()
  })
})
