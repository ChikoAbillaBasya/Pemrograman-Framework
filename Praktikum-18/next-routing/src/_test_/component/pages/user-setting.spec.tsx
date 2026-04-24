import { render, screen } from "@testing-library/react"
import UserSettingPage from "@/pages/user"

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/user",
      pathname: "/user",
      query: {},
      asPath: "/user",
      push: jest.fn(),
      event: {
        on: jest.fn(),
        off: jest.fn(),
      },
      isReady: true,
    }
  },
}))

describe("User Setting Page", () => {
  it("renders user setting page correctly", () => {
    const page = render(<UserSettingPage />)
    expect(screen.getByText("User Setting Page")).toBeInTheDocument()
    expect(page).toMatchSnapshot()
  })

  it("should display user setting content", () => {
    render(<UserSettingPage />)
    const content = screen.getByText("User Setting Page")
    expect(content).toBeInTheDocument()
  })

  it("should render without errors", () => {
    const { container } = render(<UserSettingPage />)
    expect(container).toBeInTheDocument()
  })
})
