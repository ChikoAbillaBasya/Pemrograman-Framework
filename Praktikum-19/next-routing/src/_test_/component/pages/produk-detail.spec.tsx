import { render, screen } from "@testing-library/react"
import TampilanProdukDetail from "@/pages/produk/[produk]"

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/produk/[produk]",
      pathname: "/produk/[produk]",
      query: { produk: "1" },
      asPath: "/produk/1",
      push: jest.fn(),
      event: {
        on: jest.fn(),
        off: jest.fn(),
      },
      isReady: true,
    }
  },
}))

jest.mock("swr", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    data: { id: "1", name: "Product Name", price: 100000 },
    error: undefined,
    isLoading: false,
  })),
}))

describe("Product Detail Page", () => {
  it("renders product detail page correctly", () => {
    const page = render(<TampilanProdukDetail />)
    expect(page).toMatchSnapshot()
  })

  it("should render without errors", () => {
    const { container } = render(<TampilanProdukDetail />)
    expect(container).toBeInTheDocument()
  })
})
