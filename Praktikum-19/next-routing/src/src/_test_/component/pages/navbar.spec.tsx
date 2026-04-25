import { render, screen } from "@testing-library/react"
import Navbar from "@/components/layouts/navbar"

jest.mock("next-auth/react", () => ({
  useSession: () => ({
    data: {
      user: {
        fullname: "John Doe",
        image: "https://example.com/avatar.jpg"
      }
    },
    status: "authenticated"
  }),
  signIn: jest.fn(),
  signOut: jest.fn(),
}))

jest.mock("next/script", () => {
  return {
    __esModule: true,
    default: () => null,
  }
})

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />
  },
}))

describe("Navbar Component", () => {
  it("renders navbar component correctly", () => {
    const { container } = render(<Navbar />)
    expect(container).toMatchSnapshot()
  })

  it("displays welcome message with user fullname", () => {
    render(<Navbar />)
    const welcomeText = screen.getByText(/Welcome, John Doe/i)
    expect(welcomeText).toBeTruthy()
  })
})
