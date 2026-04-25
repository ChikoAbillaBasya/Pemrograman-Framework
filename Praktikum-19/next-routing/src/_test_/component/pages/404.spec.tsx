import { render, screen } from "@testing-library/react"
import Custom404 from "@/pages/404"

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}))

jest.mock("next/link", () => {
  return ({ children, href }: any) => {
    return <a href={href}>{children}</a>
  }
})

describe("404 Page", () => {
  it("renders 404 page correctly", () => {
    const page = render(<Custom404 />)
    expect(screen.getByText(/404 - Halaman Tidak Ditemukan/i)).toBeInTheDocument()
    expect(page).toMatchSnapshot()
  })

  it("should display error title", () => {
    render(<Custom404 />)
    const title = screen.getByRole("heading", { name: /404 - Halaman Tidak Ditemukan/i })
    expect(title).toBeInTheDocument()
  })

  it("should display error description", () => {
    render(<Custom404 />)
    expect(screen.getByText(/Maaf, halaman yang Anda cari tidak tersedia/i)).toBeInTheDocument()
  })

  it("should have link to home", () => {
    render(<Custom404 />)
    const link = screen.getByRole("link", { name: /Kembali ke Home/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", "/")
  })

  it("should display 404 image", () => {
    render(<Custom404 />)
    const images = screen.getAllByRole("img")
    expect(images.length).toBeGreaterThan(0)
  })
})
