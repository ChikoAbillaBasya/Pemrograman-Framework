import { render } from "@testing-library/react"

jest.mock("@/views/produk", () => {
  return function MockProduk() {
    return <div>Product View Mock</div>
  }
})

import halamanProdukStatic from "@/pages/produk/static"

describe("Product Static Page", () => {
  const mockProducts = [
    { id: "1", name: "Product 1", price: 100000 },
  ]

  it("renders static product page correctly", () => {
    const { container } = render(<halamanProdukStatic products={mockProducts} />)
    expect(container).toBeInTheDocument()
  })

  it("should render with empty products array", () => {
    const page = render(<halamanProdukStatic products={[]} />)
    expect(page).toMatchSnapshot()
  })
})
