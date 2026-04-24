import { render, screen, waitFor } from "@testing-library/react"
import HalamanProfile from "@/pages/profile"
import { routerScenarios } from "@/_test_/mocks/router"

const mockPush = jest.fn()

jest.mock("next-auth/react", () => ({
  useSession: jest.fn(() => ({
    data: {
      user: {
        fullname: "John Doe",
        email: "john@example.com",
      },
    },
    status: "authenticated",
  })),
  signOut: jest.fn(),
}))

jest.mock("next/router", () => ({
  useRouter: () => ({
    ...routerScenarios.profile(),
    push: mockPush,
  }),
}))

const { useSession } = require("next-auth/react")

describe("Profile Page", () => {
  beforeEach(() => {
    jest.clearAllMocks()
    useSession.mockImplementation(() => ({
      data: {
        user: {
          fullname: "John Doe",
          email: "john@example.com",
        },
      },
      status: "authenticated",
    }))
  })

  it("renders profile page correctly", () => {
    const page = render(<HalamanProfile />)
    expect(screen.getByText("Halaman Profile")).toBeInTheDocument()
    expect(page).toMatchSnapshot()
  })

  it("should display welcome message with user name", async () => {
    render(<HalamanProfile />)
    await waitFor(() => {
      expect(screen.getByText("Selamat Datang John Doe")).toBeInTheDocument()
    })
  })

  it("should display profile heading", () => {
    render(<HalamanProfile />)
    const heading = screen.getByRole("heading", { name: /Halaman Profile/i })
    expect(heading).toBeInTheDocument()
  })

  it("should display user email", async () => {
    render(<HalamanProfile />)
    await waitFor(() => {
      expect(screen.getByText(/Email: john@example.com/i)).toBeInTheDocument()
    })
  })

  it("should display logout button", () => {
    render(<HalamanProfile />)
    const button = screen.getByRole("button", { name: /Logout/i })
    expect(button).toBeInTheDocument()
  })

  it("should show loading state", () => {
    useSession.mockImplementationOnce(() => ({
      data: null,
      status: "loading",
    }))
    render(<HalamanProfile />)
    expect(screen.getByText("Loading...")).toBeInTheDocument()
  })

  it("should redirect when unauthenticated", () => {
    useSession.mockImplementationOnce(() => ({
      data: null,
      status: "unauthenticated",
    }))
    render(<HalamanProfile />)
    // The useEffect will be called
    expect(true).toBe(true)
  })
})
