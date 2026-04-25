import { render, screen, waitFor } from "@testing-library/react"
import ProfileEdit from "@/pages/profile/edit"

jest.mock("next-auth/react", () => ({
  useSession: () => ({
    data: {
      user: {
        fullname: "John Doe",
        email: "john@example.com",
      },
    },
    status: "authenticated",
  }),
  signOut: jest.fn(),
}))

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/profile/edit",
      pathname: "/profile/edit",
      query: {},
      asPath: "/profile/edit",
      push: jest.fn(),
      event: {
        on: jest.fn(),
        off: jest.fn(),
      },
      isReady: true,
    }
  },
}))

describe("Profile Edit Page", () => {
  it("renders profile edit page correctly", () => {
    const page = render(<ProfileEdit />)
    expect(screen.getByText(/Edit Profile/i)).toBeInTheDocument()
    expect(page).toMatchSnapshot()
  })

  it("should display form section", async () => {
    render(<ProfileEdit />)
    await waitFor(() => {
      const heading = screen.getByRole("heading", { name: /Edit Profile/i })
      expect(heading).toBeInTheDocument()
    })
  })
})
