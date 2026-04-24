import fetcher from "@/utils/swr/fetcher"

// Mock fetch
global.fetch = jest.fn()

describe("Fetcher Utility", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("fetches data successfully", async () => {
    const mockData = { id: 1, name: "Test Product" }
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => mockData,
    })

    const result = await fetcher("https://api.example.com/products")
    expect(result).toEqual(mockData)
    expect(global.fetch).toHaveBeenCalledWith("https://api.example.com/products")
  })

  it("calls fetch with correct URL", async () => {
    const testUrl = "https://api.example.com/users"
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => ({}),
    })

    await fetcher(testUrl)
    expect(global.fetch).toHaveBeenCalledWith(testUrl)
  })

  it("returns parsed JSON", async () => {
    const mockResponse = { success: true, data: [1, 2, 3] }
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => mockResponse,
    })

    const result = await fetcher("https://api.example.com/data")
    expect(result).toEqual(mockResponse)
  })

  it("handles fetch errors", async () => {
    const error = new Error("Network error")
    ;(global.fetch as jest.Mock).mockRejectedValueOnce(error)

    await expect(fetcher("https://api.example.com/fail")).rejects.toThrow("Network error")
  })

  it("works with multiple calls", async () => {
    const data1 = { id: 1 }
    const data2 = { id: 2 }

    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => data1,
    })
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => data2,
    })

    const result1 = await fetcher("https://api.example.com/1")
    const result2 = await fetcher("https://api.example.com/2")

    expect(result1).toEqual(data1)
    expect(result2).toEqual(data2)
    expect(global.fetch).toHaveBeenCalledTimes(2)
  })
})
